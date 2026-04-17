'use client'

import type { MeterVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'
import type React from 'react'

import { meterVariants } from '@flexi-ui/styles'
import {
  Label as LabelPrimitive,
  Meter as MeterPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * Meter Root
 * -----------------------------------------------------------------------------------------------*/
interface MeterRootProps extends Omit<ComponentPropsWithRef<typeof MeterPrimitive>, 'children'>, MeterVariants {
  children?: React.ReactNode
  label?: string
  showValue?: boolean
}

const MeterRoot = ({
  children,
  className,
  color,
  label,
  showValue = true,
  size,
  ...rest
}: MeterRootProps) => {
  const styles = meterVariants({ color, size })

  return (
    <MeterPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="meter"
      {...rest}
    >
      {({ percentage }) => (
        <>
          {label && (
            <div className="meter__label">
              <LabelPrimitive>{label}</LabelPrimitive>
              {showValue && <span className="meter__value">{Math.round(percentage)}%</span>}
            </div>
          )}
          <div className="meter__track">
            <div
              className="meter__bar"
              style={{ width: `${percentage}%` }}
            />
          </div>
          {children}
        </>
      )}
    </MeterPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { MeterRoot }
export type { MeterRootProps }
