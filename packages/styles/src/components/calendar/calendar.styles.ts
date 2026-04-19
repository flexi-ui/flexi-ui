import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const calendarVariants = tv({
  base: 'calendar',
})

export const rangeCalendarVariants = tv({
  base: 'range-calendar',
})

export type CalendarVariants = VariantProps<typeof calendarVariants>
export type RangeCalendarVariants = VariantProps<typeof rangeCalendarVariants>
