import type { ComponentProps } from 'react'

import { BadgeRoot } from './badge'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Badge = Object.assign(BadgeRoot, {
  Root: BadgeRoot,
})

export type Badge = {
  Props: ComponentProps<typeof BadgeRoot>
  RootProps: ComponentProps<typeof BadgeRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { BadgeRoot }
export type { BadgeRootProps, BadgeRootProps as BadgeProps } from './badge'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { badgeVariants } from '@flexi-ui/styles'
export type { BadgeVariants } from '@flexi-ui/styles'
