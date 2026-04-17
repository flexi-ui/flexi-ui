import type { ComponentProps } from 'react'

import { MeterRoot } from './meter'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Meter = Object.assign(MeterRoot, {
  Root: MeterRoot,
})

export type Meter = {
  Props: ComponentProps<typeof MeterRoot>
  RootProps: ComponentProps<typeof MeterRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { MeterRoot }
export type { MeterRootProps, MeterRootProps as MeterProps } from './meter'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { meterVariants } from '@flexi-ui/styles'
export type { MeterVariants } from '@flexi-ui/styles'
