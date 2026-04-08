import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const buttonVariants = tv({
  base: 'button',
  defaultVariants: {
    size: 'md',
    variant: 'primary',
    fullWidth: false,
    isIconOnly: false,
  },
  variants: {
    size: {
      sm: 'button--sm',
      md: 'button--md',
      lg: 'button--lg',
    },
    variant: {
      primary: 'button--primary',
      secondary: 'button--secondary',
      success: 'button--success',
      warning: 'button--warning',
      danger: 'button--danger',
      ghost: 'button--ghost',
      bordered: 'button--bordered',
      flat: 'button--flat',
      shadow: 'button--shadow',
      light: 'button--light',
    },
    fullWidth: {
      true: 'button--full-width',
      false: '',
    },
    isIconOnly: {
      true: 'button--icon-only',
    },
  },
})

export const buttonGroupVariants = tv({
  base: 'button-group',
  defaultVariants: {
    fullWidth: false,
  },
  variants: {
    fullWidth: {
      true: 'button-group--full-width',
      false: '',
    },
  },
})

export type ButtonVariants = VariantProps<typeof buttonVariants>
export type ButtonGroupVariants = VariantProps<typeof buttonGroupVariants>
