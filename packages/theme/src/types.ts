import type { ThemeColors } from './colors/types'

// Re-export ThemeColors for convenience
export type { ThemeColors } from './colors/types'

/**
 * Base theme type (light or dark)
 */
export type DefaultThemeType = 'light' | 'dark'

/**
 * Base theme unit with small, medium, and large sizes
 */
export type BaseThemeUnit = {
  small?: string
  medium?: string
  large?: string
  [key: string]: string | undefined
}

/**
 * Font theme unit extending BaseThemeUnit with tiny size
 */
export type FontThemeUnit = BaseThemeUnit & {
  tiny?: string
}

/**
 * Enhanced LayoutTheme interface with better type safety
 * All properties are optional and will use defaults if not provided
 */
export interface LayoutTheme {
  /**
   * The default font size applied across the components.
   *
   * @default
   * {
   *    tiny: "0.75rem",
   *    small: "0.875rem",
   *    medium: "1rem",
   *    large: "1.125rem",
   * }
   */
  fontSize?: FontThemeUnit
  /**
   * The default line height applied across the components.
   *
   * @default
   * {
   *    tiny: "1rem",
   *    small: "1.25rem",
   *    medium: "1.5rem",
   *    large: "1.75rem",
   * }
   */
  lineHeight?: FontThemeUnit
  /**
   * The default radius applied across the components.
   * We recommend using `rem` units for better scalability.
   *
   * @default
   * {
   *   small: "0.5rem",  // 8px at 16px base
   *   medium: "0.75rem", // 12px at 16px base
   *   large: "0.875rem", // 14px at 16px base
   * }
   */
  radius?: BaseThemeUnit
  /**
   * A number between 0 and 1 that is applied as opacity-[value] when the component is disabled.
   *
   * Format: ".[value]" or number
   *
   * @default .5
   */
  disabledOpacity?: string | number
  /**
   * A number between 0 and 1 that is applied as opacity-[value] when the component is hovered.
   *
   * Format: ".[value]" or number
   *
   * @default .8
   */
  hoverOpacity?: string | number
  /**
   * The default height applied to the divider component.
   * We recommend using `px` units.
   *
   * @default 1px
   */
  dividerWeight?: string
  /**
   * The border width applied across the components.
   *
   * @default
   * {
   *    small: "1px",
   *    medium: "2px",
   *    large: "3px",
   * }
   */
  borderWidth?: BaseThemeUnit
  /**
   * The box shadow applied across the components.
   *
   * @default
   * {
   *   small: 0px 0px 5px 0px rgb(0 0 0 / 0.01), 0px 2px 10px 0px rgb(0 0 0 / 0.06),
   *   medium: 0px 0px 15px 0px rgb(0 0 0 / 0.02), 0px 2px 30px 0px rgb(0 0 0 / 0.08),
   *   large: 0px 0px 30px 0px rgb(0 0 0 / 0.03), 0px 30px 60px 0px rgb(0 0 0 / 0.12),
   * }
   */
  boxShadow?: BaseThemeUnit
  /**
   * Enhanced spacing scale for consistent layout control
   * Uses rem units for better scalability
   *
   * @default
   * {
   *   xs: "0.25rem",   // 4px
   *   sm: "0.5rem",    // 8px
   *   md: "0.75rem",   // 12px
   *   lg: "1rem",      // 16px
   *   xl: "1.5rem",    // 24px
   *   "2xl": "2rem",   // 32px
   *   "3xl": "3rem",   // 48px
   *   "4xl": "4rem",   // 64px
   * }
   */
  spacing?: BaseThemeUnit
}

/**
 * Enhanced ConfigTheme with better type inference
 * Supports theme extension and partial overrides
 */
export interface ConfigTheme {
  /**
   * The base theme to extend (light or dark).
   * If not provided, will use the defaultExtendTheme from FlexiUIPluginConfig.
   */
  extend?: DefaultThemeType
  /**
   * Layout overrides for this theme.
   * Will be merged with the base theme's layout.
   */
  layout?: Partial<LayoutTheme>
  /**
   * Color overrides for this theme.
   * Will be merged with the base theme's colors.
   */
  colors?: Partial<ThemeColors>
}

/**
 * Type for theme configurations
 * Keys are theme names, values are ConfigTheme objects
 */
export type ConfigThemes = Record<string, ConfigTheme>

/**
 * Enhanced FlexiUI plugin configuration with better type safety
 * @see https://flexiui.org/docs/customization/customize-theme
 */
export interface FlexiUIPluginConfig {
  /**
   * The prefix for CSS variables.
   * @default "flexi-ui"
   */
  prefix?: string
  /**
   * If true, common FlexiUI colors (e.g. "blue", "green", "purple") will be extended on the theme.
   * @default false
   */
  addCommonColors?: boolean
  /**
   * Common layout definitions. These definitions are applied to all themes.
   * Will be merged with theme-specific layouts.
   */
  layout?: Partial<LayoutTheme>
  /**
   * The theme definitions.
   * Must include at least 'light' and 'dark' themes.
   */
  themes?: ConfigThemes
  /**
   * The default theme to use.
   * @default "light"
   */
  defaultTheme?: DefaultThemeType
  /**
   * The default theme to extend for custom themes.
   * @default "light"
   */
  defaultExtendTheme?: DefaultThemeType
}

/**
 * Utility type to extract theme names from ConfigThemes
 */
export type ThemeName<T extends ConfigThemes> = keyof T

/**
 * Utility type to get a specific theme's configuration
 */
export type GetThemeConfig<
  T extends ConfigThemes,
  K extends keyof T,
> = T[K]

/**
 * Utility type for deep partial (makes all nested properties optional)
 */
export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>
    }
  : T

/**
 * Utility type to make specific properties required
 */
export type RequireFields<T, K extends keyof T> = T & Required<Pick<T, K>>

/**
 * Utility type to make specific properties optional
 */
export type OptionalFields<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

/**
 * Type guard to check if a value is a valid DefaultThemeType
 */
export function isDefaultThemeType(value: unknown): value is DefaultThemeType {
  return value === 'light' || value === 'dark'
}

/**
 * Type guard to check if a value is a valid ConfigTheme
 */
export function isConfigTheme(value: unknown): value is ConfigTheme {
  if (!value || typeof value !== 'object') {
    return false
  }

  const theme = value as Record<string, unknown>

  // Check if extend is valid
  if (theme.extend !== undefined && !isDefaultThemeType(theme.extend)) {
    return false
  }

  // Check if layout is an object (if provided)
  if (theme.layout !== undefined && typeof theme.layout !== 'object') {
    return false
  }

  // Check if colors is an object (if provided)
  if (theme.colors !== undefined && typeof theme.colors !== 'object') {
    return false
  }

  return true
}
