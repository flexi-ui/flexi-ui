'use client'

import type { DividerVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { dividerVariants } from '@flexi-ui/styles'

/* -------------------------------------------------------------------------------------------------
 * Divider Root
 * -----------------------------------------------------------------------------------------------*/
interface DividerRootProps extends ComponentPropsWithRef<'div'>, DividerVariants {}

const DividerRoot = ({
  className,
  orientation,
  ...rest
}: DividerRootProps) => {
  const styles = dividerVariants({ className, orientation })

  return (
    <div
      className={styles}
      data-slot="divider"
      role="separator"
      aria-orientation={orientation ?? 'horizontal'}
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { DividerRoot }
export type { DividerRootProps }
