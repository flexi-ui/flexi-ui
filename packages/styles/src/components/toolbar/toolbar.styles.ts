import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const toolbarVariants = tv({
  base: 'toolbar',
  variants: {
    orientation: {
      horizontal: '',
      vertical: 'toolbar--vertical',
    },
  },
})

export type ToolbarVariants = VariantProps<typeof toolbarVariants>
