/**
 * Theme Export/Import Utilities
 * Utilities to export/import theme configurations
 * Based on HeroUI v3 theme I/O patterns
 */

import type { FlexiUIPluginConfig, ConfigTheme } from '../types'

/**
 * Options for exporting themes
 */
export interface ExportOptions {
  /**
   * Whether to include default values
   * @default false
   */
  includeDefaults?: boolean
  /**
   * Whether to minify the output
   * @default false
   */
  minify?: boolean
  /**
   * Custom metadata to include
   */
  metadata?: Record<string, unknown>
}

/**
 * Exported theme format
 */
export interface ExportedTheme {
  version: string
  metadata?: Record<string, unknown>
  config: FlexiUIPluginConfig
  exportedAt: string
}

/**
 * Exports a theme configuration to JSON string
 *
 * @example
 * ```ts
 * const json = exportTheme(config, {
 *   includeDefaults: false,
 *   metadata: { author: 'John Doe' }
 * })
 * ```
 */
export function exportTheme(
  config: FlexiUIPluginConfig,
  options: ExportOptions = {},
): string {
  const { includeDefaults = false, minify = false, metadata } = options

  const exported: ExportedTheme = {
    version: '1.0.0',
    metadata,
    config: includeDefaults ? config : removeDefaults(config),
    exportedAt: new Date().toISOString(),
  }

  return minify ? JSON.stringify(exported) : JSON.stringify(exported, null, 2)
}

/**
 * Imports a theme configuration from JSON string
 *
 * @example
 * ```ts
 * const config = importTheme(jsonString)
 * ```
 */
export function importTheme(json: string): FlexiUIPluginConfig {
  try {
    const parsed = JSON.parse(json) as ExportedTheme

    // Validate structure
    if (!parsed.config || typeof parsed.config !== 'object') {
      throw new Error('Invalid theme format: missing config')
    }

    return parsed.config
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error(`Invalid JSON: ${error.message}`)
    }
    throw error
  }
}

/**
 * Exports a single theme to JSON
 */
export function exportSingleTheme(theme: ConfigTheme, themeName: string): string {
  const exported = {
    name: themeName,
    theme,
    exportedAt: new Date().toISOString(),
  }

  return JSON.stringify(exported, null, 2)
}

/**
 * Imports a single theme from JSON
 */
export function importSingleTheme(json: string): { name: string; theme: ConfigTheme } {
  try {
    const parsed = JSON.parse(json)

    if (!parsed.theme || typeof parsed.theme !== 'object') {
      throw new Error('Invalid theme format: missing theme')
    }

    return {
      name: parsed.name || 'imported',
      theme: parsed.theme,
    }
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error(`Invalid JSON: ${error.message}`)
    }
    throw error
  }
}

/**
 * Exports themes to a file-like format (for download)
 */
export function exportThemesToFile(config: FlexiUIPluginConfig, options: ExportOptions = {}): string {
  return exportTheme(config, options)
}

/**
 * Imports themes from a file-like format
 */
export function importThemesFromFile(json: string): FlexiUIPluginConfig {
  return importTheme(json)
}

/**
 * Validates exported theme format
 */
export function validateExportedTheme(json: string): {
  valid: boolean
  error?: string
} {
  try {
    const parsed = JSON.parse(json)

    if (!parsed.config) {
      return { valid: false, error: 'Missing config property' }
    }

    if (!parsed.version) {
      return { valid: false, error: 'Missing version property' }
    }

    return { valid: true }
  } catch (error) {
    return {
      valid: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Removes default values from config for cleaner export
 */
function removeDefaults(config: FlexiUIPluginConfig): FlexiUIPluginConfig {
  const cleaned: FlexiUIPluginConfig = {}

  if (config.themes) {
    cleaned.themes = config.themes
  }

  if (config.defaultTheme && config.defaultTheme !== 'light') {
    cleaned.defaultTheme = config.defaultTheme
  }

  if (config.prefix && config.prefix !== 'flexi-ui') {
    cleaned.prefix = config.prefix
  }

  if (config.defaultExtendTheme && config.defaultExtendTheme !== 'light') {
    cleaned.defaultExtendTheme = config.defaultExtendTheme
  }

  if (config.addCommonColors) {
    cleaned.addCommonColors = config.addCommonColors
  }

  if (config.layout) {
    cleaned.layout = config.layout
  }

  return cleaned
}

/**
 * Creates a theme backup
 */
export function createThemeBackup(config: FlexiUIPluginConfig): string {
  return exportTheme(config, {
    includeDefaults: true,
    metadata: {
      type: 'backup',
      version: '1.0.0',
    },
  })
}

/**
 * Restores a theme from backup
 */
export function restoreThemeFromBackup(json: string): FlexiUIPluginConfig {
  return importTheme(json)
}

