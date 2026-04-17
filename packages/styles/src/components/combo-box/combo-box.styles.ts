import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const comboBoxVariants = tv({
  base: 'combo-box',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'combo-box--sm',
      md: 'combo-box--md',
      lg: 'combo-box--lg',
    },
  },
})

export type ComboBoxVariants = VariantProps<typeof comboBoxVariants>
