import { Metadata } from 'next'
import { CodeBlock } from '@/components/CodeBlock'

export const metadata: Metadata = {
  title: 'Astro - FlexiUI',
  description: 'Use FlexiUI with Astro.',
}

export default function AstroPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Astro Integration</h1>
        <p className="text-lg text-foreground-600">
          Use FlexiUI components in your Astro project with React integration.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock
          code={`npm install @flexi-ui/react @flexi-ui/theme framer-motion
npm install -D tailwindcss @tailwindcss/vite
npx astro add react`}
          language="bash"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Astro Configuration</h2>

        <h3 className="text-lg font-semibold mt-4">astro.config.mjs</h3>
        <CodeBlock
          code={`import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
})`}
          language="javascript"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">CSS Setup</h2>

        <h3 className="text-lg font-semibold mt-4">src/styles/global.css</h3>
        <CodeBlock
          code={`@import 'tailwindcss';

@plugin '@flexi-ui/theme';

@source '../../node_modules/@flexi-ui/theme/dist/**/*.{js,ts,jsx,tsx}';`}
          language="css"
        />

        <h3 className="text-lg font-semibold mt-4">src/layouts/Layout.astro</h3>
        <CodeBlock
          code={`---
import '../styles/global.css'
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>FlexiUI with Astro</title>
  </head>
  <body>
    <slot />
  </body>
</html>`}
          language="astro"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Provider Component</h2>

        <h3 className="text-lg font-semibold mt-4">src/components/Providers.tsx</h3>
        <CodeBlock
          code={`import { FlexiUIProvider } from '@flexi-ui/system'

export default function Providers({ children }: { children: React.ReactNode }) {
  return <FlexiUIProvider>{children}</FlexiUIProvider>
}`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Using Components</h2>

        <h3 className="text-lg font-semibold mt-4">src/components/MyButton.tsx</h3>
        <CodeBlock
          code={`import { Button } from '@flexi-ui/button'

export default function MyButton() {
  return <Button color="primary">Click me</Button>
}`}
          language="tsx"
        />

        <h3 className="text-lg font-semibold mt-4">src/pages/index.astro</h3>
        <CodeBlock
          code={`---
import Layout from '../layouts/Layout.astro'
import Providers from '../components/Providers'
import MyButton from '../components/MyButton'
---

<Layout>
  <Providers client:load>
    <h1>Welcome to FlexiUI with Astro</h1>
    <MyButton client:load />
  </Providers>
</Layout>`}
          language="astro"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Important Notes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Use <code className="text-sm">client:load</code> directive for interactive components
          </li>
          <li>Wrap FlexiUI components with the Providers component</li>
          <li>Import global CSS in your layout</li>
        </ul>
      </div>
    </div>
  )
}
