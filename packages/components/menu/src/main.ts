import type { ComponentProps } from 'react'

import { MenuHeader, MenuItemRoot, MenuPopover, MenuRoot, MenuSection, MenuSeparator, MenuTriggerRoot } from './menu'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Menu = Object.assign(MenuRoot, {
  Root: MenuRoot,
  Trigger: MenuTriggerRoot,
  Popover: MenuPopover,
  Item: MenuItemRoot,
  Separator: MenuSeparator,
  Section: MenuSection,
  Header: MenuHeader,
})

export type Menu = {
  Props: ComponentProps<typeof MenuRoot>
  RootProps: ComponentProps<typeof MenuRoot>
  TriggerProps: ComponentProps<typeof MenuTriggerRoot>
  PopoverProps: ComponentProps<typeof MenuPopover>
  ItemProps: ComponentProps<typeof MenuItemRoot>
  SeparatorProps: ComponentProps<typeof MenuSeparator>
  SectionProps: ComponentProps<typeof MenuSection>
  HeaderProps: ComponentProps<typeof MenuHeader>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { MenuRoot, MenuTriggerRoot, MenuPopover, MenuItemRoot, MenuSeparator, MenuSection, MenuHeader }
export type {
  MenuRootProps,
  MenuRootProps as MenuProps,
  MenuTriggerRootProps,
  MenuPopoverProps,
  MenuItemProps,
  MenuSeparatorProps,
  MenuSectionProps,
  MenuHeaderProps,
} from './menu'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { menuVariants } from '@flexi-ui/styles'
export type { MenuVariants } from '@flexi-ui/styles'
