import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const autocompleteVariants = tv({
  base: 'autocomplete',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'autocomplete--sm',
      md: 'autocomplete--md',
      lg: 'autocomplete--lg',
    },
  },
})

export type AutocompleteVariants = VariantProps<typeof autocompleteVariants>
