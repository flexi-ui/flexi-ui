/**
 * Theme Generator Utilities
 * Programmatically generate themes from base colors or palettes
 * Based on HeroUI v3 theme generation patterns
 */

import type { ConfigTheme } from '../types'
import type { ThemeColors } from '../colors/types'
import type { ColorScale } from '../colors/types'
import { generateColorScale } from './color'
import { createThemeVariant } from './theme-variants'

/**
 * Options for generating a theme from a color
 */
export interface ThemeGenOptions {
  /**
   * Base theme to extend
   * @default 'light'
   */
  extend?: 'light' | 'dark'
  /**
   * Whether to generate semantic colors
   * @default true
   */
  generateSemantic?: boolean
  /**
   * Custom color name for the primary color
   * @default 'primary'
   */
  colorName?: string
  /**
   * Additional colors to include
   */
  additionalColors?: Record<string, string | ColorScale>
}

/**
 * Generates a theme from a single base color
 *
 * @example
 * ```ts
 * const theme = generateThemeFromColor('#006FEE', {
 *   extend: 'light',
 *   colorName: 'primary'
 * })
 * ```
 */
export function generateThemeFromColor(
  baseColor: string,
  options: ThemeGenOptions = {},
): ConfigTheme {
  const {
    extend = 'light',
    generateSemantic = true,
    colorName = 'primary',
    additionalColors = {},
  } = options

  // Generate color scale from base color
  const colorScale = generateColorScale(baseColor)

  // Build colors object
  const colors: Partial<ThemeColors> = {
    [colorName]: colorScale,
    ...additionalColors,
  }

  // Generate semantic colors if requested
  if (generateSemantic) {
    // Generate common semantic colors from the base color
    colors.success = generateColorScale('#17C964')
    colors.warning = generateColorScale('#F5A524')
    colors.danger = generateColorScale('#F31260')
  }

  return createThemeVariant(extend, {
    colors,
  })
}

/**
 * Generates a theme from a color palette
 *
 * @example
 * ```ts
 * const theme = generateThemeFromPalette({
 *   primary: '#006FEE',
 *   secondary: '#7828C8',
 *   success: '#17C964'
 * })
 * ```
 */
export function generateThemeFromPalette(
  palette: Record<string, string>,
  options: Omit<ThemeGenOptions, 'colorName' | 'additionalColors'> = {},
): ConfigTheme {
  const { extend = 'light', generateSemantic = true } = options

  const colors: Partial<ThemeColors> = {}

  // Generate color scales for each color in the palette
  for (const [name, color] of Object.entries(palette)) {
    colors[name as keyof ThemeColors] = generateColorScale(color)
  }

  // Generate additional semantic colors if requested and not provided
  if (generateSemantic) {
    if (!colors.success) {
      colors.success = generateColorScale('#17C964')
    }
    if (!colors.warning) {
      colors.warning = generateColorScale('#F5A524')
    }
    if (!colors.danger) {
      colors.danger = generateColorScale('#F31260')
    }
  }

  return createThemeVariant(extend, {
    colors,
  })
}

/**
 * Generates both light and dark themes from a color
 *
 * @example
 * ```ts
 * const { light, dark } = generateThemesFromColor('#006FEE')
 * ```
 */
export function generateThemesFromColor(
  baseColor: string,
  options: ThemeGenOptions = {},
): { light: ConfigTheme; dark: ConfigTheme } {
  const lightTheme = generateThemeFromColor(baseColor, {
    ...options,
    extend: 'light',
  })

  const darkTheme = generateThemeFromColor(baseColor, {
    ...options,
    extend: 'dark',
  })

  return {
    light: lightTheme,
    dark: darkTheme,
  }
}

/**
 * Generates both light and dark themes from a palette
 *
 * @example
 * ```ts
 * const { light, dark } = generateThemesFromPalette({
 *   primary: '#006FEE',
 *   secondary: '#7828C8'
 * })
 * ```
 */
export function generateThemesFromPalette(
  palette: Record<string, string>,
  options: Omit<ThemeGenOptions, 'colorName' | 'additionalColors'> = {},
): { light: ConfigTheme; dark: ConfigTheme } {
  const lightTheme = generateThemeFromPalette(palette, {
    ...options,
    extend: 'light',
  })

  const darkTheme = generateThemeFromPalette(palette, {
    ...options,
    extend: 'dark',
  })

  return {
    light: lightTheme,
    dark: darkTheme,
  }
}

/**
 * Generates a complete theme configuration from a color
 * Includes both light and dark themes
 *
 * @example
 * ```ts
 * const config = generateConfigFromColor('#006FEE', {
 *   defaultTheme: 'light'
 * })
 * ```
 */
export function generateConfigFromColor(
  baseColor: string,
  options: ThemeGenOptions & { defaultTheme?: 'light' | 'dark' } = {},
): { themes: { light: ConfigTheme; dark: ConfigTheme }; defaultTheme: 'light' | 'dark' } {
  const { defaultTheme = 'light', ...themeOptions } = options

  const themes = generateThemesFromColor(baseColor, themeOptions)

  return {
    themes,
    defaultTheme,
  }
}

/**
 * Generates a complete theme configuration from a palette
 * Includes both light and dark themes
 *
 * @example
 * ```ts
 * const config = generateConfigFromPalette({
 *   primary: '#006FEE',
 *   secondary: '#7828C8'
 * }, {
 *   defaultTheme: 'light'
 * })
 * ```
 */
export function generateConfigFromPalette(
  palette: Record<string, string>,
  options: Omit<ThemeGenOptions, 'colorName' | 'additionalColors'> & {
    defaultTheme?: 'light' | 'dark'
  } = {},
): { themes: { light: ConfigTheme; dark: ConfigTheme }; defaultTheme: 'light' | 'dark' } {
  const { defaultTheme = 'light', ...themeOptions } = options

  const themes = generateThemesFromPalette(palette, themeOptions)

  return {
    themes,
    defaultTheme,
  }
}

