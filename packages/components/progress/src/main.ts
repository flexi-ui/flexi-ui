import type { ComponentProps } from 'react'

import { ProgressRoot } from './progress'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Progress = Object.assign(ProgressRoot, {
  Root: ProgressRoot,
})

export type Progress = {
  Props: ComponentProps<typeof ProgressRoot>
  RootProps: ComponentProps<typeof ProgressRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { ProgressRoot }
export type { ProgressRootProps, ProgressRootProps as ProgressProps } from './progress'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { progressVariants } from '@flexi-ui/styles'
export type { ProgressVariants } from '@flexi-ui/styles'
