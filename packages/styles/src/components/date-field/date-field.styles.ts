import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const dateFieldVariants = tv({
  base: 'date-field',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'date-field--sm',
      md: 'date-field--md',
      lg: 'date-field--lg',
    },
  },
})

export type DateFieldVariants = VariantProps<typeof dateFieldVariants>
