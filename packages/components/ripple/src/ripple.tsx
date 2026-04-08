'use client'

import type { ComponentPropsWithRef } from 'react'

import { useCallback, useState } from 'react'

/* -------------------------------------------------------------------------------------------------
 * Types
 * -----------------------------------------------------------------------------------------------*/
export type RippleType = {
  key: React.Key
  x: number
  y: number
  size: number
}

export interface RippleProps extends ComponentPropsWithRef<'span'> {
  ripples: RippleType[]
  color?: string
  onClear: (key: React.Key) => void
}

/* -------------------------------------------------------------------------------------------------
 * useRipple Hook
 * -----------------------------------------------------------------------------------------------*/
export function useRipple() {
  const [ripples, setRipples] = useState<RippleType[]>([])

  const onPress = useCallback((event: { target: Element; x: number; y: number }) => {
    const trigger = event.target
    const size = Math.max(trigger.clientWidth, trigger.clientHeight)

    setRipples((prev) => [
      ...prev,
      {
        key: `ripple-${Date.now()}-${prev.length}`,
        size,
        x: event.x - size / 2,
        y: event.y - size / 2,
      },
    ])
  }, [])

  const onClear = useCallback((key: React.Key) => {
    setRipples((prev) => prev.filter((ripple) => ripple.key !== key))
  }, [])

  return { ripples, onClear, onPress }
}

/* -------------------------------------------------------------------------------------------------
 * Ripple Root
 * -----------------------------------------------------------------------------------------------*/
const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

const RippleRoot = ({ ripples = [], color = 'currentColor', onClear, ...rest }: RippleProps) => {
  return (
    <>
      {ripples.map((ripple) => {
        const duration = clamp(0.01 * ripple.size, 0.2, ripple.size > 100 ? 0.75 : 0.5)

        return (
          <span
            key={ripple.key}
            data-slot="ripple"
            onAnimationEnd={() => onClear(ripple.key)}
            style={{
              position: 'absolute',
              backgroundColor: color,
              borderRadius: '100%',
              transformOrigin: 'center',
              pointerEvents: 'none',
              overflow: 'hidden',
              inset: 0,
              zIndex: 0,
              top: ripple.y,
              left: ripple.x,
              width: `${ripple.size}px`,
              height: `${ripple.size}px`,
              animation: `ripple-expand ${duration}s ease-out forwards`,
            }}
            {...rest}
          />
        )
      })}
    </>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { RippleRoot }
