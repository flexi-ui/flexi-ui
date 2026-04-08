import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const inputVariants = tv({
  base: 'input',
  defaultVariants: {
    size: 'md',
    variant: 'flat',
    fullWidth: true,
  },
  variants: {
    size: {
      sm: 'input--sm',
      md: 'input--md',
      lg: 'input--lg',
    },
    variant: {
      flat: '',
      bordered: 'input--bordered',
      underlined: 'input--underlined',
    },
    fullWidth: {
      true: 'input--full-width',
      false: '',
    },
    isInvalid: {
      true: 'input--invalid',
    },
    isDisabled: {
      true: 'input--disabled',
    },
  },
})

export type InputVariants = VariantProps<typeof inputVariants>
