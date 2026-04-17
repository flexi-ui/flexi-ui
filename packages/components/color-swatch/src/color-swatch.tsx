'use client'

import type { ColorSwatchVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { colorSwatchVariants } from '@flexi-ui/styles'
import { ColorSwatch as ColorSwatchPrimitive } from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * ColorSwatch Root
 * -----------------------------------------------------------------------------------------------*/
interface ColorSwatchRootProps
  extends ComponentPropsWithRef<typeof ColorSwatchPrimitive>,
    ColorSwatchVariants {}

const ColorSwatchRoot = ({ className, size, ...rest }: ColorSwatchRootProps) => {
  const styles = colorSwatchVariants({ size })

  return (
    <ColorSwatchPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="color-swatch"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { ColorSwatchRoot }
export type { ColorSwatchRootProps }
