import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const datePickerVariants = tv({
  base: 'date-picker',
})

export const calendarVariants = tv({
  base: 'calendar',
})

export type DatePickerVariants = VariantProps<typeof datePickerVariants>
export type CalendarVariants = VariantProps<typeof calendarVariants>
