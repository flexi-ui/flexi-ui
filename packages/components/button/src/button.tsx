'use client'

import type { ButtonVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { buttonVariants } from '@flexi-ui/styles'
import { useContext } from 'react'
import { Button as ButtonPrimitive } from 'react-aria-components'
import { cx } from 'tailwind-variants'

import { ButtonGroupContext } from './button-group'

/* -------------------------------------------------------------------------------------------------
 * Button Root
 * -----------------------------------------------------------------------------------------------*/
interface ButtonRootProps extends ComponentPropsWithRef<typeof ButtonPrimitive>, ButtonVariants {}

const ButtonRoot = ({
  children,
  className,
  fullWidth,
  isDisabled,
  isIconOnly,
  size,
  variant,
  ...rest
}: ButtonRootProps) => {
  const groupContext = useContext(ButtonGroupContext)

  const finalSize = size ?? groupContext?.size
  const finalVariant = variant ?? groupContext?.variant
  const finalIsDisabled = isDisabled ?? groupContext?.isDisabled
  const finalFullWidth = fullWidth ?? groupContext?.fullWidth

  const styles = buttonVariants({
    fullWidth: finalFullWidth,
    isIconOnly,
    size: finalSize,
    variant: finalVariant,
  })

  return (
    <ButtonPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="button"
      isDisabled={finalIsDisabled}
      {...rest}
    >
      {(renderProps) => (typeof children === 'function' ? children(renderProps) : children)}
    </ButtonPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { ButtonRoot }
export type { ButtonRootProps }
