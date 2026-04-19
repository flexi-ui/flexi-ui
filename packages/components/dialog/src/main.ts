import type { ComponentProps } from 'react'

import { DialogDescription, DialogRoot, DialogTitle } from './dialog'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Dialog = Object.assign(DialogRoot, {
  Root: DialogRoot,
  Title: DialogTitle,
  Description: DialogDescription,
})

export type Dialog = {
  Props: ComponentProps<typeof DialogRoot>
  RootProps: ComponentProps<typeof DialogRoot>
  TitleProps: ComponentProps<typeof DialogTitle>
  DescriptionProps: ComponentProps<typeof DialogDescription>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { DialogDescription, DialogRoot, DialogTitle }
export type {
  DialogDescriptionProps,
  DialogRootProps,
  DialogRootProps as DialogProps,
  DialogTitleProps,
} from './dialog'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { dialogVariants } from '@flexi-ui/styles'
export type { DialogVariants } from '@flexi-ui/styles'
