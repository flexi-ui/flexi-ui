import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const dropZoneVariants = tv({
  base: 'drop-zone',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'drop-zone--sm',
      md: 'drop-zone--md',
      lg: 'drop-zone--lg',
    },
  },
})

export type DropZoneVariants = VariantProps<typeof dropZoneVariants>
