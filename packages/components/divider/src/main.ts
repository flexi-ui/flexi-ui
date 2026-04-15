import type { ComponentProps } from 'react'

import { DividerRoot } from './divider'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Divider = Object.assign(DividerRoot, {
  Root: DividerRoot,
})

export type Divider = {
  Props: ComponentProps<typeof DividerRoot>
  RootProps: ComponentProps<typeof DividerRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { DividerRoot }
export type { DividerRootProps, DividerRootProps as DividerProps } from './divider'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { dividerVariants } from '@flexi-ui/styles'
export type { DividerVariants } from '@flexi-ui/styles'
