import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const dateRangePickerVariants = tv({
  base: 'date-range-picker',
})

export type DateRangePickerVariants = VariantProps<typeof dateRangePickerVariants>
