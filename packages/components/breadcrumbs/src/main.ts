import type { ComponentProps } from 'react'

import { BreadcrumbItem, BreadcrumbLink, BreadcrumbsRoot } from './breadcrumbs'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Breadcrumbs = Object.assign(BreadcrumbsRoot, {
  Root: BreadcrumbsRoot,
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
})

export type Breadcrumbs = {
  Props: ComponentProps<typeof BreadcrumbsRoot>
  RootProps: ComponentProps<typeof BreadcrumbsRoot>
  ItemProps: ComponentProps<typeof BreadcrumbItem>
  LinkProps: ComponentProps<typeof BreadcrumbLink>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { BreadcrumbsRoot, BreadcrumbItem, BreadcrumbLink }
export type {
  BreadcrumbsRootProps,
  BreadcrumbsRootProps as BreadcrumbsProps,
  BreadcrumbItemProps,
  BreadcrumbLinkProps,
} from './breadcrumbs'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { breadcrumbsVariants } from '@flexi-ui/styles'
export type { BreadcrumbsVariants } from '@flexi-ui/styles'
