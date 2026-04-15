import type { ComponentProps } from 'react'

import { DropdownItem, DropdownMenu, DropdownSection, DropdownSeparator, DropdownTrigger } from './dropdown'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Dropdown = Object.assign(DropdownTrigger, {
  Trigger: DropdownTrigger,
  Menu: DropdownMenu,
  Item: DropdownItem,
  Section: DropdownSection,
  Separator: DropdownSeparator,
})

export type Dropdown = {
  Props: ComponentProps<typeof DropdownTrigger>
  TriggerProps: ComponentProps<typeof DropdownTrigger>
  MenuProps: ComponentProps<typeof DropdownMenu>
  ItemProps: ComponentProps<typeof DropdownItem>
  SectionProps: ComponentProps<typeof DropdownSection>
  SeparatorProps: ComponentProps<typeof DropdownSeparator>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection, DropdownSeparator }
export type {
  DropdownTriggerProps,
  DropdownTriggerProps as DropdownProps,
  DropdownMenuProps,
  DropdownItemProps,
  DropdownSectionProps,
  DropdownSeparatorProps,
} from './dropdown'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { dropdownVariants, dropdownItemVariants } from '@flexi-ui/styles'
export type { DropdownVariants, DropdownItemVariants } from '@flexi-ui/styles'
