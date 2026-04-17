import type { ComponentProps } from 'react'

import { ToolbarGroup, ToolbarRoot, ToolbarSeparator } from './toolbar'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Toolbar = Object.assign(ToolbarRoot, {
  Root: ToolbarRoot,
  Separator: ToolbarSeparator,
  Group: ToolbarGroup,
})

export type Toolbar = {
  Props: ComponentProps<typeof ToolbarRoot>
  RootProps: ComponentProps<typeof ToolbarRoot>
  SeparatorProps: ComponentProps<typeof ToolbarSeparator>
  GroupProps: ComponentProps<typeof ToolbarGroup>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { ToolbarRoot, ToolbarSeparator, ToolbarGroup }
export type {
  ToolbarRootProps,
  ToolbarRootProps as ToolbarProps,
  ToolbarSeparatorProps,
  ToolbarGroupProps,
} from './toolbar'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { toolbarVariants } from '@flexi-ui/styles'
export type { ToolbarVariants } from '@flexi-ui/styles'
