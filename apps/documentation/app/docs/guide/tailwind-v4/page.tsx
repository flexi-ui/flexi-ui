import { Metadata } from 'next'
import { CodeBlock } from '@/components/CodeBlock'

export const metadata: Metadata = {
  title: 'Tailwind CSS v4 - FlexiUI',
  description: 'Migrate to Tailwind CSS v4 with FlexiUI.',
}

export default function TailwindV4Page() {
  return (
    <div className="space-y-8">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/20 text-success text-sm font-medium mb-4">
          New
        </div>
        <h1 className="text-4xl font-bold mb-4">Tailwind CSS v4</h1>
        <p className="text-lg text-foreground-600">
          FlexiUI v2 supports Tailwind CSS v4 with improved performance and new features.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">What's New in Tailwind v4</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Lightning-fast compilation powered by Rust</li>
          <li>CSS-first configuration using @import</li>
          <li>Improved @plugin system</li>
          <li>Better TypeScript support</li>
          <li>Simplified installation</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <p>Install Tailwind CSS v4 and FlexiUI:</p>
        <CodeBlock
          code={`npm install tailwindcss@next @tailwindcss/postcss@next @flexi-ui/theme`}
          language="bash"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Configuration</h2>
        <p>Create a CSS file to configure Tailwind:</p>

        <h3 className="text-lg font-semibold mt-4">app/globals.css</h3>
        <CodeBlock
          code={`@import 'tailwindcss';

@plugin '@flexi-ui/theme';

@source '../node_modules/@flexi-ui/theme/dist/**/*.{js,ts,jsx,tsx}';

/* Your custom styles */`}
          language="css"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">PostCSS Configuration</h2>
        <p>Configure PostCSS to use Tailwind v4:</p>

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
        <h2 className="text-2xl font-semibold">Theme Customization</h2>
        <p>Customize your theme using CSS variables:</p>
        <CodeBlock
          code={`@import 'tailwindcss';

@plugin '@flexi-ui/theme';

@theme {
  --color-primary: oklch(0.5 0.2 250);
  --color-secondary: oklch(0.6 0.15 300);

  /* Add your custom colors */
}

@custom-variant dark (&:where(.dark, .dark *));`}
          language="css"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Migration Tips</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Move your theme configuration from JS to CSS</li>
          <li>Update custom variants to use @custom-variant</li>
          <li>Replace tailwind.config.js content paths with @source</li>
          <li>Update plugins to the new @plugin syntax</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Learn More</h2>
        <p>
          For more information about Tailwind CSS v4, visit the{' '}
          <a
            href="https://tailwindcss.com/docs/v4-beta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            official Tailwind CSS v4 documentation
          </a>
          .
        </p>
      </div>
    </div>
  )
}
