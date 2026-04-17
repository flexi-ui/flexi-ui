import type { ComponentProps } from 'react'

import { GridListItemRoot, GridListRoot } from './grid-list'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const GridList = Object.assign(GridListRoot, {
  Root: GridListRoot,
  Item: GridListItemRoot,
})

export type GridList = {
  Props: ComponentProps<typeof GridListRoot>
  RootProps: ComponentProps<typeof GridListRoot>
  ItemProps: ComponentProps<typeof GridListItemRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { GridListRoot, GridListItemRoot }
export type {
  GridListRootProps,
  GridListRootProps as GridListProps,
  GridListItemRootProps,
} from './grid-list'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { gridListVariants } from '@flexi-ui/styles'
export type { GridListVariants } from '@flexi-ui/styles'
