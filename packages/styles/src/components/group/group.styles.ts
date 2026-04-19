import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const groupVariants = tv({
  base: 'group',
  defaultVariants: {
    orientation: 'horizontal',
  },
  variants: {
    orientation: {
      horizontal: 'group--horizontal',
      vertical: 'group--vertical',
    },
  },
})

export type GroupVariants = VariantProps<typeof groupVariants>
