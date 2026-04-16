'use client'

import type { PopoverVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { popoverVariants } from '@flexi-ui/styles'
import {
  Dialog as DialogPrimitive,
  DialogTrigger as DialogTriggerPrimitive,
  OverlayArrow as OverlayArrowPrimitive,
  Popover as PopoverPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * Popover Trigger
 * -----------------------------------------------------------------------------------------------*/
interface PopoverTriggerProps extends ComponentPropsWithRef<typeof DialogTriggerPrimitive> {}

const PopoverTrigger = (props: PopoverTriggerProps) => {
  return <DialogTriggerPrimitive data-slot="popover-trigger" {...props} />
}

/* -------------------------------------------------------------------------------------------------
 * Popover Content
 * -----------------------------------------------------------------------------------------------*/
interface PopoverContentProps extends Omit<ComponentPropsWithRef<typeof PopoverPrimitive>, 'children'>, PopoverVariants {
  showArrow?: boolean
  children?: React.ReactNode
}

const PopoverContent = ({
  children,
  className,
  showArrow = false,
  size,
  ...rest
}: PopoverContentProps) => {
  const styles = popoverVariants({ size })

  return (
    <PopoverPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="popover"
      {...rest}
    >
      {() => (
        <>
          {showArrow && (
            <OverlayArrowPrimitive>
              <svg className="popover__arrow" width={12} height={12} viewBox="0 0 12 12">
                <path d="M0 0 L6 6 L12 0" />
              </svg>
            </OverlayArrowPrimitive>
          )}
          <DialogPrimitive>{children}</DialogPrimitive>
        </>
      )}
    </PopoverPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { PopoverTrigger, PopoverContent }
export type { PopoverTriggerProps, PopoverContentProps }
