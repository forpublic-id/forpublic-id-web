'use client';

import { useEffect } from 'react';

interface OrganizationSchema {
  '@context': 'https://schema.org';
  '@type': 'Organization';
  name: string;
  url: string;
  logo: string;
  description: string;
  foundingDate?: string;
  contactPoint?: {
    '@type': 'ContactPoint';
    contactType: string;
    url: string;
  }[];
  sameAs?: string[];
  address?: {
    '@type': 'PostalAddress';
    addressCountry: string;
    addressRegion?: string;
  };
}

interface WebSiteSchema {
  '@context': 'https://schema.org';
  '@type': 'WebSite';
  name: string;
  url: string;
  description: string;
  inLanguage: string[];
  potentialAction?: {
    '@type': 'SearchAction';
    target: {
      '@type': 'EntryPoint';
      urlTemplate: string;
    };
    'query-input': string;
  };
}

interface BreadcrumbSchema {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: {
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }[];
}

interface FAQSchema {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: {
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }[];
}

interface StructuredDataProps {
  organization?: Partial<OrganizationSchema>;
  website?: Partial<WebSiteSchema>;
  breadcrumb?: Omit<BreadcrumbSchema, '@context' | '@type'>;
  faq?: Omit<FAQSchema, '@context' | '@type'>;
}

export function StructuredData({
  organization,
  website,
  breadcrumb,
  faq,
}: StructuredDataProps) {
  useEffect(() => {
    // Clean up any existing structured data scripts
    const existingScripts = document.querySelectorAll(
      'script[type="application/ld+json"]'
    );
    existingScripts.forEach((script) => {
      if (script.getAttribute('data-component') === 'structured-data') {
        script.remove();
      }
    });

    const scripts: HTMLScriptElement[] = [];

    // Organization Schema
    if (organization) {
      const orgSchema: OrganizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'ForPublic.id',
        url: 'https://forpublic.id',
        logo: 'https://forpublic.id/logo.svg',
        description:
          'Platform digital yang menyediakan berbagai aplikasi gratis untuk membantu masyarakat mengakses informasi dan layanan publik dengan mudah',
        foundingDate: '2024',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            url: 'https://forpublic.id/#contact',
          },
        ],
        sameAs: [
          'https://x.com/forpublicid',
          'https://github.com/forpublic-id',
        ],
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'ID',
          addressRegion: 'Indonesia',
        },
        ...organization,
      };

      const orgScript = document.createElement('script');
      orgScript.type = 'application/ld+json';
      orgScript.setAttribute('data-component', 'structured-data');
      orgScript.textContent = JSON.stringify(orgSchema);
      document.head.appendChild(orgScript);
      scripts.push(orgScript);
    }

    // Website Schema
    if (website) {
      const websiteSchema: WebSiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'ForPublic.id',
        url: 'https://forpublic.id',
        description:
          'Platform digital yang menyediakan berbagai aplikasi gratis untuk membantu masyarakat mengakses informasi dan layanan publik dengan mudah',
        inLanguage: ['id-ID', 'en-US'],
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate:
              'https://forpublic.id/applications?search={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
        ...website,
      };

      const websiteScript = document.createElement('script');
      websiteScript.type = 'application/ld+json';
      websiteScript.setAttribute('data-component', 'structured-data');
      websiteScript.textContent = JSON.stringify(websiteSchema);
      document.head.appendChild(websiteScript);
      scripts.push(websiteScript);
    }

    // Breadcrumb Schema
    if (breadcrumb) {
      const breadcrumbSchema: BreadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        ...breadcrumb,
      };

      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.setAttribute('data-component', 'structured-data');
      breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
      document.head.appendChild(breadcrumbScript);
      scripts.push(breadcrumbScript);
    }

    // FAQ Schema
    if (faq) {
      const faqSchema: FAQSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        ...faq,
      };

      const faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.setAttribute('data-component', 'structured-data');
      faqScript.textContent = JSON.stringify(faqSchema);
      document.head.appendChild(faqScript);
      scripts.push(faqScript);
    }

    // Cleanup function
    return () => {
      scripts.forEach((script) => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, [organization, website, breadcrumb, faq]);

  return null; // This component doesn't render anything visible
}

// Helper function to generate breadcrumb schema
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
): Omit<BreadcrumbSchema, '@context' | '@type'> {
  return {
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Helper function to generate FAQ schema
export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
): Omit<FAQSchema, '@context' | '@type'> {
  return {
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
