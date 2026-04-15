import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const cardVariants = tv({
  base: 'card',
  defaultVariants: {
    size: 'md',
    variant: 'default',
    fullWidth: false,
    isPressable: false,
  },
  variants: {
    size: {
      sm: 'card--sm',
      md: 'card--md',
      lg: 'card--lg',
    },
    variant: {
      default: '',
      bordered: 'card--bordered',
      flat: 'card--flat',
      shadow: 'card--shadow',
    },
    fullWidth: {
      true: 'card--full-width',
      false: '',
    },
    isPressable: {
      true: 'card--pressable',
    },
  },
})

export type CardVariants = VariantProps<typeof cardVariants>
