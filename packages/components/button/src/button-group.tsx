'use client'

import type { ButtonGroupVariants, ButtonVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { buttonGroupVariants } from '@flexi-ui/styles'
import { createContext } from 'react'

/* -------------------------------------------------------------------------------------------------
 * ButtonGroup Context
 * -----------------------------------------------------------------------------------------------*/
interface ButtonGroupContextValue {
  size?: ButtonVariants['size']
  variant?: ButtonVariants['variant']
  isDisabled?: boolean
  fullWidth?: ButtonVariants['fullWidth']
}

export const ButtonGroupContext = createContext<ButtonGroupContextValue | null>(null)

/* -------------------------------------------------------------------------------------------------
 * ButtonGroup Root
 * -----------------------------------------------------------------------------------------------*/
interface ButtonGroupRootProps
  extends Omit<ComponentPropsWithRef<'div'>, 'size'>,
    ButtonGroupVariants {
  size?: ButtonVariants['size']
  variant?: ButtonVariants['variant']
  isDisabled?: boolean
}

const ButtonGroupRoot = ({
  children,
  className,
  fullWidth,
  size,
  variant,
  isDisabled,
  ...rest
}: ButtonGroupRootProps) => {
  const styles = buttonGroupVariants({ className, fullWidth })

  return (
    <ButtonGroupContext.Provider value={{ size, variant, isDisabled, fullWidth }}>
      <div className={styles} data-slot="button-group" role="group" {...rest}>
        {children}
      </div>
    </ButtonGroupContext.Provider>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { ButtonGroupRoot }
export type { ButtonGroupRootProps }
