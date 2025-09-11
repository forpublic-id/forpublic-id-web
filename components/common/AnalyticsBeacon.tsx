'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

interface Props {
  locale: string;
}

export default function AnalyticsBeacon({ locale }: Props) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;
    if (process.env.NEXT_PUBLIC_ENABLE_INTERNAL_ANALYTICS !== 'true') return;

    trackEvent('page_view', {
      locale,
      path: window.location.pathname,
    }).catch(() => {
      // swallow errors; analytics should never block UX
    });
  }, [locale]);

  return null;
}
