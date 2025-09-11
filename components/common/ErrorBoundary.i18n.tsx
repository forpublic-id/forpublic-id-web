'use client';

import { useTranslations } from 'next-intl';
import ErrorBoundary from './ErrorBoundary';

export default function I18nErrorBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations('errorBoundary');

  return (
    <ErrorBoundary
      labels={{
        title: t('title'),
        message: t('message'),
        detailsLabel: t('details'),
        tryAgain: t('tryAgain'),
        goHome: t('goHome'),
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
