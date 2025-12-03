/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Based on tw-colors by L-Blondy
 * @see https://github.com/L-Blondy/tw-colors
 * Enhanced with HeroUI v3-style improvements
 **/

import { parseToHsla } from 'color2k'
import plugin from 'tailwindcss/plugin.js'
import deepMerge from 'deepmerge'
import { omit, kebabCase, mapKeys } from '@flexi-ui/shared-utils'

import { semanticColors, commonColors } from './colors'
import { animations } from './animations'
import { utilities } from './utilities'
import {
  flattenThemeObject,
  deepMergeTheme,
  createColorMergeStrategy,
  createLayoutMergeStrategy,
} from './utils/object'
import { isBaseTheme } from './utils/theme'
import { validatePluginConfig, formatValidationErrors } from './utils/validation'

import { ConfigTheme, ConfigThemes, DefaultThemeType, FlexiUIPluginConfig } from './types'

import { lightLayout, darkLayout, defaultLayout } from './default-layout'
import { baseStyles } from './utils/classes'
import { DEFAULT_TRANSITION_DURATION } from './utilities/transition'

const DEFAULT_PREFIX = 'flexi-ui'

const parsedColorsCache: Record<string, number[]> = {}

/**
 * Theme validation warnings
 */
interface ThemeWarning {
  theme: string
  message: string
  type: 'error' | 'warning'
}

const themeWarnings: ThemeWarning[] = []

/**
 * Validates a color value and returns parsed HSL or null
 */
function parseColorValue(colorValue: string, colorName: string, themeName: string): number[] | null {
  if (!colorValue || typeof colorValue !== 'string') {
    themeWarnings.push({
      theme: themeName,
      message: `Invalid color value for "${colorName}": ${colorValue}. Expected a string.`,
      type: 'warning',
    })
    return null
  }

  try {
    if (!parsedColorsCache[colorValue]) {
      const [h, s, l, a] = parseToHsla(colorValue)
      // Convert to 0-360, 0-100%, 0-100% format and round to 2 decimals
      parsedColorsCache[colorValue] = [
        Math.round(h),
        Math.round(s * 100),
        Math.round(l * 100),
        a,
      ]
    }
    return parsedColorsCache[colorValue]
  } catch (error: any) {
    themeWarnings.push({
      theme: themeName,
      message: `Failed to parse color "${colorName}": ${colorValue}. ${error?.message || 'Invalid color format'}`,
      type: 'error',
    })
    return null
  }
}

/**
 * Enhanced theme configuration validation
 * Uses comprehensive validation utilities for better error messages
 */
function validateThemeConfig(
  themeName: string,
  theme: ConfigTheme,
  defaultExtendTheme: DefaultThemeType,
): void {
  if (!theme) {
    themeWarnings.push({
      theme: themeName,
      message: `Theme "${themeName}" is missing configuration. Theme must be an object with optional "extend", "layout", and "colors" properties.`,
      type: 'error',
    })
    return
  }

  // Validate extend property for custom themes
  if (!isBaseTheme(themeName) && theme.extend) {
    if (!isBaseTheme(theme.extend)) {
      themeWarnings.push({
        theme: themeName,
        message: `Theme "${themeName}" extends "${theme.extend}" which is not a base theme (light/dark). Falling back to "${defaultExtendTheme}". Use "light" or "dark" as the extend value.`,
        type: 'warning',
      })
    }
  }

  // Validate colors structure with detailed error
  if (theme.colors !== undefined) {
    if (typeof theme.colors !== 'object' || Array.isArray(theme.colors)) {
      themeWarnings.push({
        theme: themeName,
        message: `Theme "${themeName}" has invalid colors configuration. Expected an object with color scale properties.`,
        type: 'error',
      })
    }
  }

  // Validate layout structure with detailed error
  if (theme.layout !== undefined) {
    if (typeof theme.layout !== 'object' || Array.isArray(theme.layout)) {
      themeWarnings.push({
        theme: themeName,
        message: `Theme "${themeName}" has invalid layout configuration. Expected an object with layout properties (fontSize, lineHeight, radius, etc.).`,
        type: 'error',
      })
    }
  }
}

/**
 * Resolved theme configuration
 */
interface ResolvedConfig {
  variants: { name: string; definition: string[] }[]
  utilities: Record<string, Record<string, any>>
  colors: Record<string, string>
  baseStyles: Record<string, Record<string, any>>
  warnings: ThemeWarning[]
}

/**
 * Enhanced theme resolution with better error handling and validation
 * @internal
 */
const resolveConfig = (
  themes: ConfigThemes = {},
  defaultTheme: DefaultThemeType,
  prefix: string,
  defaultExtendTheme: DefaultThemeType,
): ResolvedConfig => {
  // Clear previous warnings
  themeWarnings.length = 0

  const resolved: ResolvedConfig = {
    variants: [],
    utilities: {},
    colors: {},
    baseStyles: {},
    warnings: [],
  }

  // Validate themes exist
  if (!themes || Object.keys(themes).length === 0) {
    themeWarnings.push({
      theme: 'global',
      message: 'No themes provided. Using default light theme.',
      type: 'warning',
    })
  }

  // Validate default theme exists
  if (!themes[defaultTheme]) {
    themeWarnings.push({
      theme: 'global',
      message: `Default theme "${defaultTheme}" not found in themes. Falling back to "light".`,
      type: 'error',
    })
  }

  for (const [themeName, themeConfig] of Object.entries(themes)) {
    // Validate theme configuration
    validateThemeConfig(themeName, themeConfig, defaultExtendTheme)

    const { extend, layout, colors } = themeConfig || {}
    const cssSelector = `.${themeName}`
    const scheme = isBaseTheme(themeName) ? themeName : extend || defaultExtendTheme
    let baseSelector = ''

    // If the theme is the default theme, add the selector to the root element
    if (themeName === defaultTheme) {
      baseSelector = `:root, [data-theme="${themeName}"]`
    }

    // Initialize selectors if they don't exist
    if (!resolved.utilities[cssSelector]) {
      resolved.utilities[cssSelector] = {}
    }

    // Set color scheme
    if (scheme) {
      const colorScheme = { 'color-scheme': scheme }
      resolved.utilities[cssSelector] = {
        ...resolved.utilities[cssSelector],
        ...colorScheme,
      }

      if (baseSelector) {
        if (!resolved.baseStyles[baseSelector]) {
          resolved.baseStyles[baseSelector] = {}
        }
        resolved.baseStyles[baseSelector] = {
          ...resolved.baseStyles[baseSelector],
          ...colorScheme,
        }
      }
    }

    // Flatten color definitions with better error handling
    const flatColors = colors ? (flattenThemeObject(colors) as Record<string, string>) : {}

    // Flatten layout with better error handling
    const flatLayout = layout ? mapKeys(layout, (_, key) => kebabCase(key)) : {}

    // Register theme variant with enhanced selectors
    resolved.variants.push({
      name: themeName,
      definition: [
        `&.${themeName}`,
        `&[data-theme="${themeName}"]`,
        `[data-theme="${themeName}"] &`,
      ],
    })

    /**
     * Process Colors with improved error handling
     */
    for (const [colorName, colorValue] of Object.entries(flatColors)) {
      if (!colorValue) {
        continue
      }

      const parsedColor = parseColorValue(colorValue, colorName, themeName)
      if (!parsedColor) {
        continue
      }

      const [h, s, l, defaultAlphaValue] = parsedColor
      const flexiuiColorVariable = `--${prefix}-${colorName}`

      // Set the CSS variable in "@layer utilities"
      const hslValue = `${h} ${s}% ${l}%`
      resolved.utilities[cssSelector]![flexiuiColorVariable] = hslValue

      if (baseSelector) {
        resolved.baseStyles[baseSelector]![flexiuiColorVariable] = hslValue
      }

      // Set the dynamic color in tailwind config theme.colors
      const alphaValue =
        defaultAlphaValue !== undefined && defaultAlphaValue < 1
          ? defaultAlphaValue
          : '<alpha-value>'

      resolved.colors[colorName] = `hsl(var(${flexiuiColorVariable}) / ${alphaValue})`
    }

    /**
     * Process Layout with improved error handling
     */
    for (const [key, value] of Object.entries(flatLayout)) {
      if (value === null || value === undefined) {
        continue
      }

      const layoutVariablePrefix = `--${prefix}-${key}`

      if (typeof value === 'object' && !Array.isArray(value)) {
        // Handle nested layout objects
        for (const [nestedKey, nestedValue] of Object.entries(value)) {
          if (nestedValue === null || nestedValue === undefined) {
            continue
          }

          const nestedLayoutVariable = `${layoutVariablePrefix}-${nestedKey}`
          const formattedNestedValue = String(nestedValue)

          resolved.utilities[cssSelector]![nestedLayoutVariable] = formattedNestedValue

          if (baseSelector) {
            resolved.baseStyles[baseSelector]![nestedLayoutVariable] = formattedNestedValue
          }
        }
      } else {
        // Handle singular layout values
        let formattedValue: string

        if (layoutVariablePrefix.includes('opacity')) {
          // Handle opacity values - convert number to string with leading dot if < 1
          if (typeof value === 'number') {
            formattedValue = value < 1 ? value.toString().replace(/^0\./, '.') : String(value)
          } else {
            formattedValue = String(value)
          }
        } else {
          formattedValue = String(value)
        }

        resolved.utilities[cssSelector]![layoutVariablePrefix] = formattedValue

        if (baseSelector) {
          resolved.baseStyles[baseSelector]![layoutVariablePrefix] = formattedValue
        }
      }
    }
  }

  // Collect warnings
  resolved.warnings = [...themeWarnings]

  // Log warnings in development with enhanced formatting
  if (process.env.NODE_ENV !== 'production' && themeWarnings.length > 0) {
    const errors = themeWarnings.filter((w) => w.type === 'error')
    const warnings = themeWarnings.filter((w) => w.type === 'warning')

    if (errors.length > 0) {
      console.error(
        `\n[FlexiUI Theme] ❌ Found ${errors.length} error(s) in theme configuration:\n`,
      )
      errors.forEach((error, index) => {
        console.error(`  ${index + 1}. [${error.theme}] ${error.message}`)
      })
      console.error(
        '\n💡 Tip: Use validatePluginConfig() to get detailed validation errors with suggestions.\n',
      )
    }

    if (warnings.length > 0) {
      console.warn(
        `\n[FlexiUI Theme] ⚠️  Found ${warnings.length} warning(s) in theme configuration:\n`,
      )
      warnings.forEach((warning, index) => {
        console.warn(`  ${index + 1}. [${warning.theme}] ${warning.message}`)
      })
      console.warn('')
    }
  }

  return resolved
}

/**
 * Creates a stripe gradient pattern
 */
const createStripeGradient = (prefix: string, stripeColor: string, backgroundColor: string) =>
  `linear-gradient(45deg, hsl(var(--${prefix}-${stripeColor})) 25%, hsl(var(--${prefix}-${backgroundColor})) 25%, hsl(var(--${prefix}-${backgroundColor})) 50%, hsl(var(--${prefix}-${stripeColor})) 50%, hsl(var(--${prefix}-${stripeColor})) 75%, hsl(var(--${prefix}-${backgroundColor})) 75%, hsl(var(--${prefix}-${backgroundColor})))`

/**
 * Enhanced core plugin with better Tailwind integration
 */
const corePlugin = (
  themes: ConfigThemes = {},
  defaultTheme: DefaultThemeType,
  prefix: string,
  addCommonColors: boolean,
  defaultExtendTheme: DefaultThemeType,
) => {
  const resolved = resolveConfig(themes, defaultTheme, prefix, defaultExtendTheme)

  return plugin(
    ({ addBase, addUtilities, addVariant }) => {
      // Add base classNames for root and data-theme elements
      addBase({
        [':root, [data-theme]']: {
          ...baseStyles(prefix),
        },
      })

      // Add the base styles to "@layer base"
      if (resolved.baseStyles && Object.keys(resolved.baseStyles).length > 0) {
        addBase(resolved.baseStyles)
      }

      // Add the CSS variables to "@layer utilities"
      const allUtilities = {
        ...resolved.utilities,
        ...utilities,
      }

      if (Object.keys(allUtilities).length > 0) {
        addUtilities(allUtilities)
      }

      // Add the theme as variant e.g. "[theme-name]:text-2xl"
      resolved.variants.forEach((variant) => {
        try {
          addVariant(variant.name, variant.definition)
        } catch (error: any) {
          if (process.env.NODE_ENV !== 'production') {
            console.warn(
              `[FlexiUI Theme] Failed to register variant "${variant.name}": ${error?.message}`,
            )
          }
        }
      })
    },
    // Extend the Tailwind theme config
    {
      theme: {
        extend: {
          colors: {
            ...(addCommonColors ? commonColors : {}),
            ...resolved.colors,
          },
          // Scale utilities
          scale: {
            '80': '0.8',
            '85': '0.85',
            '90': '0.9',
            '95': '0.95',
          },
          // Divider utilities
          height: {
            divider: `var(--${prefix}-divider-weight)`,
          },
          width: {
            divider: `var(--${prefix}-divider-weight)`,
          },
          // Border radius utilities
          borderRadius: {
            small: `var(--${prefix}-radius-small)`,
            medium: `var(--${prefix}-radius-medium)`,
            large: `var(--${prefix}-radius-large)`,
            none: '0px',
            full: '9999px',
          },
          // Opacity utilities
          opacity: {
            hover: `var(--${prefix}-hover-opacity)`,
            disabled: `var(--${prefix}-disabled-opacity)`,
          },
          // Border width utilities
          borderWidth: {
            small: `var(--${prefix}-border-width-small)`,
            medium: `var(--${prefix}-border-width-medium)`,
            large: `var(--${prefix}-border-width-large)`,
            1: '1px',
            1.5: '1.5px',
            2: '2px',
            3: '3px',
            4: '4px',
            5: '5px',
          },
          // Box shadow utilities
          boxShadow: {
            small: `var(--${prefix}-box-shadow-small)`,
            medium: `var(--${prefix}-box-shadow-medium)`,
            large: `var(--${prefix}-box-shadow-large)`,
            none: 'none',
          },
          // Background utilities
          backgroundSize: {
            'stripe-size': '1.25rem 1.25rem',
          },
          backgroundImage: {
            'stripe-gradient-default': createStripeGradient(prefix, 'default-200', 'default-400'),
            'stripe-gradient-primary': createStripeGradient(prefix, 'primary-200', 'primary'),
            'stripe-gradient-secondary': createStripeGradient(prefix, 'secondary-200', 'secondary'),
            'stripe-gradient-success': createStripeGradient(prefix, 'success-200', 'success'),
            'stripe-gradient-warning': createStripeGradient(prefix, 'warning-200', 'warning'),
            'stripe-gradient-danger': createStripeGradient(prefix, 'danger-200', 'danger'),
          },
          // Transition utilities
          transitionDuration: {
            0: '0ms',
            75: '75ms',
            100: '100ms',
            150: '150ms',
            200: '200ms',
            250: '250ms',
            300: '300ms',
            400: '400ms',
            500: '500ms',
            DEFAULT: DEFAULT_TRANSITION_DURATION,
          },
          transitionTimingFunction: {
            'soft-spring': 'cubic-bezier(0.155, 1.105, 0.295, 1.12)',
            'ease-in-out-back': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          },
          // Animation utilities
          ...animations,
        },
      },
    },
  )
}

/**
 * Enhanced FlexiUI plugin with better default theme handling and validation
 */
export const flexiui = (config: FlexiUIPluginConfig = {}): ReturnType<typeof plugin> => {
  // Run comprehensive validation
  if (process.env.NODE_ENV !== 'production') {
    const validationResult = validatePluginConfig(config)
    if (!validationResult.valid || validationResult.errors.length > 0) {
      const errorMessage = formatValidationErrors(validationResult)
      console.error(`[FlexiUI Theme] Configuration validation failed:\n${errorMessage}`)
    } else if (validationResult.warnings.length > 0) {
      const warningMessage = formatValidationErrors(validationResult)
      console.warn(`[FlexiUI Theme] Configuration warnings:\n${warningMessage}`)
    }
  }

  const {
    themes: themeObject = {},
    defaultTheme: userDefaultTheme = 'light',
    layout: userLayout,
    defaultExtendTheme = 'light',
    prefix: defaultPrefix = DEFAULT_PREFIX,
    addCommonColors = false,
  } = config

  // Validate and normalize default theme
  const defaultTheme: DefaultThemeType =
    userDefaultTheme === 'light' || userDefaultTheme === 'dark' ? userDefaultTheme : 'light'

  // Validate defaultExtendTheme
  const validatedExtendTheme: DefaultThemeType =
    defaultExtendTheme === 'light' || defaultExtendTheme === 'dark'
      ? defaultExtendTheme
      : 'light'

  // Validate prefix
  if (!defaultPrefix || typeof defaultPrefix !== 'string' || defaultPrefix.trim() === '') {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(
        `[FlexiUI Theme] Invalid prefix "${defaultPrefix}". Using default "${DEFAULT_PREFIX}"`,
      )
    }
  }

  // Extract user theme colors with validation
  const userLightColors = themeObject?.light?.colors || {}
  const userDarkColors = themeObject?.dark?.colors || {}

  // Merge user layout with default layout
  const defaultLayoutObj =
    userLayout && typeof userLayout === 'object'
      ? deepMerge(defaultLayout, userLayout)
      : defaultLayout

  // Create base layouts for light and dark themes
  const baseLayouts = {
    light: deepMerge(defaultLayoutObj, lightLayout),
    dark: deepMerge(defaultLayoutObj, darkLayout),
  }

  // Process custom themes (themes other than light and dark)
  const otherThemes = omit(themeObject, ['light', 'dark']) || {}
  const processedOtherThemes: ConfigThemes = {}

  for (const [themeName, themeConfig] of Object.entries(otherThemes)) {
    if (!themeConfig || typeof themeConfig !== 'object') {
      if (process.env.NODE_ENV !== 'production') {
        console.warn(
          `[FlexiUI Theme] Theme "${themeName}" has invalid configuration. Skipping.`,
        )
      }
      continue
    }

    const { extend, colors, layout } = themeConfig

    // Determine base theme for extension
    const baseTheme =
      extend && isBaseTheme(extend) ? extend : validatedExtendTheme

    // Merge colors with semantic colors from base theme using enhanced merge
    const baseColors = semanticColors[baseTheme] || semanticColors[validatedExtendTheme]
    const mergedColors =
      colors && typeof colors === 'object'
        ? deepMergeTheme(baseColors, colors, createColorMergeStrategy())
        : baseColors

    // Merge layout with base layout using enhanced merge
    const baseLayoutForTheme = baseLayouts[baseTheme] || defaultLayoutObj
    const mergedLayout =
      layout && typeof layout === 'object'
        ? deepMergeTheme(baseLayoutForTheme, layout, createLayoutMergeStrategy())
        : baseLayoutForTheme

    processedOtherThemes[themeName] = {
      extend: baseTheme,
      colors: mergedColors,
      layout: mergedLayout,
    }
  }

  // Create final light and dark themes with proper merging using enhanced merge
  const light: ConfigTheme = {
    layout: deepMergeTheme(
      baseLayouts.light,
      themeObject?.light?.layout || {},
      createLayoutMergeStrategy(),
    ),
    colors: deepMergeTheme(semanticColors.light, userLightColors, createColorMergeStrategy()),
  }

  const dark: ConfigTheme = {
    layout: deepMergeTheme(
      baseLayouts.dark,
      themeObject?.dark?.layout || {},
      createLayoutMergeStrategy(),
    ),
    colors: deepMergeTheme(semanticColors.dark, userDarkColors, createColorMergeStrategy()),
  }

  // Combine all themes
  const themes: ConfigThemes = {
    light,
    dark,
    ...processedOtherThemes,
  }

  // Ensure default theme exists
  if (!themes[defaultTheme]) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(
        `[FlexiUI Theme] Default theme "${defaultTheme}" not found. Using "light" theme.`,
      )
    }
    themes[defaultTheme] = themes.light || light
  }

  return corePlugin(themes, defaultTheme, defaultPrefix, addCommonColors, validatedExtendTheme)
}

