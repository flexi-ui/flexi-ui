import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const avatarVariants = tv({
  base: 'avatar',
  defaultVariants: {
    size: 'md',
    isBordered: false,
  },
  variants: {
    size: {
      sm: 'avatar--sm',
      md: 'avatar--md',
      lg: 'avatar--lg',
      xl: 'avatar--xl',
    },
    isBordered: {
      true: 'avatar--bordered',
    },
  },
})

export type AvatarVariants = VariantProps<typeof avatarVariants>
