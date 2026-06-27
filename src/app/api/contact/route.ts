import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { fullName, email, phone, subject, message } = body || {}

    if (!fullName || !email || !subject || !message) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields: fullName, email, subject, message.' },
        { status: 400 }
      )
    }

    const record = await db.contactMessage.create({
      data: {
        fullName: String(fullName),
        email: String(email),
        phone: phone ? String(phone) : null,
        subject: String(subject),
        message: String(message),
        status: 'new',
      },
    })

    return NextResponse.json({ ok: true, id: record.id })
  } catch (err) {
    console.error('[contact POST]', err)
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const messages = await db.contactMessage.findMany({
      orderBy: { createdAt: 'desc' },
      take: 200,
    })
    return NextResponse.json({ ok: true, messages })
  } catch (err) {
    console.error('[contact GET]', err)
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 })
  }
}
