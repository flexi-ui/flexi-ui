'use client'

import type { DropdownItemVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { dropdownItemVariants, dropdownVariants } from '@flexi-ui/styles'
import {
  Menu as MenuPrimitive,
  MenuItem as MenuItemPrimitive,
  MenuTrigger as MenuTriggerPrimitive,
  Popover as PopoverPrimitive,
  Section as SectionPrimitive,
  Separator as SeparatorPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * Dropdown Trigger
 * -----------------------------------------------------------------------------------------------*/
interface DropdownTriggerProps extends ComponentPropsWithRef<typeof MenuTriggerPrimitive> {}

const DropdownTrigger = (props: DropdownTriggerProps) => {
  return <MenuTriggerPrimitive data-slot="dropdown-trigger" {...props} />
}

/* -------------------------------------------------------------------------------------------------
 * Dropdown Menu (Popover + Menu wrapper)
 * -----------------------------------------------------------------------------------------------*/
interface DropdownMenuProps extends ComponentPropsWithRef<typeof PopoverPrimitive> {}

const DropdownMenu = ({ className, children, ...rest }: DropdownMenuProps) => {
  const styles = dropdownVariants()

  return (
    <PopoverPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="dropdown"
      {...rest}
    >
      <MenuPrimitive>{children}</MenuPrimitive>
    </PopoverPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Dropdown Item
 * -----------------------------------------------------------------------------------------------*/
interface DropdownItemProps extends ComponentPropsWithRef<typeof MenuItemPrimitive>, DropdownItemVariants {}

const DropdownItem = ({ className, color, ...rest }: DropdownItemProps) => {
  const styles = dropdownItemVariants({ color })

  return (
    <MenuItemPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="dropdown-item"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Dropdown Section
 * -----------------------------------------------------------------------------------------------*/
interface DropdownSectionProps extends ComponentPropsWithRef<typeof SectionPrimitive> {}

const DropdownSection = ({ className, ...rest }: DropdownSectionProps) => {
  return (
    <SectionPrimitive
      className={`dropdown__section${className ? ` ${className}` : ''}`}
      data-slot="dropdown-section"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Dropdown Separator
 * -----------------------------------------------------------------------------------------------*/
interface DropdownSeparatorProps extends ComponentPropsWithRef<typeof SeparatorPrimitive> {}

const DropdownSeparator = ({ className, ...rest }: DropdownSeparatorProps) => {
  return (
    <SeparatorPrimitive
      className={`dropdown__separator${className ? ` ${className}` : ''}`}
      data-slot="dropdown-separator"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection, DropdownSeparator }
export type {
  DropdownTriggerProps,
  DropdownMenuProps,
  DropdownItemProps,
  DropdownSectionProps,
  DropdownSeparatorProps,
}
