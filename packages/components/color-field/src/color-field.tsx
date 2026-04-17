'use client'

import type { ColorFieldVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'
import type React from 'react'

import { colorFieldVariants } from '@flexi-ui/styles'
import {
  ColorField as ColorFieldPrimitive,
  Input as InputPrimitive,
  Label as LabelPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * ColorField Root
 * -----------------------------------------------------------------------------------------------*/
interface ColorFieldRootProps
  extends Omit<ComponentPropsWithRef<typeof ColorFieldPrimitive>, 'children'>,
    ColorFieldVariants {
  children?: React.ReactNode
  label?: string
}

const ColorFieldRoot = ({ children, className, label, size, ...rest }: ColorFieldRootProps) => {
  const styles = colorFieldVariants({ size })

  return (
    <ColorFieldPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="color-field"
      {...rest}
    >
      {() => (
        <>
          {label && <LabelPrimitive className="color-field__label">{label}</LabelPrimitive>}
          <InputPrimitive className="color-field__input" />
          {children}
        </>
      )}
    </ColorFieldPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { ColorFieldRoot }
export type { ColorFieldRootProps }
