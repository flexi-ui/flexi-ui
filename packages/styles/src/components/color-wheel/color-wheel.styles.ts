import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const colorWheelVariants = tv({
  base: 'color-wheel',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'color-wheel--sm',
      md: 'color-wheel--md',
      lg: 'color-wheel--lg',
    },
  },
})

export type ColorWheelVariants = VariantProps<typeof colorWheelVariants>
