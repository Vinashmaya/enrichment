import { NextRequest, NextResponse } from 'next/server'

import { leads, Lead } from '../../../lib/store'

export async function POST(req: NextRequest) {
  const data = await req.json()
  const id = String(Date.now())
  const lead: Lead = { id, ...data }
  leads.push(lead)
  return NextResponse.json({ status: 'received', id })
}

export function GET() {
  return NextResponse.json({ leads })
}
