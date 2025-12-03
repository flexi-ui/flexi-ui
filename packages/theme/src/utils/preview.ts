/**
 * Theme Preview/Visualizer Utilities
 * Utilities to preview and compare theme changes
 * Based on HeroUI v3 preview patterns
 */

import type { ConfigTheme, FlexiUIPluginConfig } from '../types'

/**
 * Theme preview data structure
 */
export interface ThemePreview {
  name: string
  colors: {
    primary?: string
    secondary?: string
    success?: string
    warning?: string
    danger?: string
    background?: string
    foreground?: string
  }
  layout: {
    radius?: {
      small?: string
      medium?: string
      large?: string
    }
    fontSize?: {
      small?: string
      medium?: string
      large?: string
    }
  }
}

/**
 * Theme comparison result
 */
export interface ThemeDiff {
  equal: boolean
  colorDifferences: string[]
  layoutDifferences: string[]
  summary: string
}

/**
 * Generates a preview of a theme configuration
 *
 * @example
 * ```ts
 * const preview = generateThemePreview(theme)
 * console.log(preview.colors.primary)
 * ```
 */
export function generateThemePreview(theme: ConfigTheme, themeName = 'theme'): ThemePreview {
  const preview: ThemePreview = {
    name: themeName,
    colors: {},
    layout: {},
  }

  // Extract color previews
  if (theme.colors) {
    if (theme.colors.primary) {
      preview.colors.primary =
        typeof theme.colors.primary === 'string'
          ? theme.colors.primary
          : theme.colors.primary.DEFAULT || theme.colors.primary['500']
    }
    if (theme.colors.secondary) {
      preview.colors.secondary =
        typeof theme.colors.secondary === 'string'
          ? theme.colors.secondary
          : theme.colors.secondary.DEFAULT || theme.colors.secondary['500']
    }
    if (theme.colors.success) {
      preview.colors.success =
        typeof theme.colors.success === 'string'
          ? theme.colors.success
          : theme.colors.success.DEFAULT || theme.colors.success['500']
    }
    if (theme.colors.warning) {
      preview.colors.warning =
        typeof theme.colors.warning === 'string'
          ? theme.colors.warning
          : theme.colors.warning.DEFAULT || theme.colors.warning['500']
    }
    if (theme.colors.danger) {
      preview.colors.danger =
        typeof theme.colors.danger === 'string'
          ? theme.colors.danger
          : theme.colors.danger.DEFAULT || theme.colors.danger['500']
    }
    if (theme.colors.background) {
      preview.colors.background =
        typeof theme.colors.background === 'string'
          ? theme.colors.background
          : theme.colors.background.DEFAULT || theme.colors.background['500']
    }
    if (theme.colors.foreground) {
      preview.colors.foreground =
        typeof theme.colors.foreground === 'string'
          ? theme.colors.foreground
          : theme.colors.foreground.DEFAULT || theme.colors.foreground['500']
    }
  }

  // Extract layout previews
  if (theme.layout) {
    if (theme.layout.radius) {
      preview.layout.radius = {
        small: theme.layout.radius.small,
        medium: theme.layout.radius.medium,
        large: theme.layout.radius.large,
      }
    }
    if (theme.layout.fontSize) {
      preview.layout.fontSize = {
        small: theme.layout.fontSize.small,
        medium: theme.layout.fontSize.medium,
        large: theme.layout.fontSize.large,
      }
    }
  }

  return preview
}

/**
 * Compares two themes and returns differences
 *
 * @example
 * ```ts
 * const diff = compareThemes(theme1, theme2)
 * if (!diff.equal) {
 *   console.log(diff.colorDifferences)
 * }
 * ```
 */
export function compareThemes(theme1: ConfigTheme, theme2: ConfigTheme): ThemeDiff {
  const colorDifferences: string[] = []
  const layoutDifferences: string[] = []

  // Compare colors
  const colors1 = theme1.colors || {}
  const colors2 = theme2.colors || {}

  const allColorKeys = new Set([...Object.keys(colors1), ...Object.keys(colors2)])

  for (const key of allColorKeys) {
    const color1 = colors1[key as keyof typeof colors1]
    const color2 = colors2[key as keyof typeof colors2]

    if (JSON.stringify(color1) !== JSON.stringify(color2)) {
      colorDifferences.push(key)
    }
  }

  // Compare layout
  const layout1 = theme1.layout || {}
  const layout2 = theme2.layout || {}

  if (JSON.stringify(layout1) !== JSON.stringify(layout2)) {
    layoutDifferences.push('layout')
  }

  const equal = colorDifferences.length === 0 && layoutDifferences.length === 0

  let summary = ''
  if (equal) {
    summary = 'Themes are identical'
  } else {
    const parts: string[] = []
    if (colorDifferences.length > 0) {
      parts.push(`${colorDifferences.length} color difference(s)`)
    }
    if (layoutDifferences.length > 0) {
      parts.push(`${layoutDifferences.length} layout difference(s)`)
    }
    summary = parts.join(', ')
  }

  return {
    equal,
    colorDifferences,
    layoutDifferences,
    summary,
  }
}

/**
 * Generates previews for all themes in a config
 */
export function generateConfigPreview(config: FlexiUIPluginConfig): Record<string, ThemePreview> {
  const previews: Record<string, ThemePreview> = {}

  if (config.themes) {
    for (const [name, theme] of Object.entries(config.themes)) {
      previews[name] = generateThemePreview(theme, name)
    }
  }

  return previews
}

/**
 * Creates a visual summary of theme differences
 */
export function createThemeDiffSummary(diff: ThemeDiff): string {
  const lines: string[] = []

  lines.push(`Theme Comparison: ${diff.equal ? '✅ Identical' : '❌ Different'}`)
  lines.push(`Summary: ${diff.summary}`)

  if (diff.colorDifferences.length > 0) {
    lines.push(`\nColor Differences:`)
    diff.colorDifferences.forEach((color) => {
      lines.push(`  - ${color}`)
    })
  }

  if (diff.layoutDifferences.length > 0) {
    lines.push(`\nLayout Differences:`)
    diff.layoutDifferences.forEach((layout) => {
      lines.push(`  - ${layout}`)
    })
  }

  return lines.join('\n')
}

