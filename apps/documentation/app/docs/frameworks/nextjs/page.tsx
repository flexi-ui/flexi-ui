import { Metadata } from 'next'
import { CodeBlock } from '@/components/CodeBlock'

export const metadata: Metadata = {
  title: 'Next.js - FlexiUI',
  description: 'Use FlexiUI with Next.js.',
}

export default function NextJSPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Next.js Integration</h1>
        <p className="text-lg text-foreground-600">
          FlexiUI works seamlessly with Next.js, supporting both App Router and Pages Router.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock
          code={`npm install @flexi-ui/react @flexi-ui/theme framer-motion
npm install -D tailwindcss @tailwindcss/postcss`}
          language="bash"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Tailwind CSS Setup</h2>

        <h3 className="text-lg font-semibold mt-4">app/globals.css</h3>
        <CodeBlock
          code={`@import 'tailwindcss';

@plugin '@flexi-ui/theme';

@custom-variant dark (&:where(.dark, .dark *));

@source '../node_modules/@flexi-ui/theme/dist/**/*.{js,ts,jsx,tsx}';`}
          language="css"
        />

        <h3 className="text-lg font-semibold mt-4">postcss.config.mjs</h3>
        <CodeBlock
          code={`export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}`}
          language="javascript"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Provider Setup (App Router)</h2>

        <h3 className="text-lg font-semibold mt-4">app/providers.tsx</h3>
        <CodeBlock
          code={`'use client'

import { FlexiUIProvider } from '@flexi-ui/system'
import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/navigation'

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <FlexiUIProvider navigate={router.push}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </ThemeProvider>
    </FlexiUIProvider>
  )
}`}
          language="tsx"
        />

        <h3 className="text-lg font-semibold mt-4">app/layout.tsx</h3>
        <CodeBlock
          code={`import { Providers } from './providers'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Using Components</h2>
        <CodeBlock
          code={`import { Button } from '@flexi-ui/button'

export default function Page() {
  return (
    <div>
      <h1>Welcome to FlexiUI with Next.js</h1>
      <Button color="primary">Get Started</Button>
    </div>
  )
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Server Components</h2>
        <p>
          FlexiUI components are client components (they use hooks). To use them in server
          components, import them in client components marked with 'use client'.
        </p>
      </div>
    </div>
  )
}
