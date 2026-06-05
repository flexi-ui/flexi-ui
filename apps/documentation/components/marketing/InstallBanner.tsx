import NextLink from 'next/link'
import { Icon } from '@iconify/react'

export const InstallBanner = () => {
  return (
    <section
      aria-labelledby="cta-heading"
      className="mx-auto max-w-4xl border-t border-border px-6 py-20 md:py-28"
    >
      <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-lg">
          <h2
            className="text-3xl font-medium tracking-tight text-foreground md:text-4xl"
            id="cta-heading"
          >
            Start in 60 seconds.
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            One CSS import, no Tailwind plugin. Install the components you need.
          </p>
        </div>

        <NextLink
          className="inline-flex h-11 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
          href="/docs/guide/installation"
        >
          Read the installation guide
          <Icon aria-hidden="true" className="h-4 w-4" icon="gravity-ui:arrow-right" />
        </NextLink>
      </div>

      <pre className="mt-10 overflow-x-auto rounded-lg border border-border bg-surface/40 p-5 font-mono text-sm text-muted-foreground">
        <code>
          <span className="text-accent">$</span> pnpm add @flexi-ui/button @flexi-ui/styles
        </code>
      </pre>
    </section>
  )
}
