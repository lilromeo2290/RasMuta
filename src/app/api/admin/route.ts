import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

// Aggregate stats and recent records for the Admin dashboard.
export async function GET() {
  try {
    const [
      donations,
      volunteers,
      messages,
      subscribers,
    ] = await Promise.all([
      db.donation.findMany({ orderBy: { createdAt: 'desc' }, take: 50 }),
      db.volunteer.findMany({ orderBy: { createdAt: 'desc' }, take: 50 }),
      db.contactMessage.findMany({ orderBy: { createdAt: 'desc' }, take: 50 }),
      db.subscriber.findMany({ orderBy: { createdAt: 'desc' }, take: 50 }),
    ])

    const totalDonated = donations.reduce((sum, d) => sum + d.amount, 0)
    const pendingVolunteers = volunteers.filter((v) => v.status === 'pending').length
    const newMessages = messages.filter((m) => m.status === 'new').length

    return NextResponse.json({
      ok: true,
      summary: {
        totalDonated,
        donationCount: donations.length,
        pendingVolunteers,
        newMessages,
        subscriberCount: subscribers.length,
      },
      donations,
      volunteers,
      messages,
      subscribers,
    })
  } catch (err) {
    console.error('[admin GET]', err)
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 })
  }
}
