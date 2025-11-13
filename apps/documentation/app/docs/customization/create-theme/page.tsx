import { Metadata } from 'next'
import { CodeBlock } from '@/components/CodeBlock'

export const metadata: Metadata = {
  title: 'Create Theme - FlexiUI',
  description: 'Create a custom theme for FlexiUI.',
}

export default function CreateThemePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Create Theme</h1>
        <p className="text-lg text-foreground-600">
          Create a complete custom theme for your application.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Define Your Theme</h2>
        <CodeBlock
          code={`@theme {
  /* Brand Colors */
  --color-primary: oklch(0.45 0.25 260);
  --color-primary-foreground: oklch(1 0 0);

  --color-secondary: oklch(0.55 0.2 320);
  --color-secondary-foreground: oklch(1 0 0);

  /* Semantic Colors */
  --color-success: oklch(0.6 0.2 150);
  --color-warning: oklch(0.7 0.2 80);
  --color-danger: oklch(0.55 0.25 30);

  /* Background Colors */
  --color-background: oklch(1 0 0);
  --color-foreground: oklch(0.15 0 0);

  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'Fira Code', monospace;
}`}
          language="css"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Dark Theme Variant</h2>
        <CodeBlock
          code={`@custom-variant dark (&:where(.dark, .dark *));

@theme dark {
  --color-background: oklch(0.15 0 0);
  --color-foreground: oklch(0.95 0 0);

  --color-primary: oklch(0.55 0.25 260);
  /* ... other dark mode colors */
}`}
          language="css"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Apply Theme</h2>
        <p>Import your theme file in your application:</p>
        <CodeBlock code={`import './theme.css'`} language="tsx" />
      </div>
    </div>
  )
}
