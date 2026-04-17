'use client'

import type { ColorSwatchPickerVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'
import type React from 'react'

import { colorSwatchPickerVariants } from '@flexi-ui/styles'
import {
  ColorSwatch as ColorSwatchPrimitive,
  ColorSwatchPicker as ColorSwatchPickerPrimitive,
  ColorSwatchPickerItem as ColorSwatchPickerItemPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * ColorSwatchPicker Root
 * -----------------------------------------------------------------------------------------------*/
interface ColorSwatchPickerRootProps
  extends ComponentPropsWithRef<typeof ColorSwatchPickerPrimitive>,
    ColorSwatchPickerVariants {}

const ColorSwatchPickerRoot = ({
  className,
  size,
  ...rest
}: ColorSwatchPickerRootProps) => {
  const styles = colorSwatchPickerVariants({ size })

  return (
    <ColorSwatchPickerPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="color-swatch-picker"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * ColorSwatchPicker Item
 * -----------------------------------------------------------------------------------------------*/
interface ColorSwatchPickerItemRootProps
  extends Omit<ComponentPropsWithRef<typeof ColorSwatchPickerItemPrimitive>, 'children'> {
  children?: React.ReactNode
}

const ColorSwatchPickerItemRoot = ({
  children,
  className,
  ...rest
}: ColorSwatchPickerItemRootProps) => {
  return (
    <ColorSwatchPickerItemPrimitive
      className={(renderProps) =>
        cx(
          'color-swatch-picker__item',
          typeof className === 'function' ? className(renderProps) : className,
        ) ?? ''
      }
      data-slot="color-swatch-picker-item"
      {...rest}
    >
      {() => <>{children ?? <ColorSwatchPrimitive />}</>}
    </ColorSwatchPickerItemPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { ColorSwatchPickerRoot, ColorSwatchPickerItemRoot }
export type { ColorSwatchPickerRootProps, ColorSwatchPickerItemRootProps }
