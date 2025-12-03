import { flatten } from 'flat'

/**
 * Swaps color values in a color palette (useful for dark mode)
 * @param colors - Color object to swap
 * @returns Swapped color object
 */
export function swapColorValues<T extends object>(colors: T): Record<string, unknown> {
  if (!colors || typeof colors !== 'object') {
    return {}
  }

  const swappedColors: Record<string, unknown> = {}
  const keys = Object.keys(colors)
  const length = keys.length

  if (length === 0) {
    return {}
  }

  // Swap first half with second half
  for (let i = 0; i < length / 2; i++) {
    const key1 = keys[i]
    const key2 = keys[length - 1 - i]
    swappedColors[key1] = (colors as Record<string, unknown>)[key2]
    swappedColors[key2] = (colors as Record<string, unknown>)[key1]
  }

  // Handle middle key if odd number of keys
  if (length % 2 !== 0) {
    const middleKey = keys[Math.floor(length / 2)]
    swappedColors[middleKey] = (colors as Record<string, unknown>)[middleKey]
  }

  return swappedColors
}

/**
 * Removes '-DEFAULT' suffix from keys and promotes them to the base key
 * @param obj - Object with keys that may have '-DEFAULT' suffix
 * @returns Object with cleaned keys
 */
export function removeDefaultKeys<T extends object>(obj: T): Record<string, unknown> {
  if (!obj || typeof obj !== 'object') {
    return {}
  }

  const newObj: Record<string, unknown> = {}

  for (const key in obj as object) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (key.endsWith('-DEFAULT')) {
        // Remove '-DEFAULT' suffix and use as base key
        const baseKey = key.replace('-DEFAULT', '')
        newObj[baseKey] = (obj as Record<string, unknown>)[key]
      } else {
        newObj[key] = (obj as Record<string, unknown>)[key]
      }
    }
  }

  return newObj
}

/**
 * Flattens a nested theme object and removes default keys
 * Converts nested objects like { primary: { DEFAULT: '#000', 50: '#fff' } }
 * to flat objects like { 'primary': '#000', 'primary-50': '#fff' }
 *
 * @param obj - Theme object to flatten
 * @returns Flattened object with kebab-case keys
 */
export const flattenThemeObject = <TTarget>(obj: TTarget): Record<string, unknown> => {
  if (!obj || typeof obj !== 'object') {
    return {}
  }

  try {
    const flattened = flatten(obj, {
      safe: true,
      delimiter: '-',
    }) as object

    return removeDefaultKeys(flattened)
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[FlexiUI Theme] Failed to flatten theme object:', error)
    }
    return {}
  }
}

/**
 * Merge strategy options for theme merging
 */
export interface MergeStrategy {
  /**
   * How to handle arrays during merge
   * 'replace' - Replace target array with source array
   * 'concat' - Concatenate arrays
   * 'merge' - Merge array elements (for objects in arrays)
   */
  arrayMerge?: 'replace' | 'concat' | 'merge'
  /**
   * Whether to clone objects during merge
   * @default true
   */
  clone?: boolean
  /**
   * Custom merge function for specific keys
   */
  customMerge?: (key: string) => ((target: unknown, source: unknown) => unknown) | undefined
}

/**
 * Deeply merges theme objects with better handling of nested structures
 * Enhanced version with merge strategies and better type safety
 *
 * @param target - Target object
 * @param source - Source object to merge
 * @param strategy - Merge strategy options
 * @returns Merged object
 */
export function deepMergeTheme<T extends object, U extends object>(
  target: T,
  source: U,
  strategy: MergeStrategy = {},
): T & U {
  if (!target || typeof target !== 'object') {
    return source as T & U
  }

  if (!source || typeof source !== 'object') {
    return target as T & U
  }

  const { arrayMerge = 'replace', clone = true, customMerge } = strategy

  // Clone target if needed
  const result = (clone ? { ...target } : target) as T & U

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      const sourceValue = source[key]
      const targetValue = (target as Record<string, unknown>)[key]

      // Check for custom merge function
      if (customMerge) {
        const customMergeFn = customMerge(key)
        if (customMergeFn) {
          ;(result as Record<string, unknown>)[key] = customMergeFn(targetValue, sourceValue)
          continue
        }
      }

      // Handle arrays
      if (Array.isArray(sourceValue)) {
        if (arrayMerge === 'replace') {
          ;(result as Record<string, unknown>)[key] = sourceValue
        } else if (arrayMerge === 'concat' && Array.isArray(targetValue)) {
          ;(result as Record<string, unknown>)[key] = [...targetValue, ...sourceValue]
        } else {
          ;(result as Record<string, unknown>)[key] = sourceValue
        }
        continue
      }

      // Handle nested objects
      if (
        sourceValue &&
        typeof sourceValue === 'object' &&
        !Array.isArray(sourceValue) &&
        targetValue &&
        typeof targetValue === 'object' &&
        !Array.isArray(targetValue)
      ) {
        // Recursively merge nested objects
        ;(result as Record<string, unknown>)[key] = deepMergeTheme(
          targetValue as object,
          sourceValue as object,
          strategy,
        )
      } else {
        // Overwrite with source value (or use source if target is undefined)
        ;(result as Record<string, unknown>)[key] =
          sourceValue !== undefined ? sourceValue : targetValue
      }
    }
  }

  return result
}

/**
 * Merges multiple theme objects together
 * Useful for merging multiple theme sources
 *
 * @param themes - Array of theme objects to merge
 * @param strategy - Merge strategy options
 * @returns Merged theme object
 */
export function mergeThemes<T extends object>(themes: T[], strategy: MergeStrategy = {}): T {
  if (themes.length === 0) {
    return {} as T
  }

  if (themes.length === 1) {
    return themes[0]
  }

  return themes.reduce((acc, theme) => deepMergeTheme(acc, theme, strategy), {} as T)
}

/**
 * Creates a merge strategy for theme colors
 * Colors should be merged deeply, replacing nested values
 */
export function createColorMergeStrategy(): MergeStrategy {
  return {
    arrayMerge: 'replace',
    clone: true,
    customMerge: (key) => {
      // For color scales, we want to merge deeply but replace individual color values
      if (key === 'foreground' || key === 'DEFAULT') {
        return (target, source) => (source !== undefined ? source : target)
      }
      return undefined
    },
  }
}

/**
 * Creates a merge strategy for layout themes
 * Layout values should be merged with preference for source values
 */
export function createLayoutMergeStrategy(): MergeStrategy {
  return {
    arrayMerge: 'replace',
    clone: true,
  }
}
