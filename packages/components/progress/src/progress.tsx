'use client'

import type { ProgressVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { progressVariants } from '@flexi-ui/styles'

/* -------------------------------------------------------------------------------------------------
 * Progress Root
 * -----------------------------------------------------------------------------------------------*/
interface ProgressRootProps extends Omit<ComponentPropsWithRef<'div'>, 'color'>, ProgressVariants {
  value?: number
  minValue?: number
  maxValue?: number
  label?: string
  showValueLabel?: boolean
  children?: React.ReactNode
}

const ProgressRoot = ({
  children,
  className,
  color,
  isIndeterminate,
  isStriped,
  label,
  maxValue = 100,
  minValue = 0,
  showValueLabel = false,
  size,
  value = 0,
  ...rest
}: ProgressRootProps) => {
  const styles = progressVariants({ className, color, isIndeterminate, isStriped, size })
  const percentage = isIndeterminate ? undefined : Math.min(100, Math.max(0, ((value - minValue) / (maxValue - minValue)) * 100))

  return (
    <div
      className={styles}
      data-slot="progress"
      role="progressbar"
      aria-valuenow={isIndeterminate ? undefined : value}
      aria-valuemin={minValue}
      aria-valuemax={maxValue}
      aria-label={label}
      {...rest}
    >
      {(label || showValueLabel) && (
        <div className="progress__label">
          {label && <span>{label}</span>}
          {showValueLabel && !isIndeterminate && (
            <span className="progress__value">{Math.round(percentage!)}%</span>
          )}
        </div>
      )}
      <div className="progress__track">
        <div
          className="progress__bar"
          style={isIndeterminate ? undefined : { width: `${percentage}%` }}
        />
      </div>
      {children}
    </div>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { ProgressRoot }
export type { ProgressRootProps }
