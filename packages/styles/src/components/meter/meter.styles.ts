import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const meterVariants = tv({
  base: 'meter',
  defaultVariants: {
    size: 'md',
    color: 'accent',
  },
  variants: {
    size: {
      sm: 'meter--sm',
      md: 'meter--md',
      lg: 'meter--lg',
    },
    color: {
      accent: '',
      success: 'meter--success',
      warning: 'meter--warning',
      danger: 'meter--danger',
    },
  },
})

export type MeterVariants = VariantProps<typeof meterVariants>
