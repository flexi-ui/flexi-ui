'use client'

import { useState } from 'react'
import { useSafeLayoutEffect } from '@flexi-ui/use-safe-layout-effect'

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === 'undefined'

/**
 * Subscribes to a CSS media query and returns whether it currently matches.
 *
 * @example
 *   const isMobile = useMediaQuery('(max-width: 768px)')
 */
export function useMediaQuery(
  query: string,
  { defaultValue = false, initializeWithValue = true }: UseMediaQueryOptions = {},
): boolean {
  const getMatches = (q: string): boolean => {
    if (IS_SERVER) return defaultValue
    return window.matchMedia(q).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) return getMatches(query)
    return defaultValue
  })

  function handleChange() {
    setMatches(getMatches(query))
  }

  useSafeLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)

    handleChange()

    // Use deprecated `addListener`/`removeListener` to support Safari < 14
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange)
    } else {
      matchMedia.addEventListener('change', handleChange)
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange)
      } else {
        matchMedia.removeEventListener('change', handleChange)
      }
    }
  }, [query])

  return matches
}
