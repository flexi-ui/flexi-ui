'use client'

import { composeRenderProps } from 'react-aria-components'
import { cx } from 'tailwind-variants'

/**
 * Composes a className with Tailwind variant styles, compatible with
 * React Aria Components' render props pattern.
 */
export function composeTwRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  tailwind?: string | ((v: T) => string | undefined),
): string | ((v: T) => string) {
  return composeRenderProps(className, (className, renderProps): string => {
    const tw = typeof tailwind === 'function' ? (tailwind(renderProps) ?? '') : (tailwind ?? '')
    const cls = className ?? ''

    return cx(tw, cls) ?? ''
  })
}

/**
 * Composes a slot className from a slot function and optional extra classes.
 */
export const composeSlotClassName = (
  slotFn: ((args?: { className?: string; [key: string]: any }) => string) | undefined,
  className?: string,
  variants?: Record<string, any>,
): string | undefined => {
  return typeof slotFn === 'function' ? slotFn({ ...(variants ?? {}), className }) : className
}
