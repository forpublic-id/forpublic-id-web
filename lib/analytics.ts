'use client'

export async function trackEvent(event: string, payload?: Record<string, unknown>) {
  try {
    const data = {
      event,
      payload,
      ts: Date.now(),
    }

    const url = '/api/analytics'

    if ('sendBeacon' in navigator) {
      const blob = new Blob([JSON.stringify(data)], { type: 'application/json' })
      navigator.sendBeacon(url, blob)
      return
    }

    await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
      keepalive: true,
    })
  } catch (_) {
    // no-op
  }
}
