import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page'
import { source } from '@/lib/source'
import { MDXComponents } from '@/components/mdx-components'
import { siteConfig } from '@/config/site'

interface DocPageProps {
  params: Promise<{ slug?: string[] }>
}

export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
  const { slug = [] } = await params
  const page = source.getPage(slug)

  if (!page) return {}

  const url = `${siteConfig.siteUrl}${page.url}`

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      title: `${page.data.title} | ${siteConfig.name}`,
      description: page.data.description,
      type: 'article',
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${page.data.title} - ${siteConfig.name}`,
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${page.data.title} | ${siteConfig.name}`,
      description: page.data.description,
      images: [siteConfig.ogImage],
      creator: siteConfig.twitterHandle,
      site: siteConfig.twitterHandle,
    },
    alternates: {
      canonical: url,
    },
  }
}

export async function generateStaticParams() {
  return source.generateParams()
}

export default async function DocPage({ params }: DocPageProps) {
  const { slug = [] } = await params
  const page = source.getPage(slug)

  if (!page) notFound()

  const MDX = page.data.body

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={MDXComponents} />
      </DocsBody>
    </DocsPage>
  )
}
