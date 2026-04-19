import type { ComponentProps } from 'react'

import { VisuallyHiddenRoot } from './visually-hidden'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const VisuallyHidden = Object.assign(VisuallyHiddenRoot, {
  Root: VisuallyHiddenRoot,
})

export type VisuallyHidden = {
  Props: ComponentProps<typeof VisuallyHiddenRoot>
  RootProps: ComponentProps<typeof VisuallyHiddenRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { VisuallyHiddenRoot }
export type { VisuallyHiddenRootProps, VisuallyHiddenRootProps as VisuallyHiddenProps } from './visually-hidden'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { visuallyHiddenVariants } from '@flexi-ui/styles'
