import type { ComponentProps } from 'react'

import { ColorSliderRoot } from './color-slider'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const ColorSlider = Object.assign(ColorSliderRoot, {
  Root: ColorSliderRoot,
})

export type ColorSlider = {
  Props: ComponentProps<typeof ColorSliderRoot>
  RootProps: ComponentProps<typeof ColorSliderRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { ColorSliderRoot }
export type { ColorSliderRootProps, ColorSliderRootProps as ColorSliderProps } from './color-slider'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { colorSliderVariants } from '@flexi-ui/styles'
export type { ColorSliderVariants } from '@flexi-ui/styles'
