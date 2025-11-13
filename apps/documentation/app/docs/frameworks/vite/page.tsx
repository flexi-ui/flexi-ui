import { Metadata } from 'next'
import { CodeBlock } from '@/components/CodeBlock'

export const metadata: Metadata = {
  title: 'Vite - FlexiUI',
  description: 'Use FlexiUI with Vite.',
}

export default function VitePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Vite Integration</h1>
        <p className="text-lg text-foreground-600">
          Set up FlexiUI in your Vite + React application.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock
          code={`npm install @flexi-ui/react @flexi-ui/theme framer-motion
npm install -D tailwindcss @tailwindcss/vite`}
          language="bash"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Vite Configuration</h2>

        <h3 className="text-lg font-semibold mt-4">vite.config.ts</h3>
        <CodeBlock
          code={`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})`}
          language="typescript"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">CSS Setup</h2>

        <h3 className="text-lg font-semibold mt-4">src/index.css</h3>
        <CodeBlock
          code={`@import 'tailwindcss';

@plugin '@flexi-ui/theme';

@source '../node_modules/@flexi-ui/theme/dist/**/*.{js,ts,jsx,tsx}';`}
          language="css"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Provider Setup</h2>

        <h3 className="text-lg font-semibold mt-4">src/main.tsx</h3>
        <CodeBlock
          code={`import React from 'react'
import ReactDOM from 'react-dom/client'
import { FlexiUIProvider } from '@flexi-ui/system'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FlexiUIProvider>
      <App />
    </FlexiUIProvider>
  </React.StrictMode>,
)`}
          language="tsx"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Using Components</h2>
        <CodeBlock
          code={`import { Button } from '@flexi-ui/button'

function App() {
  return (
    <div>
      <h1>Welcome to FlexiUI with Vite</h1>
      <Button color="primary">Get Started</Button>
    </div>
  )
}

export default App`}
          language="tsx"
        />
      </div>
    </div>
  )
}
