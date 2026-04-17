import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const gridListVariants = tv({
  base: 'grid-list',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'grid-list--sm',
      md: 'grid-list--md',
      lg: 'grid-list--lg',
    },
  },
})

export type GridListVariants = VariantProps<typeof gridListVariants>
