'use client'

import type { CheckboxGroupVariants, CheckboxVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { checkboxGroupVariants, checkboxVariants } from '@flexi-ui/styles'
import {
  Checkbox as CheckboxPrimitive,
  CheckboxGroup as CheckboxGroupPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * Checkbox Root
 * -----------------------------------------------------------------------------------------------*/
interface CheckboxRootProps
  extends Omit<ComponentPropsWithRef<typeof CheckboxPrimitive>, 'color'>,
    CheckboxVariants {}

const CheckboxRoot = ({
  children,
  className,
  color,
  size,
  ...rest
}: CheckboxRootProps) => {
  return (
    <CheckboxPrimitive
      className={(renderProps) => {
        const styles = checkboxVariants({
          color,
          isDisabled: renderProps.isDisabled,
          isIndeterminate: renderProps.isIndeterminate,
          isSelected: renderProps.isSelected,
          size,
        })

        return cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }}
      data-slot="checkbox"
      {...rest}
    >
      {(renderProps) => (
        <>
          <span className="checkbox__box">
            <span className="checkbox__icon" />
          </span>
          {typeof children === 'function' ? children(renderProps) : children}
        </>
      )}
    </CheckboxPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Checkbox Group
 * -----------------------------------------------------------------------------------------------*/
interface CheckboxGroupRootProps
  extends ComponentPropsWithRef<typeof CheckboxGroupPrimitive>,
    CheckboxGroupVariants {}

const CheckboxGroupRoot = ({
  className,
  children,
  ...rest
}: CheckboxGroupRootProps) => {
  const styles = checkboxGroupVariants()

  return (
    <CheckboxGroupPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="checkbox-group"
      {...rest}
    >
      {children}
    </CheckboxGroupPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { CheckboxRoot, CheckboxGroupRoot }
export type { CheckboxRootProps, CheckboxGroupRootProps }
