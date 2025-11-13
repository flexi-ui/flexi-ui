import { Metadata } from 'next'
import { CodeBlock } from '@/components/CodeBlock'

export const metadata: Metadata = {
  title: 'Dark Mode - FlexiUI',
  description: 'Implement dark mode in your application.',
}

export default function DarkModePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Dark Mode</h1>
        <p className="text-lg text-foreground-600">
          Add dark mode support to your FlexiUI application.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Setup with next-themes</h2>
        <CodeBlock code={`npm install next-themes`} language="bash" />

        <CodeBlock
          code={`'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  )
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Theme Switcher</h2>
        <CodeBlock
          code={`'use client'

import { useTheme } from 'next-themes'
import { Button } from '@flexi-ui/button'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      Toggle Theme
    </Button>
  )
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Dark Mode Colors</h2>
        <CodeBlock
          code={`@theme dark {
  --color-background: oklch(0.15 0 0);
  --color-foreground: oklch(0.95 0 0);
  --color-primary: oklch(0.55 0.25 260);
}`}
          language="css"
        />
      </div>
    </div>
  )
}
