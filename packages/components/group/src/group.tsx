'use client'

import type { GroupVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { groupVariants } from '@flexi-ui/styles'
import { Group as GroupPrimitive } from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * Group Root
 * -----------------------------------------------------------------------------------------------*/
interface GroupRootProps extends ComponentPropsWithRef<typeof GroupPrimitive>, GroupVariants {}

const GroupRoot = ({ className, orientation, ...rest }: GroupRootProps) => {
  const styles = groupVariants({ orientation })

  return (
    <GroupPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="group"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { GroupRoot }
export type { GroupRootProps }
