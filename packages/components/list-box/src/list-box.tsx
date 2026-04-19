'use client'

import type { ListBoxVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'
import type React from 'react'

import { listBoxVariants } from '@flexi-ui/styles'
import {
  Header as HeaderPrimitive,
  ListBox as ListBoxPrimitive,
  ListBoxItem as ListBoxItemPrimitive,
  ListBoxSection as ListBoxSectionPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * ListBox Root
 * -----------------------------------------------------------------------------------------------*/
interface ListBoxRootProps
  extends Omit<ComponentPropsWithRef<typeof ListBoxPrimitive>, 'children'>,
    ListBoxVariants {
  children?: React.ReactNode
}

const ListBoxRoot = ({ children, className, size, ...rest }: ListBoxRootProps) => {
  const styles = listBoxVariants({ size })

  return (
    <ListBoxPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="list-box"
      {...rest}
    >
      {children}
    </ListBoxPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * ListBox Item
 * -----------------------------------------------------------------------------------------------*/
interface ListBoxItemProps extends ComponentPropsWithRef<typeof ListBoxItemPrimitive> {}

const ListBoxItem = ({ className, ...rest }: ListBoxItemProps) => {
  return (
    <ListBoxItemPrimitive
      className={(renderProps) =>
        cx('list-box__item', typeof className === 'function' ? className(renderProps) : className) ??
        ''
      }
      data-slot="list-box-item"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * ListBox Section
 * -----------------------------------------------------------------------------------------------*/
interface ListBoxSectionProps extends ComponentPropsWithRef<typeof ListBoxSectionPrimitive> {}

const ListBoxSection = ({ className, ...rest }: ListBoxSectionProps) => {
  return (
    <ListBoxSectionPrimitive
      className={cx('list-box__section', className as string) ?? ''}
      data-slot="list-box-section"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * ListBox Header
 * -----------------------------------------------------------------------------------------------*/
interface ListBoxHeaderProps extends ComponentPropsWithRef<typeof HeaderPrimitive> {}

const ListBoxHeader = ({ className, ...rest }: ListBoxHeaderProps) => {
  return (
    <HeaderPrimitive
      className={cx('list-box__header', className) ?? ''}
      data-slot="list-box-header"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { ListBoxHeader, ListBoxItem, ListBoxRoot, ListBoxSection }
export type { ListBoxHeaderProps, ListBoxItemProps, ListBoxRootProps, ListBoxSectionProps }
