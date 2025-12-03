import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/examples/*', '/api/*', '/_next/*', '/static/*'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/examples/*', '/api/*'],
      },
    ],
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  }
}
