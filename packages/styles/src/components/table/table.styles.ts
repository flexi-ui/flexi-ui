import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const tableVariants = tv({
  base: 'table',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'table--sm',
      md: 'table--md',
      lg: 'table--lg',
    },
  },
})

export type TableVariants = VariantProps<typeof tableVariants>
