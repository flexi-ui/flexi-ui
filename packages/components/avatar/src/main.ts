import type { ComponentProps } from 'react'

import { AvatarRoot } from './avatar'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Avatar = Object.assign(AvatarRoot, {
  Root: AvatarRoot,
})

export type Avatar = {
  Props: ComponentProps<typeof AvatarRoot>
  RootProps: ComponentProps<typeof AvatarRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { AvatarRoot }
export type { AvatarRootProps, AvatarRootProps as AvatarProps } from './avatar'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { avatarVariants } from '@flexi-ui/styles'
export type { AvatarVariants } from '@flexi-ui/styles'
