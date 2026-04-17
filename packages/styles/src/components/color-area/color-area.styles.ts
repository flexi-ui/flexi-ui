import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const colorAreaVariants = tv({
  base: 'color-area',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'color-area--sm',
      md: 'color-area--md',
      lg: 'color-area--lg',
    },
  },
})

export type ColorAreaVariants = VariantProps<typeof colorAreaVariants>
