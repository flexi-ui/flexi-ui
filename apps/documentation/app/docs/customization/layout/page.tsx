import { Metadata } from 'next'
import { CodeBlock } from '@/components/CodeBlock'

export const metadata: Metadata = {
  title: 'Layout - FlexiUI',
  description: 'Customize layout and spacing.',
}

export default function LayoutPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Layout Customization</h1>
        <p className="text-lg text-foreground-600">
          Customize spacing, sizing, and layout utilities in FlexiUI.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Layout Configuration</h2>
        <p>FlexiUI uses Tailwind's layout utilities. Customize spacing and sizing in your CSS:</p>
        <CodeBlock
          code={`@theme {
  --spacing-18: 4.5rem;
  --spacing-22: 5.5rem;

  --width-prose: 65ch;
  --max-width-8xl: 88rem;
}`}
          language="css"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Container Classes</h2>
        <CodeBlock
          code={`<div className="container mx-auto px-6">
  <div className="max-w-7xl">
    {/* Your content */}
  </div>
</div>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Responsive Layout</h2>
        <CodeBlock
          code={`<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map(item => (
    <div key={item.id}>{item.content}</div>
  ))}
</div>`}
          language="tsx"
        />
      </div>
    </div>
  )
}
