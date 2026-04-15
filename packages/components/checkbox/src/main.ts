import type { ComponentProps } from 'react'

import { CheckboxGroupRoot, CheckboxRoot } from './checkbox'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Checkbox = Object.assign(CheckboxRoot, {
  Root: CheckboxRoot,
  Group: CheckboxGroupRoot,
})

export type Checkbox = {
  Props: ComponentProps<typeof CheckboxRoot>
  RootProps: ComponentProps<typeof CheckboxRoot>
  GroupProps: ComponentProps<typeof CheckboxGroupRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { CheckboxRoot, CheckboxGroupRoot }
export type {
  CheckboxRootProps,
  CheckboxRootProps as CheckboxProps,
  CheckboxGroupRootProps,
  CheckboxGroupRootProps as CheckboxGroupProps,
} from './checkbox'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { checkboxVariants, checkboxGroupVariants } from '@flexi-ui/styles'
export type { CheckboxVariants, CheckboxGroupVariants } from '@flexi-ui/styles'
