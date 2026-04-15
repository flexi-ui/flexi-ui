import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const skeletonVariants = tv({
  base: 'skeleton',
  defaultVariants: {
    isLoaded: false,
  },
  variants: {
    isLoaded: {
      true: 'skeleton--loaded',
    },
  },
})

export type SkeletonVariants = VariantProps<typeof skeletonVariants>
