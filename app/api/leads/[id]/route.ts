import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

import { leads } from '../../../../lib/store'

export function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const lead = leads.find(l => l.id === params.id)
  if (!lead) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  return NextResponse.json(lead)
}
