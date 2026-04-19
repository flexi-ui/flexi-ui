import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const dropIndicatorVariants = tv({
  base: 'drop-indicator',
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    variant: {
      default: '',
      between: 'drop-indicator--between',
    },
  },
})

export type DropIndicatorVariants = VariantProps<typeof dropIndicatorVariants>
