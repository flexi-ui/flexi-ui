import type { ComponentProps } from 'react'

import { CalendarRoot, DatePickerRoot } from './date-picker'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const DatePicker = Object.assign(DatePickerRoot, {
  Root: DatePickerRoot,
  Calendar: CalendarRoot,
})

export type DatePicker = {
  Props: ComponentProps<typeof DatePickerRoot>
  RootProps: ComponentProps<typeof DatePickerRoot>
  CalendarProps: ComponentProps<typeof CalendarRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { DatePickerRoot, CalendarRoot }
export type {
  DatePickerRootProps,
  DatePickerRootProps as DatePickerProps,
  CalendarRootProps,
} from './date-picker'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { datePickerVariants, calendarVariants } from '@flexi-ui/styles'
export type { DatePickerVariants, CalendarVariants } from '@flexi-ui/styles'
