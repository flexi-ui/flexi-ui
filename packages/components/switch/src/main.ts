import type { ComponentProps } from 'react'

import { SwitchRoot } from './switch'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Switch = Object.assign(SwitchRoot, {
  Root: SwitchRoot,
})

export type Switch = {
  Props: ComponentProps<typeof SwitchRoot>
  RootProps: ComponentProps<typeof SwitchRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { SwitchRoot }
export type { SwitchRootProps, SwitchRootProps as SwitchProps } from './switch'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { switchVariants } from '@flexi-ui/styles'
export type { SwitchVariants } from '@flexi-ui/styles'
