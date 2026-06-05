import NextLink from 'next/link'

// Sourced from apps/documentation/content/docs/components/meta.json
const components = [
  'accordion',
  'alert',
  'autocomplete',
  'avatar',
  'badge',
  'breadcrumbs',
  'button',
  'calendar',
  'card',
  'checkbox',
  'color-area',
  'color-field',
  'color-picker',
  'color-slider',
  'color-swatch',
  'color-swatch-picker',
  'color-wheel',
  'combo-box',
  'date-field',
  'date-picker',
  'date-range-picker',
  'dialog',
  'disclosure',
  'divider',
  'drop-indicator',
  'drop-zone',
  'dropdown',
  'file-trigger',
  'form',
  'grid-list',
  'group',
  'heading',
  'input',
  'keyboard',
  'link',
  'list-box',
  'menu',
  'meter',
  'modal',
  'number-field',
  'popover',
  'progress',
  'radio',
  'range-calendar',
  'ripple',
  'search-field',
  'select',
  'skeleton',
  'slider',
  'spinner',
  'switch',
  'table',
  'tabs',
  'tag-group',
  'text',
  'textarea',
  'time-field',
  'toast',
  'toggle-button',
  'toolbar',
  'tooltip',
  'tree',
  'visually-hidden',
] as const

const formatName = (slug: string) =>
  slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

export const ComponentIndex = () => {
  return (
    <section
      aria-labelledby="components-heading"
      className="mx-auto max-w-6xl border-t border-border px-6 py-20 md:py-28"
    >
      <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {components.length} components
          </p>
          <h2
            className="text-3xl font-medium tracking-tight text-foreground md:text-4xl"
            id="components-heading"
          >
            Browse the library.
          </h2>
        </div>
        <p className="max-w-md text-sm text-muted-foreground">
          From inputs and dialogs to color pickers and trees — installed individually, themed
          together.
        </p>
      </div>

      <ul className="grid grid-cols-2 gap-x-6 sm:grid-cols-3 lg:grid-cols-4">
        {components.map((slug) => (
          <li className="border-b border-border last:border-b-0" key={slug}>
            <NextLink
              className="group flex items-center justify-between py-3 text-sm text-foreground/90 transition-colors hover:text-foreground"
              href={`/docs/components/${slug}`}
            >
              <span>{formatName(slug)}</span>
              <span
                aria-hidden="true"
                className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
              >
                →
              </span>
            </NextLink>
          </li>
        ))}
      </ul>
    </section>
  )
}
