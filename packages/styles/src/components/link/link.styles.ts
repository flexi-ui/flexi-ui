import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const linkVariants = tv({
  base: 'link',
  defaultVariants: {
    size: 'md',
    color: 'primary',
    underline: 'none',
    isBlock: false,
  },
  variants: {
    size: {
      sm: 'link--sm',
      md: 'link--md',
      lg: 'link--lg',
    },
    color: {
      foreground: '',
      primary: 'link--primary',
      secondary: 'link--secondary',
      success: 'link--success',
      warning: 'link--warning',
      danger: 'link--danger',
    },
    underline: {
      none: 'link--underline-none',
      hover: 'link--underline-hover',
      always: 'link--underline-always',
      active: 'link--underline-active',
    },
    isBlock: {
      true: 'link--block',
      false: '',
    },
    isDisabled: {
      true: '',
    },
  },
})

export type LinkVariants = VariantProps<typeof linkVariants>
