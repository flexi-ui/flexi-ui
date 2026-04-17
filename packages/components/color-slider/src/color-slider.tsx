'use client'

import type { ColorSliderVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'
import type React from 'react'

import { colorSliderVariants } from '@flexi-ui/styles'
import {
  ColorSlider as ColorSliderPrimitive,
  ColorThumb as ColorThumbPrimitive,
  Label as LabelPrimitive,
  SliderOutput as SliderOutputPrimitive,
  SliderTrack as SliderTrackPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * ColorSlider Root
 * -----------------------------------------------------------------------------------------------*/
interface ColorSliderRootProps
  extends Omit<ComponentPropsWithRef<typeof ColorSliderPrimitive>, 'children'>,
    ColorSliderVariants {
  children?: React.ReactNode
  label?: string
  showOutput?: boolean
}

const ColorSliderRoot = ({
  children,
  className,
  label,
  showOutput = true,
  size,
  ...rest
}: ColorSliderRootProps) => {
  const styles = colorSliderVariants({ size })

  return (
    <ColorSliderPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="color-slider"
      {...rest}
    >
      {() => (
        <>
          {(label || showOutput) && (
            <div className="color-slider__label">
              {label && <LabelPrimitive>{label}</LabelPrimitive>}
              {showOutput && <SliderOutputPrimitive className="color-slider__output" />}
            </div>
          )}
          <SliderTrackPrimitive className="color-slider__track">
            <ColorThumbPrimitive className="color-slider__thumb" />
          </SliderTrackPrimitive>
          {children}
        </>
      )}
    </ColorSliderPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { ColorSliderRoot }
export type { ColorSliderRootProps }
