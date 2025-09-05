import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

export async function GET() {
  try {
    const payload = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      version: process.env.VERCEL_GIT_COMMIT_SHA || 'dev',
    }
    return NextResponse.json(payload, {
      headers: {
        'cache-control': 'public, max-age=60',
      },
    })
  } catch (err) {
    console.error('Healthcheck error', err)
    return NextResponse.json({ status: 'error' }, { status: 500 })
  }
}
