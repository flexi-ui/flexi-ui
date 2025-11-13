import { Metadata } from 'next'
import { CodeBlock } from '@/components/CodeBlock'

export const metadata: Metadata = {
  title: 'Remix - FlexiUI',
  description: 'Use FlexiUI with Remix.',
}

export default function RemixPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Remix Integration</h1>
        <p className="text-lg text-foreground-600">
          Integrate FlexiUI with your Remix application.
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
        <h2 className="text-2xl font-semibold">CSS Setup</h2>

        <h3 className="text-lg font-semibold mt-4">app/tailwind.css</h3>
        <CodeBlock
          code={`@import 'tailwindcss';

@plugin '@flexi-ui/theme';

@source '../node_modules/@flexi-ui/theme/dist/**/*.{js,ts,jsx,tsx}';`}
          language="css"
        />

        <h3 className="text-lg font-semibold mt-4">postcss.config.js</h3>
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
        <h2 className="text-2xl font-semibold">Provider Setup</h2>

        <h3 className="text-lg font-semibold mt-4">app/root.tsx</h3>
        <CodeBlock
          code={`import { FlexiUIProvider } from '@flexi-ui/system'
import { useNavigate } from '@remix-run/react'
import stylesheet from '~/tailwind.css?url'

export const links = () => [
  { rel: 'stylesheet', href: stylesheet },
]

export default function App() {
  const navigate = useNavigate()

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <FlexiUIProvider navigate={navigate}>
          <Outlet />
        </FlexiUIProvider>
        <Scripts />
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

export default function Index() {
  return (
    <div>
      <h1>Welcome to FlexiUI with Remix</h1>
      <Button color="primary">Get Started</Button>
    </div>
  )
}`}
          language="tsx"
        />
      </div>
    </div>
  )
}
