import { Metadata } from 'next'
import { CodeBlock } from '@/components/CodeBlock'

export const metadata: Metadata = {
  title: 'Link - FlexiUI',
  description: 'A link component for navigation.',
}

export default function LinkPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Link</h1>
        <p className="text-lg text-foreground-600">
          Links allow users to navigate to different pages or resources.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Import</h2>
        <CodeBlock code={`import { Link } from '@flexi-ui/link'`} language="tsx" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock
          code={`<Link href="/docs">
  Documentation
</Link>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Colors</h2>
        <CodeBlock
          code={`<div className="flex gap-4">
  <Link href="#" color="foreground">Foreground</Link>
  <Link href="#" color="primary">Primary</Link>
  <Link href="#" color="secondary">Secondary</Link>
  <Link href="#" color="success">Success</Link>
  <Link href="#" color="warning">Warning</Link>
  <Link href="#" color="danger">Danger</Link>
</div>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Underline</h2>
        <CodeBlock
          code={`<div className="flex flex-col gap-2">
  <Link href="#" underline="none">None</Link>
  <Link href="#" underline="hover">Hover</Link>
  <Link href="#" underline="always">Always</Link>
  <Link href="#" underline="active">Active</Link>
</div>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">External Links</h2>
        <CodeBlock
          code={`<Link
  href="https://github.com/flexi-ui/flexi-ui"
  isExternal
  showAnchorIcon
>
  GitHub Repository
</Link>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">With Next.js</h2>
        <CodeBlock
          code={`import NextLink from 'next/link'
import { Link } from '@flexi-ui/link'

<Link as={NextLink} href="/about">
  About Us
</Link>`}
          language="tsx"
        />
      </div>
    </div>
  )
}
