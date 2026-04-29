import NextLink from 'next/link'
import { Icon } from '@iconify/react'
import { siteConfig } from '@/config/site'

export const Hero = () => {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center px-6 pb-16 pt-24 text-center md:pt-32">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
        Open source · MIT
      </div>

      <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl">
        The React UI library for interfaces that ship.
      </h1>

      <p className="mt-6 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl">
        FlexiUI is a modular, accessible component library built on React Aria and Tailwind CSS v4.
        Install only what you need.
      </p>

      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
        <NextLink
          href="/docs/guide/introduction"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Get started
          <Icon className="h-4 w-4" icon="gravity-ui:arrow-right" />
        </NextLink>
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          <Icon className="h-4 w-4" icon="gravity-ui:logo-github" />
          GitHub
        </a>
      </div>

      <div className="mt-16 flex w-full max-w-xl items-center justify-center">
        <code className="w-full rounded-lg border border-border bg-muted/40 px-4 py-3 text-center font-mono text-sm text-muted-foreground">
          <span className="text-accent">$</span> pnpm add @flexi-ui/button @flexi-ui/styles
        </code>
      </div>
    </section>
  )
}
