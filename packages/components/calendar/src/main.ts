import type { ComponentProps } from 'react'

import { CalendarGrid, CalendarHeader, CalendarRoot } from './calendar'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Calendar = Object.assign(CalendarRoot, {
  Root: CalendarRoot,
  Header: CalendarHeader,
  Grid: CalendarGrid,
})

export type Calendar = {
  Props: ComponentProps<typeof CalendarRoot>
  RootProps: ComponentProps<typeof CalendarRoot>
  HeaderProps: ComponentProps<typeof CalendarHeader>
  GridProps: ComponentProps<typeof CalendarGrid>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { CalendarGrid, CalendarHeader, CalendarRoot }
export type {
  CalendarGridProps,
  CalendarHeaderProps,
  CalendarRootProps,
  CalendarRootProps as CalendarProps,
} from './calendar'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { calendarVariants } from '@flexi-ui/styles'
export type { CalendarVariants } from '@flexi-ui/styles'
