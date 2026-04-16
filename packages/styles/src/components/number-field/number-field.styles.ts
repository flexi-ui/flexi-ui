import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const numberFieldVariants = tv({
  base: 'number-field',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'number-field--sm',
      md: 'number-field--md',
      lg: 'number-field--lg',
    },
  },
})

export type NumberFieldVariants = VariantProps<typeof numberFieldVariants>
