'use client'

import type { TreeVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { treeVariants } from '@flexi-ui/styles'
import {
  Tree as TreePrimitive,
  TreeItem as TreeItemPrimitive,
  TreeItemContent as TreeItemContentPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * Tree Root
 * -----------------------------------------------------------------------------------------------*/
interface TreeRootProps extends ComponentPropsWithRef<typeof TreePrimitive>, TreeVariants {}

const TreeRoot = ({ className, ...rest }: TreeRootProps) => {
  const styles = treeVariants()

  return (
    <TreePrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="tree"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Tree Item
 * -----------------------------------------------------------------------------------------------*/
interface TreeItemRootProps extends ComponentPropsWithRef<typeof TreeItemPrimitive> {}

const TreeItemRoot = ({ className, ...rest }: TreeItemRootProps) => {
  return (
    <TreeItemPrimitive
      className={(renderProps) =>
        cx('tree__item', typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="tree-item"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Tree Item Content
 * -----------------------------------------------------------------------------------------------*/
interface TreeItemContentRootProps extends ComponentPropsWithRef<typeof TreeItemContentPrimitive> {}

const TreeItemContentRoot = (props: TreeItemContentRootProps) => {
  return <TreeItemContentPrimitive {...props} />
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { TreeRoot, TreeItemRoot, TreeItemContentRoot }
export type { TreeRootProps, TreeItemRootProps, TreeItemContentRootProps }
