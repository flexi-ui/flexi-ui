'use client'

import type { ToastRegionVariants, ToastVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { toastRegionVariants, toastVariants } from '@flexi-ui/styles'
import {
  UNSTABLE_Toast as ToastPrimitive,
  UNSTABLE_ToastContent as ToastContentPrimitive,
  UNSTABLE_ToastList as ToastListPrimitive,
  UNSTABLE_ToastRegion as ToastRegionPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * Toast Region
 * -----------------------------------------------------------------------------------------------*/
interface ToastRegionRootProps<T>
  extends Omit<ComponentPropsWithRef<typeof ToastRegionPrimitive<T>>, 'className'>,
    ToastRegionVariants {
  className?: string
}

const ToastRegionRoot = <T extends object>({
  className,
  position,
  ...rest
}: ToastRegionRootProps<T>) => {
  const styles = toastRegionVariants({ position })

  return (
    <ToastRegionPrimitive<T> className={cx(styles, className) ?? ''} data-slot="toast-region" {...rest} />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Toast List
 * -----------------------------------------------------------------------------------------------*/
interface ToastListProps<T>
  extends Omit<ComponentPropsWithRef<typeof ToastListPrimitive<T>>, 'className'> {
  className?: string
}

const ToastList = <T extends object>({ className, ...rest }: ToastListProps<T>) => {
  return (
    <ToastListPrimitive<T>
      className={cx('toast-list', className) ?? ''}
      data-slot="toast-list"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Toast
 * -----------------------------------------------------------------------------------------------*/
interface ToastRootProps<T>
  extends Omit<ComponentPropsWithRef<typeof ToastPrimitive<T>>, 'className'>,
    ToastVariants {
  className?: string
}

const ToastRoot = <T extends object>({ className, tone, ...rest }: ToastRootProps<T>) => {
  const styles = toastVariants({ tone })

  return <ToastPrimitive<T> className={cx(styles, className) ?? ''} data-slot="toast" {...rest} />
}

/* -------------------------------------------------------------------------------------------------
 * Toast Content
 * -----------------------------------------------------------------------------------------------*/
interface ToastContentProps extends ComponentPropsWithRef<typeof ToastContentPrimitive> {}

const ToastContent = ({ className, ...rest }: ToastContentProps) => {
  return (
    <ToastContentPrimitive
      className={cx('toast__content', className) ?? ''}
      data-slot="toast-content"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { ToastRegionRoot, ToastList, ToastRoot, ToastContent }
export type { ToastRegionRootProps, ToastListProps, ToastRootProps, ToastContentProps }
