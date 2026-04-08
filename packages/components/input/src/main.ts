import type { ComponentProps } from 'react'

import { InputRoot } from './input'
import { TextAreaRoot } from './textarea'

/* -------------------------------------------------------------------------------------------------
 * Compound Components
 * -----------------------------------------------------------------------------------------------*/
export const Input = Object.assign(InputRoot, {
  Root: InputRoot,
})

export const TextArea = Object.assign(TextAreaRoot, {
  Root: TextAreaRoot,
})

export type Input = {
  Props: ComponentProps<typeof InputRoot>
  RootProps: ComponentProps<typeof InputRoot>
}

export type TextArea = {
  Props: ComponentProps<typeof TextAreaRoot>
  RootProps: ComponentProps<typeof TextAreaRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { InputRoot }
export type { InputRootProps, InputRootProps as InputProps } from './input'

export { TextAreaRoot }
export type { TextAreaRootProps, TextAreaRootProps as TextAreaProps } from './textarea'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { inputVariants } from '@flexi-ui/styles'
export type { InputVariants } from '@flexi-ui/styles'
