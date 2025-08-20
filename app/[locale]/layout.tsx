import type React from 'react'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { GoogleAnalytics } from '@next/third-parties/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'

const locales = ['id', 'en']
import '../globals.css'

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export const metadata: Metadata = {
  title: 'ForPublic.id - Digital Solutions for Public Good',
  description:
    '🚀 Free digital tools for Indonesian communities. Access public data, government services & transparency tools. 100% free, mobile-friendly, bilingual.',
  keywords:
    'public applications, digital services, open data Indonesia, public transparency, technology for communities',
  generator: 'v0.app',
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
      },
    ],
    locale: 'id_ID',
    alternateLocale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ForPublic.id - Digital Solutions for Public Good',
    description:
      '🚀 Free digital tools for Indonesian communities. Access public data, government services & transparency tools. 100% free, mobile-friendly, bilingual.',
    images: ['/og-image.png'],
    creator: '@forpublic_id',
    site: '@forpublic_id',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.ico',
    apple: [{ url: '/favicon.svg' }],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  }
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const resolvedParams = await params
  const locale = resolvedParams?.locale || 'id'
  if (!locales.includes(locale)) notFound()

  const messages = await getMessages({ locale })

  return (
    <html lang={locale} dir="ltr">
      <head>
        <meta name="language" content={locale === 'id' ? 'Indonesian' : 'English'} />
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
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
    </html>
  )
}
