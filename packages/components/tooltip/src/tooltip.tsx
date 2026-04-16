'use client'

import type { TooltipVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { tooltipVariants } from '@flexi-ui/styles'
import {
  OverlayArrow as OverlayArrowPrimitive,
  Tooltip as TooltipPrimitive,
  TooltipTrigger as TooltipTriggerPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * Tooltip Trigger
 * -----------------------------------------------------------------------------------------------*/
interface TooltipTriggerProps extends ComponentPropsWithRef<typeof TooltipTriggerPrimitive> {}

const TooltipTrigger = (props: TooltipTriggerProps) => {
  return <TooltipTriggerPrimitive data-slot="tooltip-trigger" {...props} />
}

/* -------------------------------------------------------------------------------------------------
 * Tooltip Content
 * -----------------------------------------------------------------------------------------------*/
interface TooltipContentProps extends ComponentPropsWithRef<typeof TooltipPrimitive>, TooltipVariants {
  showArrow?: boolean
}

const TooltipContent = ({
  children,
  className,
  showArrow = false,
  ...rest
}: TooltipContentProps) => {
  const styles = tooltipVariants()

  return (
    <TooltipPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="tooltip"
      {...rest}
    >
      {(renderProps) => (
        <>
          {showArrow && (
            <OverlayArrowPrimitive>
              <svg className="tooltip__arrow" width={8} height={8} viewBox="0 0 8 8">
                <path d="M0 0 L4 4 L8 0" />
              </svg>
            </OverlayArrowPrimitive>
          )}
          {typeof children === 'function' ? children(renderProps) : children}
        </>
      )}
    </TooltipPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { TooltipTrigger, TooltipContent }
export type { TooltipTriggerProps, TooltipContentProps }
