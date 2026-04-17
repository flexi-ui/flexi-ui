'use client'

import type { MenuVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'
import type React from 'react'

import { menuVariants } from '@flexi-ui/styles'
import {
  Header as HeaderPrimitive,
  Menu as MenuPrimitive,
  MenuItem as MenuItemPrimitive,
  MenuTrigger as MenuTriggerPrimitive,
  Popover as PopoverPrimitive,
  Section as SectionPrimitive,
  Separator as SeparatorPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * Menu Root
 * -----------------------------------------------------------------------------------------------*/
interface MenuRootProps extends Omit<ComponentPropsWithRef<typeof MenuPrimitive>, 'children'>, MenuVariants {
  children?: React.ReactNode
}

const MenuRoot = ({ className, size, ...rest }: MenuRootProps) => {
  const styles = menuVariants({ size })

  return (
    <MenuPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="menu"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Menu Trigger
 * -----------------------------------------------------------------------------------------------*/
interface MenuTriggerRootProps extends ComponentPropsWithRef<typeof MenuTriggerPrimitive> {}

const MenuTriggerRoot = (props: MenuTriggerRootProps) => {
  return <MenuTriggerPrimitive {...props} />
}

/* -------------------------------------------------------------------------------------------------
 * Menu Popover
 * -----------------------------------------------------------------------------------------------*/
interface MenuPopoverProps extends ComponentPropsWithRef<typeof PopoverPrimitive> {}

const MenuPopover = ({ className, ...rest }: MenuPopoverProps) => {
  return (
    <PopoverPrimitive
      className={(renderProps) =>
        cx('menu__popover', typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="menu-popover"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Menu Item
 * -----------------------------------------------------------------------------------------------*/
interface MenuItemProps extends ComponentPropsWithRef<typeof MenuItemPrimitive> {}

const MenuItemRoot = ({ className, ...rest }: MenuItemProps) => {
  return (
    <MenuItemPrimitive
      className={(renderProps) =>
        cx('menu__item', typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="menu-item"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Menu Separator
 * -----------------------------------------------------------------------------------------------*/
interface MenuSeparatorProps extends ComponentPropsWithRef<typeof SeparatorPrimitive> {}

const MenuSeparator = ({ className, ...rest }: MenuSeparatorProps) => {
  return (
    <SeparatorPrimitive
      className={cx('menu__separator', className) ?? ''}
      data-slot="menu-separator"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Menu Section
 * -----------------------------------------------------------------------------------------------*/
interface MenuSectionProps extends ComponentPropsWithRef<typeof SectionPrimitive> {}

const MenuSection = ({ className, ...rest }: MenuSectionProps) => {
  return (
    <SectionPrimitive
      className={cx('menu__section', className) ?? ''}
      data-slot="menu-section"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Menu Header
 * -----------------------------------------------------------------------------------------------*/
interface MenuHeaderProps extends ComponentPropsWithRef<typeof HeaderPrimitive> {}

const MenuHeader = ({ className, ...rest }: MenuHeaderProps) => {
  return (
    <HeaderPrimitive
      className={cx('menu__header', className) ?? ''}
      data-slot="menu-header"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { MenuRoot, MenuTriggerRoot, MenuPopover, MenuItemRoot, MenuSeparator, MenuSection, MenuHeader }
export type { MenuRootProps, MenuTriggerRootProps, MenuPopoverProps, MenuItemProps, MenuSeparatorProps, MenuSectionProps, MenuHeaderProps }
