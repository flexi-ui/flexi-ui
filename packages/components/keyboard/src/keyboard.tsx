'use client'

import type { KeyboardVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { keyboardVariants } from '@flexi-ui/styles'
import { Keyboard as KeyboardPrimitive } from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * Keyboard Root
 * -----------------------------------------------------------------------------------------------*/
interface KeyboardRootProps extends ComponentPropsWithRef<typeof KeyboardPrimitive>, KeyboardVariants {}

const KeyboardRoot = ({ className, size, ...rest }: KeyboardRootProps) => {
  const styles = keyboardVariants({ size })

  return (
    <KeyboardPrimitive
      className={cx(styles, className) ?? ''}
      data-slot="keyboard"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { KeyboardRoot }
export type { KeyboardRootProps }
