'use client'

import type { TagGroupVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { tagGroupVariants } from '@flexi-ui/styles'
import {
  Button as ButtonPrimitive,
  Label as LabelPrimitive,
  Tag as TagPrimitive,
  TagGroup as TagGroupPrimitive,
  TagList as TagListPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * TagGroup Root
 * -----------------------------------------------------------------------------------------------*/
interface TagGroupRootProps extends ComponentPropsWithRef<typeof TagGroupPrimitive>, TagGroupVariants {
  label?: string
}

const TagGroupRoot = ({ className, color, label, size, ...rest }: TagGroupRootProps) => {
  const styles = tagGroupVariants({ color, size })

  return (
    <TagGroupPrimitive
      className={cx(styles, className) ?? ''}
      data-slot="tag-group"
      {...rest}
    >
      {label && <LabelPrimitive className="tag-group__label">{label}</LabelPrimitive>}
      {rest.children}
    </TagGroupPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * TagList
 * -----------------------------------------------------------------------------------------------*/
interface TagListRootProps extends ComponentPropsWithRef<typeof TagListPrimitive> {}

const TagListRoot = ({ className, ...rest }: TagListRootProps) => {
  return (
    <TagListPrimitive
      className={(renderProps) =>
        cx('tag-group__list', typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="tag-list"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Tag
 * -----------------------------------------------------------------------------------------------*/
interface TagRootProps extends ComponentPropsWithRef<typeof TagPrimitive> {}

const TagRoot = ({ children, className, ...rest }: TagRootProps) => {
  return (
    <TagPrimitive
      className={(renderProps) =>
        cx('tag-group__tag', typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="tag"
      {...rest}
    >
      {(renderProps) => (
        <>
          {typeof children === 'function' ? children(renderProps) : children}
          {renderProps.allowsRemoving && (
            <ButtonPrimitive className="tag-group__tag-remove" slot="remove">&#10005;</ButtonPrimitive>
          )}
        </>
      )}
    </TagPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { TagGroupRoot, TagListRoot, TagRoot }
export type { TagGroupRootProps, TagListRootProps, TagRootProps }
