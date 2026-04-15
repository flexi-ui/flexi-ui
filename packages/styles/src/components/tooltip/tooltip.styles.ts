import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const tooltipVariants = tv({
  base: 'tooltip',
})

export type TooltipVariants = VariantProps<typeof tooltipVariants>
