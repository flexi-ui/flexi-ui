'use client'

import type { HeadingVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { headingVariants } from '@flexi-ui/styles'
import { Heading as HeadingPrimitive } from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * Heading Root
 * -----------------------------------------------------------------------------------------------*/
interface HeadingRootProps
  extends Omit<ComponentPropsWithRef<typeof HeadingPrimitive>, 'level'>,
    HeadingVariants {}

const HeadingRoot = ({ className, level, ...rest }: HeadingRootProps) => {
  const styles = headingVariants({ level })
  const ariaLevel = level ? Number(level.replace('h', '')) : undefined

  return (
    <HeadingPrimitive
      className={cx(styles, className) ?? ''}
      data-slot="heading"
      level={ariaLevel}
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { HeadingRoot }
export type { HeadingRootProps }
