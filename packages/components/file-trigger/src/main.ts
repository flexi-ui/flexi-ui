import type { ComponentProps } from 'react'

import { FileTriggerRoot } from './file-trigger'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const FileTrigger = Object.assign(FileTriggerRoot, {
  Root: FileTriggerRoot,
})

export type FileTrigger = {
  Props: ComponentProps<typeof FileTriggerRoot>
  RootProps: ComponentProps<typeof FileTriggerRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { FileTriggerRoot }
export type { FileTriggerRootProps, FileTriggerRootProps as FileTriggerProps } from './file-trigger'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { fileTriggerVariants } from '@flexi-ui/styles'
export type { FileTriggerVariants } from '@flexi-ui/styles'
