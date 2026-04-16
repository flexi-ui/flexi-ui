import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const sliderVariants = tv({
  base: 'slider',
  defaultVariants: {
    size: 'md',
    color: 'accent',
  },
  variants: {
    size: {
      sm: 'slider--sm',
      md: 'slider--md',
      lg: 'slider--lg',
    },
    color: {
      accent: '',
      success: 'slider--success',
      warning: 'slider--warning',
      danger: 'slider--danger',
    },
  },
})

export type SliderVariants = VariantProps<typeof sliderVariants>
