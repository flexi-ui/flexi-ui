/**
 * Color scale type definition
 * Supports both full color scales (50-900) and simple string colors
 * Enhanced with better type inference
 */
export type ColorScale =
  | Partial<{
      50: string
      100: string
      200: string
      300: string
      400: string
      500: string
      600: string
      700: string
      800: string
      900: string
      foreground: string
      DEFAULT: string
    }>
  | string

/**
 * Full color scale with all shades
 * All properties are required
 */
export type FullColorScale = {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  foreground: string
  DEFAULT: string
}

/**
 * Base semantic colors that are available in all themes
 */
export interface BaseColors {
  background: ColorScale
  foreground: ColorScale
  divider: ColorScale
  overlay: ColorScale
  focus: ColorScale
  content1: ColorScale
  content2: ColorScale
  content3: ColorScale
  content4: ColorScale
}

/**
 * Complete theme colors including base colors and semantic color variants
 */
export interface ThemeColors extends BaseColors {
  default: ColorScale
  primary: ColorScale
  secondary: ColorScale
  success: ColorScale
  warning: ColorScale
  danger: ColorScale
}

/**
 * Semantic base colors for light and dark themes
 */
export interface SemanticBaseColors {
  light: BaseColors
  dark: BaseColors
}

/**
 * Utility type to extract color names from ThemeColors
 */
export type ColorName = keyof ThemeColors

/**
 * Utility type to extract base color names
 */
export type BaseColorName = keyof BaseColors

/**
 * Utility type to extract semantic color names (non-base colors)
 */
export type SemanticColorName = Exclude<ColorName, BaseColorName>

/**
 * Type guard to check if a value is a valid ColorScale
 */
export function isColorScale(value: unknown): value is ColorScale {
  if (typeof value === 'string') {
    return true
  }

  if (!value || typeof value !== 'object') {
    return false
  }

  const scale = value as Record<string, unknown>

  // Check if it has color scale properties
  const validKeys = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'foreground', 'DEFAULT']
  const hasValidKeys = Object.keys(scale).some((key) => validKeys.includes(key))

  // Check if all values are strings
  const allValuesAreStrings = Object.values(scale).every((val) => typeof val === 'string')

  return hasValidKeys && allValuesAreStrings
}
