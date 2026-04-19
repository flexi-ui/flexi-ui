import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const datePickerVariants = tv({
  base: 'date-picker',
})

export type DatePickerVariants = VariantProps<typeof datePickerVariants>
