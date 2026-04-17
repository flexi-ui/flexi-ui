'use client'

import type { DropZoneVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'
import type React from 'react'

import { dropZoneVariants } from '@flexi-ui/styles'
import { DropZone as DropZonePrimitive } from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * DropZone Root
 * -----------------------------------------------------------------------------------------------*/
interface DropZoneRootProps
  extends Omit<ComponentPropsWithRef<typeof DropZonePrimitive>, 'children'>,
    DropZoneVariants {
  children?: React.ReactNode
}

const DropZoneRoot = ({ children, className, size, ...rest }: DropZoneRootProps) => {
  const styles = dropZoneVariants({ size })

  return (
    <DropZonePrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="drop-zone"
      {...rest}
    >
      {() => <>{children}</>}
    </DropZonePrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { DropZoneRoot }
export type { DropZoneRootProps }
