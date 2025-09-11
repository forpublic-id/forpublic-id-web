'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SimpleFooter } from '@/components/layout/Footer';

// Translation object for both languages
const translations = {
  id: {
    title: 'Halaman Tidak Ditemukan',
    description:
      'Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman tersebut telah dipindahkan, dihapus, atau URL yang dimasukkan salah.',
    button: 'Kembali ke Beranda',
    copyright:
      '© 2025 ForPublic.id. Semua hak dilindungi. Dibuat dengan ❤️ untuk kepentingan publik.',
  },
  en: {
    title: 'Page Not Found',
    description:
      'Sorry, the page you are looking for could not be found. It may have been moved, deleted, or the URL entered is incorrect.',
    button: 'Back to Home',
    copyright:
      '© 2025 ForPublic.id. All rights reserved. Made with ❤️ for public good.',
  },
};

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
}

function detectLocaleFromURL(): 'id' | 'en' {
  if (typeof window === 'undefined') return 'id';

  const pathname = window.location.pathname;
  if (pathname.startsWith('/en')) return 'en';
  if (pathname.startsWith('/id')) return 'id';

  // Try to get from cookie as secondary option
  const cookieLocale = getCookie('NEXT_LOCALE');
  if (cookieLocale === 'en') return 'en';
  if (cookieLocale === 'id') return 'id';

  return 'id'; // Default fallback
}

export default function GlobalNotFound() {
  const [locale, setLocale] = useState<'id' | 'en'>('id'); // Safe server-side default

  useEffect(() => {
    const detectedLocale = detectLocaleFromURL();
    setLocale(detectedLocale);
  }, []);

  const t = translations[locale];

  return (
    <html lang={locale}>
      <head>
        <title>
          {locale === 'id' ? 'Halaman Tidak Ditemukan' : 'Page Not Found'} -
          ForPublic.id
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={
            locale === 'id'
              ? 'Halaman yang Anda cari tidak dapat ditemukan.'
              : 'The page you are looking for could not be found.'
          }
        />
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
            line-height: 1.5;
            color: #374151;
            background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
          }
          .header {
            border-bottom: 1px solid #e5e7eb;
            background: white;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
            padding: 1rem 0;
          }
          .logo-link {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            text-decoration: none;
            color: inherit;
            transition: opacity 0.2s;
          }
          .logo-link:hover {
            opacity: 0.8;
          }
          .logo {
            width: 32px;
            height: 32px;
          }
          .brand-text {
            font-size: 1.25rem;
            font-weight: bold;
            color: #111827;
          }
          .brand-accent {
            color: #dc2626;
          }
          .content {
            padding: 5rem 1rem;
            text-align: center;
            flex: 1;
          }
          .error-icon {
            width: 96px;
            height: 96px;
            background: #fee2e2;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 2rem;
          }
          .error-number {
            font-size: 4rem;
            font-weight: bold;
            color: #111827;
            margin-bottom: 1rem;
          }
          .error-title {
            font-size: 1.875rem;
            font-weight: bold;
            color: #111827;
            margin-bottom: 1rem;
          }
          .error-description {
            font-size: 1.125rem;
            color: #6b7280;
            margin-bottom: 2rem;
            max-width: 42rem;
            margin-left: auto;
            margin-right: auto;
          }
          .button {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 2rem;
            font-size: 1.125rem;
            font-weight: 500;
            text-decoration: none;
            border-radius: 0.5rem;
            transition: all 0.2s;
          }
          .button-primary {
            background: #dc2626;
            color: white;
          }
          .button-primary:hover {
            background: #b91c1c;
          }
          .footer {
            background: #111827;
            color: white;
            padding: 2rem 1rem;
            text-align: center;
            margin-top: auto;
          }
          .footer-logo {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            margin-bottom: 1rem;
          }
          .footer-logo .brand-text {
            color: white;
          }
          .footer-text {
            font-size: 0.875rem;
            color: #d1d5db;
          }
        `}</style>
      </head>
      <body suppressHydrationWarning={true}>
        <header className="header">
          <div className="container">
            <Link href={`/${locale}`} className="logo-link">
              <Image
                src="/logo.svg"
                alt="ForPublic.id Logo"
                className="logo"
                width={32}
                height={32}
              />
              <span className="brand-text">
                ForPublic<span className="brand-accent">.id</span>
              </span>
            </Link>
          </div>
        </header>

        <main className="content">
          <div className="container">
            <div className="error-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="8"
                  stroke="#dc2626"
                  strokeWidth="2"
                />
                <path
                  d="m21 21-4.35-4.35"
                  stroke="#dc2626"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="error-number">
              4<span className="brand-accent">0</span>4
            </div>

            <h1 className="error-title">{t.title}</h1>

            <p className="error-description">{t.description}</p>

            <Link href={`/${locale}`} className="button button-primary">
              {t.button}
            </Link>
          </div>
        </main>

        <SimpleFooter copyrightText={t.copyright} />
      </body>
    </html>
  );
}
