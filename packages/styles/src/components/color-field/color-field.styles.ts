import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const colorFieldVariants = tv({
  base: 'color-field',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'color-field--sm',
      md: 'color-field--md',
      lg: 'color-field--lg',
    },
  },
})

export type ColorFieldVariants = VariantProps<typeof colorFieldVariants>
