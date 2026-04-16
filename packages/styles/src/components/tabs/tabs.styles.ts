import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const tabsVariants = tv({
  base: 'tabs',
  defaultVariants: {
    variant: 'underlined',
    size: 'md',
  },
  variants: {
    variant: {
      underlined: 'tabs--underlined',
      solid: 'tabs--solid',
      bordered: 'tabs--bordered',
    },
    size: {
      sm: 'tabs--sm',
      md: 'tabs--md',
      lg: 'tabs--lg',
    },
  },
})

export type TabsVariants = VariantProps<typeof tabsVariants>
