import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const searchFieldVariants = tv({
  base: 'search-field',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'search-field--sm',
      md: 'search-field--md',
      lg: 'search-field--lg',
    },
  },
})

export type SearchFieldVariants = VariantProps<typeof searchFieldVariants>
