import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://forpublic.id';
  const locales = ['id', 'en'];
  const currentDate = new Date();

  // Generate sitemap entries for each locale
  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    // Main pages with specific priorities and frequencies
    const pages = [
      {
        url: `${baseUrl}/${locale}`,
        lastModified: currentDate,
        changeFrequency: 'daily' as const,
        priority: 1.0,
      },
      {
        url: `${baseUrl}/${locale}/applications`,
        lastModified: currentDate,
        changeFrequency: 'daily' as const,
        priority: 0.9,
      },
      {
        url: `${baseUrl}/${locale}/about`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/${locale}/contact`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/${locale}/faq`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      },
      {
        url: `${baseUrl}/${locale}/features`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      },
    ];

    sitemapEntries.push(...pages);
  });

  // Add root redirect with highest priority
  sitemapEntries.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'daily',
    priority: 1.0,
  });

  // Add external application URLs (high priority)
  const externalApps = [
    {
      url: 'https://holiday.forpublic.id',
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: 'https://budget.forpublic.id',
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: 'https://salary.forpublic.id',
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: 'https://plan.forpublic.id',
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  sitemapEntries.push(...externalApps);

  // Sort by priority (highest first)
  return sitemapEntries.sort((a, b) => (b.priority || 0) - (a.priority || 0));
}
