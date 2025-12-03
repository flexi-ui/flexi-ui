import { MetadataRoute } from 'next'
import { allDocs } from '../.contentlayer/generated'
import { siteConfig } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/docs/guide/introduction`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/themes`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Dynamic doc pages
  const docPages: MetadataRoute.Sitemap = allDocs.map((doc) => ({
    url: `${baseUrl}${doc.url}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: doc.url.includes('/guide/') ? 0.9 : doc.url.includes('/components/') ? 0.8 : 0.7,
  }))

  return [...staticPages, ...docPages]
}
