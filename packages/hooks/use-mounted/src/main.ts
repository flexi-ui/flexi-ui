'use client'

import { useCallback, useEffect, useRef } from 'react'

/**
 * Returns a getter that reports whether the component is currently mounted.
 * Useful for guarding state updates in async callbacks.
 *
 * @example
 *   const isMounted = useIsMounted()
 *   fetchData().then(() => {
 *     if (!isMounted()) return
 *     setData(...)
 *   })
 */
export function useIsMounted(): () => boolean {
  const isMounted = useRef(false)

  useEffect(() => {
    isMounted.current = true

    return () => {
      isMounted.current = false
    }
  }, [])

  return useCallback(() => isMounted.current, [])
}
