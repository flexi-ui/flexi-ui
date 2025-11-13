import { Metadata } from 'next'
import { CodeBlock } from '@/components/CodeBlock'

export const metadata: Metadata = {
  title: 'Routing - FlexiUI',
  description: 'Learn how to integrate FlexiUI with your routing library.',
}

export default function RoutingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Routing</h1>
        <p className="text-lg text-foreground-600">
          FlexiUI components integrate seamlessly with popular React routing libraries.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Next.js App Router</h2>
        <p>
          When using Next.js with the App Router, configure the FlexiUIProvider with the router's
          navigate function:
        </p>
        <CodeBlock
          code={`'use client'

import { FlexiUIProvider } from '@flexi-ui/system'
import { useRouter } from 'next/navigation'

export function Providers({ children }) {
  const router = useRouter()

  return (
    <FlexiUIProvider navigate={router.push}>
      {children}
    </FlexiUIProvider>
  )
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Next.js Pages Router</h2>
        <CodeBlock
          code={`'use client'

import { FlexiUIProvider } from '@flexi-ui/system'
import { useRouter } from 'next/router'

export function Providers({ children }) {
  const router = useRouter()

  return (
    <FlexiUIProvider navigate={router.push}>
      {children}
    </FlexiUIProvider>
  )
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">React Router</h2>
        <CodeBlock
          code={`import { FlexiUIProvider } from '@flexi-ui/system'
import { useNavigate } from 'react-router-dom'

export function Providers({ children }) {
  const navigate = useNavigate()

  return (
    <FlexiUIProvider navigate={navigate}>
      {children}
    </FlexiUIProvider>
  )
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Using Link Components</h2>
        <p>Many FlexiUI components support the `as` prop to render as a link:</p>
        <CodeBlock
          code={`import { Button } from '@flexi-ui/button'
import { Link } from '@flexi-ui/link'
import NextLink from 'next/link'

// Button as link
<Button as={NextLink} href="/about">
  About
</Button>

// FlexiUI Link component
<Link as={NextLink} href="/contact">
  Contact Us
</Link>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">External Links</h2>
        <p>For external links, use the standard anchor tag props:</p>
        <CodeBlock
          code={`<Button
  as="a"
  href="https://github.com/flexi-ui/flexi-ui"
  target="_blank"
  rel="noopener noreferrer"
>
  GitHub
</Button>`}
          language="tsx"
        />
      </div>
    </div>
  )
}
