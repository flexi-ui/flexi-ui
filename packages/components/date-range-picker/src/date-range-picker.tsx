'use client'

import type { ComponentPropsWithRef } from 'react'
import type React from 'react'

import { calendarVariants, dateRangePickerVariants } from '@flexi-ui/styles'
import {
  Button as ButtonPrimitive,
  CalendarCell as CalendarCellPrimitive,
  CalendarGrid as CalendarGridPrimitive,
  CalendarGridBody as CalendarGridBodyPrimitive,
  CalendarGridHeader as CalendarGridHeaderPrimitive,
  CalendarHeaderCell as CalendarHeaderCellPrimitive,
  DateInput as DateInputPrimitive,
  DateRangePicker as DateRangePickerPrimitive,
  DateSegment as DateSegmentPrimitive,
  Dialog as DialogPrimitive,
  Group as GroupPrimitive,
  Heading as HeadingPrimitive,
  Label as LabelPrimitive,
  Popover as PopoverPrimitive,
  RangeCalendar as RangeCalendarPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * DateRangePicker Root
 * -----------------------------------------------------------------------------------------------*/
interface DateRangePickerRootProps extends Omit<ComponentPropsWithRef<typeof DateRangePickerPrimitive>, 'children'> {
  children?: React.ReactNode
  label?: string
}

const DateRangePickerRoot = ({ children, className, label, ...rest }: DateRangePickerRootProps) => {
  const styles = dateRangePickerVariants()

  return (
    <DateRangePickerPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="date-range-picker"
      {...rest}
    >
      {() => (
        <>
          {label && <LabelPrimitive className="date-range-picker__label">{label}</LabelPrimitive>}
          <GroupPrimitive className="date-range-picker__group">
            <DateInputPrimitive className="date-range-picker__input" slot="start">
              {(segment) => <DateSegmentPrimitive className="date-range-picker__segment" segment={segment} />}
            </DateInputPrimitive>
            <span className="date-range-picker__separator" aria-hidden="true">&ndash;</span>
            <DateInputPrimitive className="date-range-picker__input" slot="end">
              {(segment) => <DateSegmentPrimitive className="date-range-picker__segment" segment={segment} />}
            </DateInputPrimitive>
            <ButtonPrimitive className="date-range-picker__button">&#9776;</ButtonPrimitive>
          </GroupPrimitive>
          <PopoverPrimitive>
            <DialogPrimitive>
              <RangeCalendarRoot />
            </DialogPrimitive>
          </PopoverPrimitive>
          {children}
        </>
      )}
    </DateRangePickerPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * RangeCalendar Root
 * -----------------------------------------------------------------------------------------------*/
interface RangeCalendarRootProps extends ComponentPropsWithRef<typeof RangeCalendarPrimitive> {}

const RangeCalendarRoot = ({ className, ...rest }: RangeCalendarRootProps) => {
  const styles = calendarVariants()

  return (
    <RangeCalendarPrimitive
      className={cx(styles, className) ?? ''}
      data-slot="range-calendar"
      {...rest}
    >
      <header className="calendar__header">
        <ButtonPrimitive className="calendar__nav-button" slot="previous">&lsaquo;</ButtonPrimitive>
        <HeadingPrimitive className="calendar__heading" />
        <ButtonPrimitive className="calendar__nav-button" slot="next">&rsaquo;</ButtonPrimitive>
      </header>
      <CalendarGridPrimitive className="calendar__grid">
        <CalendarGridHeaderPrimitive>
          {(day) => <CalendarHeaderCellPrimitive className="calendar__grid-header">{day}</CalendarHeaderCellPrimitive>}
        </CalendarGridHeaderPrimitive>
        <CalendarGridBodyPrimitive>
          {(date) => <CalendarCellPrimitive className="calendar__day" date={date} />}
        </CalendarGridBodyPrimitive>
      </CalendarGridPrimitive>
    </RangeCalendarPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { DateRangePickerRoot, RangeCalendarRoot }
export type { DateRangePickerRootProps, RangeCalendarRootProps }
