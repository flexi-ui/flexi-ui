/**
 * Based on tw-colors by L-Blondy
 * @see https://github.com/L-Blondy/tw-colors
 **/

import Color from 'color'
import plugin from 'tailwindcss/plugin.js'
import deepMerge from 'deepmerge'
import { omit, kebabCase, mapKeys } from '@flexi-ui/shared-utils'

import { semanticColors, commonColors } from './colors'
import { animations } from './animations'
import { utilities } from './utilities'
import { flattenThemeObject } from './utils/object'
import { isBaseTheme } from './utils/theme'

import { ConfigTheme, ConfigThemes, DefaultThemeType, FlexiUIPluginConfig } from './types'

import { lightLayout, darkLayout, defaultLayout } from './default-layout'
import { baseStyles } from './utils/classes'
import { DEFAULT_TRANSITION_DURATION } from './utilities/transition'

const DEFAULT_PREFIX = 'flexi-ui'

const parsedColorsCache: Record<string, number[]> = {}

// @internal

const resolveConfig = (
  themes: ConfigThemes = {},
  defaultTheme: DefaultThemeType,
  prefix: string,
) => {
  const resolved: {
    variants: { name: string; definition: string[] }[]
    utilities: Record<string, Record<string, any>>
    colors: Record<
      string,
      ({
        opacityValue,
        opacityVariable,
      }: {
        opacityValue: string
        opacityVariable: string
      }) => string
    >
  } = {
    variants: [],
    utilities: {},
    colors: {},
  }

  for (const [themeName, { extend, layout, colors }] of Object.entries(themes)) {
    let cssSelector = `.${themeName},[data-theme="${themeName}"]`
    const scheme = themeName === 'light' || themeName === 'dark' ? themeName : extend

    if (themeName === defaultTheme) {
      cssSelector = `:root,${cssSelector}`
    }

    resolved.utilities[cssSelector] = scheme
      ? {
          'color-scheme': scheme,
        }
      : {}

    const flatColors = flattenThemeObject(colors) as Record<string, string>

    const flatLayout = layout ? mapKeys(layout, (_, key) => kebabCase(key)) : {}

    resolved.variants.push({
      name: themeName,
      definition: [`&.${themeName}`, `&[data-theme='${themeName}']`],
    })

    /**
     * Colors
     */

    for (const [colorName, colorValue] of Object.entries(flatColors)) {
      if (!colorValue) return

      try {
        const parsedColor =
          parsedColorsCache[colorValue] || Color(colorValue).hsl().round(2).array()

        parsedColorsCache[colorValue] = parsedColor

        const [h, s, l, defaultAlphaValue] = parsedColor
        const flexiuiColorVariable = `--${prefix}-${colorName}`
        const flexiuiOpacityVariable = `--${prefix}-${colorName}-opacity`

        resolved.utilities[cssSelector]![flexiuiColorVariable] = `${h} ${s}% ${l}%`

        if (typeof defaultAlphaValue === 'number') {
          resolved.utilities[cssSelector]![flexiuiOpacityVariable] = defaultAlphaValue.toFixed(2)
        }

        resolved.colors[colorName] = ({ opacityVariable, opacityValue }) => {
          if (!isNaN(+opacityValue)) {
            return `hsl(var(${flexiuiColorVariable}) / ${opacityValue})`
          }

          if (opacityVariable) {
            return `hsl(var(${flexiuiColorVariable}) / var(${flexiuiOpacityVariable}, var(${opacityVariable})))`
          }

          return `hsl(var(${flexiuiColorVariable}) / var(${flexiuiOpacityVariable}, 1))`
        }
      } catch (error: any) {
        throw new Error(error)
      }
    }

    /**
     * Layout
     */

    for (const [key, value] of Object.entries(flatLayout)) {
      if (!value) return

      const layoutVariablePrefix = `--${prefix}-${key}`

      if (typeof value === 'object') {
        for (const [nestedKey, nestedValue] of Object.entries(value)) {
          const nestedLayoutVariable = `${layoutVariablePrefix}-${nestedKey}`

          resolved.utilities[cssSelector]![nestedLayoutVariable] = nestedValue
        }
      } else {
        const formattedValue =
          layoutVariablePrefix.includes('opacity') && typeof value === 'number'
            ? value.toString().replace(/^0\./, '.')
            : value

        resolved.utilities[cssSelector]![layoutVariablePrefix] = formattedValue
      }
    }
  }

  return resolved
}

const corePlugin = (
  themes: ConfigThemes = {},
  defaultTheme: DefaultThemeType,
  prefix: string,
  addCommonColors: boolean,
) => {
  const resolved = resolveConfig(themes, defaultTheme, prefix)

  const createStripeGradient = (stripeColor: string, backgroundColor: string) =>
    `linear-gradient(45deg,  hsl(var(--${prefix}-${stripeColor})) 25%,  hsl(var(--${prefix}-${backgroundColor})) 25%,  hsl(var(--${prefix}-${backgroundColor})) 50%,  hsl(var(--${prefix}-${stripeColor})) 50%,  hsl(var(--${prefix}-${stripeColor})) 75%,  hsl(var(--${prefix}-${backgroundColor})) 75%,  hsl(var(--${prefix}-${backgroundColor})))`

  return plugin(
    ({ addBase, addUtilities, addVariant }) => {
      addBase({
        [':root, [data-theme]']: {
          ...baseStyles(prefix),
        },
      })

      addUtilities({ ...resolved?.utilities, ...utilities })

      resolved?.variants.forEach((variant) => {
        addVariant(variant.name, variant.definition)
      })
    },

    {
      theme: {
        extend: {
          colors: {
            ...(addCommonColors ? commonColors : {}),
            ...resolved?.colors,
          },
          scale: {
            '80': '0.8',
            '85': '0.85',
          },
          height: {
            divider: `var(--${prefix}-divider-weight)`,
          },
          width: {
            divider: `var(--${prefix}-divider-weight)`,
          },
          fontSize: {
            tiny: [`var(--${prefix}-font-size-tiny)`, `var(--${prefix}-line-height-tiny)`],
            small: [`var(--${prefix}-font-size-small)`, `var(--${prefix}-line-height-small)`],
            medium: [`var(--${prefix}-font-size-medium)`, `var(--${prefix}-line-height-medium)`],
            large: [`var(--${prefix}-font-size-large)`, `var(--${prefix}-line-height-large)`],
          },
          borderRadius: {
            small: `var(--${prefix}-radius-small)`,
            medium: `var(--${prefix}-radius-medium)`,
            large: `var(--${prefix}-radius-large)`,
          },
          opacity: {
            hover: `var(--${prefix}-hover-opacity)`,
            disabled: `var(--${prefix}-disabled-opacity)`,
          },
          borderWidth: {
            small: `var(--${prefix}-border-width-small)`,
            medium: `var(--${prefix}-border-width-medium)`,
            large: `var(--${prefix}-border-width-large)`,
            1: '1px',
            1.5: '1.5px',
            3: '3px',
            5: '5px',
          },
          boxShadow: {
            small: `var(--${prefix}-box-shadow-small)`,
            medium: `var(--${prefix}-box-shadow-medium)`,
            large: `var(--${prefix}-box-shadow-large)`,
          },
          backgroundSize: {
            'stripe-size': '1.25rem 1.25rem',
          },
          backgroundImage: {
            'stripe-gradient-default': createStripeGradient('default-200', 'default-400'),
            'stripe-gradient-primary': createStripeGradient('primary-200', 'primary'),
            'stripe-gradient-secondary': createStripeGradient('secondary-200', 'secondary'),
            'stripe-gradient-success': createStripeGradient('success-200', 'success'),
            'stripe-gradient-warning': createStripeGradient('warning-200', 'warning'),
            'stripe-gradient-danger': createStripeGradient('danger-200', 'danger'),
          },
          transitionDuration: {
            0: '0ms',
            250: '250ms',
            400: '400ms',
            DEFAULT: DEFAULT_TRANSITION_DURATION,
          },
          transitionTimingFunction: {
            'soft-spring': 'cubic-bezier(0.155, 1.105, 0.295, 1.12)',
          },
          ...animations,
        },
      },
    },
  )
}

export const flexiUI = (config: FlexiUIPluginConfig = {}): ReturnType<typeof plugin> => {
  const {
    themes: themeObject = {},
    defaultTheme = 'light',
    layout: userLayout,
    defaultExtendTheme = 'light',
    prefix: defaultPrefix = DEFAULT_PREFIX,
    addCommonColors = false,
  } = config

  const userLightColors = themeObject?.light?.colors || {}
  const userDarkColors = themeObject?.dark?.colors || {}

  const defaultLayoutObj =
    userLayout && typeof userLayout === 'object'
      ? deepMerge(defaultLayout, userLayout)
      : defaultLayout

  const baseLayouts = {
    light: {
      ...defaultLayoutObj,
      ...lightLayout,
    },
    dark: {
      ...defaultLayoutObj,
      ...darkLayout,
    },
  }

  const otherThemes = omit(themeObject, ['light', 'dark']) || {}

  Object.entries(otherThemes).forEach(([themeName, { extend, colors, layout }]) => {
    const baseTheme = extend && isBaseTheme(extend) ? extend : defaultExtendTheme

    if (colors && typeof colors === 'object') {
      otherThemes[themeName].colors = deepMerge(semanticColors[baseTheme], colors)
    }
    if (layout && typeof layout === 'object') {
      otherThemes[themeName].layout = deepMerge(
        extend ? baseLayouts[extend] : defaultLayoutObj,
        layout,
      )
    }
  })

  const light: ConfigTheme = {
    layout: deepMerge(baseLayouts.light, themeObject?.light?.layout || {}),
    colors: deepMerge(semanticColors.light, userLightColors),
  }

  const dark = {
    layout: deepMerge(baseLayouts.dark, themeObject?.dark?.layout || {}),
    colors: deepMerge(semanticColors.dark, userDarkColors),
  }

  const themes = {
    light,
    dark,
    ...otherThemes,
  }

  return corePlugin(themes, defaultTheme, defaultPrefix, addCommonColors)
}
