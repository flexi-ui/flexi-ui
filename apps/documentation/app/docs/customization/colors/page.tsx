import { Metadata } from 'next'
import { CodeBlock } from '@/components/CodeBlock'

export const metadata: Metadata = {
  title: 'Colors - FlexiUI',
  description: 'Customize color palette.',
}

export default function ColorsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Color System</h1>
        <p className="text-lg text-foreground-600">
          Learn about FlexiUI's color system and how to customize it.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Semantic Colors</h2>
        <p>FlexiUI provides semantic color tokens:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <code>primary</code> - Main brand color
          </li>
          <li>
            <code>secondary</code> - Secondary brand color
          </li>
          <li>
            <code>success</code> - Success states
          </li>
          <li>
            <code>warning</code> - Warning states
          </li>
          <li>
            <code>danger</code> - Error states
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Customize Colors</h2>
        <CodeBlock
          code={`@theme {
  --color-primary: oklch(0.5 0.2 250);
  --color-primary-foreground: oklch(1 0 0);

  --color-secondary: oklch(0.6 0.15 300);
  --color-secondary-foreground: oklch(1 0 0);
}`}
          language="css"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Using Colors</h2>
        <CodeBlock
          code={`<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="success">Success</Button>`}
          language="tsx"
        />
      </div>
    </div>
  )
}
