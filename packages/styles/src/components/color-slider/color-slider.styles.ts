import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const colorSliderVariants = tv({
  base: 'color-slider',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'color-slider--sm',
      md: 'color-slider--md',
      lg: 'color-slider--lg',
    },
  },
})

export type ColorSliderVariants = VariantProps<typeof colorSliderVariants>
