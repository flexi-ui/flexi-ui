import type { ComponentProps } from 'react'

import { TagGroupRoot, TagListRoot, TagRoot } from './tag-group'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const TagGroup = Object.assign(TagGroupRoot, {
  Root: TagGroupRoot,
  List: TagListRoot,
  Tag: TagRoot,
})

export type TagGroup = {
  Props: ComponentProps<typeof TagGroupRoot>
  RootProps: ComponentProps<typeof TagGroupRoot>
  ListProps: ComponentProps<typeof TagListRoot>
  TagProps: ComponentProps<typeof TagRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { TagGroupRoot, TagListRoot, TagRoot }
export type {
  TagGroupRootProps,
  TagGroupRootProps as TagGroupProps,
  TagListRootProps,
  TagRootProps,
} from './tag-group'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { tagGroupVariants } from '@flexi-ui/styles'
export type { TagGroupVariants } from '@flexi-ui/styles'
