'use client'

import type { ToggleButtonGroupVariants, ToggleButtonVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { toggleButtonGroupVariants, toggleButtonVariants } from '@flexi-ui/styles'
import {
  ToggleButton as ToggleButtonPrimitive,
  ToggleButtonGroup as ToggleButtonGroupPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * ToggleButton Root
 * -----------------------------------------------------------------------------------------------*/
interface ToggleButtonRootProps extends ComponentPropsWithRef<typeof ToggleButtonPrimitive>, ToggleButtonVariants {}

const ToggleButtonRoot = ({ className, size, ...rest }: ToggleButtonRootProps) => {
  const styles = toggleButtonVariants({ size })

  return (
    <ToggleButtonPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="toggle-button"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * ToggleButton Group
 * -----------------------------------------------------------------------------------------------*/
interface ToggleButtonGroupRootProps extends ComponentPropsWithRef<typeof ToggleButtonGroupPrimitive>, ToggleButtonGroupVariants {}

const ToggleButtonGroupRoot = ({ className, orientation, ...rest }: ToggleButtonGroupRootProps) => {
  const styles = toggleButtonGroupVariants({ orientation })

  return (
    <ToggleButtonGroupPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="toggle-button-group"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { ToggleButtonRoot, ToggleButtonGroupRoot }
export type { ToggleButtonRootProps, ToggleButtonGroupRootProps }
