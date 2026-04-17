import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const timeFieldVariants = tv({
  base: 'time-field',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'time-field--sm',
      md: 'time-field--md',
      lg: 'time-field--lg',
    },
  },
})

export type TimeFieldVariants = VariantProps<typeof timeFieldVariants>
