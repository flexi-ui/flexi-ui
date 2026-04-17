'use client'

import type { ToolbarVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { toolbarVariants } from '@flexi-ui/styles'
import {
  Group as GroupPrimitive,
  Separator as SeparatorPrimitive,
  Toolbar as ToolbarPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * Toolbar Root
 * -----------------------------------------------------------------------------------------------*/
interface ToolbarRootProps extends ComponentPropsWithRef<typeof ToolbarPrimitive>, ToolbarVariants {}

const ToolbarRoot = ({ className, orientation, ...rest }: ToolbarRootProps) => {
  const styles = toolbarVariants({ orientation })

  return (
    <ToolbarPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="toolbar"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Toolbar Separator
 * -----------------------------------------------------------------------------------------------*/
interface ToolbarSeparatorProps extends ComponentPropsWithRef<typeof SeparatorPrimitive> {}

const ToolbarSeparator = ({ className, ...rest }: ToolbarSeparatorProps) => {
  return (
    <SeparatorPrimitive
      className={cx('toolbar__separator', className) ?? ''}
      data-slot="toolbar-separator"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Toolbar Group
 * -----------------------------------------------------------------------------------------------*/
interface ToolbarGroupProps extends ComponentPropsWithRef<typeof GroupPrimitive> {}

const ToolbarGroup = ({ className, ...rest }: ToolbarGroupProps) => {
  return (
    <GroupPrimitive
      className={(renderProps) =>
        cx('toolbar__group', typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="toolbar-group"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { ToolbarRoot, ToolbarSeparator, ToolbarGroup }
export type { ToolbarRootProps, ToolbarSeparatorProps, ToolbarGroupProps }
