import type { ComponentProps } from 'react'

import { DropIndicatorRoot } from './drop-indicator'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const DropIndicator = Object.assign(DropIndicatorRoot, {
  Root: DropIndicatorRoot,
})

export type DropIndicator = {
  Props: ComponentProps<typeof DropIndicatorRoot>
  RootProps: ComponentProps<typeof DropIndicatorRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { DropIndicatorRoot }
export type { DropIndicatorRootProps, DropIndicatorRootProps as DropIndicatorProps } from './drop-indicator'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { dropIndicatorVariants } from '@flexi-ui/styles'
export type { DropIndicatorVariants } from '@flexi-ui/styles'
