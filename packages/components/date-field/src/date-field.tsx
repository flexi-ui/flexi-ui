'use client'

import type { DateFieldVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'
import type React from 'react'

import { dateFieldVariants } from '@flexi-ui/styles'
import {
  DateField as DateFieldPrimitive,
  DateInput as DateInputPrimitive,
  DateSegment as DateSegmentPrimitive,
  Label as LabelPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * DateField Root
 * -----------------------------------------------------------------------------------------------*/
interface DateFieldRootProps extends Omit<ComponentPropsWithRef<typeof DateFieldPrimitive>, 'children'>, DateFieldVariants {
  children?: React.ReactNode
  label?: string
}

const DateFieldRoot = ({
  children,
  className,
  label,
  size,
  ...rest
}: DateFieldRootProps) => {
  const styles = dateFieldVariants({ size })

  return (
    <DateFieldPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="date-field"
      {...rest}
    >
      {() => (
        <>
          {label && <LabelPrimitive className="date-field__label">{label}</LabelPrimitive>}
          <DateInputPrimitive className="date-field__input">
            {(segment) => <DateSegmentPrimitive className="date-field__segment" segment={segment} />}
          </DateInputPrimitive>
          {children}
        </>
      )}
    </DateFieldPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { DateFieldRoot }
export type { DateFieldRootProps }
