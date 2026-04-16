import type { ComponentProps } from 'react'

import { SliderRoot } from './slider'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Slider = Object.assign(SliderRoot, {
  Root: SliderRoot,
})

export type Slider = {
  Props: ComponentProps<typeof SliderRoot>
  RootProps: ComponentProps<typeof SliderRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { SliderRoot }
export type { SliderRootProps, SliderRootProps as SliderProps } from './slider'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { sliderVariants } from '@flexi-ui/styles'
export type { SliderVariants } from '@flexi-ui/styles'
