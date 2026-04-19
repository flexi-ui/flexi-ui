import type { ComponentProps } from 'react'

import { KeyboardRoot } from './keyboard'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Keyboard = Object.assign(KeyboardRoot, {
  Root: KeyboardRoot,
})

export type Keyboard = {
  Props: ComponentProps<typeof KeyboardRoot>
  RootProps: ComponentProps<typeof KeyboardRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { KeyboardRoot }
export type { KeyboardRootProps, KeyboardRootProps as KeyboardProps } from './keyboard'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { keyboardVariants } from '@flexi-ui/styles'
export type { KeyboardVariants } from '@flexi-ui/styles'
