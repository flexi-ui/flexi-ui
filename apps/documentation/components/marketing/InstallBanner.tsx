import NextLink from 'next/link'
import { ArrowRight } from 'lucide-react'

export const InstallBanner = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-8">
      <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-surface p-8 md:flex-row md:items-center md:p-12">
        <div className="max-w-xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Start shipping in minutes.
          </h2>
          <p className="text-muted-foreground">
            Zero-config install. Bring your own Tailwind setup and compose from ~60 components.
          </p>
        </div>
        <NextLink
          href="/docs/guide/installation"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Installation guide
          <ArrowRight className="h-4 w-4" />
        </NextLink>
      </div>
    </section>
  )
}
