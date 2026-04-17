'use client'

import type { GridListVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { gridListVariants } from '@flexi-ui/styles'
import {
  GridList as GridListPrimitive,
  GridListItem as GridListItemPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * GridList Root
 * -----------------------------------------------------------------------------------------------*/
interface GridListRootProps extends ComponentPropsWithRef<typeof GridListPrimitive>, GridListVariants {}

const GridListRoot = ({ className, size, ...rest }: GridListRootProps) => {
  const styles = gridListVariants({ size })

  return (
    <GridListPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="grid-list"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * GridList Item
 * -----------------------------------------------------------------------------------------------*/
interface GridListItemRootProps extends ComponentPropsWithRef<typeof GridListItemPrimitive> {}

const GridListItemRoot = ({ className, ...rest }: GridListItemRootProps) => {
  return (
    <GridListItemPrimitive
      className={(renderProps) =>
        cx('grid-list__item', typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="grid-list-item"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { GridListRoot, GridListItemRoot }
export type { GridListRootProps, GridListItemRootProps }
