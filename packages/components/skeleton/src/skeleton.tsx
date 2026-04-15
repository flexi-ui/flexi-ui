'use client'

import type { SkeletonVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { skeletonVariants } from '@flexi-ui/styles'

/* -------------------------------------------------------------------------------------------------
 * Skeleton Root
 * -----------------------------------------------------------------------------------------------*/
interface SkeletonRootProps extends ComponentPropsWithRef<'div'>, SkeletonVariants {
  children?: React.ReactNode
}

const SkeletonRoot = ({
  children,
  className,
  isLoaded,
  ...rest
}: SkeletonRootProps) => {
  const styles = skeletonVariants({ className, isLoaded })

  return (
    <div className={styles} data-slot="skeleton" {...rest}>
      {children}
    </div>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { SkeletonRoot }
export type { SkeletonRootProps }
