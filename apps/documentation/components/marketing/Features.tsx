import { Icon } from '@iconify/react'

const pillars = [
  {
    icon: 'gravity-ui:person-magnifier',
    title: 'Accessible by default',
    body: 'Built on React Aria Components — the same primitives behind Adobe Spectrum. Full keyboard support, screen-reader semantics, focus management, and RTL layout direction come for free. Every component is audited against WCAG 2.1 AA.',
  },
  {
    icon: 'gravity-ui:cubes-3',
    title: 'Modular to the package',
    body: "Every component is a separate npm package, so you install only what you use. No 200 KB barrel files, no JSX you'll never render. Tree-shake by importing from `@flexi-ui/button` instead of a monolithic root.",
  },
  {
    icon: 'gravity-ui:palette',
    title: 'Themed with tokens, not overrides',
    body: 'BEM-structured CSS layered on Tailwind v4 design tokens. Theme the entire system from a handful of CSS variables — no shadowing the component internals, no `!important` chains, no monkey-patched class names.',
  },
]

export const Features = () => {
  return (
    <section
      aria-labelledby="why-heading"
      className="mx-auto max-w-5xl border-t border-border px-6 py-20 md:py-28"
    >
      <div className="mb-12 max-w-2xl">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Why FlexiUI
        </p>
        <h2
          className="text-3xl font-medium tracking-tight text-foreground md:text-4xl"
          id="why-heading"
        >
          Built for the long run, not the demo reel.
        </h2>
      </div>

      <div className="divide-y divide-border">
        {pillars.map((pillar) => (
          <article
            className="grid gap-6 py-10 sm:grid-cols-[auto_1fr] sm:gap-12"
            key={pillar.title}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface/40">
              <Icon className="h-5 w-5 text-accent" icon={pillar.icon} />
            </div>
            <div>
              <h3 className="text-xl font-medium tracking-tight text-foreground md:text-2xl">
                {pillar.title}
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {pillar.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
