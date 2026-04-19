import type { ComponentProps } from 'react'

import { ListBoxHeader, ListBoxItem, ListBoxRoot, ListBoxSection } from './list-box'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const ListBox = Object.assign(ListBoxRoot, {
  Root: ListBoxRoot,
  Item: ListBoxItem,
  Section: ListBoxSection,
  Header: ListBoxHeader,
})

export type ListBox = {
  Props: ComponentProps<typeof ListBoxRoot>
  RootProps: ComponentProps<typeof ListBoxRoot>
  ItemProps: ComponentProps<typeof ListBoxItem>
  SectionProps: ComponentProps<typeof ListBoxSection>
  HeaderProps: ComponentProps<typeof ListBoxHeader>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { ListBoxHeader, ListBoxItem, ListBoxRoot, ListBoxSection }
export type {
  ListBoxHeaderProps,
  ListBoxItemProps,
  ListBoxRootProps,
  ListBoxRootProps as ListBoxProps,
  ListBoxSectionProps,
} from './list-box'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { listBoxVariants } from '@flexi-ui/styles'
export type { ListBoxVariants } from '@flexi-ui/styles'
