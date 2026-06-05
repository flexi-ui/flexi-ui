const faqs = [
  {
    q: 'Why React Aria instead of Radix UI or Headless UI?',
    a: 'React Aria Components ship with deeper accessibility semantics — focus restoration, ARIA patterns, and i18n / RTL handling are built in rather than bolted on. FlexiUI keeps the Radix-style compound API on top, so usage feels familiar.',
  },
  {
    q: 'Does FlexiUI require Tailwind CSS?',
    a: 'Yes — styling is built on Tailwind v4 design tokens through tailwind-variants. The token layer is the integration point: override CSS variables and every component re-themes together. You do not need a Tailwind plugin.',
  },
  {
    q: 'Can I install only one component?',
    a: 'That is the default. Each component is a separate npm package (`@flexi-ui/button`, `@flexi-ui/dropdown`, …). Install one or sixty — there is no monolithic root export.',
  },
  {
    q: 'Does it work with Next.js, Remix, and Vite?',
    a: 'Yes. Components are marked `"use client"` where required by React Aria, so they render correctly inside the Next.js app router. Remix and Vite-based SPAs work without any framework adapter.',
  },
  {
    q: 'How do I theme it for dark mode?',
    a: 'The default theme defines light and dark token sets. Toggle the `data-theme="dark"` attribute on the root element (or use a `prefers-color-scheme` media query) and the CSS variables switch.',
  },
  {
    q: 'Is FlexiUI production-ready?',
    a: 'FlexiUI follows semantic versioning per component package; the documentation app is at v1. The component surface is stable, but as with any 1.x library, expect occasional minor releases as the API surface settles.',
  },
] as const

export const FAQ = () => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <section
      aria-labelledby="faq-heading"
      className="mx-auto max-w-4xl border-t border-border px-6 py-20 md:py-28"
    >
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        type="application/ld+json"
      />

      <div className="mb-10">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Frequently asked
        </p>
        <h2
          className="text-3xl font-medium tracking-tight text-foreground md:text-4xl"
          id="faq-heading"
        >
          Questions, answered.
        </h2>
      </div>

      <dl className="divide-y divide-border">
        {faqs.map((item) => (
          <details className="group py-5" key={item.q}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-medium text-foreground transition-colors hover:text-accent">
              <span>{item.q}</span>
              <span
                aria-hidden="true"
                className="text-muted-foreground transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <dd className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {item.a}
            </dd>
          </details>
        ))}
      </dl>
    </section>
  )
}
