import { Metadata } from 'next'
import { CodeBlock } from '@/components/CodeBlock'

export const metadata: Metadata = {
  title: 'FlexiUIProvider - FlexiUI',
  description: 'API reference for FlexiUIProvider.',
}

export default function FlexiUIProviderPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">FlexiUIProvider</h1>
        <p className="text-lg text-foreground-600">
          The FlexiUIProvider is a context provider that enables FlexiUI components to work
          properly.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Import</h2>
        <CodeBlock code={`import { FlexiUIProvider } from '@flexi-ui/system'`} language="tsx" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <CodeBlock
          code={`import { FlexiUIProvider } from '@flexi-ui/system'

export default function App({ children }) {
  return (
    <FlexiUIProvider>
      {children}
    </FlexiUIProvider>
  )
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
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
                <td className="py-3 px-4 font-mono text-xs">navigate</td>
                <td className="py-3 px-4 font-mono text-xs">(path: string) =&gt; void</td>
                <td className="py-3 px-4 font-mono text-xs">-</td>
                <td className="py-3 px-4">Navigation function for handling client-side routing</td>
              </tr>
              <tr className="border-b border-divider">
                <td className="py-3 px-4 font-mono text-xs">locale</td>
                <td className="py-3 px-4 font-mono text-xs">string</td>
                <td className="py-3 px-4 font-mono text-xs">'en-US'</td>
                <td className="py-3 px-4">The locale for date and number formatting</td>
              </tr>
              <tr className="border-b border-divider">
                <td className="py-3 px-4 font-mono text-xs">disableRipple</td>
                <td className="py-3 px-4 font-mono text-xs">boolean</td>
                <td className="py-3 px-4 font-mono text-xs">false</td>
                <td className="py-3 px-4">Whether to disable ripple effects globally</td>
              </tr>
              <tr className="border-b border-divider">
                <td className="py-3 px-4 font-mono text-xs">disableAnimation</td>
                <td className="py-3 px-4 font-mono text-xs">boolean</td>
                <td className="py-3 px-4 font-mono text-xs">false</td>
                <td className="py-3 px-4">Whether to disable animations globally</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">With Router</h2>
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
        <h2 className="text-2xl font-semibold">Disable Effects Globally</h2>
        <CodeBlock
          code={`<FlexiUIProvider
  disableRipple={true}
  disableAnimation={true}
>
  {children}
</FlexiUIProvider>`}
          language="tsx"
        />
      </div>
    </div>
  )
}
