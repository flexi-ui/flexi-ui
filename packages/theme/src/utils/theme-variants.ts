/**
 * Theme Variant Utilities
 * Utilities to create and manipulate theme variants dynamically
 * Based on HeroUI v3 theme variant patterns
 */

import type { ConfigTheme, ConfigThemes, DefaultThemeType } from '../types'
import { deepMergeTheme, createColorMergeStrategy, createLayoutMergeStrategy } from './object'

/**
 * Options for creating a theme variant
 */
export interface CreateThemeVariantOptions {
  /**
   * Base theme to extend (light or dark)
   * @default 'light'
   */
  extend?: DefaultThemeType
  /**
   * Whether to deep merge colors
   * @default true
   */
  mergeColors?: boolean
  /**
   * Whether to deep merge layout
   * @default true
   */
  mergeLayout?: boolean
}

/**
 * Creates a theme variant from a base theme with overrides
 *
 * @example
 * ```ts
 * const customTheme = createThemeVariant('light', {
 *   colors: {
 *     primary: { DEFAULT: '#FF0000' }
 *   },
 *   layout: {
 *     radius: { small: '1rem' }
 *   }
 * })
 * ```
 */
export function createThemeVariant(
  baseTheme: DefaultThemeType,
  overrides: Partial<ConfigTheme>,
  options: CreateThemeVariantOptions = {},
): ConfigTheme {
  const { extend = baseTheme, mergeColors = true, mergeLayout = true } = options

  const variant: ConfigTheme = {
    extend,
  }

  // Merge colors if provided
  if (overrides.colors) {
    if (mergeColors && typeof overrides.colors === 'object') {
      // Deep merge colors
      variant.colors = deepMergeTheme({}, overrides.colors, createColorMergeStrategy())
    } else {
      variant.colors = overrides.colors
    }
  }

  // Merge layout if provided
  if (overrides.layout) {
    if (mergeLayout && typeof overrides.layout === 'object') {
      // Deep merge layout
      variant.layout = deepMergeTheme({}, overrides.layout, createLayoutMergeStrategy())
    } else {
      variant.layout = overrides.layout
    }
  }

  return variant
}

/**
 * Inverts a theme (light becomes dark, dark becomes light)
 * Useful for creating opposite theme variants
 *
 * @example
 * ```ts
 * const darkTheme = invertTheme(lightTheme)
 * ```
 */
export function invertTheme(theme: ConfigTheme): ConfigTheme {
  const inverted: ConfigTheme = {
    extend: theme.extend === 'light' ? 'dark' : 'light',
  }

  // Invert colors if present
  if (theme.colors) {
    // For color inversion, we'd need to swap light/dark color scales
    // This is a simplified version - full inversion would require color manipulation
    inverted.colors = theme.colors
  }

  // Keep layout as-is (or could invert shadows, etc.)
  if (theme.layout) {
    inverted.layout = theme.layout
  }

  return inverted
}

/**
 * Creates a theme variant with inverted colors
 * Useful for creating dark mode variants from light themes
 */
export function createInvertedTheme(theme: ConfigTheme): ConfigTheme {
  return invertTheme(theme)
}

/**
 * Merges multiple theme variants into one
 *
 * @example
 * ```ts
 * const merged = mergeThemeVariants([
 *   { colors: { primary: { DEFAULT: '#FF0000' } } },
 *   { layout: { radius: { small: '1rem' } } }
 * ])
 * ```
 */
export function mergeThemeVariants(variants: Partial<ConfigTheme>[]): ConfigTheme {
  const merged: ConfigTheme = {}

  for (const variant of variants) {
    if (variant.extend) {
      merged.extend = variant.extend
    }

    if (variant.colors) {
      if (merged.colors) {
        merged.colors = deepMergeTheme(merged.colors, variant.colors, createColorMergeStrategy())
      } else {
        merged.colors = variant.colors
      }
    }

    if (variant.layout) {
      if (merged.layout) {
        merged.layout = deepMergeTheme(merged.layout, variant.layout, createLayoutMergeStrategy())
      } else {
        merged.layout = variant.layout
      }
    }
  }

  return merged
}

/**
 * Creates a theme variant from a base theme name in ConfigThemes
 *
 * @example
 * ```ts
 * const themes: ConfigThemes = {
 *   light: { colors: { primary: { DEFAULT: '#000' } } },
 *   dark: { colors: { primary: { DEFAULT: '#FFF' } } }
 * }
 * const custom = createVariantFromThemes(themes, 'light', {
 *   colors: { secondary: { DEFAULT: '#FF0000' } }
 * })
 * ```
 */
export function createVariantFromThemes(
  themes: ConfigThemes,
  baseThemeName: string,
  overrides: Partial<ConfigTheme>,
  options: CreateThemeVariantOptions = {},
): ConfigTheme {
  const baseTheme = themes[baseThemeName]

  if (!baseTheme) {
    throw new Error(`Base theme "${baseThemeName}" not found in themes`)
  }

  // Merge base theme with overrides
  const merged = mergeThemeVariants([baseTheme, overrides])

  // Apply options
  if (options.extend) {
    merged.extend = options.extend
  }

  return merged
}

/**
 * Clones a theme variant
 * Useful for creating variations without mutating the original
 */
export function cloneTheme(theme: ConfigTheme): ConfigTheme {
  const cloned: ConfigTheme = {}

  if (theme.extend) {
    cloned.extend = theme.extend
  }

  if (theme.colors) {
    cloned.colors = deepMergeTheme({}, theme.colors, createColorMergeStrategy())
  }

  if (theme.layout) {
    cloned.layout = deepMergeTheme({}, theme.layout, createLayoutMergeStrategy())
  }

  return cloned
}

/**
 * Applies a theme variant to an existing theme
 * Mutates the original theme
 */
export function applyThemeVariant(
  theme: ConfigTheme,
  variant: Partial<ConfigTheme>,
): ConfigTheme {
  if (variant.extend) {
    theme.extend = variant.extend
  }

  if (variant.colors) {
    theme.colors = deepMergeTheme(theme.colors || {}, variant.colors, createColorMergeStrategy())
  }

  if (variant.layout) {
    theme.layout = deepMergeTheme(theme.layout || {}, variant.layout, createLayoutMergeStrategy())
  }

  return theme
}

