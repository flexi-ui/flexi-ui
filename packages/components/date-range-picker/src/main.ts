import type { ComponentProps } from 'react'

import { DateRangePickerRoot, RangeCalendarRoot } from './date-range-picker'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const DateRangePicker = Object.assign(DateRangePickerRoot, {
  Root: DateRangePickerRoot,
  Calendar: RangeCalendarRoot,
})

export type DateRangePicker = {
  Props: ComponentProps<typeof DateRangePickerRoot>
  RootProps: ComponentProps<typeof DateRangePickerRoot>
  CalendarProps: ComponentProps<typeof RangeCalendarRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { DateRangePickerRoot, RangeCalendarRoot }
export type {
  DateRangePickerRootProps,
  DateRangePickerRootProps as DateRangePickerProps,
  RangeCalendarRootProps,
} from './date-range-picker'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { dateRangePickerVariants, calendarVariants } from '@flexi-ui/styles'
export type { DateRangePickerVariants, CalendarVariants } from '@flexi-ui/styles'
