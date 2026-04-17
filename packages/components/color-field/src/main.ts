import type { ComponentProps } from 'react'

import { ColorFieldRoot } from './color-field'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const ColorField = Object.assign(ColorFieldRoot, {
  Root: ColorFieldRoot,
})

export type ColorField = {
  Props: ComponentProps<typeof ColorFieldRoot>
  RootProps: ComponentProps<typeof ColorFieldRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { ColorFieldRoot }
export type { ColorFieldRootProps, ColorFieldRootProps as ColorFieldProps } from './color-field'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { colorFieldVariants } from '@flexi-ui/styles'
export type { ColorFieldVariants } from '@flexi-ui/styles'
