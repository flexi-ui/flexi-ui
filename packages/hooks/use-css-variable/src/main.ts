'use client'

import { useIsSSR } from '@react-aria/ssr'
import * as React from 'react'

// Cache for CSS variable values to avoid repeated DOM queries
const cssVariableCache = new Map<string, string | undefined>()

/**
 * A hook that safely retrieves CSS custom property values from the document
 * element with SSR support, automatic fallback handling, and optional caching.
 *
 * @example
 *   const animationType = useCSSVariable('--skeleton-animation')
 *
 * @example
 *   // Override with prop if provided
 *   const themeColor = useCSSVariable('--theme-color', color)
 *
 * @example
 *   // Disable caching for dynamic CSS variables
 *   const dynamicValue = useCSSVariable('--dynamic-value', undefined, false)
 *
 * @param variableName - The CSS custom property name (e.g. '--my-variable')
 * @param override - Optional override value that takes precedence over the CSS variable
 * @param cache - Whether to cache the resolved value (default: true)
 */
export function useCSSVariable(
  variableName: string,
  override?: string,
  cache: boolean = true,
): string | undefined {
  const isSSR = useIsSSR()

  return React.useMemo(() => {
    if (override !== undefined) return override
    if (isSSR) return undefined

    if (cache && cssVariableCache.has(variableName)) {
      return cssVariableCache.get(variableName)
    }

    try {
      const root = document.documentElement
      const value = getComputedStyle(root).getPropertyValue(variableName).trim() || undefined

      if (cache) {
        cssVariableCache.set(variableName, value)
      }

      return value
    } catch {
      return undefined
    }
  }, [variableName, override, isSSR, cache])
}
