import type { ComponentProps } from 'react'

import { ColorWheelRoot } from './color-wheel'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const ColorWheel = Object.assign(ColorWheelRoot, {
  Root: ColorWheelRoot,
})

export type ColorWheel = {
  Props: ComponentProps<typeof ColorWheelRoot>
  RootProps: ComponentProps<typeof ColorWheelRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { ColorWheelRoot }
export type { ColorWheelRootProps, ColorWheelRootProps as ColorWheelProps } from './color-wheel'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { colorWheelVariants } from '@flexi-ui/styles'
export type { ColorWheelVariants } from '@flexi-ui/styles'
