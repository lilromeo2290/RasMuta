import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { fullName, email, phone, amount, currency, method, frequency, program, message } = body || {}

    if (!fullName || !email || !amount || !method) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields: fullName, email, amount, method.' },
        { status: 400 }
      )
    }
    if (typeof amount !== 'number' || amount <= 0) {
      return NextResponse.json(
        { ok: false, error: 'Amount must be a positive number.' },
        { status: 400 }
      )
    }

    const donation = await db.donation.create({
      data: {
        fullName: String(fullName),
        email: String(email),
        phone: phone ? String(phone) : null,
        amount,
        currency: currency || 'USD',
        method: String(method),
        frequency: frequency || 'one_time',
        program: program ? String(program) : null,
        message: message ? String(message) : null,
        status: 'completed',
      },
    })

    return NextResponse.json({ ok: true, id: donation.id })
  } catch (err) {
    console.error('[donate POST]', err)
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const donations = await db.donation.findMany({
      orderBy: { createdAt: 'desc' },
      take: 200,
    })
    return NextResponse.json({ ok: true, donations })
  } catch (err) {
    console.error('[donate GET]', err)
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 })
  }
}
