'use client'

import type { CardVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { cardVariants } from '@flexi-ui/styles'
import { createContext, useMemo } from 'react'

/* -------------------------------------------------------------------------------------------------
 * Card Context
 * -----------------------------------------------------------------------------------------------*/
interface CardContextValue {
  size?: CardVariants['size']
}

const CardContext = createContext<CardContextValue>({})

/* -------------------------------------------------------------------------------------------------
 * Card Root
 * -----------------------------------------------------------------------------------------------*/
interface CardRootProps extends Omit<ComponentPropsWithRef<'div'>, 'size'>, CardVariants {}

const CardRoot = ({
  children,
  className,
  fullWidth,
  isPressable,
  size,
  variant,
  ...rest
}: CardRootProps) => {
  const styles = cardVariants({ className, fullWidth, isPressable, size, variant })
  const ctx = useMemo(() => ({ size }), [size])

  return (
    <CardContext value={ctx}>
      <div className={styles} data-slot="card" {...rest}>
        {children}
      </div>
    </CardContext>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Card Header
 * -----------------------------------------------------------------------------------------------*/
interface CardHeaderProps extends ComponentPropsWithRef<'div'> {}

const CardHeader = ({ children, className, ...rest }: CardHeaderProps) => {
  return (
    <div className={className ? `card__header ${className}` : 'card__header'} data-slot="card-header" {...rest}>
      {children}
    </div>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Card Body
 * -----------------------------------------------------------------------------------------------*/
interface CardBodyProps extends ComponentPropsWithRef<'div'> {}

const CardBody = ({ children, className, ...rest }: CardBodyProps) => {
  return (
    <div className={className ? `card__body ${className}` : 'card__body'} data-slot="card-body" {...rest}>
      {children}
    </div>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Card Footer
 * -----------------------------------------------------------------------------------------------*/
interface CardFooterProps extends ComponentPropsWithRef<'div'> {
  isBlurred?: boolean
}

const CardFooter = ({ children, className, isBlurred, ...rest }: CardFooterProps) => {
  const base = isBlurred ? 'card__footer card__footer--blurred' : 'card__footer'

  return (
    <div className={className ? `${base} ${className}` : base} data-slot="card-footer" {...rest}>
      {children}
    </div>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { CardRoot, CardHeader, CardBody, CardFooter, CardContext }
export type { CardRootProps, CardHeaderProps, CardBodyProps, CardFooterProps }
