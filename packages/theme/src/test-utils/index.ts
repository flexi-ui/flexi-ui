/**
 * Theme Testing Utilities
 * Testing helpers for theme validation and test theme creation
 * Based on HeroUI v3 testing patterns
 */

import type { ConfigTheme, ConfigThemes, FlexiUIPluginConfig } from '../types'
import { validateTheme, validatePluginConfig } from '../utils/validation'
import { semanticColors } from '../colors/semantic'
import { defaultLayout } from '../default-layout'

/**
 * Creates a test theme with sensible defaults
 *
 * @example
 * ```ts
 * const testTheme = createTestTheme({
 *   colors: { primary: { DEFAULT: '#FF0000' } }
 * })
 * ```
 */
export function createTestTheme(overrides?: Partial<ConfigTheme>): ConfigTheme {
  const baseTheme: ConfigTheme = {
    colors: semanticColors.light,
    layout: defaultLayout,
    ...overrides,
  }

  return baseTheme
}

/**
 * Creates a test theme configuration with light and dark themes
 *
 * @example
 * ```ts
 * const config = createTestConfig({
 *   themes: {
 *     custom: { colors: { primary: { DEFAULT: '#FF0000' } } }
 *   }
 * })
 * ```
 */
export function createTestConfig(overrides?: Partial<FlexiUIPluginConfig>): FlexiUIPluginConfig {
  const baseConfig: FlexiUIPluginConfig = {
    themes: {
      light: createTestTheme(),
      dark: {
        colors: semanticColors.dark,
        layout: defaultLayout,
      },
    },
    defaultTheme: 'light',
    ...overrides,
  }

  return baseConfig
}

/**
 * Asserts that a theme is valid
 * Throws an error if the theme is invalid
 *
 * @example
 * ```ts
 * assertValidTheme(testTheme)
 * ```
 */
export function assertValidTheme(theme: ConfigTheme, themeName = 'test'): void {
  const result = validateTheme(theme, themeName)

  if (!result.valid) {
    const errors = result.errors.map((err) => err.message).join('\n')
    throw new Error(`Invalid theme "${themeName}":\n${errors}`)
  }

  if (result.warnings.length > 0) {
    const warnings = result.warnings.map((w) => w.message).join('\n')
    console.warn(`Theme "${themeName}" warnings:\n${warnings}`)
  }
}

/**
 * Asserts that a plugin config is valid
 * Throws an error if the config is invalid
 *
 * @example
 * ```ts
 * assertValidConfig(testConfig)
 * ```
 */
export function assertValidConfig(config: FlexiUIPluginConfig): void {
  const result = validatePluginConfig(config)

  if (!result.valid) {
    const errors = result.errors.map((err) => err.message).join('\n')
    throw new Error(`Invalid plugin config:\n${errors}`)
  }

  if (result.warnings.length > 0) {
    const warnings = result.warnings.map((w) => w.message).join('\n')
    console.warn(`Plugin config warnings:\n${warnings}`)
  }
}

/**
 * Creates a minimal test theme (only required properties)
 */
export function createMinimalTestTheme(): ConfigTheme {
  return {
    colors: {
      default: {
        DEFAULT: '#000000',
        foreground: '#FFFFFF',
      },
    },
    layout: {
      radius: {
        small: '0.25rem',
      },
    },
  }
}

/**
 * Creates a complete test theme (all properties)
 */
export function createCompleteTestTheme(): ConfigTheme {
  return createTestTheme({
    colors: semanticColors.light,
    layout: defaultLayout,
  })
}

/**
 * Creates test themes for all common scenarios
 */
export function createTestThemes(): ConfigThemes {
  return {
    light: createTestTheme(),
    dark: {
      colors: semanticColors.dark,
      layout: defaultLayout,
    },
    minimal: createMinimalTestTheme(),
    complete: createCompleteTestTheme(),
  }
}

/**
 * Helper to test theme merging
 */
export function testThemeMerge(
  base: ConfigTheme,
  override: Partial<ConfigTheme>,
): ConfigTheme {
  return {
    ...base,
    ...override,
    colors: {
      ...base.colors,
      ...override.colors,
    },
    layout: {
      ...base.layout,
      ...override.layout,
    },
  }
}

/**
 * Helper to test theme extension
 */
export function testThemeExtension(
  baseTheme: 'light' | 'dark',
  customTheme: Partial<ConfigTheme>,
): ConfigTheme {
  const base = baseTheme === 'light' ? semanticColors.light : semanticColors.dark

  return {
    extend: baseTheme,
    colors: {
      ...base,
      ...customTheme.colors,
    },
    layout: {
      ...defaultLayout,
      ...customTheme.layout,
    },
  }
}

/**
 * Snapshot helper for theme comparison
 */
export function themeSnapshot(theme: ConfigTheme): string {
  return JSON.stringify(theme, null, 2)
}

/**
 * Compare two themes and return differences (simple version for testing)
 * For more detailed comparison, use compareThemes from preview utilities
 */
export function compareTestThemes(theme1: ConfigTheme, theme2: ConfigTheme): {
  equal: boolean
  differences: string[]
} {
  const differences: string[] = []

  // Compare colors
  if (JSON.stringify(theme1.colors) !== JSON.stringify(theme2.colors)) {
    differences.push('Colors differ')
  }

  // Compare layout
  if (JSON.stringify(theme1.layout) !== JSON.stringify(theme2.layout)) {
    differences.push('Layout differs')
  }

  // Compare extend
  if (theme1.extend !== theme2.extend) {
    differences.push(`Extend differs: ${theme1.extend} vs ${theme2.extend}`)
  }

  return {
    equal: differences.length === 0,
    differences,
  }
}

