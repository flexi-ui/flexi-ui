'use client'

import { useEffect, useState, type ComponentType } from 'react'
import { MDXComponents } from '@/components/mdx-components'
import { CodeBlock } from '@/components/CodeBlock'

const components: Record<string, unknown> = {
  ...MDXComponents,
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
    const code = (children as { props?: { children?: string } })?.props?.children || ''
    const language =
      (children as { props?: { className?: string } })?.props?.className?.replace(
        'language-',
        '',
      ) || 'tsx'

    return <CodeBlock code={code} language={language} {...props} />
  },
  code: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => {
    if (typeof children === 'string' && !children.includes('\n')) {
      return (
        <code
          className="relative rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground"
          {...props}
        >
          {children}
        </code>
      )
    }
    return <code {...props}>{children}</code>
  },
}


type MDXModule = ComponentType<any>

const mdxModules: Record<string, () => Promise<{ default: MDXModule }>> = {
  'api-references/flexiui-provider': () => import('@/content/docs/api-references/flexiui-provider.mdx'),
  'components/button': () => import('@/content/docs/components/button.mdx'),
  'components/form': () => import('@/content/docs/components/form.mdx'),
  'components/input': () => import('@/content/docs/components/input.mdx'),
  'components/link': () => import('@/content/docs/components/link.mdx'),
  'components/spinner': () => import('@/content/docs/components/spinner.mdx'),
  'frameworks/astro': () => import('@/content/docs/frameworks/astro.mdx'),
  'frameworks/nextjs': () => import('@/content/docs/frameworks/nextjs.mdx'),
  'frameworks/remix': () => import('@/content/docs/frameworks/remix.mdx'),
  'frameworks/vite': () => import('@/content/docs/frameworks/vite.mdx'),
  'guide/forms': () => import('@/content/docs/guide/forms.mdx'),
  'guide/installation': () => import('@/content/docs/guide/installation.mdx'),
  'guide/introduction': () => import('@/content/docs/guide/introduction.mdx'),
  'guide/routing': () => import('@/content/docs/guide/routing.mdx'),
  'guide/tailwind-v4': () => import('@/content/docs/guide/tailwind-v4.mdx'),
}

interface MDXContentProps {
  slug: string[]
}

export function MDXContent({ slug }: MDXContentProps) {
  const [Component, setComponent] = useState<MDXModule | null>(null)

  const slugPath = slug.join('/')

  useEffect(() => {
    const loader = mdxModules[slugPath]
    if (loader) {
      loader().then((mod) => setComponent(() => mod.default))
    }
  }, [slugPath])

  if (!Component) {
    return <div className="h-96 animate-pulse rounded-lg bg-muted" />
  }

  return <Component components={components} />
}
