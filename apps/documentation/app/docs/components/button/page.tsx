import { Metadata } from 'next'
import { ComponentDemo } from '@/components/ComponentDemo'
import { CodeBlock } from '@/components/CodeBlock'

export const metadata: Metadata = {
  title: 'Button - FlexiUI',
  description: 'A versatile button component with multiple variants and sizes.',
}

export default function ButtonPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Button</h1>
        <p className="text-lg text-foreground-600">
          Buttons allow users to perform actions and make choices with a single tap.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Import</h2>
        <CodeBlock code={`import { Button } from '@flexi-ui/button'`} language="tsx" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <ComponentDemo
          code={`<Button color="primary">
  Click me
</Button>`}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Variants</h2>
        <p>Buttons come in different variants to suit different use cases:</p>
        <ComponentDemo
          code={`<div className="flex flex-wrap gap-4">
  <Button variant="solid" color="primary">Solid</Button>
  <Button variant="bordered" color="primary">Bordered</Button>
  <Button variant="light" color="primary">Light</Button>
  <Button variant="flat" color="primary">Flat</Button>
  <Button variant="ghost" color="primary">Ghost</Button>
</div>`}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Colors</h2>
        <p>Choose from various color schemes:</p>
        <ComponentDemo
          code={`<div className="flex flex-wrap gap-4">
  <Button color="default">Default</Button>
  <Button color="primary">Primary</Button>
  <Button color="secondary">Secondary</Button>
  <Button color="success">Success</Button>
  <Button color="warning">Warning</Button>
  <Button color="danger">Danger</Button>
</div>`}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Sizes</h2>
        <ComponentDemo
          code={`<div className="flex flex-wrap items-center gap-4">
  <Button size="sm" color="primary">Small</Button>
  <Button size="md" color="primary">Medium</Button>
  <Button size="lg" color="primary">Large</Button>
</div>`}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Disabled</h2>
        <ComponentDemo
          code={`<div className="flex flex-wrap gap-4">
  <Button color="primary" isDisabled>Disabled</Button>
  <Button color="primary" variant="bordered" isDisabled>Disabled</Button>
</div>`}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Loading</h2>
        <ComponentDemo
          code={`<div className="flex flex-wrap gap-4">
  <Button color="primary" isLoading>Loading</Button>
  <Button color="primary" variant="bordered" isLoading>Loading</Button>
</div>`}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Icon Button</h2>
        <ComponentDemo
          code={`import { Heart } from 'lucide-react'

<Button isIconOnly color="primary" aria-label="Like">
  <Heart className="h-4 w-4" />
</Button>`}
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
                <td className="py-3 px-4 font-mono text-xs">color</td>
                <td className="py-3 px-4 font-mono text-xs">
                  default | primary | secondary | success | warning | danger
                </td>
                <td className="py-3 px-4 font-mono text-xs">default</td>
                <td className="py-3 px-4">The color of the button</td>
              </tr>
              <tr className="border-b border-divider">
                <td className="py-3 px-4 font-mono text-xs">variant</td>
                <td className="py-3 px-4 font-mono text-xs">
                  solid | bordered | light | flat | ghost
                </td>
                <td className="py-3 px-4 font-mono text-xs">solid</td>
                <td className="py-3 px-4">The variant of the button</td>
              </tr>
              <tr className="border-b border-divider">
                <td className="py-3 px-4 font-mono text-xs">size</td>
                <td className="py-3 px-4 font-mono text-xs">sm | md | lg</td>
                <td className="py-3 px-4 font-mono text-xs">md</td>
                <td className="py-3 px-4">The size of the button</td>
              </tr>
              <tr className="border-b border-divider">
                <td className="py-3 px-4 font-mono text-xs">isDisabled</td>
                <td className="py-3 px-4 font-mono text-xs">boolean</td>
                <td className="py-3 px-4 font-mono text-xs">false</td>
                <td className="py-3 px-4">Whether the button is disabled</td>
              </tr>
              <tr className="border-b border-divider">
                <td className="py-3 px-4 font-mono text-xs">isLoading</td>
                <td className="py-3 px-4 font-mono text-xs">boolean</td>
                <td className="py-3 px-4 font-mono text-xs">false</td>
                <td className="py-3 px-4">Whether the button is in a loading state</td>
              </tr>
              <tr className="border-b border-divider">
                <td className="py-3 px-4 font-mono text-xs">isIconOnly</td>
                <td className="py-3 px-4 font-mono text-xs">boolean</td>
                <td className="py-3 px-4 font-mono text-xs">false</td>
                <td className="py-3 px-4">Whether the button should only contain an icon</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
