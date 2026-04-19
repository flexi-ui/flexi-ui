'use client'

import type { RangeCalendarVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'
import type React from 'react'

import { rangeCalendarVariants } from '@flexi-ui/styles'
import {
  Button as ButtonPrimitive,
  CalendarCell as CalendarCellPrimitive,
  CalendarGrid as CalendarGridPrimitive,
  CalendarGridBody as CalendarGridBodyPrimitive,
  CalendarGridHeader as CalendarGridHeaderPrimitive,
  CalendarHeaderCell as CalendarHeaderCellPrimitive,
  Heading as HeadingPrimitive,
  RangeCalendar as RangeCalendarPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * RangeCalendar Root
 * -----------------------------------------------------------------------------------------------*/
interface RangeCalendarRootProps
  extends Omit<ComponentPropsWithRef<typeof RangeCalendarPrimitive>, 'children'>,
    RangeCalendarVariants {
  children?: React.ReactNode
}

const RangeCalendarRoot = ({ children, className, ...rest }: RangeCalendarRootProps) => {
  const styles = rangeCalendarVariants()

  return (
    <RangeCalendarPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="range-calendar"
      {...rest}
    >
      {children ?? (
        <>
          <header className="calendar__header">
            <ButtonPrimitive className="calendar__nav-button" slot="previous">
              &lsaquo;
            </ButtonPrimitive>
            <HeadingPrimitive className="calendar__heading" />
            <ButtonPrimitive className="calendar__nav-button" slot="next">
              &rsaquo;
            </ButtonPrimitive>
          </header>
          <CalendarGridPrimitive className="calendar__grid">
            <CalendarGridHeaderPrimitive>
              {(day) => (
                <CalendarHeaderCellPrimitive className="calendar__grid-header">
                  {day}
                </CalendarHeaderCellPrimitive>
              )}
            </CalendarGridHeaderPrimitive>
            <CalendarGridBodyPrimitive>
              {(date) => <CalendarCellPrimitive className="range-calendar__day" date={date} />}
            </CalendarGridBodyPrimitive>
          </CalendarGridPrimitive>
        </>
      )}
    </RangeCalendarPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { RangeCalendarRoot }
export type { RangeCalendarRootProps }
