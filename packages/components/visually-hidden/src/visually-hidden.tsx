'use client'

import type { ComponentPropsWithRef } from 'react'

import { visuallyHiddenVariants } from '@flexi-ui/styles'
import { VisuallyHidden as VisuallyHiddenPrimitive } from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * VisuallyHidden Root
 *
 * Hides content visually while keeping it accessible to assistive technologies.
 * -----------------------------------------------------------------------------------------------*/
interface VisuallyHiddenRootProps extends ComponentPropsWithRef<typeof VisuallyHiddenPrimitive> {
  className?: string
}

const VisuallyHiddenRoot = ({ className, elementType, ...rest }: VisuallyHiddenRootProps) => {
  const styles = visuallyHiddenVariants()
  const mergedClass = cx(styles, className) ?? ''

  if (elementType) {
    return <VisuallyHiddenPrimitive elementType={elementType} className={mergedClass} {...rest} />
  }

  return <VisuallyHiddenPrimitive className={mergedClass} {...rest} />
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { VisuallyHiddenRoot }
export type { VisuallyHiddenRootProps }
