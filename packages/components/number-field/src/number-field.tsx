'use client'

import type { NumberFieldVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'
import type React from 'react'

import { numberFieldVariants } from '@flexi-ui/styles'
import {
  Button as ButtonPrimitive,
  Group as GroupPrimitive,
  Input as InputPrimitive,
  Label as LabelPrimitive,
  NumberField as NumberFieldPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * NumberField Root
 * -----------------------------------------------------------------------------------------------*/
interface NumberFieldRootProps extends Omit<ComponentPropsWithRef<typeof NumberFieldPrimitive>, 'children'>, NumberFieldVariants {
  children?: React.ReactNode
  label?: string
}

const NumberFieldRoot = ({
  children,
  className,
  label,
  size,
  ...rest
}: NumberFieldRootProps) => {
  const styles = numberFieldVariants({ size })

  return (
    <NumberFieldPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="number-field"
      {...rest}
    >
      {() => (
        <>
          {label && <LabelPrimitive className="number-field__label">{label}</LabelPrimitive>}
          <GroupPrimitive className="number-field__group">
            <ButtonPrimitive className="number-field__button" slot="decrement">-</ButtonPrimitive>
            <InputPrimitive className="number-field__input" />
            <ButtonPrimitive className="number-field__button" slot="increment">+</ButtonPrimitive>
          </GroupPrimitive>
          {children}
        </>
      )}
    </NumberFieldPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { NumberFieldRoot }
export type { NumberFieldRootProps }
