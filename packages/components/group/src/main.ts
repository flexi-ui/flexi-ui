import type { ComponentProps } from 'react'

import { GroupRoot } from './group'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Group = Object.assign(GroupRoot, {
  Root: GroupRoot,
})

export type Group = {
  Props: ComponentProps<typeof GroupRoot>
  RootProps: ComponentProps<typeof GroupRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { GroupRoot }
export type { GroupRootProps, GroupRootProps as GroupProps } from './group'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { groupVariants } from '@flexi-ui/styles'
export type { GroupVariants } from '@flexi-ui/styles'
