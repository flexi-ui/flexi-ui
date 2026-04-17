import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const toggleButtonVariants = tv({
  base: 'toggle-button',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'toggle-button--sm',
      md: 'toggle-button--md',
      lg: 'toggle-button--lg',
    },
  },
})

export const toggleButtonGroupVariants = tv({
  base: 'toggle-button-group',
  variants: {
    orientation: {
      horizontal: '',
      vertical: 'toggle-button-group--vertical',
    },
  },
})

export type ToggleButtonVariants = VariantProps<typeof toggleButtonVariants>
export type ToggleButtonGroupVariants = VariantProps<typeof toggleButtonGroupVariants>
