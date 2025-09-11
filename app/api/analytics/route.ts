import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    // Minimal placeholder: log event server-side only
    console.error('[analytics] event', {
      receivedAt: new Date().toISOString(),
      event: body,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error('Analytics error', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
