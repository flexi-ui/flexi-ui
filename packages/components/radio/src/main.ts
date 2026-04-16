import type { ComponentProps } from 'react'

import { RadioGroupRoot, RadioRoot } from './radio'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Radio = Object.assign(RadioRoot, {
  Root: RadioRoot,
  Group: RadioGroupRoot,
})

export type Radio = {
  Props: ComponentProps<typeof RadioRoot>
  RootProps: ComponentProps<typeof RadioRoot>
  GroupProps: ComponentProps<typeof RadioGroupRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { RadioGroupRoot, RadioRoot }
export type {
  RadioRootProps,
  RadioRootProps as RadioProps,
  RadioGroupRootProps,
  RadioGroupRootProps as RadioGroupProps,
} from './radio'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { radioVariants, radioGroupVariants } from '@flexi-ui/styles'
export type { RadioVariants, RadioGroupVariants } from '@flexi-ui/styles'
