import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const treeVariants = tv({
  base: 'tree',
})

export type TreeVariants = VariantProps<typeof treeVariants>
