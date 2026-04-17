import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const disclosureVariants = tv({
  base: 'disclosure',
})

export const disclosureGroupVariants = tv({
  base: 'disclosure-group',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'disclosure-group--sm',
      md: 'disclosure-group--md',
      lg: 'disclosure-group--lg',
    },
  },
})

export type DisclosureVariants = VariantProps<typeof disclosureVariants>
export type DisclosureGroupVariants = VariantProps<typeof disclosureGroupVariants>
