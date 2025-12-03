/**
 * Theme Presets
 * Pre-built theme configurations for common use cases
 * Based on HeroUI v3 preset patterns
 * 
 * @example
 * ```ts
 * import { presets, createConfigFromPreset } from '@flexi-ui/theme/presets'
 * 
 * // Use a preset
 * const config = createConfigFromPreset('modern')
 * 
 * // Or merge with custom themes
 * const customConfig = createConfigFromPreset('modern', {
 *   themes: {
 *     custom: { colors: { primary: { DEFAULT: '#FF0000' } } }
 *   }
 * })
 * ```
 */

import type { ConfigThemes, FlexiUIPluginConfig } from '../types'

/**
 * Modern theme preset
 * Clean, contemporary design with vibrant colors
 */
export const modernPreset: ConfigThemes = {
  light: {
    colors: {
      primary: {
        DEFAULT: '#006FEE',
        50: '#E6F1FE',
        100: '#CCE3FD',
        200: '#99C7FB',
        300: '#66ABF9',
        400: '#338FF7',
        500: '#006FEE',
        600: '#0059BE',
        700: '#00438F',
        800: '#002D5F',
        900: '#001730',
        foreground: '#FFFFFF',
      },
      secondary: {
        DEFAULT: '#7828C8',
        50: '#F2E6FF',
        100: '#E5CCFF',
        200: '#CB99FF',
        300: '#B266FF',
        400: '#9933FF',
        500: '#7828C8',
        600: '#6020A0',
        700: '#481878',
        800: '#301050',
        900: '#180828',
        foreground: '#FFFFFF',
      },
      success: {
        DEFAULT: '#17C964',
        50: '#E6F9F0',
        100: '#CCF3E1',
        200: '#99E7C3',
        300: '#66DBA5',
        400: '#33CF87',
        500: '#17C964',
        600: '#12A150',
        700: '#0E793C',
        800: '#095028',
        900: '#052814',
        foreground: '#FFFFFF',
      },
      warning: {
        DEFAULT: '#F5A524',
        50: '#FEF5E6',
        100: '#FDEBCC',
        200: '#FBD799',
        300: '#F9C366',
        400: '#F7AF33',
        500: '#F5A524',
        600: '#C4841D',
        700: '#936316',
        800: '#62420E',
        900: '#312107',
        foreground: '#FFFFFF',
      },
      danger: {
        DEFAULT: '#F31260',
        50: '#FEE6ED',
        100: '#FDCCDB',
        200: '#FB99B7',
        300: '#F96693',
        400: '#F7336F',
        500: '#F31260',
        600: '#C20E4D',
        700: '#920B3A',
        800: '#610726',
        900: '#310413',
        foreground: '#FFFFFF',
      },
    },
    layout: {
      radius: {
        small: '0.5rem',
        medium: '0.75rem',
        large: '1rem',
      },
    },
  },
  dark: {
    colors: {
      primary: {
        DEFAULT: '#006FEE',
        50: '#001730',
        100: '#002D5F',
        200: '#00438F',
        300: '#0059BE',
        400: '#006FEE',
        500: '#338FF7',
        600: '#66ABF9',
        700: '#99C7FB',
        800: '#CCE3FD',
        900: '#E6F1FE',
        foreground: '#FFFFFF',
      },
      secondary: {
        DEFAULT: '#7828C8',
        50: '#180828',
        100: '#301050',
        200: '#481878',
        300: '#6020A0',
        400: '#7828C8',
        500: '#9933FF',
        600: '#B266FF',
        700: '#CB99FF',
        800: '#E5CCFF',
        900: '#F2E6FF',
        foreground: '#FFFFFF',
      },
      success: {
        DEFAULT: '#17C964',
        50: '#052814',
        100: '#095028',
        200: '#0E793C',
        300: '#12A150',
        400: '#17C964',
        500: '#33CF87',
        600: '#66DBA5',
        700: '#99E7C3',
        800: '#CCF3E1',
        900: '#E6F9F0',
        foreground: '#FFFFFF',
      },
      warning: {
        DEFAULT: '#F5A524',
        50: '#312107',
        100: '#62420E',
        200: '#936316',
        300: '#C4841D',
        400: '#F5A524',
        500: '#F7AF33',
        600: '#F9C366',
        700: '#FBD799',
        800: '#FDEBCC',
        900: '#FEF5E6',
        foreground: '#000000',
      },
      danger: {
        DEFAULT: '#F31260',
        50: '#310413',
        100: '#610726',
        200: '#920B3A',
        300: '#C20E4D',
        400: '#F31260',
        500: '#F7336F',
        600: '#F96693',
        700: '#FB99B7',
        800: '#FDCCDB',
        900: '#FEE6ED',
        foreground: '#FFFFFF',
      },
    },
    layout: {
      radius: {
        small: '0.5rem',
        medium: '0.75rem',
        large: '1rem',
      },
    },
  },
}

/**
 * Minimal theme preset
 * Clean, minimal design with subtle colors
 */
export const minimalPreset: ConfigThemes = {
  light: {
    colors: {
      primary: {
        DEFAULT: '#000000',
        50: '#F5F5F5',
        100: '#E5E5E5',
        200: '#CCCCCC',
        300: '#B3B3B3',
        400: '#999999',
        500: '#000000',
        600: '#333333',
        700: '#666666',
        800: '#999999',
        900: '#CCCCCC',
        foreground: '#FFFFFF',
      },
      secondary: {
        DEFAULT: '#6B7280',
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
        foreground: '#FFFFFF',
      },
    },
    layout: {
      radius: {
        small: '0.25rem',
        medium: '0.5rem',
        large: '0.75rem',
      },
    },
  },
  dark: {
    colors: {
      primary: {
        DEFAULT: '#FFFFFF',
        50: '#111827',
        100: '#1F2937',
        200: '#374151',
        300: '#4B5563',
        400: '#6B7280',
        500: '#FFFFFF',
        600: '#E5E7EB',
        700: '#D1D5DB',
        800: '#9CA3AF',
        900: '#F3F4F6',
        foreground: '#000000',
      },
      secondary: {
        DEFAULT: '#9CA3AF',
        50: '#111827',
        100: '#1F2937',
        200: '#374151',
        300: '#4B5563',
        400: '#6B7280',
        500: '#9CA3AF',
        600: '#D1D5DB',
        700: '#E5E7EB',
        800: '#F3F4F6',
        900: '#F9FAFB',
        foreground: '#000000',
      },
    },
    layout: {
      radius: {
        small: '0.25rem',
        medium: '0.5rem',
        large: '0.75rem',
      },
    },
  },
}

/**
 * Vibrant theme preset
 * Bold, colorful design with high contrast
 */
export const vibrantPreset: ConfigThemes = {
  light: {
    colors: {
      primary: {
        DEFAULT: '#FF006E',
        50: '#FFE6F2',
        100: '#FFCCE5',
        200: '#FF99CB',
        300: '#FF66B1',
        400: '#FF3397',
        500: '#FF006E',
        600: '#CC0058',
        700: '#990042',
        800: '#66002C',
        900: '#330016',
        foreground: '#FFFFFF',
      },
      secondary: {
        DEFAULT: '#8338EC',
        50: '#F0E6FF',
        100: '#E1CCFF',
        200: '#C399FF',
        300: '#A566FF',
        400: '#8733FF',
        500: '#8338EC',
        600: '#692DBD',
        700: '#4F228E',
        800: '#35175F',
        900: '#1B0C2F',
        foreground: '#FFFFFF',
      },
      success: {
        DEFAULT: '#06FFA5',
        50: '#E6FFF5',
        100: '#CCFFEB',
        200: '#99FFD7',
        300: '#66FFC3',
        400: '#33FFAF',
        500: '#06FFA5',
        600: '#05CC84',
        700: '#049963',
        800: '#026642',
        900: '#013321',
        foreground: '#000000',
      },
      warning: {
        DEFAULT: '#FFBE0B',
        50: '#FFF9E6',
        100: '#FFF3CC',
        200: '#FFE799',
        300: '#FFDB66',
        400: '#FFCF33',
        500: '#FFBE0B',
        600: '#CC9809',
        700: '#997207',
        800: '#664C04',
        900: '#332602',
        foreground: '#000000',
      },
      danger: {
        DEFAULT: '#FB5607',
        50: '#FFE6D9',
        100: '#FFCDB3',
        200: '#FF9B67',
        300: '#FF691B',
        400: '#FF4D00',
        500: '#FB5607',
        600: '#C94506',
        700: '#973404',
        800: '#642303',
        900: '#321101',
        foreground: '#FFFFFF',
      },
    },
    layout: {
      radius: {
        small: '0.75rem',
        medium: '1rem',
        large: '1.5rem',
      },
    },
  },
  dark: {
    colors: {
      primary: {
        DEFAULT: '#FF006E',
        50: '#330016',
        100: '#66002C',
        200: '#990042',
        300: '#CC0058',
        400: '#FF006E',
        500: '#FF3397',
        600: '#FF66B1',
        700: '#FF99CB',
        800: '#FFCCE5',
        900: '#FFE6F2',
        foreground: '#FFFFFF',
      },
      secondary: {
        DEFAULT: '#8338EC',
        50: '#1B0C2F',
        100: '#35175F',
        200: '#4F228E',
        300: '#692DBD',
        400: '#8338EC',
        500: '#8733FF',
        600: '#A566FF',
        700: '#C399FF',
        800: '#E1CCFF',
        900: '#F0E6FF',
        foreground: '#FFFFFF',
      },
      success: {
        DEFAULT: '#06FFA5',
        50: '#013321',
        100: '#026642',
        200: '#049963',
        300: '#05CC84',
        400: '#06FFA5',
        500: '#33FFAF',
        600: '#66FFC3',
        700: '#99FFD7',
        800: '#CCFFEB',
        900: '#E6FFF5',
        foreground: '#000000',
      },
      warning: {
        DEFAULT: '#FFBE0B',
        50: '#332602',
        100: '#664C04',
        200: '#997207',
        300: '#CC9809',
        400: '#FFBE0B',
        500: '#FFCF33',
        600: '#FFDB66',
        700: '#FFE799',
        800: '#FFF3CC',
        900: '#FFF9E6',
        foreground: '#000000',
      },
      danger: {
        DEFAULT: '#FB5607',
        50: '#321101',
        100: '#642303',
        200: '#973404',
        300: '#C94506',
        400: '#FB5607',
        500: '#FF4D00',
        600: '#FF691B',
        700: '#FF9B67',
        800: '#FFCDB3',
        900: '#FFE6D9',
        foreground: '#FFFFFF',
      },
    },
    layout: {
      radius: {
        small: '0.75rem',
        medium: '1rem',
        large: '1.5rem',
      },
    },
  },
}

/**
 * All available presets
 */
export const presets = {
  modern: modernPreset,
  minimal: minimalPreset,
  vibrant: vibrantPreset,
} as const

/**
 * Preset names type
 */
export type PresetName = keyof typeof presets

/**
 * Helper function to create a plugin config from a preset
 *
 * @example
 * ```ts
 * const config = createConfigFromPreset('modern', {
 *   defaultTheme: 'dark',
 *   prefix: 'my-app'
 * })
 * ```
 */
export function createConfigFromPreset(
  presetName: PresetName,
  overrides?: Partial<FlexiUIPluginConfig>,
): FlexiUIPluginConfig {
  const preset = presets[presetName]

  return {
    themes: preset,
    ...overrides,
  }
}

/**
 * Helper function to merge a preset with custom themes
 *
 * @example
 * ```ts
 * const themes = mergePresetWithThemes('modern', {
 *   custom: { colors: { primary: { DEFAULT: '#FF0000' } } }
 * })
 * ```
 */
export function mergePresetWithThemes(
  presetName: PresetName,
  customThemes?: ConfigThemes,
): ConfigThemes {
  const preset = presets[presetName]

  return {
    ...preset,
    ...customThemes,
  }
}
