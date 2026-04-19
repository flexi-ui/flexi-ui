'use client'

import type { DropIndicatorVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { dropIndicatorVariants } from '@flexi-ui/styles'
import { DropIndicator as DropIndicatorPrimitive } from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * DropIndicator Root
 * -----------------------------------------------------------------------------------------------*/
interface DropIndicatorRootProps
  extends ComponentPropsWithRef<typeof DropIndicatorPrimitive>,
    DropIndicatorVariants {}

const DropIndicatorRoot = ({ className, variant, ...rest }: DropIndicatorRootProps) => {
  const styles = dropIndicatorVariants({ variant })

  return (
    <DropIndicatorPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="drop-indicator"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { DropIndicatorRoot }
export type { DropIndicatorRootProps }
