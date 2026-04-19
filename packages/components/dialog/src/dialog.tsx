'use client'

import type { DialogVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'
import type React from 'react'

import { dialogVariants } from '@flexi-ui/styles'
import {
  Dialog as DialogPrimitive,
  Heading as HeadingPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * Dialog Root
 * -----------------------------------------------------------------------------------------------*/
interface DialogRootProps
  extends Omit<ComponentPropsWithRef<typeof DialogPrimitive>, 'children'>,
    DialogVariants {
  children?: React.ReactNode
}

const DialogRoot = ({ children, className, size, ...rest }: DialogRootProps) => {
  const styles = dialogVariants({ size })

  return (
    <DialogPrimitive
      className={cx(styles, className) ?? ''}
      data-slot="dialog"
      {...rest}
    >
      {children}
    </DialogPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Dialog Title
 * -----------------------------------------------------------------------------------------------*/
interface DialogTitleProps extends ComponentPropsWithRef<typeof HeadingPrimitive> {}

const DialogTitle = ({ className, slot = 'title', ...rest }: DialogTitleProps) => {
  return (
    <HeadingPrimitive
      className={cx('dialog__title', className) ?? ''}
      data-slot="dialog-title"
      slot={slot}
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Dialog Description
 * -----------------------------------------------------------------------------------------------*/
interface DialogDescriptionProps extends ComponentPropsWithRef<'p'> {}

const DialogDescription = ({ className, ...rest }: DialogDescriptionProps) => {
  return (
    <p
      className={cx('dialog__description', className) ?? ''}
      data-slot="dialog-description"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { DialogDescription, DialogRoot, DialogTitle }
export type { DialogDescriptionProps, DialogRootProps, DialogTitleProps }
