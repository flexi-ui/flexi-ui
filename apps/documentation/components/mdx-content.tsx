'use client'

import { useMDXComponent } from 'next-contentlayer2/hooks'
import { CodeBlock } from '@/components/CodeBlock'

const components = {
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
    // Extract code from children
    const code = (children as { props?: { children?: string } })?.props?.children || ''
    const language =
      (children as { props?: { className?: string } })?.props?.className?.replace(
        'language-',
        '',
      ) || 'tsx'

    return <CodeBlock code={code} language={language} {...props} />
  },
  code: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => {
    // Inline code
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
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = href?.startsWith('http')
    return (
      <a
        href={href}
        className="text-primary hover:underline"
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
        {...props}
      >
        {children}
      </a>
    )
  },
}

interface MDXContentProps {
  code: string
}

export function MDXContent({ code }: MDXContentProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
