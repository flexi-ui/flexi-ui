'use client'

import type { BreadcrumbsVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { breadcrumbsVariants } from '@flexi-ui/styles'
import {
  Breadcrumb as BreadcrumbPrimitive,
  Breadcrumbs as BreadcrumbsPrimitive,
  Link as LinkPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * Breadcrumbs Root
 * -----------------------------------------------------------------------------------------------*/
interface BreadcrumbsRootProps extends ComponentPropsWithRef<typeof BreadcrumbsPrimitive>, BreadcrumbsVariants {}

const BreadcrumbsRoot = ({ className, size, ...rest }: BreadcrumbsRootProps) => {
  const styles = breadcrumbsVariants({ size })

  return (
    <BreadcrumbsPrimitive
      className={cx(styles, className) ?? ''}
      data-slot="breadcrumbs"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Breadcrumb Item
 * -----------------------------------------------------------------------------------------------*/
interface BreadcrumbItemProps extends ComponentPropsWithRef<typeof BreadcrumbPrimitive> {}

const BreadcrumbItem = ({ className, children, ...rest }: BreadcrumbItemProps) => {
  return (
    <BreadcrumbPrimitive
      className={(renderProps) =>
        cx('breadcrumbs__item', typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="breadcrumb-item"
      {...rest}
    >
      {children}
    </BreadcrumbPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Breadcrumb Link
 * -----------------------------------------------------------------------------------------------*/
interface BreadcrumbLinkProps extends ComponentPropsWithRef<typeof LinkPrimitive> {}

const BreadcrumbLink = ({ className, ...rest }: BreadcrumbLinkProps) => {
  return (
    <LinkPrimitive
      className={(renderProps) =>
        cx('breadcrumbs__link', typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="breadcrumb-link"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { BreadcrumbsRoot, BreadcrumbItem, BreadcrumbLink }
export type { BreadcrumbsRootProps, BreadcrumbItemProps, BreadcrumbLinkProps }
