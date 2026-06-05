import NextLink from 'next/link'
import { Icon } from '@iconify/react'

import { siteConfig } from '@/config/site'

const trustItems = [
  { label: '63 components', icon: 'gravity-ui:cubes-3' },
  { label: 'MIT license', icon: 'gravity-ui:scales' },
  { label: 'WCAG 2.1 AA', icon: 'gravity-ui:circle-check' },
  { label: 'RTL ready', icon: 'gravity-ui:text-alignment-left' },
]

export const Hero = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto max-w-5xl px-6 pb-20 pt-28 md:pt-36"
    >
      <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
        React UI library · v1 · Open source
      </p>

      <h1
        id="hero-heading"
        className="max-w-4xl text-balance text-5xl font-medium tracking-tight text-foreground md:text-6xl lg:text-7xl"
      >
        Interfaces that ship,
        <br className="hidden md:block" />
        <span className="text-muted-foreground">built on primitives that last.</span>
      </h1>

      <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
        FlexiUI is a modular React component library built on React Aria and Tailwind CSS v4.
        Install one component or all of them. Style with tokens, not overrides.
      </p>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <NextLink
          className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
          href="/docs/guide/introduction"
        >
          Get started
          <Icon className="h-4 w-4" icon="gravity-ui:arrow-right" />
        </NextLink>
        <a
          className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          href={siteConfig.links.github}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon className="h-4 w-4" icon="gravity-ui:logo-github" />
          GitHub
        </a>
      </div>

      <ul
        aria-label="Library highlights"
        className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-8 text-sm text-muted-foreground"
      >
        {trustItems.map((item) => (
          <li className="inline-flex items-center gap-2" key={item.label}>
            <Icon className="h-4 w-4 text-accent" icon={item.icon} />
            {item.label}
          </li>
        ))}
      </ul>
    </section>
  )
}
