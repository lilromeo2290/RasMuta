import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, name, source } = body || {}

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: 'A valid email address is required.' },
        { status: 400 }
      )
    }

    // Upsert so re-subscribing the same address does not error.
    const existing = await db.subscriber.findUnique({ where: { email: String(email) } })
    if (existing) {
      return NextResponse.json({ ok: true, id: existing.id, alreadySubscribed: true })
    }

    const subscriber = await db.subscriber.create({
      data: {
        email: String(email),
        name: name ? String(name) : null,
        source: source ? String(source) : 'footer',
      },
    })

    return NextResponse.json({ ok: true, id: subscriber.id })
  } catch (err) {
    console.error('[newsletter POST]', err)
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const subscribers = await db.subscriber.findMany({
      orderBy: { createdAt: 'desc' },
      take: 200,
    })
    return NextResponse.json({ ok: true, subscribers })
  } catch (err) {
    console.error('[newsletter GET]', err)
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 })
  }
}
