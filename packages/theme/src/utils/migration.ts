/**
 * Theme Migration Utilities
 * Utilities to help migrate from other theme systems
 * Based on HeroUI v3 migration patterns
 */

import type { FlexiUIPluginConfig, ConfigTheme, ThemeColors } from '../types'
import type { ColorScale } from '../colors/types'
import { generateColorScale } from './color'

/**
 * Tailwind CSS config structure (simplified)
 */
interface TailwindConfig {
  theme?: {
    extend?: {
      colors?: Record<string, string | Record<string, string>>
    }
  }
}

/**
 * CSS Variables structure
 */
interface CSSVariables {
  [key: string]: string
}

/**
 * Migrates from Tailwind CSS config to FlexiUI config
 *
 * @example
 * ```ts
 * const flexiConfig = migrateFromTailwindConfig(tailwindConfig)
 * ```
 */
export function migrateFromTailwindConfig(
  tailwindConfig: TailwindConfig,
): FlexiUIPluginConfig {
  const config: FlexiUIPluginConfig = {
    themes: {
      light: {
        colors: {},
      },
    },
  }

  // Extract colors from Tailwind config
  const tailwindColors = tailwindConfig.theme?.extend?.colors || {}

  if (Object.keys(tailwindColors).length > 0) {
    const migratedColors: Partial<ThemeColors> = {}

    for (const [name, value] of Object.entries(tailwindColors)) {
      if (typeof value === 'string') {
        // Single color value - generate scale
        migratedColors[name as keyof ThemeColors] = generateColorScale(value)
      } else if (typeof value === 'object') {
        // Color scale object
        const scale: Record<string, string> = {
          DEFAULT: (value['500'] || value['DEFAULT'] || Object.values(value)[0]) as string,
        }

        // Map Tailwind color scale to FlexiUI scale
        for (const [shade, color] of Object.entries(value)) {
          if (shade === 'DEFAULT') continue
          const flexiShade = mapTailwindShadeToFlexiUI(shade)
          if (flexiShade && typeof color === 'string') {
            scale[flexiShade] = color
          }
        }

        migratedColors[name as keyof ThemeColors] = scale as ColorScale
      }
    }

    if (config.themes?.light) {
      config.themes.light.colors = migratedColors
    }
  }

  return config
}

/**
 * Maps Tailwind shade names to FlexiUI shade names
 */
function mapTailwindShadeToFlexiUI(shade: string): string | null {
  const mapping: Record<string, string> = {
    '50': '50',
    '100': '100',
    '200': '200',
    '300': '300',
    '400': '400',
    '500': 'DEFAULT',
    '600': '600',
    '700': '700',
    '800': '800',
    '900': '900',
  }

  return mapping[shade] || null
}

/**
 * Migrates from CSS variables to FlexiUI config
 *
 * @example
 * ```ts
 * const flexiConfig = migrateFromCSSVariables({
 *   '--primary': '#006FEE',
 *   '--secondary': '#7828C8'
 * })
 * ```
 */
export function migrateFromCSSVariables(variables: CSSVariables): FlexiUIPluginConfig {
  const config: FlexiUIPluginConfig = {
    themes: {
      light: {
        colors: {},
      },
    },
  }

  const migratedColors: Partial<ThemeColors> = {}

  for (const [key, value] of Object.entries(variables)) {
    // Remove CSS variable prefix (-- or --flexi-ui-)
    const cleanKey = key.replace(/^--(flexi-ui-)?/, '').replace(/-/g, '')

    // Map common CSS variable names to FlexiUI color names
    const colorName = mapCSSVariableToColorName(cleanKey)

    if (colorName && typeof value === 'string') {
      migratedColors[colorName] = generateColorScale(value)
    }
  }

  if (config.themes?.light) {
    config.themes.light.colors = migratedColors
  }

  return config
}

/**
 * Maps CSS variable names to FlexiUI color names
 */
function mapCSSVariableToColorName(variable: string): keyof ThemeColors | null {
  const mapping: Record<string, keyof ThemeColors> = {
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    warning: 'warning',
    danger: 'danger',
    error: 'danger',
    info: 'primary',
    background: 'background',
    foreground: 'foreground',
    default: 'default',
  }

  // Try exact match first
  if (mapping[variable.toLowerCase()]) {
    return mapping[variable.toLowerCase()]
  }

  // Try partial match
  for (const [key, value] of Object.entries(mapping)) {
    if (variable.toLowerCase().includes(key)) {
      return value
    }
  }

  return null
}

/**
 * Migrates from a generic theme object
 */
export function migrateFromGenericTheme(theme: Record<string, unknown>): ConfigTheme {
  const migrated: ConfigTheme = {
    colors: {},
    layout: {},
  }

  // Extract colors
  if (theme.colors && typeof theme.colors === 'object') {
    const colors: Partial<ThemeColors> = {}

    for (const [name, value] of Object.entries(theme.colors)) {
      if (typeof value === 'string') {
        colors[name as keyof ThemeColors] = generateColorScale(value)
      } else if (typeof value === 'object' && value !== null) {
        // Assume it's already a color scale
        colors[name as keyof ThemeColors] = value as ColorScale
      }
    }

    migrated.colors = colors
  }

  // Extract layout
  if (theme.layout && typeof theme.layout === 'object') {
    migrated.layout = theme.layout
  }

  // Extract extend
  if (theme.extend && (theme.extend === 'light' || theme.extend === 'dark')) {
    migrated.extend = theme.extend
  }

  return migrated
}

/**
 * Creates a migration report
 */
export function createMigrationReport(
  source: string,
  target: FlexiUIPluginConfig,
): {
  source: string
  migrated: boolean
  themesCount: number
  colorsCount: number
  warnings: string[]
} {
  const warnings: string[] = []
  let themesCount = 0
  let colorsCount = 0

  if (target.themes) {
    themesCount = Object.keys(target.themes).length

    for (const theme of Object.values(target.themes)) {
      if (theme.colors) {
        colorsCount += Object.keys(theme.colors).length
      }
    }
  }

  if (themesCount === 0) {
    warnings.push('No themes were migrated')
  }

  if (colorsCount === 0) {
    warnings.push('No colors were migrated')
  }

  return {
    source,
    migrated: themesCount > 0 || colorsCount > 0,
    themesCount,
    colorsCount,
    warnings,
  }
}

