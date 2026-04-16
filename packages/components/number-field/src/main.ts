import type { ComponentProps } from 'react'

import { NumberFieldRoot } from './number-field'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const NumberField = Object.assign(NumberFieldRoot, {
  Root: NumberFieldRoot,
})

export type NumberField = {
  Props: ComponentProps<typeof NumberFieldRoot>
  RootProps: ComponentProps<typeof NumberFieldRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { NumberFieldRoot }
export type { NumberFieldRootProps, NumberFieldRootProps as NumberFieldProps } from './number-field'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { numberFieldVariants } from '@flexi-ui/styles'
export type { NumberFieldVariants } from '@flexi-ui/styles'
