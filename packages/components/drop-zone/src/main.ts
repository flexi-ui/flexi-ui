import type { ComponentProps } from 'react'

import { DropZoneRoot } from './drop-zone'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const DropZone = Object.assign(DropZoneRoot, {
  Root: DropZoneRoot,
})

export type DropZone = {
  Props: ComponentProps<typeof DropZoneRoot>
  RootProps: ComponentProps<typeof DropZoneRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { DropZoneRoot }
export type { DropZoneRootProps, DropZoneRootProps as DropZoneProps } from './drop-zone'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { dropZoneVariants } from '@flexi-ui/styles'
export type { DropZoneVariants } from '@flexi-ui/styles'
