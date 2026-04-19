import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const textVariants = tv({
  base: 'text',
  defaultVariants: {
    size: 'sm',
    tone: 'default',
    weight: 'normal',
  },
  variants: {
    size: {
      xs: 'text--xs',
      sm: 'text--sm',
      md: 'text--md',
      lg: 'text--lg',
      xl: 'text--xl',
    },
    tone: {
      default: 'text--default',
      muted: 'text--muted',
      danger: 'text--danger',
      success: 'text--success',
    },
    weight: {
      normal: 'text--normal',
      medium: 'text--medium',
      semibold: 'text--semibold',
      bold: 'text--bold',
    },
  },
})

export type TextVariants = VariantProps<typeof textVariants>
