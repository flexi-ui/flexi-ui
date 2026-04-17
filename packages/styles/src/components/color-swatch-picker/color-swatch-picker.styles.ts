import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const colorSwatchPickerVariants = tv({
  base: 'color-swatch-picker',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'color-swatch-picker--sm',
      md: 'color-swatch-picker--md',
      lg: 'color-swatch-picker--lg',
    },
  },
})

export type ColorSwatchPickerVariants = VariantProps<typeof colorSwatchPickerVariants>
