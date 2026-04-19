import type { ComponentProps } from 'react'

import { HeadingRoot } from './heading'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Heading = Object.assign(HeadingRoot, {
  Root: HeadingRoot,
})

export type Heading = {
  Props: ComponentProps<typeof HeadingRoot>
  RootProps: ComponentProps<typeof HeadingRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { HeadingRoot }
export type { HeadingRootProps, HeadingRootProps as HeadingProps } from './heading'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { headingVariants } from '@flexi-ui/styles'
export type { HeadingVariants } from '@flexi-ui/styles'
