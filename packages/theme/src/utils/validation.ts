/**
 * Theme validation utilities
 * Enhanced validation with better error messages and type checking
 * Based on HeroUI v3 validation improvements
 */

import type { ConfigTheme, ConfigThemes, FlexiUIPluginConfig } from '../types'
import { isDefaultThemeType, isConfigTheme } from '../types'
import { isColorScale } from '../colors/types'

/**
 * Validation error with detailed information
 */
export interface ValidationError {
  /**
   * Error code for programmatic handling
   */
  code: string
  /**
   * Human-readable error message
   */
  message: string
  /**
   * Path to the invalid property (e.g., 'themes.custom.colors.primary')
   */
  path?: string
  /**
   * The invalid value (if safe to include)
   */
  value?: unknown
  /**
   * Error severity
   */
  severity: 'error' | 'warning'
  /**
   * Suggested fix (if applicable)
   */
  suggestion?: string
}

/**
 * Validation result
 */
export interface ValidationResult {
  /**
   * Whether the validation passed
   */
  valid: boolean
  /**
   * Array of validation errors
   */
  errors: ValidationError[]
  /**
   * Array of validation warnings
   */
  warnings: ValidationError[]
}

/**
 * Validates a FlexiUI plugin configuration
 */
export function validatePluginConfig(config: unknown): ValidationResult {
  const result: ValidationResult = {
    valid: true,
    errors: [],
    warnings: [],
  }

  if (!config || typeof config !== 'object') {
    result.valid = false
    result.errors.push({
      code: 'INVALID_CONFIG',
      message: 'Plugin configuration must be an object',
      severity: 'error',
    })
    return result
  }

  const pluginConfig = config as Record<string, unknown>

  // Validate prefix
  if (pluginConfig.prefix !== undefined) {
    if (typeof pluginConfig.prefix !== 'string' || pluginConfig.prefix.trim() === '') {
      result.errors.push({
        code: 'INVALID_PREFIX',
        message: 'Prefix must be a non-empty string',
        path: 'prefix',
        value: pluginConfig.prefix,
        severity: 'error',
        suggestion: 'Use a valid string like "flexi-ui" or "my-theme"',
      })
      result.valid = false
    }
  }

  // Validate defaultTheme
  if (pluginConfig.defaultTheme !== undefined) {
    if (!isDefaultThemeType(pluginConfig.defaultTheme)) {
      result.errors.push({
        code: 'INVALID_DEFAULT_THEME',
        message: `Default theme must be "light" or "dark", got "${pluginConfig.defaultTheme}"`,
        path: 'defaultTheme',
        value: pluginConfig.defaultTheme,
        severity: 'error',
        suggestion: 'Use "light" or "dark"',
      })
      result.valid = false
    }
  }

  // Validate defaultExtendTheme
  if (pluginConfig.defaultExtendTheme !== undefined) {
    if (!isDefaultThemeType(pluginConfig.defaultExtendTheme)) {
      result.errors.push({
        code: 'INVALID_DEFAULT_EXTEND_THEME',
        message: `Default extend theme must be "light" or "dark", got "${pluginConfig.defaultExtendTheme}"`,
        path: 'defaultExtendTheme',
        value: pluginConfig.defaultExtendTheme,
        severity: 'error',
        suggestion: 'Use "light" or "dark"',
      })
      result.valid = false
    }
  }

  // Validate addCommonColors
  if (pluginConfig.addCommonColors !== undefined && typeof pluginConfig.addCommonColors !== 'boolean') {
    result.errors.push({
      code: 'INVALID_ADD_COMMON_COLORS',
      message: 'addCommonColors must be a boolean',
      path: 'addCommonColors',
      value: pluginConfig.addCommonColors,
      severity: 'error',
    })
    result.valid = false
  }

  // Validate layout
  if (pluginConfig.layout !== undefined) {
    const layoutResult = validateLayout(pluginConfig.layout, 'layout')
    result.errors.push(...layoutResult.errors)
    result.warnings.push(...layoutResult.warnings)
    if (!layoutResult.valid) {
      result.valid = false
    }
  }

  // Validate themes
  if (pluginConfig.themes !== undefined) {
    if (typeof pluginConfig.themes !== 'object' || Array.isArray(pluginConfig.themes)) {
      result.errors.push({
        code: 'INVALID_THEMES',
        message: 'Themes must be an object',
        path: 'themes',
        value: pluginConfig.themes,
        severity: 'error',
      })
      result.valid = false
    } else {
      const themesResult = validateThemes(pluginConfig.themes as ConfigThemes)
      result.errors.push(...themesResult.errors)
      result.warnings.push(...themesResult.warnings)
      if (!themesResult.valid) {
        result.valid = false
      }
    }
  }

  return result
}

/**
 * Validates theme configurations
 */
export function validateThemes(themes: ConfigThemes): ValidationResult {
  const result: ValidationResult = {
    valid: true,
    errors: [],
    warnings: [],
  }

  if (!themes || typeof themes !== 'object') {
    result.valid = false
    result.errors.push({
      code: 'INVALID_THEMES_OBJECT',
      message: 'Themes must be an object',
      severity: 'error',
    })
    return result
  }

  // Check for required themes
  const themeNames = Object.keys(themes)
  if (!themeNames.includes('light')) {
    result.warnings.push({
      code: 'MISSING_LIGHT_THEME',
      message: 'Light theme is recommended but not required',
      severity: 'warning',
      suggestion: 'Add a "light" theme for better compatibility',
    })
  }

  if (!themeNames.includes('dark')) {
    result.warnings.push({
      code: 'MISSING_DARK_THEME',
      message: 'Dark theme is recommended but not required',
      severity: 'warning',
      suggestion: 'Add a "dark" theme for better compatibility',
    })
  }

  // Validate each theme
  for (const [themeName, theme] of Object.entries(themes)) {
    const themeResult = validateTheme(theme, themeName)
    result.errors.push(
      ...themeResult.errors.map((err) => ({
        ...err,
        path: err.path ? `themes.${themeName}.${err.path}` : `themes.${themeName}`,
      })),
    )
    result.warnings.push(
      ...themeResult.warnings.map((err) => ({
        ...err,
        path: err.path ? `themes.${themeName}.${err.path}` : `themes.${themeName}`,
      })),
    )
    if (!themeResult.valid) {
      result.valid = false
    }
  }

  return result
}

/**
 * Validates a single theme configuration
 */
export function validateTheme(theme: unknown, themeName: string): ValidationResult {
  const result: ValidationResult = {
    valid: true,
    errors: [],
    warnings: [],
  }

  if (!isConfigTheme(theme)) {
    result.valid = false
    result.errors.push({
      code: 'INVALID_THEME',
      message: `Theme "${themeName}" has invalid configuration`,
      severity: 'error',
      suggestion: 'Theme must be an object with optional "extend", "layout", and "colors" properties',
    })
    return result
  }

  const configTheme = theme as ConfigTheme

  // Validate extend
  if (configTheme.extend !== undefined) {
    if (!isDefaultThemeType(configTheme.extend)) {
      result.errors.push({
        code: 'INVALID_EXTEND',
        message: `Theme "${themeName}" extends "${configTheme.extend}" which is not a valid base theme`,
        path: 'extend',
        value: configTheme.extend,
        severity: 'error',
        suggestion: 'Use "light" or "dark" as the extend value',
      })
      result.valid = false
    }
  }

  // Validate layout
  if (configTheme.layout !== undefined) {
    const layoutResult = validateLayout(configTheme.layout, 'layout')
    result.errors.push(...layoutResult.errors)
    result.warnings.push(...layoutResult.warnings)
    if (!layoutResult.valid) {
      result.valid = false
    }
  }

  // Validate colors
  if (configTheme.colors !== undefined) {
    const colorsResult = validateColors(configTheme.colors, 'colors')
    result.errors.push(...colorsResult.errors)
    result.warnings.push(...colorsResult.warnings)
    if (!colorsResult.valid) {
      result.valid = false
    }
  }

  return result
}

/**
 * Validates layout configuration
 */
export function validateLayout(layout: unknown, path: string = 'layout'): ValidationResult {
  const result: ValidationResult = {
    valid: true,
    errors: [],
    warnings: [],
  }

  if (!layout || typeof layout !== 'object' || Array.isArray(layout)) {
    result.valid = false
    result.errors.push({
      code: 'INVALID_LAYOUT',
      message: 'Layout must be an object',
      path,
      value: layout,
      severity: 'error',
    })
    return result
  }

  const layoutObj = layout as Record<string, unknown>

  // Validate fontSize
  if (layoutObj.fontSize !== undefined) {
    if (typeof layoutObj.fontSize !== 'object' || Array.isArray(layoutObj.fontSize)) {
      result.errors.push({
        code: 'INVALID_FONT_SIZE',
        message: 'fontSize must be an object with tiny, small, medium, large properties',
        path: `${path}.fontSize`,
        value: layoutObj.fontSize,
        severity: 'error',
      })
      result.valid = false
    }
  }

  // Validate lineHeight
  if (layoutObj.lineHeight !== undefined) {
    if (typeof layoutObj.lineHeight !== 'object' || Array.isArray(layoutObj.lineHeight)) {
      result.errors.push({
        code: 'INVALID_LINE_HEIGHT',
        message: 'lineHeight must be an object with tiny, small, medium, large properties',
        path: `${path}.lineHeight`,
        value: layoutObj.lineHeight,
        severity: 'error',
      })
      result.valid = false
    }
  }

  // Validate radius
  if (layoutObj.radius !== undefined) {
    if (typeof layoutObj.radius !== 'object' || Array.isArray(layoutObj.radius)) {
      result.errors.push({
        code: 'INVALID_RADIUS',
        message: 'radius must be an object with small, medium, large properties',
        path: `${path}.radius`,
        value: layoutObj.radius,
        severity: 'error',
      })
      result.valid = false
    }
  }

  // Validate opacity values
  if (layoutObj.disabledOpacity !== undefined) {
    const opacity = layoutObj.disabledOpacity
    if (typeof opacity !== 'string' && typeof opacity !== 'number') {
      result.errors.push({
        code: 'INVALID_DISABLED_OPACITY',
        message: 'disabledOpacity must be a string (e.g., ".5") or number (0-1)',
        path: `${path}.disabledOpacity`,
        value: opacity,
        severity: 'error',
      })
      result.valid = false
    } else if (typeof opacity === 'number' && (opacity < 0 || opacity > 1)) {
      result.errors.push({
        code: 'INVALID_DISABLED_OPACITY_RANGE',
        message: 'disabledOpacity must be between 0 and 1',
        path: `${path}.disabledOpacity`,
        value: opacity,
        severity: 'error',
      })
      result.valid = false
    }
  }

  if (layoutObj.hoverOpacity !== undefined) {
    const opacity = layoutObj.hoverOpacity
    if (typeof opacity !== 'string' && typeof opacity !== 'number') {
      result.errors.push({
        code: 'INVALID_HOVER_OPACITY',
        message: 'hoverOpacity must be a string (e.g., ".8") or number (0-1)',
        path: `${path}.hoverOpacity`,
        value: opacity,
        severity: 'error',
      })
      result.valid = false
    } else if (typeof opacity === 'number' && (opacity < 0 || opacity > 1)) {
      result.errors.push({
        code: 'INVALID_HOVER_OPACITY_RANGE',
        message: 'hoverOpacity must be between 0 and 1',
        path: `${path}.hoverOpacity`,
        value: opacity,
        severity: 'error',
      })
      result.valid = false
    }
  }

  return result
}

/**
 * Validates colors configuration
 */
export function validateColors(colors: unknown, path: string = 'colors'): ValidationResult {
  const result: ValidationResult = {
    valid: true,
    errors: [],
    warnings: [],
  }

  if (!colors || typeof colors !== 'object' || Array.isArray(colors)) {
    result.valid = false
    result.errors.push({
      code: 'INVALID_COLORS',
      message: 'Colors must be an object',
      path,
      value: colors,
      severity: 'error',
    })
    return result
  }

  const colorsObj = colors as Record<string, unknown>

  // Validate each color
  for (const [colorName, colorValue] of Object.entries(colorsObj)) {
    if (!isColorScale(colorValue)) {
      result.errors.push({
        code: 'INVALID_COLOR_SCALE',
        message: `Color "${colorName}" has invalid format`,
        path: `${path}.${colorName}`,
        value: colorValue,
        severity: 'error',
        suggestion: 'Color must be a string or an object with color scale properties (50-900, foreground, DEFAULT)',
      })
      result.valid = false
    }
  }

  return result
}

/**
 * Formats validation errors for display
 */
export function formatValidationErrors(result: ValidationResult): string {
  if (result.valid && result.warnings.length === 0) {
    return '✓ Validation passed'
  }

  const lines: string[] = []

  if (result.errors.length > 0) {
    lines.push(`\n❌ ${result.errors.length} error(s) found:`)
    result.errors.forEach((error, index) => {
      lines.push(`  ${index + 1}. [${error.code}] ${error.message}`)
      if (error.path) {
        lines.push(`     Path: ${error.path}`)
      }
      if (error.suggestion) {
        lines.push(`     💡 ${error.suggestion}`)
      }
    })
  }

  if (result.warnings.length > 0) {
    lines.push(`\n⚠️  ${result.warnings.length} warning(s) found:`)
    result.warnings.forEach((warning, index) => {
      lines.push(`  ${index + 1}. [${warning.code}] ${warning.message}`)
      if (warning.path) {
        lines.push(`     Path: ${warning.path}`)
      }
      if (warning.suggestion) {
        lines.push(`     💡 ${warning.suggestion}`)
      }
    })
  }

  return lines.join('\n')
}

/**
 * Validates and throws if invalid (for strict validation)
 * Use this when you want validation to fail fast in development
 */
export function validatePluginConfigStrict(config: unknown): asserts config is FlexiUIPluginConfig {
  const result = validatePluginConfig(config)
  if (!result.valid) {
    const errorMessage = formatValidationErrors(result)
    throw new Error(`Invalid FlexiUI plugin configuration:\n${errorMessage}`)
  }
}

/**
 * Validates a color value format
 * Returns true if the color is valid, false otherwise
 */
export function validateColorValue(color: unknown): boolean {
  if (typeof color === 'string') {
    // Basic string validation - could be enhanced with regex
    return color.trim().length > 0
  }
  return isColorScale(color)
}

/**
 * Validates opacity value
 * Returns true if valid, false otherwise
 */
export function validateOpacityValue(opacity: unknown): boolean {
  if (typeof opacity === 'number') {
    return opacity >= 0 && opacity <= 1
  }
  if (typeof opacity === 'string') {
    // Check if it's a valid opacity string like ".5" or "0.5"
    const num = parseFloat(opacity)
    return !isNaN(num) && num >= 0 && num <= 1
  }
  return false
}

