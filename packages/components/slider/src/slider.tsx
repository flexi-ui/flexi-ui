'use client'

import type { SliderVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'
import type React from 'react'

import { sliderVariants } from '@flexi-ui/styles'
import {
  Label as LabelPrimitive,
  Slider as SliderPrimitive,
  SliderOutput as SliderOutputPrimitive,
  SliderThumb as SliderThumbPrimitive,
  SliderTrack as SliderTrackPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * Slider Root
 * -----------------------------------------------------------------------------------------------*/
interface SliderRootProps extends Omit<ComponentPropsWithRef<typeof SliderPrimitive>, 'children' | 'color'>, SliderVariants {
  children?: React.ReactNode
  label?: string
  showOutput?: boolean
}

const SliderRoot = ({
  children,
  className,
  color,
  label,
  showOutput = false,
  size,
  ...rest
}: SliderRootProps) => {
  const styles = sliderVariants({ color, size })

  return (
    <SliderPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="slider"
      {...rest}
    >
      {() => (
        <>
          {label && (
            <div className="slider__label">
              <LabelPrimitive>{label}</LabelPrimitive>
              {showOutput && <SliderOutputPrimitive className="slider__output" />}
            </div>
          )}
          <SliderTrackPrimitive className="slider__track">
            {(renderProps) => (
              <>
                <div
                  className="slider__fill"
                  style={{ width: `${renderProps.state.getThumbPercent(0) * 100}%` }}
                />
                <SliderThumbPrimitive className="slider__thumb" />
              </>
            )}
          </SliderTrackPrimitive>
          {children}
        </>
      )}
    </SliderPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { SliderRoot }
export type { SliderRootProps }
