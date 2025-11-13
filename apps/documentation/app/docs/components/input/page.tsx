import { Metadata } from 'next'
import { CodeBlock } from '@/components/CodeBlock'

export const metadata: Metadata = {
  title: 'Input - FlexiUI',
  description: 'A text input component with various styles and features.',
}

export default function InputPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Input</h1>
        <p className="text-lg text-foreground-600">
          Input allows users to enter text and supports various types, styles, and validation
          states.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Import</h2>
        <CodeBlock code={`import { Input } from '@flexi-ui/input'`} language="tsx" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock
          code={`<Input
  label="Email"
  placeholder="Enter your email"
  type="email"
/>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Variants</h2>
        <CodeBlock
          code={`<div className="flex flex-col gap-4">
  <Input variant="flat" label="Flat" placeholder="Enter text" />
  <Input variant="bordered" label="Bordered" placeholder="Enter text" />
  <Input variant="faded" label="Faded" placeholder="Enter text" />
  <Input variant="underlined" label="Underlined" placeholder="Enter text" />
</div>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Sizes</h2>
        <CodeBlock
          code={`<div className="flex flex-col gap-4">
  <Input size="sm" label="Small" placeholder="Small input" />
  <Input size="md" label="Medium" placeholder="Medium input" />
  <Input size="lg" label="Large" placeholder="Large input" />
</div>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Required & Description</h2>
        <CodeBlock
          code={`<Input
  isRequired
  label="Email"
  placeholder="Enter your email"
  type="email"
  description="We'll never share your email"
/>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Validation States</h2>
        <CodeBlock
          code={`<div className="flex flex-col gap-4">
  <Input
    label="Email"
    validationState="valid"
    placeholder="john@example.com"
    description="Email is valid"
  />
  <Input
    label="Email"
    validationState="invalid"
    placeholder="invalid-email"
    errorMessage="Please enter a valid email"
  />
</div>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Disabled & ReadOnly</h2>
        <CodeBlock
          code={`<div className="flex flex-col gap-4">
  <Input label="Disabled" placeholder="Disabled input" isDisabled />
  <Input label="ReadOnly" value="Read only value" isReadOnly />
</div>`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-divider">
                <th className="text-left py-3 px-4 font-semibold">Prop</th>
                <th className="text-left py-3 px-4 font-semibold">Type</th>
                <th className="text-left py-3 px-4 font-semibold">Default</th>
                <th className="text-left py-3 px-4 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-divider">
                <td className="py-3 px-4 font-mono text-xs">variant</td>
                <td className="py-3 px-4 font-mono text-xs">
                  flat | bordered | faded | underlined
                </td>
                <td className="py-3 px-4 font-mono text-xs">flat</td>
                <td className="py-3 px-4">The visual style of the input</td>
              </tr>
              <tr className="border-b border-divider">
                <td className="py-3 px-4 font-mono text-xs">size</td>
                <td className="py-3 px-4 font-mono text-xs">sm | md | lg</td>
                <td className="py-3 px-4 font-mono text-xs">md</td>
                <td className="py-3 px-4">The size of the input</td>
              </tr>
              <tr className="border-b border-divider">
                <td className="py-3 px-4 font-mono text-xs">label</td>
                <td className="py-3 px-4 font-mono text-xs">string</td>
                <td className="py-3 px-4 font-mono text-xs">-</td>
                <td className="py-3 px-4">The label text</td>
              </tr>
              <tr className="border-b border-divider">
                <td className="py-3 px-4 font-mono text-xs">placeholder</td>
                <td className="py-3 px-4 font-mono text-xs">string</td>
                <td className="py-3 px-4 font-mono text-xs">-</td>
                <td className="py-3 px-4">The placeholder text</td>
              </tr>
              <tr className="border-b border-divider">
                <td className="py-3 px-4 font-mono text-xs">isRequired</td>
                <td className="py-3 px-4 font-mono text-xs">boolean</td>
                <td className="py-3 px-4 font-mono text-xs">false</td>
                <td className="py-3 px-4">Whether the input is required</td>
              </tr>
              <tr className="border-b border-divider">
                <td className="py-3 px-4 font-mono text-xs">isDisabled</td>
                <td className="py-3 px-4 font-mono text-xs">boolean</td>
                <td className="py-3 px-4 font-mono text-xs">false</td>
                <td className="py-3 px-4">Whether the input is disabled</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
