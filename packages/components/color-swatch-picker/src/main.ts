import type { ComponentProps } from 'react'

import { ColorSwatchPickerItemRoot, ColorSwatchPickerRoot } from './color-swatch-picker'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const ColorSwatchPicker = Object.assign(ColorSwatchPickerRoot, {
  Root: ColorSwatchPickerRoot,
  Item: ColorSwatchPickerItemRoot,
})

export type ColorSwatchPicker = {
  Props: ComponentProps<typeof ColorSwatchPickerRoot>
  RootProps: ComponentProps<typeof ColorSwatchPickerRoot>
  ItemProps: ComponentProps<typeof ColorSwatchPickerItemRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { ColorSwatchPickerRoot, ColorSwatchPickerItemRoot }
export type {
  ColorSwatchPickerRootProps,
  ColorSwatchPickerRootProps as ColorSwatchPickerProps,
  ColorSwatchPickerItemRootProps,
} from './color-swatch-picker'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { colorSwatchPickerVariants } from '@flexi-ui/styles'
export type { ColorSwatchPickerVariants } from '@flexi-ui/styles'
