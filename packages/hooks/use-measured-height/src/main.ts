'use client'

import type { RefObject } from 'react'

import { useCallback, useEffect, useState } from 'react'

/**
 * Measures the live `scrollHeight` of an element via `ResizeObserver`,
 * also reacting to `aria-hidden` attribute changes (used by collapsible
 * panels). Returns the latest measurement.
 *
 * @example
 *   const ref = useRef<HTMLDivElement>(null)
 *   const { height } = useMeasuredHeight(ref)
 */
export const useMeasuredHeight = (ref: RefObject<HTMLDivElement | null>) => {
  const [height, setHeight] = useState<number | undefined>(undefined)

  const calculateHeight = useCallback(() => {
    if (ref.current) {
      const measuredHeight = ref.current.scrollHeight

      setHeight((prevHeight) => (prevHeight !== measuredHeight ? measuredHeight : prevHeight))
    }
  }, [ref])

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const resizeObserver = new ResizeObserver(calculateHeight)

    const mutationObserver = new MutationObserver((mutations) => {
      const hasAriaHiddenChange = mutations.some(
        (mutation) => mutation.type === 'attributes' && mutation.attributeName === 'aria-hidden',
      )

      if (hasAriaHiddenChange) {
        calculateHeight()
      }
    })

    resizeObserver.observe(element)
    mutationObserver.observe(element, {
      attributeFilter: ['aria-hidden'],
      attributes: true,
    })

    return () => {
      resizeObserver.disconnect()
      mutationObserver.disconnect()
    }
  }, [ref, calculateHeight])

  return { height }
}
