'use client'

import type { ColorAreaVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'
import type React from 'react'

import { colorAreaVariants } from '@flexi-ui/styles'
import {
  ColorArea as ColorAreaPrimitive,
  ColorThumb as ColorThumbPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * ColorArea Root
 * -----------------------------------------------------------------------------------------------*/
interface ColorAreaRootProps
  extends Omit<ComponentPropsWithRef<typeof ColorAreaPrimitive>, 'children'>,
    ColorAreaVariants {
  children?: React.ReactNode
}

const ColorAreaRoot = ({ children, className, size, ...rest }: ColorAreaRootProps) => {
  const styles = colorAreaVariants({ size })

  return (
    <ColorAreaPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="color-area"
      {...rest}
    >
      {() => (
        <>
          {children ?? <ColorThumbPrimitive className="color-area__thumb" />}
        </>
      )}
    </ColorAreaPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * ColorArea Thumb
 * -----------------------------------------------------------------------------------------------*/
interface ColorAreaThumbProps extends ComponentPropsWithRef<typeof ColorThumbPrimitive> {}

const ColorAreaThumb = ({ className, ...rest }: ColorAreaThumbProps) => {
  return (
    <ColorThumbPrimitive
      className={(renderProps) =>
        cx('color-area__thumb', typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="color-area-thumb"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { ColorAreaRoot, ColorAreaThumb }
export type { ColorAreaRootProps, ColorAreaThumbProps }
