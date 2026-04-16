import type { ComponentProps } from 'react'

import { ModalBody, ModalClose, ModalDialog, ModalFooter, ModalHeader, ModalOverlay, ModalRoot } from './modal'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Modal = Object.assign(ModalRoot, {
  Root: ModalRoot,
  Overlay: ModalOverlay,
  Dialog: ModalDialog,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
  Close: ModalClose,
})

export type Modal = {
  Props: ComponentProps<typeof ModalRoot>
  RootProps: ComponentProps<typeof ModalRoot>
  OverlayProps: ComponentProps<typeof ModalOverlay>
  DialogProps: ComponentProps<typeof ModalDialog>
  HeaderProps: ComponentProps<typeof ModalHeader>
  BodyProps: ComponentProps<typeof ModalBody>
  FooterProps: ComponentProps<typeof ModalFooter>
  CloseProps: ComponentProps<typeof ModalClose>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { ModalOverlay, ModalRoot, ModalDialog, ModalHeader, ModalBody, ModalFooter, ModalClose }
export type {
  ModalRootProps,
  ModalRootProps as ModalProps,
  ModalOverlayProps,
  ModalDialogProps,
  ModalHeaderProps,
  ModalBodyProps,
  ModalFooterProps,
  ModalCloseProps,
} from './modal'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { modalVariants, modalOverlayVariants } from '@flexi-ui/styles'
export type { ModalVariants, ModalOverlayVariants } from '@flexi-ui/styles'
