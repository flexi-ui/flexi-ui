'use client'

import type { ColorPickerVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'
import type React from 'react'

import { colorPickerVariants } from '@flexi-ui/styles'
import { ColorPicker as ColorPickerPrimitive } from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * ColorPicker Root
 * -----------------------------------------------------------------------------------------------*/
interface ColorPickerRootProps
  extends Omit<ComponentPropsWithRef<typeof ColorPickerPrimitive>, 'children' | 'className'>,
    ColorPickerVariants {
  children?: React.ReactNode
  className?: string
}

const ColorPickerRoot = ({ children, className, ...rest }: ColorPickerRootProps) => {
  const styles = colorPickerVariants()

  return (
    <ColorPickerPrimitive {...rest}>
      <div className={cx(styles, className) ?? ''} data-slot="color-picker">
        {children}
      </div>
    </ColorPickerPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { ColorPickerRoot }
export type { ColorPickerRootProps }
