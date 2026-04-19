import type { ComponentProps } from 'react'

import { ToastContent, ToastList, ToastRegionRoot, ToastRoot } from './toast'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const ToastRegion = Object.assign(ToastRegionRoot, {
  Root: ToastRegionRoot,
  List: ToastList,
})

export const Toast = Object.assign(ToastRoot, {
  Root: ToastRoot,
  Content: ToastContent,
})

export type ToastRegion = {
  Props: ComponentProps<typeof ToastRegionRoot>
  ListProps: ComponentProps<typeof ToastList>
}

export type Toast = {
  Props: ComponentProps<typeof ToastRoot>
  ContentProps: ComponentProps<typeof ToastContent>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { ToastRegionRoot, ToastList, ToastRoot, ToastContent }
export type {
  ToastRegionRootProps,
  ToastRegionRootProps as ToastRegionProps,
  ToastListProps,
  ToastRootProps,
  ToastRootProps as ToastProps,
  ToastContentProps,
} from './toast'

/* -------------------------------------------------------------------------------------------------
 * Queue
 * -----------------------------------------------------------------------------------------------*/
export { UNSTABLE_ToastQueue as ToastQueue } from 'react-aria-components'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { toastRegionVariants, toastVariants } from '@flexi-ui/styles'
export type { ToastRegionVariants, ToastVariants } from '@flexi-ui/styles'
