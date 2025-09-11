import { GoogleAnalytics } from '@next/third-parties/google';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type React from 'react';
import { I18nErrorBoundary } from '@/components/common';
import AnalyticsBeacon from '@/components/common/AnalyticsBeacon';

const locales = ['id', 'en'];
import '../globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'ForPublic.id - Digital Solutions for Public Good',
  description:
    '🚀 Free digital tools for Indonesian communities. Access public data, government services & transparency tools. 100% free, mobile-friendly, bilingual.',
  keywords: [
    'public applications',
    'digital services',
    'open data Indonesia',
    'public transparency',
    'technology for communities',
    'government data',
    'civic tech',
    'transparency tools',
    'public information',
    'budget transparency',
    'salary database',
    'holiday calendar',
    'development planning',
    'APBN',
    'APBD',
    'PNS salary',
    'Indonesian holidays',
    'spatial planning',
    'RTRW',
  ].join(', '),
  authors: [{ name: 'ForPublic.id Team' }],
  creator: 'ForPublic.id',
  publisher: 'ForPublic.id',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://forpublic.id'),
  alternates: {
    canonical: '/',
    languages: {
      'id-ID': '/id',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: 'ForPublic.id - Digital Solutions for Public Good',
    description:
      '🚀 Free digital tools for Indonesian communities. Access public data, government services & transparency tools. 100% free, mobile-friendly, bilingual.',
    url: 'https://forpublic.id',
    siteName: 'ForPublic.id',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ForPublic.id - Digital Solutions for Public Good',
        type: 'image/png',
      },
    ],
    locale: 'id_ID',
    alternateLocale: 'en_US',
    type: 'website',
    countryName: 'Indonesia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ForPublic.id - Digital Solutions for Public Good',
    description:
      '🚀 Free digital tools for Indonesian communities. Access public data, government services & transparency tools. 100% free, mobile-friendly, bilingual.',
    images: ['/og-image.png'],
    creator: '@forpublicid',
    site: '@forpublicid',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon-180x180.png', sizes: '180x180' },
      { url: '/apple-touch-icon-152x152.png', sizes: '152x152' },
      { url: '/apple-touch-icon-120x120.png', sizes: '120x120' },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || undefined,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? {
          'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
        }
      : undefined,
  },
  other: {
    'application-name': 'ForPublic.id',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'ForPublic.id',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#dc2626',
    'msapplication-tap-highlight': 'no',
    'theme-color': '#dc2626',
    'color-scheme': 'light',
    rating: 'general',
    distribution: 'global',
    'geo.region': 'ID',
    'geo.country': 'Indonesia',
  },
  category: 'technology',
  classification: 'Public Service',
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'id';
  if (!locales.includes(locale)) notFound();

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} dir="ltr">
      <head>
        <meta
          name="language"
          content={locale === 'id' ? 'Indonesian' : 'English'}
        />
        <meta name="geo.region" content="ID" />
        <meta name="geo.country" content="Indonesia" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body suppressHydrationWarning={true}>
        <NextIntlClientProvider messages={messages}>
          <I18nErrorBoundary>{children}</I18nErrorBoundary>
        </NextIntlClientProvider>
        <AnalyticsBeacon locale={locale} />
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
