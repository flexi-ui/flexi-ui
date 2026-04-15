import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const checkboxVariants = tv({
  base: 'checkbox',
  defaultVariants: {
    size: 'md',
    color: 'accent',
  },
  variants: {
    size: {
      sm: 'checkbox--sm',
      md: 'checkbox--md',
      lg: 'checkbox--lg',
    },
    color: {
      accent: '',
      success: 'checkbox--success',
      warning: 'checkbox--warning',
      danger: 'checkbox--danger',
    },
    isSelected: {
      true: 'checkbox--selected',
    },
    isIndeterminate: {
      true: 'checkbox--indeterminate',
    },
    isDisabled: {
      true: 'checkbox--disabled',
    },
  },
})

export const checkboxGroupVariants = tv({
  base: 'checkbox-group',
})

export type CheckboxVariants = VariantProps<typeof checkboxVariants>
export type CheckboxGroupVariants = VariantProps<typeof checkboxGroupVariants>
