import type { ComponentProps } from 'react'

import { RippleRoot } from './ripple'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Ripple = Object.assign(RippleRoot, {
  Root: RippleRoot,
})

export type Ripple = {
  Props: ComponentProps<typeof RippleRoot>
  RootProps: ComponentProps<typeof RippleRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { RippleRoot, useRipple } from './ripple'
export type { RippleProps, RippleType } from './ripple'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { rippleVariants } from '@flexi-ui/styles'
export type { RippleVariants } from '@flexi-ui/styles'
