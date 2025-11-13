import { Metadata } from 'next'
import { CodeBlock } from '@/components/CodeBlock'

export const metadata: Metadata = {
  title: 'Override Styles - FlexiUI',
  description: 'Override component styles.',
}

export default function OverrideStylesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Override Styles</h1>
        <p className="text-lg text-foreground-600">
          Learn different ways to override component styles.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Using className</h2>
        <CodeBlock
          code={`<Button
  color="primary"
  className="rounded-full shadow-lg hover:shadow-xl"
>
  Custom Button
</Button>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Using classNames Prop</h2>
        <p>Some components support granular style overrides:</p>
        <CodeBlock
          code={`<Input
  label="Email"
  classNames={{
    base: "max-w-md",
    label: "text-primary font-bold",
    input: "bg-transparent",
    inputWrapper: "border-2 border-primary",
  }}
/>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Global CSS Overrides</h2>
        <CodeBlock
          code={`.flexi-button {
  @apply transition-all duration-300;
}

.flexi-button:hover {
  @apply transform scale-105;
}`}
          language="css"
        />
      </div>
    </div>
  )
}
