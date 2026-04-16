'use client'

import type { ComponentPropsWithRef } from 'react'
import type React from 'react'

import { calendarVariants, datePickerVariants } from '@flexi-ui/styles'
import {
  Button as ButtonPrimitive,
  Calendar as CalendarPrimitive,
  CalendarCell as CalendarCellPrimitive,
  CalendarGrid as CalendarGridPrimitive,
  CalendarGridBody as CalendarGridBodyPrimitive,
  CalendarGridHeader as CalendarGridHeaderPrimitive,
  CalendarHeaderCell as CalendarHeaderCellPrimitive,
  DateInput as DateInputPrimitive,
  DatePicker as DatePickerPrimitive,
  DateSegment as DateSegmentPrimitive,
  Dialog as DialogPrimitive,
  Group as GroupPrimitive,
  Heading as HeadingPrimitive,
  Label as LabelPrimitive,
  Popover as PopoverPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * DatePicker Root
 * -----------------------------------------------------------------------------------------------*/
interface DatePickerRootProps extends Omit<ComponentPropsWithRef<typeof DatePickerPrimitive>, 'children'> {
  children?: React.ReactNode
  label?: string
}

const DatePickerRoot = ({ children, className, label, ...rest }: DatePickerRootProps) => {
  const styles = datePickerVariants()

  return (
    <DatePickerPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="date-picker"
      {...rest}
    >
      {() => (
        <>
          {label && <LabelPrimitive className="date-picker__label">{label}</LabelPrimitive>}
          <GroupPrimitive className="date-picker__group">
            <DateInputPrimitive className="date-picker__input">
              {(segment) => <DateSegmentPrimitive className="date-picker__segment" segment={segment} />}
            </DateInputPrimitive>
            <ButtonPrimitive className="date-picker__button">&#9776;</ButtonPrimitive>
          </GroupPrimitive>
          <PopoverPrimitive>
            <DialogPrimitive>
              <CalendarRoot />
            </DialogPrimitive>
          </PopoverPrimitive>
          {children}
        </>
      )}
    </DatePickerPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Calendar Root
 * -----------------------------------------------------------------------------------------------*/
interface CalendarRootProps extends ComponentPropsWithRef<typeof CalendarPrimitive> {}

const CalendarRoot = ({ className, ...rest }: CalendarRootProps) => {
  const styles = calendarVariants()

  return (
    <CalendarPrimitive
      className={cx(styles, className) ?? ''}
      data-slot="calendar"
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
    </CalendarPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { DatePickerRoot, CalendarRoot }
export type { DatePickerRootProps, CalendarRootProps }
