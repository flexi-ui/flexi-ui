import type { ComponentProps } from 'react'

import { TimeFieldRoot } from './time-field'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const TimeField = Object.assign(TimeFieldRoot, {
  Root: TimeFieldRoot,
})

export type TimeField = {
  Props: ComponentProps<typeof TimeFieldRoot>
  RootProps: ComponentProps<typeof TimeFieldRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { TimeFieldRoot }
export type { TimeFieldRootProps, TimeFieldRootProps as TimeFieldProps } from './time-field'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { timeFieldVariants } from '@flexi-ui/styles'
export type { TimeFieldVariants } from '@flexi-ui/styles'
