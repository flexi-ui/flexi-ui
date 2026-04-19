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
    <article className="mx-auto w-full max-w-3xl">
      <header className="mb-10 border-b border-border pb-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">{page.data.title}</h1>
        {page.data.description && (
          <p className="mt-3 text-lg text-muted-foreground">{page.data.description}</p>
        )}
      </header>
      <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-headings:font-semibold prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-[0.875em] prose-code:before:content-none prose-code:after:content-none prose-pre:bg-muted prose-pre:border prose-pre:border-border">
        <MDXContent slug={slug} />
      </div>
    </article>
  )
}
