import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const dialogVariants = tv({
  base: 'dialog',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'dialog--sm',
      md: 'dialog--md',
      lg: 'dialog--lg',
    },
  },
})

export type DialogVariants = VariantProps<typeof dialogVariants>
