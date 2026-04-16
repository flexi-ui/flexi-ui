import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const breadcrumbsVariants = tv({
  base: 'breadcrumbs',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'breadcrumbs--sm',
      md: 'breadcrumbs--md',
      lg: 'breadcrumbs--lg',
    },
  },
})

export type BreadcrumbsVariants = VariantProps<typeof breadcrumbsVariants>
