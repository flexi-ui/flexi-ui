'use client'

import type { RadioGroupVariants, RadioVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { radioGroupVariants, radioVariants } from '@flexi-ui/styles'
import {
  Radio as RadioPrimitive,
  RadioGroup as RadioGroupPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * Radio Group Root
 * -----------------------------------------------------------------------------------------------*/
interface RadioGroupRootProps extends ComponentPropsWithRef<typeof RadioGroupPrimitive>, RadioGroupVariants {}

const RadioGroupRoot = ({ className, orientation, ...rest }: RadioGroupRootProps) => {
  const styles = radioGroupVariants({ orientation })

  return (
    <RadioGroupPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="radio-group"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Radio
 * -----------------------------------------------------------------------------------------------*/
interface RadioRootProps extends Omit<ComponentPropsWithRef<typeof RadioPrimitive>, 'color'>, RadioVariants {}

const RadioRoot = ({ children, className, color, size, ...rest }: RadioRootProps) => {
  return (
    <RadioPrimitive
      className={(renderProps) => {
        const styles = radioVariants({
          color,
          isDisabled: renderProps.isDisabled,
          isSelected: renderProps.isSelected,
          size,
        })

        return cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }}
      data-slot="radio"
      {...rest}
    >
      {(renderProps) => (
        <>
          <span className="radio__circle">
            <span className="radio__dot" />
          </span>
          {typeof children === 'function' ? children(renderProps) : children}
        </>
      )}
    </RadioPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { RadioGroupRoot, RadioRoot }
export type { RadioGroupRootProps, RadioRootProps }
