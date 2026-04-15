import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const progressVariants = tv({
  base: 'progress',
  defaultVariants: {
    size: 'md',
    color: 'accent',
  },
  variants: {
    size: {
      sm: 'progress--sm',
      md: 'progress--md',
      lg: 'progress--lg',
    },
    color: {
      accent: '',
      success: 'progress--success',
      warning: 'progress--warning',
      danger: 'progress--danger',
    },
    isStriped: {
      true: 'progress--striped',
    },
    isIndeterminate: {
      true: 'progress--indeterminate',
    },
  },
})

export type ProgressVariants = VariantProps<typeof progressVariants>
