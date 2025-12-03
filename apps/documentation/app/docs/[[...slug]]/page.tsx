import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allDocs } from '../../../.contentlayer/generated'
import { DocsPager, DocsToc } from '@/components/docs'
import { siteConfig } from '@/config/site'
import { GITHUB_URL, REPO_NAME } from '@/libs/github/constants'
import { CONTENT_PATH, TAG } from '@/libs/docs/config'
import { getHeadings } from '@/libs/docs/utils'
import type { Route } from '@/libs/docs/utils'
import { MDXContent } from '@/components/mdx-content'

interface DocPageProps {
  params: Promise<{ slug: string[] }>
}

async function getDocFromParams({ params }: DocPageProps) {
  const { slug } = await params
  const paramsSlug = slug?.join('/') || ''
  const doc = allDocs.find((doc) => doc.slugAsParams === paramsSlug)

  if (!doc) {
    return { doc: null, headings: [], currentRoute: null }
  }

  const headings = getHeadings(doc?.body.raw || '')

  const currentRoute: Route = {
    key: doc._id,
    title: doc.title,
    path: `/${doc._raw.sourceFilePath.replace('content/', '')}`,
  }

  return { doc, headings, currentRoute }
}

export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
  const { doc } = await getDocFromParams({ params })

  if (!doc) {
    return {}
  }

  const url = `${siteConfig.siteUrl}${doc.url}`

  return {
    title: doc.title,
    description: doc.description,
    keywords: [
      ...siteConfig.keywords,
      doc.title,
      ...(doc.title.toLowerCase().includes('component')
        ? ['component documentation', 'component API']
        : []),
      ...(doc.title.toLowerCase().includes('theme') ? ['theme customization', 'theming'] : []),
    ],
    openGraph: {
      title: `${doc.title} | ${siteConfig.name}`,
      description: doc.description,
      type: 'article',
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${doc.title} - ${siteConfig.name}`,
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${doc.title} | ${siteConfig.name}`,
      description: doc.description,
      images: [siteConfig.ogImage],
      creator: siteConfig.twitterHandle,
      site: siteConfig.twitterHandle,
    },
    alternates: {
      canonical: url,
    },
  }
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split('/'),
  }))
}

export default async function DocPage({ params }: DocPageProps) {
  const { doc, headings, currentRoute } = await getDocFromParams({ params })

  if (!doc) {
    notFound()
  }

  const editUrl = `${GITHUB_URL}/${REPO_NAME}/edit/${TAG}${CONTENT_PATH}${currentRoute?.path}`

  return (
    <>
      <div className="col-span-12 lg:col-span-10 xl:col-span-8 lg:px-16 mt-10">
        <div className="w-full prose prose-neutral dark:prose-invert max-w-none">
          <MDXContent code={doc.body.code} />
        </div>
        {currentRoute && <DocsPager currentRoute={currentRoute} />}
        <footer className="mt-8">
          <a
            href={editUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline inline-flex items-center gap-1"
          >
            Edit this page on GitHub
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </footer>
      </div>
      {headings && headings.length > 0 && (
        <div className="hidden z-10 xl:flex xl:col-span-2 mt-8 pl-0">
          <div className="sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <DocsToc headings={headings} />
          </div>
        </div>
      )}
    </>
  )
}
