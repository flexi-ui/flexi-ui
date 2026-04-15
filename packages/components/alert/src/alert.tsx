'use client'

import type { AlertVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { alertVariants } from '@flexi-ui/styles'

/* -------------------------------------------------------------------------------------------------
 * Alert Root
 * -----------------------------------------------------------------------------------------------*/
interface AlertRootProps extends ComponentPropsWithRef<'div'>, AlertVariants {
  children?: React.ReactNode
}

const AlertRoot = ({
  children,
  className,
  isFlat,
  variant,
  ...rest
}: AlertRootProps) => {
  const styles = alertVariants({ className, isFlat, variant })

  return (
    <div className={styles} data-slot="alert" role="alert" {...rest}>
      {children}
    </div>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Alert Icon
 * -----------------------------------------------------------------------------------------------*/
interface AlertIconProps extends ComponentPropsWithRef<'span'> {
  children?: React.ReactNode
}

const AlertIcon = ({ children, className, ...rest }: AlertIconProps) => {
  return (
    <span className={`alert__icon${className ? ` ${className}` : ''}`} data-slot="alert-icon" {...rest}>
      {children}
    </span>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Alert Content
 * -----------------------------------------------------------------------------------------------*/
interface AlertContentProps extends ComponentPropsWithRef<'div'> {
  children?: React.ReactNode
}

const AlertContent = ({ children, className, ...rest }: AlertContentProps) => {
  return (
    <div className={`alert__content${className ? ` ${className}` : ''}`} data-slot="alert-content" {...rest}>
      {children}
    </div>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Alert Title
 * -----------------------------------------------------------------------------------------------*/
interface AlertTitleProps extends ComponentPropsWithRef<'h5'> {
  children?: React.ReactNode
}

const AlertTitle = ({ children, className, ...rest }: AlertTitleProps) => {
  return (
    <h5 className={`alert__title${className ? ` ${className}` : ''}`} data-slot="alert-title" {...rest}>
      {children}
    </h5>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Alert Description
 * -----------------------------------------------------------------------------------------------*/
interface AlertDescriptionProps extends ComponentPropsWithRef<'p'> {
  children?: React.ReactNode
}

const AlertDescription = ({ children, className, ...rest }: AlertDescriptionProps) => {
  return (
    <p className={`alert__description${className ? ` ${className}` : ''}`} data-slot="alert-description" {...rest}>
      {children}
    </p>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Alert Close
 * -----------------------------------------------------------------------------------------------*/
interface AlertCloseProps extends ComponentPropsWithRef<'button'> {
  children?: React.ReactNode
}

const AlertClose = ({ children, className, ...rest }: AlertCloseProps) => {
  return (
    <button
      className={`alert__close${className ? ` ${className}` : ''}`}
      data-slot="alert-close"
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
export { AlertRoot, AlertIcon, AlertContent, AlertTitle, AlertDescription, AlertClose }
export type {
  AlertRootProps,
  AlertIconProps,
  AlertContentProps,
  AlertTitleProps,
  AlertDescriptionProps,
  AlertCloseProps,
}
