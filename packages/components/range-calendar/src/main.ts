import type { ComponentProps } from 'react'

import { RangeCalendarRoot } from './range-calendar'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const RangeCalendar = Object.assign(RangeCalendarRoot, {
  Root: RangeCalendarRoot,
})

export type RangeCalendar = {
  Props: ComponentProps<typeof RangeCalendarRoot>
  RootProps: ComponentProps<typeof RangeCalendarRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { RangeCalendarRoot }
export type { RangeCalendarRootProps, RangeCalendarRootProps as RangeCalendarProps } from './range-calendar'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { rangeCalendarVariants } from '@flexi-ui/styles'
export type { RangeCalendarVariants } from '@flexi-ui/styles'
