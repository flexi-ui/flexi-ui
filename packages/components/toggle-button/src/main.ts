import type { ComponentProps } from 'react'

import { ToggleButtonGroupRoot, ToggleButtonRoot } from './toggle-button'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const ToggleButton = Object.assign(ToggleButtonRoot, {
  Root: ToggleButtonRoot,
  Group: ToggleButtonGroupRoot,
})

export type ToggleButton = {
  Props: ComponentProps<typeof ToggleButtonRoot>
  RootProps: ComponentProps<typeof ToggleButtonRoot>
  GroupProps: ComponentProps<typeof ToggleButtonGroupRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { ToggleButtonRoot, ToggleButtonGroupRoot }
export type {
  ToggleButtonRootProps,
  ToggleButtonRootProps as ToggleButtonProps,
  ToggleButtonGroupRootProps,
  ToggleButtonGroupRootProps as ToggleButtonGroupProps,
} from './toggle-button'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { toggleButtonVariants, toggleButtonGroupVariants } from '@flexi-ui/styles'
export type { ToggleButtonVariants, ToggleButtonGroupVariants } from '@flexi-ui/styles'
