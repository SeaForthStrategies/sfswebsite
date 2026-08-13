import type { MetadataRoute } from 'next';

import { ventures } from '@/data/ventures';
import { SITE } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date();
  const routes = [
    '',
    '/ventures',
    '/studio',
    '/portfolio',
    '/approach',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
  ];
  const pages = routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: updated,
    changeFrequency: (['', '/ventures', '/studio', '/portfolio'].includes(route)
      ? 'weekly'
      : 'monthly') as 'weekly' | 'monthly',
    priority: route === '' ? 1 : ['/ventures', '/studio', '/portfolio'].includes(route) ? 0.9 : 0.7,
  }));
  const venturePages = ventures.map((venture) => ({
    url: `${SITE.url}/ventures/${venture.slug}`,
    lastModified: updated,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  return [...pages, ...venturePages];
}
