import type { ComponentProps } from 'react'

import { ButtonRoot } from './button'
import { ButtonGroupRoot } from './button-group'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Button = Object.assign(ButtonRoot, {
  Root: ButtonRoot,
})

export const ButtonGroup = Object.assign(ButtonGroupRoot, {
  Root: ButtonGroupRoot,
})

export type Button = {
  Props: ComponentProps<typeof ButtonRoot>
  RootProps: ComponentProps<typeof ButtonRoot>
}

export type ButtonGroup = {
  Props: ComponentProps<typeof ButtonGroupRoot>
  RootProps: ComponentProps<typeof ButtonGroupRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { ButtonRoot }
export type { ButtonRootProps, ButtonRootProps as ButtonProps } from './button'

export { ButtonGroupRoot, ButtonGroupContext } from './button-group'
export type { ButtonGroupRootProps, ButtonGroupRootProps as ButtonGroupProps } from './button-group'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { buttonVariants, buttonGroupVariants } from '@flexi-ui/styles'
export type { ButtonVariants, ButtonGroupVariants } from '@flexi-ui/styles'
