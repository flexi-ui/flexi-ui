import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const listBoxVariants = tv({
  base: 'list-box',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'list-box--sm',
      md: 'list-box--md',
      lg: 'list-box--lg',
    },
  },
})

export type ListBoxVariants = VariantProps<typeof listBoxVariants>
