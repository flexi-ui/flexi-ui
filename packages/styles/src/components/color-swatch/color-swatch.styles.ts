import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const colorSwatchVariants = tv({
  base: 'color-swatch',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'color-swatch--sm',
      md: 'color-swatch--md',
      lg: 'color-swatch--lg',
    },
  },
})

export type ColorSwatchVariants = VariantProps<typeof colorSwatchVariants>
