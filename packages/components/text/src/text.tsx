'use client'

import type { TextVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { textVariants } from '@flexi-ui/styles'
import { Text as TextPrimitive } from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * Text Root
 * -----------------------------------------------------------------------------------------------*/
interface TextRootProps extends ComponentPropsWithRef<typeof TextPrimitive>, TextVariants {}

const TextRoot = ({ className, size, tone, weight, ...rest }: TextRootProps) => {
  const styles = textVariants({ size, tone, weight })

  return (
    <TextPrimitive
      className={cx(styles, className) ?? ''}
      data-slot="text"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { TextRoot }
export type { TextRootProps }
