import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const selectVariants = tv({
  base: 'select',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'select--sm',
      md: 'select--md',
      lg: 'select--lg',
    },
  },
})

export type SelectVariants = VariantProps<typeof selectVariants>
