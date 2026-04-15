import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const alertVariants = tv({
  base: 'alert',
  defaultVariants: {
    variant: 'default',
    isFlat: false,
  },
  variants: {
    variant: {
      default: 'alert--default',
      success: 'alert--success',
      warning: 'alert--warning',
      danger: 'alert--danger',
      accent: 'alert--accent',
    },
    isFlat: {
      true: 'alert--flat',
    },
  },
})

export type AlertVariants = VariantProps<typeof alertVariants>
