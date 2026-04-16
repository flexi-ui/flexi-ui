import type { ComponentProps } from 'react'

import { SelectListbox, SelectOption, SelectPopover, SelectRoot, SelectTrigger } from './select'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Select = Object.assign(SelectRoot, {
  Root: SelectRoot,
  Trigger: SelectTrigger,
  Popover: SelectPopover,
  Listbox: SelectListbox,
  Option: SelectOption,
})

export type Select = {
  Props: ComponentProps<typeof SelectRoot>
  RootProps: ComponentProps<typeof SelectRoot>
  TriggerProps: ComponentProps<typeof SelectTrigger>
  PopoverProps: ComponentProps<typeof SelectPopover>
  ListboxProps: ComponentProps<typeof SelectListbox>
  OptionProps: ComponentProps<typeof SelectOption>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { SelectRoot, SelectTrigger, SelectPopover, SelectListbox, SelectOption }
export type {
  SelectRootProps,
  SelectRootProps as SelectProps,
  SelectTriggerProps,
  SelectPopoverProps,
  SelectListboxProps,
  SelectOptionProps,
} from './select'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { selectVariants } from '@flexi-ui/styles'
export type { SelectVariants } from '@flexi-ui/styles'
