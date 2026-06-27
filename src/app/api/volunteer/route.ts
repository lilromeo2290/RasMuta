import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { fullName, email, phone, location, occupation, skills, interests, availability, message } = body || {}

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields: fullName, email, phone.' },
        { status: 400 }
      )
    }

    const volunteer = await db.volunteer.create({
      data: {
        fullName: String(fullName),
        email: String(email),
        phone: String(phone),
        location: location ? String(location) : null,
        occupation: occupation ? String(occupation) : null,
        skills: Array.isArray(skills) ? skills.join(',') : (skills ? String(skills) : ''),
        interests: Array.isArray(interests) ? interests.join(',') : (interests ? String(interests) : ''),
        availability: availability ? String(availability) : null,
        message: message ? String(message) : null,
        status: 'pending',
      },
    })

    return NextResponse.json({ ok: true, id: volunteer.id })
  } catch (err) {
    console.error('[volunteer POST]', err)
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const volunteers = await db.volunteer.findMany({
      orderBy: { createdAt: 'desc' },
      take: 200,
    })
    return NextResponse.json({ ok: true, volunteers })
  } catch (err) {
    console.error('[volunteer GET]', err)
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 })
  }
}
