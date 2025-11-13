import { Metadata } from 'next'
import { CodeBlock } from '@/components/CodeBlock'

export const metadata: Metadata = {
  title: 'Spinner - FlexiUI',
  description: 'A loading spinner component.',
}

export default function SpinnerPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Spinner</h1>
        <p className="text-lg text-foreground-600">
          Spinners provide a visual cue that an action is being processed.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Import</h2>
        <CodeBlock code={`import { Spinner } from '@flexi-ui/spinner'`} language="tsx" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock code={`<Spinner />`} language="tsx" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Sizes</h2>
        <CodeBlock
          code={`<div className="flex items-end gap-4">
  <Spinner size="sm" />
  <Spinner size="md" />
  <Spinner size="lg" />
</div>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Colors</h2>
        <CodeBlock
          code={`<div className="flex gap-4">
  <Spinner color="default" />
  <Spinner color="primary" />
  <Spinner color="secondary" />
  <Spinner color="success" />
  <Spinner color="warning" />
  <Spinner color="danger" />
</div>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">With Label</h2>
        <CodeBlock code={`<Spinner label="Loading..." color="primary" />`} language="tsx" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">In Button</h2>
        <CodeBlock
          code={`<Button isLoading color="primary">
  Loading
</Button>`}
          language="tsx"
        />
      </div>
    </div>
  )
}
