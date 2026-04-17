import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const tagGroupVariants = tv({
  base: 'tag-group',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'tag-group--sm',
      md: 'tag-group--md',
      lg: 'tag-group--lg',
    },
    color: {
      accent: 'tag-group--accent',
      success: 'tag-group--success',
      warning: 'tag-group--warning',
      danger: 'tag-group--danger',
    },
  },
})

export type TagGroupVariants = VariantProps<typeof tagGroupVariants>
