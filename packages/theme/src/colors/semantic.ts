import type { ThemeColors, SemanticBaseColors, ColorScale } from './types'

import { readableColor } from 'color2k'

import { swapColorValues } from '../utils/object'
import { getReadableColor, getContrastRatio } from '../utils/color'

import { commonColors as common } from './common'

const base: SemanticBaseColors = {
  light: {
    background: {
      DEFAULT: '#FFFFFF',
    },
    foreground: {
      ...common.zinc,
      DEFAULT: '#11181C',
    },
    divider: {
      DEFAULT: 'rgba(17, 17, 17, 0.15)',
    },
    focus: {
      DEFAULT: common.blue[500],
    },
    overlay: {
      DEFAULT: '#000000',
    },
    content1: {
      DEFAULT: '#FFFFFF',
      foreground: '#11181C',
    },
    content2: {
      DEFAULT: common.zinc[100],
      foreground: common.zinc[800],
    },
    content3: {
      DEFAULT: common.zinc[200],
      foreground: common.zinc[700],
    },
    content4: {
      DEFAULT: common.zinc[300],
      foreground: common.zinc[600],
    },
  },
  dark: {
    background: {
      DEFAULT: '#000000',
    },
    foreground: {
      ...swapColorValues(common.zinc),
      DEFAULT: '#ECEDEE',
    },
    focus: {
      DEFAULT: common.blue[500],
    },
    overlay: {
      DEFAULT: '#000000',
    },
    divider: {
      DEFAULT: 'rgba(255, 255, 255, 0.15)',
    },
    content1: {
      DEFAULT: common.zinc[900],
      foreground: common.zinc[50],
    },
    content2: {
      DEFAULT: common.zinc[800],
      foreground: common.zinc[100],
    },
    content3: {
      DEFAULT: common.zinc[700],
      foreground: common.zinc[200],
    },
    content4: {
      DEFAULT: common.zinc[600],
      foreground: common.zinc[300],
    },
  },
}

/**
 * Generates semantic color with improved foreground color selection
 * Uses enhanced contrast calculation for better readability
 */
function generateSemanticColor(
  colorScale: Record<string | number, string>,
  defaultColor: string,
): ColorScale {
  // Use enhanced readable color with better contrast calculation
  const foreground = getReadableColor(defaultColor)
  
  // Verify contrast meets WCAG AA requirements
  const contrast = getContrastRatio(foreground, defaultColor)
  const finalForeground = contrast >= 4.5 ? foreground : readableColor(defaultColor)

  return {
    ...colorScale,
    foreground: finalForeground,
    DEFAULT: defaultColor,
  }
}

export const themeColorsLight: ThemeColors = {
  ...base.light,
  default: generateSemanticColor(common.zinc, common.zinc[300]),
  primary: generateSemanticColor(common.blue, common.blue[500]),
  secondary: generateSemanticColor(common.purple, common.purple[500]),
  success: generateSemanticColor(common.green, common.green[500]),
  warning: generateSemanticColor(common.yellow, common.yellow[500]),
  danger: {
    ...common.red,
    // For danger/red, always use white for better visibility
    foreground: getReadableColor(common.red[500]),
    DEFAULT: common.red[500],
  },
}

export const themeColorsDark: ThemeColors = {
  ...base.dark,
  default: generateSemanticColor(swapColorValues(common.zinc) as Record<string | number, string>, common.zinc[700]),
  primary: generateSemanticColor(swapColorValues(common.blue) as Record<string | number, string>, common.blue[500]),
  secondary: generateSemanticColor(swapColorValues(common.purple) as Record<string | number, string>, common.purple[400]),
  success: generateSemanticColor(swapColorValues(common.green) as Record<string | number, string>, common.green[500]),
  warning: generateSemanticColor(swapColorValues(common.yellow) as Record<string | number, string>, common.yellow[500]),
  danger: {
    ...(swapColorValues(common.red) as Record<string | number, string>),
    // For danger/red in dark mode, use white for better visibility
    foreground: getReadableColor(common.red[500]),
    DEFAULT: common.red[500],
  },
}

export const semanticColors = {
  light: themeColorsLight,
  dark: themeColorsDark,
}
