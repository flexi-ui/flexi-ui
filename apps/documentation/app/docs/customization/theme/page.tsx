import { Metadata } from 'next'
import { CodeBlock } from '@/components/CodeBlock'

export const metadata: Metadata = {
  title: 'Theme - FlexiUI',
  description: 'Learn how to customize the FlexiUI theme.',
}

export default function ThemePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Theme Customization</h1>
        <p className="text-lg text-foreground-600">
          Customize the look and feel of FlexiUI components to match your brand.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Theme Configuration</h2>
        <p>
          FlexiUI uses Tailwind CSS for styling. You can customize the theme by extending your
          Tailwind configuration:
        </p>
        <CodeBlock
          code={`import { flexiui } from '@flexi-ui/theme'

export default {
  content: [
    // your content paths
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ...
        },
      },
    },
  },
  plugins: [
    flexiui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#0070f3',
              foreground: '#ffffff',
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: '#3291ff',
              foreground: '#000000',
            },
          },
        },
      },
    }),
  ],
}`}
          language="javascript"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Color Tokens</h2>
        <p>FlexiUI provides semantic color tokens that adapt to light and dark modes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <code className="text-sm">background</code> - Page background color
          </li>
          <li>
            <code className="text-sm">foreground</code> - Default text color
          </li>
          <li>
            <code className="text-sm">content1-4</code> - Card and content backgrounds
          </li>
          <li>
            <code className="text-sm">primary</code> - Primary brand color
          </li>
          <li>
            <code className="text-sm">secondary</code> - Secondary brand color
          </li>
          <li>
            <code className="text-sm">success</code> - Success state color
          </li>
          <li>
            <code className="text-sm">warning</code> - Warning state color
          </li>
          <li>
            <code className="text-sm">danger</code> - Error/danger state color
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">CSS Variables</h2>
        <p>
          All theme colors are available as CSS variables that you can use in your custom styles:
        </p>
        <CodeBlock
          code={`.my-element {
  background-color: hsl(var(--color-primary));
  color: hsl(var(--color-primary-foreground));
}`}
          language="css"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Dark Mode</h2>
        <p>FlexiUI supports dark mode out of the box. Use next-themes for easy theme switching:</p>
        <CodeBlock
          code={`import { ThemeProvider } from 'next-themes'
import { FlexiUIProvider } from '@flexi-ui/system'

export function Providers({ children }) {
  return (
    <FlexiUIProvider>
      <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </ThemeProvider>
    </FlexiUIProvider>
  )
}`}
          language="tsx"
        />
      </div>
    </div>
  )
}
