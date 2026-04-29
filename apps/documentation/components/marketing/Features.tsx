import { Icon } from '@iconify/react'

const features = [
  {
    icon: 'gravity-ui:cubes-3',
    title: 'Modular by design',
    description:
      'Every component is an independent package. Install only the pieces your app actually uses.',
  },
  {
    icon: 'gravity-ui:person-magnifier',
    title: 'Accessible primitives',
    description:
      'Built on React Aria Components with full keyboard, screen-reader, and RTL support out of the box.',
  },
  {
    icon: 'gravity-ui:palette',
    title: 'Themeable tokens',
    description:
      'BEM-structured CSS layered on Tailwind v4 tokens. Theme the whole system with a few variables.',
  },
  {
    icon: 'gravity-ui:bolt',
    title: 'Modern stack',
    description:
      'React 19, TypeScript 5.7, Tailwind v4, and tailwind-variants. No legacy baggage.',
  },
]

export const Features = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Built for the long run.
        </h2>
        <p className="mt-3 text-muted-foreground">
          Small surface area, sharp primitives, and predictable styling.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-lg border border-border bg-surface/50 p-5 transition-colors hover:border-foreground/20"
          >
            <Icon className="h-5 w-5 text-accent" icon={feature.icon} />
            <h3 className="mt-4 text-base font-semibold text-foreground">{feature.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
