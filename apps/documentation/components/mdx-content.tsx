'use client'

import { useEffect, useState, type ComponentType } from 'react'
import defaultMdxComponents from 'fumadocs-ui/mdx'
import { MDXComponents } from '@/components/mdx-components'
import { CodeBlock } from '@/components/CodeBlock'

const components: Record<string, unknown> = {
  ...defaultMdxComponents,
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
          className="relative rounded bg-content2 px-[0.3rem] py-[0.2rem] font-mono text-sm"
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

// Static import map for all MDX content files
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
    return <div className="animate-pulse h-96 bg-content2 rounded-lg" />
  }

  return <Component components={components} />
}
