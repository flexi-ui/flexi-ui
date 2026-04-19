'use client'

import type { CalendarVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'
import type React from 'react'

import { calendarVariants } from '@flexi-ui/styles'
import {
  Button as ButtonPrimitive,
  Calendar as CalendarPrimitive,
  CalendarCell as CalendarCellPrimitive,
  CalendarGrid as CalendarGridPrimitive,
  CalendarGridBody as CalendarGridBodyPrimitive,
  CalendarGridHeader as CalendarGridHeaderPrimitive,
  CalendarHeaderCell as CalendarHeaderCellPrimitive,
  Heading as HeadingPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * Calendar Root
 * -----------------------------------------------------------------------------------------------*/
interface CalendarRootProps
  extends Omit<ComponentPropsWithRef<typeof CalendarPrimitive>, 'children'>,
    CalendarVariants {
  children?: React.ReactNode
}

const CalendarRoot = ({ children, className, ...rest }: CalendarRootProps) => {
  const styles = calendarVariants()

  return (
    <CalendarPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="calendar"
      {...rest}
    >
      {children ?? (
        <>
          <CalendarHeader />
          <CalendarGrid />
        </>
      )}
    </CalendarPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Calendar Header
 * -----------------------------------------------------------------------------------------------*/
interface CalendarHeaderProps extends ComponentPropsWithRef<'header'> {}

const CalendarHeader = ({ className, children, ...rest }: CalendarHeaderProps) => {
  return (
    <header
      className={cx('calendar__header', className) ?? ''}
      data-slot="calendar-header"
      {...rest}
    >
      {children ?? (
        <>
          <ButtonPrimitive className="calendar__nav-button" slot="previous">
            &lsaquo;
          </ButtonPrimitive>
          <HeadingPrimitive className="calendar__heading" />
          <ButtonPrimitive className="calendar__nav-button" slot="next">
            &rsaquo;
          </ButtonPrimitive>
        </>
      )}
    </header>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Calendar Grid
 * -----------------------------------------------------------------------------------------------*/
interface CalendarGridProps extends ComponentPropsWithRef<typeof CalendarGridPrimitive> {}

const CalendarGrid = ({ className, ...rest }: CalendarGridProps) => {
  return (
    <CalendarGridPrimitive
      className={cx('calendar__grid', className as string) ?? ''}
      data-slot="calendar-grid"
      {...rest}
    >
      <CalendarGridHeaderPrimitive>
        {(day) => (
          <CalendarHeaderCellPrimitive className="calendar__grid-header">
            {day}
          </CalendarHeaderCellPrimitive>
        )}
      </CalendarGridHeaderPrimitive>
      <CalendarGridBodyPrimitive>
        {(date) => <CalendarCellPrimitive className="calendar__day" date={date} />}
      </CalendarGridBodyPrimitive>
    </CalendarGridPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { CalendarRoot, CalendarHeader, CalendarGrid }
export type { CalendarRootProps, CalendarHeaderProps, CalendarGridProps }
