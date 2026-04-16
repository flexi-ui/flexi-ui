'use client'

import type { ModalVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { modalOverlayVariants, modalVariants } from '@flexi-ui/styles'
import {
  Dialog as DialogPrimitive,
  Modal as ModalPrimitive,
  ModalOverlay as ModalOverlayPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * Modal Overlay
 * -----------------------------------------------------------------------------------------------*/
interface ModalOverlayProps extends ComponentPropsWithRef<typeof ModalOverlayPrimitive> {}

const ModalOverlay = ({ className, ...rest }: ModalOverlayProps) => {
  const styles = modalOverlayVariants()

  return (
    <ModalOverlayPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="modal-overlay"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Modal Root
 * -----------------------------------------------------------------------------------------------*/
interface ModalRootProps extends ComponentPropsWithRef<typeof ModalPrimitive>, ModalVariants {}

const ModalRoot = ({
  className,
  scrollBehavior,
  size,
  ...rest
}: ModalRootProps) => {
  const styles = modalVariants({ scrollBehavior, size })

  return (
    <ModalPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="modal"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Modal Dialog
 * -----------------------------------------------------------------------------------------------*/
interface ModalDialogProps extends ComponentPropsWithRef<typeof DialogPrimitive> {}

const ModalDialog = ({ className, ...rest }: ModalDialogProps) => {
  return (
    <DialogPrimitive
      className={className}
      data-slot="modal-dialog"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Modal Header
 * -----------------------------------------------------------------------------------------------*/
interface ModalHeaderProps extends ComponentPropsWithRef<'div'> {
  children?: React.ReactNode
}

const ModalHeader = ({ children, className, ...rest }: ModalHeaderProps) => {
  return (
    <div className={`modal__header${className ? ` ${className}` : ''}`} data-slot="modal-header" {...rest}>
      {children}
    </div>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Modal Body
 * -----------------------------------------------------------------------------------------------*/
interface ModalBodyProps extends ComponentPropsWithRef<'div'> {
  children?: React.ReactNode
}

const ModalBody = ({ children, className, ...rest }: ModalBodyProps) => {
  return (
    <div className={`modal__body${className ? ` ${className}` : ''}`} data-slot="modal-body" {...rest}>
      {children}
    </div>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Modal Footer
 * -----------------------------------------------------------------------------------------------*/
interface ModalFooterProps extends ComponentPropsWithRef<'div'> {
  children?: React.ReactNode
}

const ModalFooter = ({ children, className, ...rest }: ModalFooterProps) => {
  return (
    <div className={`modal__footer${className ? ` ${className}` : ''}`} data-slot="modal-footer" {...rest}>
      {children}
    </div>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Modal Close
 * -----------------------------------------------------------------------------------------------*/
interface ModalCloseProps extends ComponentPropsWithRef<'button'> {
  children?: React.ReactNode
}

const ModalClose = ({ children, className, ...rest }: ModalCloseProps) => {
  return (
    <button
      className={`modal__close${className ? ` ${className}` : ''}`}
      data-slot="modal-close"
      type="button"
      aria-label="Close"
      {...rest}
    >
      {children}
    </button>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { ModalOverlay, ModalRoot, ModalDialog, ModalHeader, ModalBody, ModalFooter, ModalClose }
export type {
  ModalOverlayProps,
  ModalRootProps,
  ModalDialogProps,
  ModalHeaderProps,
  ModalBodyProps,
  ModalFooterProps,
  ModalCloseProps,
}
