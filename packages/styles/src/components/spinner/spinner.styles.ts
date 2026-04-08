import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const spinnerVariants = tv({
  base: 'spinner',
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
  variants: {
    size: {
      sm: 'spinner--sm',
      md: 'spinner--md',
      lg: 'spinner--lg',
    },
    color: {
      current: 'spinner--current',
      primary: 'spinner--primary',
      secondary: 'spinner--secondary',
      success: 'spinner--success',
      warning: 'spinner--warning',
      danger: 'spinner--danger',
      white: 'spinner--white',
    },
  },
})

export type SpinnerVariants = VariantProps<typeof spinnerVariants>
