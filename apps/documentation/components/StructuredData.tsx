import { siteConfig } from '@/config/site'

export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/logo.png`,
    description: siteConfig.description,
    sameAs: [siteConfig.links.github, siteConfig.links.twitter].filter(Boolean),
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.email,
      contactType: 'Customer Service',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.siteUrl}/logo.png`,
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.siteUrl}/docs?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: siteConfig.name,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web',
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    author: {
      '@type': 'Person',
      name: siteConfig.author,
      email: siteConfig.email,
    },
    license: 'https://opensource.org/licenses/MIT',
    codeRepository: siteConfig.links.github,
    programmingLanguage: ['TypeScript', 'JavaScript'],
    runtimePlatform: 'React',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
    </>
  )
}
