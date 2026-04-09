import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { source } from '@/lib/source'
import { MDXContent } from '@/components/mdx-content'
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

  return (
    <div className="col-span-12 lg:col-span-10 xl:col-span-8 lg:px-16 mt-10">
      <div className="w-full prose prose-neutral dark:prose-invert max-w-none">
        <h1>{page.data.title}</h1>
        {page.data.description && (
          <p className="text-lg text-foreground-500">{page.data.description}</p>
        )}
        <MDXContent slug={slug} />
      </div>
    </div>
  )
}
