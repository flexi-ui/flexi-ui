import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Introduction - FlexiUI',
  description: 'Get started with FlexiUI, a modern React UI library.',
}

export default function IntroductionPage() {
  return (
    <div className="col-span-12 lg:col-span-10 xl:col-span-8 lg:px-8 mt-10">
      <div className="w-full prose prose-neutral dark:prose-invert max-w-none space-y-6">
        <div>
          <h1 className="text-4xl font-bold mb-4">Introduction</h1>
          <p className="text-lg text-foreground-600">
            Welcome to FlexiUI - a beautiful, fast, and modern React UI library.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">What is FlexiUI?</h2>
          <p>
            FlexiUI is a modern, open-source React UI library that provides a comprehensive set of
            accessible, customizable components with a powerful theming system built on Tailwind
            CSS.
          </p>
          <p>
            Whether you're building a simple landing page or a complex web application, FlexiUI
            provides all the tools you need to create beautiful, accessible, and performant user
            interfaces.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Themeable:</strong> Customize every component with our powerful theme system
              built on Tailwind CSS
            </li>
            <li>
              <strong>Accessible:</strong> Built on React Aria for world-class accessibility with
              keyboard navigation and screen reader support
            </li>
            <li>
              <strong>TypeScript:</strong> Fully typed with comprehensive IntelliSense support
            </li>
            <li>
              <strong>Fast & Lightweight:</strong> Optimized bundle size with tree-shaking support
            </li>
            <li>
              <strong>Responsive:</strong> Mobile-first design that works seamlessly across all
              devices
            </li>
            <li>
              <strong>Modular:</strong> Import only what you need for maximum flexibility
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Why FlexiUI?</h2>
          <p>FlexiUI stands out from other UI libraries by focusing on three core principles:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Developer Experience:</strong> Intuitive API, comprehensive documentation, and
              excellent TypeScript support
            </li>
            <li>
              <strong>Accessibility First:</strong> Every component is built with accessibility in
              mind from the ground up
            </li>
            <li>
              <strong>Performance:</strong> Optimized for speed with minimal bundle size and maximum
              flexibility
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Getting Started</h2>
          <p>
            Ready to start building? Check out our installation guide to get FlexiUI set up in your
            project.
          </p>
          <div className="flex gap-4">
            <a
              href="/docs/guide/installation"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Installation Guide
            </a>
            <a
              href="/docs/components/button"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-divider font-semibold hover:bg-default-100 transition-colors"
            >
              Browse Components
            </a>
          </div>
        </div>

        <div className="border-t border-divider pt-6 mt-12">
          <h2 className="text-2xl font-semibold mb-4">Community & Support</h2>
          <p className="mb-4">
            FlexiUI is open source and built by a community of developers. We welcome contributions,
            bug reports, and feature requests!
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a
                href="https://github.com/flexi-ui/flexi-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GitHub Repository
              </a>
            </li>
            <li>
              <a
                href="https://github.com/flexi-ui/flexi-ui/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Report Issues
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
