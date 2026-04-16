import type { ComponentProps } from 'react'

import { TextareaRoot } from './textarea'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Textarea = Object.assign(TextareaRoot, {
  Root: TextareaRoot,
})

export type Textarea = {
  Props: ComponentProps<typeof TextareaRoot>
  RootProps: ComponentProps<typeof TextareaRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { TextareaRoot }
export type { TextareaRootProps, TextareaRootProps as TextareaProps } from './textarea'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { textareaVariants } from '@flexi-ui/styles'
export type { TextareaVariants } from '@flexi-ui/styles'
