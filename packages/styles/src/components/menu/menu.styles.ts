import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const menuVariants = tv({
  base: 'menu',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'menu--sm',
      md: 'menu--md',
      lg: 'menu--lg',
    },
  },
})

export type MenuVariants = VariantProps<typeof menuVariants>
