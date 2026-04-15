import type { ComponentProps } from 'react'

import { AlertClose, AlertContent, AlertDescription, AlertIcon, AlertRoot, AlertTitle } from './alert'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Alert = Object.assign(AlertRoot, {
  Root: AlertRoot,
  Icon: AlertIcon,
  Content: AlertContent,
  Title: AlertTitle,
  Description: AlertDescription,
  Close: AlertClose,
})

export type Alert = {
  Props: ComponentProps<typeof AlertRoot>
  RootProps: ComponentProps<typeof AlertRoot>
  IconProps: ComponentProps<typeof AlertIcon>
  ContentProps: ComponentProps<typeof AlertContent>
  TitleProps: ComponentProps<typeof AlertTitle>
  DescriptionProps: ComponentProps<typeof AlertDescription>
  CloseProps: ComponentProps<typeof AlertClose>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { AlertRoot, AlertIcon, AlertContent, AlertTitle, AlertDescription, AlertClose }
export type {
  AlertRootProps,
  AlertRootProps as AlertProps,
  AlertIconProps,
  AlertContentProps,
  AlertTitleProps,
  AlertDescriptionProps,
  AlertCloseProps,
} from './alert'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { alertVariants } from '@flexi-ui/styles'
export type { AlertVariants } from '@flexi-ui/styles'
