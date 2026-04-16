import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const radioGroupVariants = tv({
  base: 'radio-group',
  variants: {
    orientation: {
      horizontal: 'radio-group--horizontal',
      vertical: '',
    },
  },
})

export const radioVariants = tv({
  base: 'radio',
  defaultVariants: {
    size: 'md',
    color: 'accent',
  },
  variants: {
    size: {
      sm: 'radio--sm',
      md: 'radio--md',
      lg: 'radio--lg',
    },
    color: {
      accent: '',
      success: 'radio--success',
      warning: 'radio--warning',
      danger: 'radio--danger',
    },
    isSelected: {
      true: 'radio--selected',
    },
    isDisabled: {
      true: 'radio--disabled',
    },
  },
})

export type RadioGroupVariants = VariantProps<typeof radioGroupVariants>
export type RadioVariants = VariantProps<typeof radioVariants>
