import type { Metadata } from 'next';

// SEO Configuration
export const SEO_CONFIG = {
  defaultTitle: 'ForPublic.id - Digital Solutions for Public Good',
  titleTemplate: '%s - ForPublic.id',
  defaultDescription:
    '🚀 Free digital tools for Indonesian communities. Access public data, government services & transparency tools. 100% free, mobile-friendly, bilingual.',
  siteUrl: 'https://forpublic.id',
  siteName: 'ForPublic.id',
  defaultImage: '/og-image.png',
  twitterHandle: '@forpublicid',
  locale: 'id_ID',
  alternateLocale: 'en_US',
  organizationName: 'ForPublic.id',
  foundingDate: '2024',
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
  ],
};

interface SEOPageConfig {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  locale?: string;
  canonical?: string;
}

export function generateMetadata({
  title,
  description,
  keywords,
  image,
  type = 'website',
  publishedTime,
  modifiedTime,
  section,
  tags,
  locale = 'id',
  canonical,
}: SEOPageConfig): Metadata {
  const pageTitle = title
    ? `${title} - ${SEO_CONFIG.siteName}`
    : SEO_CONFIG.defaultTitle;
  const pageDescription = description || SEO_CONFIG.defaultDescription;
  const pageImage = image || SEO_CONFIG.defaultImage;
  const pageLocale =
    locale === 'id' ? SEO_CONFIG.locale : SEO_CONFIG.alternateLocale;
  const pageUrl = canonical
    ? `${SEO_CONFIG.siteUrl}${canonical}`
    : SEO_CONFIG.siteUrl;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: keywords || SEO_CONFIG.keywords.join(', '),
    authors: [{ name: SEO_CONFIG.organizationName }],
    creator: SEO_CONFIG.organizationName,
    publisher: SEO_CONFIG.organizationName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(SEO_CONFIG.siteUrl),
    alternates: {
      canonical: canonical || '/',
      languages: {
        'id-ID': `/id${canonical || ''}`,
        'en-US': `/en${canonical || ''}`,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: SEO_CONFIG.siteName,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
      locale: pageLocale,
      alternateLocale:
        locale === 'id' ? SEO_CONFIG.alternateLocale : SEO_CONFIG.locale,
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
      ...(tags && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      creator: SEO_CONFIG.twitterHandle,
      site: SEO_CONFIG.twitterHandle,
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
    other: {
      'application-name': SEO_CONFIG.siteName,
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': SEO_CONFIG.siteName,
      'format-detection': 'telephone=no',
      'msapplication-TileColor': '#dc2626',
      'msapplication-tap-highlight': 'no',
      'theme-color': '#dc2626',
    },
    category: 'technology',
    classification: 'Public Service',
  };
}

// Localized SEO content
export const SEO_CONTENT = {
  id: {
    defaultTitle: 'ForPublic.id - Solusi Digital untuk Kepentingan Umum',
    defaultDescription:
      '🚀 Tools digital gratis untuk masyarakat Indonesia. Akses data publik, layanan pemerintah & alat transparansi. 100% gratis, mobile-friendly, dwi bahasa.',
    keywords: [
      'aplikasi publik',
      'layanan digital',
      'data terbuka Indonesia',
      'transparansi publik',
      'teknologi untuk masyarakat',
      'data pemerintah',
      'teknologi sipil',
      'alat transparansi',
      'informasi publik',
      'transparansi anggaran',
      'database gaji',
      'kalender libur',
      'perencanaan pembangunan',
    ],
    alternateHrefLang: 'id-ID',
  },
  en: {
    defaultTitle: 'ForPublic.id - Digital Solutions for Public Good',
    defaultDescription:
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
    ],
    alternateHrefLang: 'en-US',
  },
};

// Generate structured data for organization
export function generateOrganizationSchema(locale: 'id' | 'en' = 'id') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ForPublic.id',
    alternateName: 'ForPublic Indonesia',
    url: 'https://forpublic.id',
    logo: {
      '@type': 'ImageObject',
      url: 'https://forpublic.id/logo.svg',
      width: 200,
      height: 200,
    },
    description:
      locale === 'id'
        ? 'Platform digital yang menyediakan berbagai aplikasi gratis untuk membantu masyarakat mengakses informasi dan layanan publik dengan mudah'
        : 'Digital platform providing free applications to help communities access public information and services easily',
    foundingDate: '2024',
    slogan:
      locale === 'id'
        ? 'Solusi Digital untuk Kepentingan Umum'
        : 'Digital Solutions for Public Good',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        url: 'https://forpublic.id/contact',
        availableLanguage: ['Indonesian', 'English'],
        areaServed: 'ID',
      },
    ],
    sameAs: [
      'https://x.com/forpublicid',
      'https://github.com/forpublic-id',
      'https://holiday.forpublic.id',
      'https://budget.forpublic.id',
      'https://salary.forpublic.id',
      'https://plan.forpublic.id',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID',
      addressRegion: 'Indonesia',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia',
    },
    knowsAbout: [
      'Public Data',
      'Government Transparency',
      'Digital Services',
      'Open Data',
      'Civic Technology',
      'Public Information',
    ],
    memberOf: {
      '@type': 'Organization',
      name: 'Open Government Partnership',
    },
  };
}

// Generate WebSite schema with search action
export function generateWebSiteSchema(locale: 'id' | 'en' = 'id') {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ForPublic.id',
    url: 'https://forpublic.id',
    description:
      locale === 'id'
        ? SEO_CONTENT.id.defaultDescription
        : SEO_CONTENT.en.defaultDescription,
    inLanguage: [locale === 'id' ? 'id-ID' : 'en-US'],
    isAccessibleForFree: true,
    isFamilyFriendly: true,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `https://forpublic.id/${locale}/applications?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ForPublic.id',
    },
    copyrightHolder: {
      '@type': 'Organization',
      name: 'ForPublic.id',
    },
    copyrightYear: '2024',
    license: 'https://creativecommons.org/licenses/by/4.0/',
  };
}
