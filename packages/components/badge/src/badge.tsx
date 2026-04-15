'use client'

import type { BadgeVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { badgeVariants } from '@flexi-ui/styles'

/* -------------------------------------------------------------------------------------------------
 * Badge Root
 * -----------------------------------------------------------------------------------------------*/
interface BadgeRootProps extends Omit<ComponentPropsWithRef<'span'>, 'color'>, BadgeVariants {}

const BadgeRoot = ({
  children,
  className,
  color,
  size,
  variant,
  ...rest
}: BadgeRootProps) => {
  const styles = badgeVariants({ className, color, size, variant })

  return (
    <span className={styles} data-slot="badge" {...rest}>
      {variant === 'dot' && <span className="badge__dot" />}
      {children}
    </span>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { BadgeRoot }
export type { BadgeRootProps }
