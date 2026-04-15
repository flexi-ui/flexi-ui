import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const dividerVariants = tv({
  base: 'divider',
  defaultVariants: {
    orientation: 'horizontal',
  },
  variants: {
    orientation: {
      horizontal: 'divider--horizontal',
      vertical: 'divider--vertical',
    },
  },
})

export type DividerVariants = VariantProps<typeof dividerVariants>
