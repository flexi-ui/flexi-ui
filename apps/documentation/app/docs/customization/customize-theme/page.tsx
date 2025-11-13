import { Metadata } from 'next'
import { CodeBlock } from '@/components/CodeBlock'

export const metadata: Metadata = {
  title: 'Customize Theme - FlexiUI',
  description: 'Customize the FlexiUI theme.',
}

export default function CustomizeThemePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Customize Theme</h1>
        <p className="text-lg text-foreground-600">
          Customize component styles and create your own theme variants.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Component Customization</h2>
        <p>Override component styles using className:</p>
        <CodeBlock
          code={`<Button
  color="primary"
  className="rounded-full px-8"
>
  Custom Button
</Button>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Theme Tokens</h2>
        <CodeBlock
          code={`@theme {
  /* Colors */
  --color-primary: oklch(0.5 0.2 250);

  /* Spacing */
  --spacing-18: 4.5rem;

  /* Border radius */
  --radius-lg: 1rem;

  /* Fonts */
  --font-sans: 'Inter', sans-serif;
}`}
          language="css"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Plugin Configuration</h2>
        <p>Configure the FlexiUI plugin in your CSS:</p>
        <CodeBlock
          code={`@plugin '@flexi-ui/theme' {
  prefix: 'ui-';
  addCommonColors: true;
}`}
          language="css"
        />
      </div>
    </div>
  )
}
