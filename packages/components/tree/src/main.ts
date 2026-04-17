import type { ComponentProps } from 'react'

import { TreeItemContentRoot, TreeItemRoot, TreeRoot } from './tree'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Tree = Object.assign(TreeRoot, {
  Root: TreeRoot,
  Item: TreeItemRoot,
  ItemContent: TreeItemContentRoot,
})

export type Tree = {
  Props: ComponentProps<typeof TreeRoot>
  RootProps: ComponentProps<typeof TreeRoot>
  ItemProps: ComponentProps<typeof TreeItemRoot>
  ItemContentProps: ComponentProps<typeof TreeItemContentRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { TreeRoot, TreeItemRoot, TreeItemContentRoot }
export type {
  TreeRootProps,
  TreeRootProps as TreeProps,
  TreeItemRootProps,
  TreeItemContentRootProps,
} from './tree'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { treeVariants } from '@flexi-ui/styles'
export type { TreeVariants } from '@flexi-ui/styles'
