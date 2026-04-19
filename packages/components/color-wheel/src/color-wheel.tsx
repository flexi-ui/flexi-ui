'use client'

import type { ColorWheelVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'
import type React from 'react'

import { colorWheelVariants } from '@flexi-ui/styles'
import {
  ColorThumb as ColorThumbPrimitive,
  ColorWheel as ColorWheelPrimitive,
  ColorWheelTrack as ColorWheelTrackPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

const SIZE_RADII = {
  sm: { outer: 60, inner: 45 },
  md: { outer: 100, inner: 80 },
  lg: { outer: 140, inner: 115 },
} as const

/* -------------------------------------------------------------------------------------------------
 * ColorWheel Root
 * -----------------------------------------------------------------------------------------------*/
interface ColorWheelRootProps
  extends Omit<ComponentPropsWithRef<typeof ColorWheelPrimitive>, 'children' | 'outerRadius' | 'innerRadius'>,
    ColorWheelVariants {
  children?: React.ReactNode
  outerRadius?: number
  innerRadius?: number
}

const ColorWheelRoot = ({
  children,
  className,
  innerRadius,
  outerRadius,
  size = 'md',
  ...rest
}: ColorWheelRootProps) => {
  const styles = colorWheelVariants({ size })
  const radii = SIZE_RADII[size ?? 'md']
  const resolvedOuter = outerRadius ?? radii.outer
  const resolvedInner = innerRadius ?? radii.inner

  return (
    <ColorWheelPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="color-wheel"
      innerRadius={resolvedInner}
      outerRadius={resolvedOuter}
      {...rest}
    >
      {children ?? (
        <>
          <ColorWheelTrackPrimitive className="color-wheel__track" />
          <ColorThumbPrimitive className="color-wheel__thumb" />
        </>
      )}
    </ColorWheelPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { ColorWheelRoot }
export type { ColorWheelRootProps }
