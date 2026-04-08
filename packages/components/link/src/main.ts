import type { ComponentProps } from 'react'

import { LinkRoot } from './link'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Link = Object.assign(LinkRoot, {
  Root: LinkRoot,
})

export type Link = {
  Props: ComponentProps<typeof LinkRoot>
  RootProps: ComponentProps<typeof LinkRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { LinkRoot, LinkIcon } from './link'
export type { LinkRootProps, LinkRootProps as LinkProps } from './link'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { linkVariants } from '@flexi-ui/styles'
export type { LinkVariants } from '@flexi-ui/styles'
