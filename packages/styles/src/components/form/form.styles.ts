import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const formVariants = tv({
  base: 'form',
  defaultVariants: {
    fullWidth: true,
  },
  variants: {
    fullWidth: {
      true: 'form--full-width',
      false: '',
    },
  },
})

export type FormVariants = VariantProps<typeof formVariants>
