import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const colorPickerVariants = tv({
  base: 'color-picker',
})

export type ColorPickerVariants = VariantProps<typeof colorPickerVariants>
