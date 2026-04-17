import type { ComponentProps } from 'react'

import { ComboBoxListbox, ComboBoxOption, ComboBoxPopover, ComboBoxRoot } from './combo-box'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const ComboBox = Object.assign(ComboBoxRoot, {
  Root: ComboBoxRoot,
  Popover: ComboBoxPopover,
  Listbox: ComboBoxListbox,
  Option: ComboBoxOption,
})

export type ComboBox = {
  Props: ComponentProps<typeof ComboBoxRoot>
  RootProps: ComponentProps<typeof ComboBoxRoot>
  PopoverProps: ComponentProps<typeof ComboBoxPopover>
  ListboxProps: ComponentProps<typeof ComboBoxListbox>
  OptionProps: ComponentProps<typeof ComboBoxOption>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { ComboBoxRoot, ComboBoxPopover, ComboBoxListbox, ComboBoxOption }
export type {
  ComboBoxRootProps,
  ComboBoxRootProps as ComboBoxProps,
  ComboBoxPopoverProps,
  ComboBoxListboxProps,
  ComboBoxOptionProps,
} from './combo-box'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { comboBoxVariants } from '@flexi-ui/styles'
export type { ComboBoxVariants } from '@flexi-ui/styles'
