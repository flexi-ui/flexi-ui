import { Metadata } from 'next'
import { CodeBlock } from '@/components/CodeBlock'

export const metadata: Metadata = {
  title: 'Installation - FlexiUI',
  description: 'Learn how to install FlexiUI in your project.',
}

export default function InstallationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-4">Installation</h1>
        <p className="text-lg text-foreground-600">
          Get started with FlexiUI by installing it in your React project.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Prerequisites</h2>
        <p>Before you begin, make sure you have the following installed:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Node.js 18.x or higher</li>
          <li>React 18 or React 19</li>
          <li>Tailwind CSS 4.x</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Install FlexiUI</h2>
        <p>Install FlexiUI and its dependencies using your preferred package manager:</p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">npm</h3>
            <CodeBlock code="npm install @flexi-ui/react @flexi-ui/theme" language="bash" />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">pnpm</h3>
            <CodeBlock code="pnpm add @flexi-ui/react @flexi-ui/theme" language="bash" />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">yarn</h3>
            <CodeBlock code="yarn add @flexi-ui/react @flexi-ui/theme" language="bash" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Tailwind CSS Setup</h2>
        <p>
          FlexiUI is built on top of Tailwind CSS. Add the FlexiUI plugin to your Tailwind
          configuration:
        </p>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">tailwind.config.js</h3>
          <CodeBlock
            code={`import { flexiui } from '@flexi-ui/theme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@flexi-ui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [flexiui()],
}`}
            language="javascript"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Provider Setup</h2>
        <p>Wrap your application with the FlexiUIProvider:</p>

        <CodeBlock
          code={`import { FlexiUIProvider } from '@flexi-ui/system'

export default function App({ Component, pageProps }) {
  return (
    <FlexiUIProvider>
      <Component {...pageProps} />
    </FlexiUIProvider>
  )
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Using Components</h2>
        <p>Now you can import and use FlexiUI components in your application:</p>

        <CodeBlock
          code={`import { Button } from '@flexi-ui/button'

export default function Home() {
  return (
    <div>
      <Button color="primary">
        Click me
      </Button>
    </div>
  )
}`}
          language="tsx"
        />
      </div>

      <div className="border-t border-divider pt-6 mt-12">
        <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="/docs/guide/routing" className="text-primary hover:underline">
              Learn about routing integration
            </a>
          </li>
          <li>
            <a href="/docs/customization/theme" className="text-primary hover:underline">
              Customize your theme
            </a>
          </li>
          <li>
            <a href="/docs/components/button" className="text-primary hover:underline">
              Explore components
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
