import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const switchVariants = tv({
  base: 'switch',
  defaultVariants: {
    size: 'md',
    color: 'accent',
  },
  variants: {
    size: {
      sm: 'switch--sm',
      md: 'switch--md',
      lg: 'switch--lg',
    },
    color: {
      accent: '',
      success: 'switch--success',
      warning: 'switch--warning',
      danger: 'switch--danger',
    },
    isSelected: {
      true: 'switch--selected',
    },
    isDisabled: {
      true: 'switch--disabled',
    },
  },
})

export type SwitchVariants = VariantProps<typeof switchVariants>
