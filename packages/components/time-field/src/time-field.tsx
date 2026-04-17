'use client'

import type { TimeFieldVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'
import type React from 'react'

import { timeFieldVariants } from '@flexi-ui/styles'
import {
  DateInput as DateInputPrimitive,
  DateSegment as DateSegmentPrimitive,
  Label as LabelPrimitive,
  TimeField as TimeFieldPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * TimeField Root
 * -----------------------------------------------------------------------------------------------*/
interface TimeFieldRootProps extends Omit<ComponentPropsWithRef<typeof TimeFieldPrimitive>, 'children'>, TimeFieldVariants {
  children?: React.ReactNode
  label?: string
}

const TimeFieldRoot = ({
  children,
  className,
  label,
  size,
  ...rest
}: TimeFieldRootProps) => {
  const styles = timeFieldVariants({ size })

  return (
    <TimeFieldPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="time-field"
      {...rest}
    >
      {() => (
        <>
          {label && <LabelPrimitive className="time-field__label">{label}</LabelPrimitive>}
          <DateInputPrimitive className="time-field__input">
            {(segment) => <DateSegmentPrimitive className="time-field__segment" segment={segment} />}
          </DateInputPrimitive>
          {children}
        </>
      )}
    </TimeFieldPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { TimeFieldRoot }
export type { TimeFieldRootProps }
