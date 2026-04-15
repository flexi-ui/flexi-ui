'use client'

import type { SwitchVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { switchVariants } from '@flexi-ui/styles'
import { Switch as SwitchPrimitive } from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * Switch Root
 * -----------------------------------------------------------------------------------------------*/
interface SwitchRootProps
  extends Omit<ComponentPropsWithRef<typeof SwitchPrimitive>, 'color'>,
    SwitchVariants {}

const SwitchRoot = ({
  children,
  className,
  color,
  size,
  ...rest
}: SwitchRootProps) => {
  return (
    <SwitchPrimitive
      className={(renderProps) => {
        const styles = switchVariants({
          color,
          isDisabled: renderProps.isDisabled,
          isSelected: renderProps.isSelected,
          size,
        })

        return cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }}
      data-slot="switch"
      {...rest}
    >
      {(renderProps) => (
        <>
          <span className="switch__track">
            <span className="switch__thumb" />
          </span>
          {typeof children === 'function' ? children(renderProps) : children}
        </>
      )}
    </SwitchPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { SwitchRoot }
export type { SwitchRootProps }
