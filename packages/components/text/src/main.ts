import type { ComponentProps } from 'react'

import { TextRoot } from './text'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Text = Object.assign(TextRoot, {
  Root: TextRoot,
})

export type Text = {
  Props: ComponentProps<typeof TextRoot>
  RootProps: ComponentProps<typeof TextRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { TextRoot }
export type { TextRootProps, TextRootProps as TextProps } from './text'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { textVariants } from '@flexi-ui/styles'
export type { TextVariants } from '@flexi-ui/styles'
