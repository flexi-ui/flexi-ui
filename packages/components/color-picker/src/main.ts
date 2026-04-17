import type { ComponentProps } from 'react'

import { ColorPickerRoot } from './color-picker'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const ColorPicker = Object.assign(ColorPickerRoot, {
  Root: ColorPickerRoot,
})

export type ColorPicker = {
  Props: ComponentProps<typeof ColorPickerRoot>
  RootProps: ComponentProps<typeof ColorPickerRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { ColorPickerRoot }
export type { ColorPickerRootProps, ColorPickerRootProps as ColorPickerProps } from './color-picker'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { colorPickerVariants } from '@flexi-ui/styles'
export type { ColorPickerVariants } from '@flexi-ui/styles'
