import type { LayoutTheme } from './types'

/**
 * Enhanced default layout configuration
 * Based on HeroUI v3 layout system improvements
 * Uses rem units for better scalability and accessibility
 */
export const defaultLayout: LayoutTheme = {
  /**
   * Divider weight - thickness of divider components
   * Using px for precise 1px borders
   */
  dividerWeight: '1px',
  /**
   * Disabled opacity - applied when components are disabled
   * Format: leading dot for CSS opacity class
   */
  disabledOpacity: '.5',
  /**
   * Enhanced typography scale with better ratios
   * Uses rem units for accessibility and scalability
   */
  fontSize: {
    tiny: '0.75rem', // 12px at 16px base
    small: '0.875rem', // 14px at 16px base
    medium: '1rem', // 16px at 16px base
    large: '1.125rem', // 18px at 16px base
  },
  /**
   * Line height scale matching font sizes
   * Optimized for readability
   */
  lineHeight: {
    tiny: '1rem', // 1.33 ratio
    small: '1.25rem', // 1.43 ratio
    medium: '1.5rem', // 1.5 ratio
    large: '1.75rem', // 1.56 ratio
  },
  /**
   * Border radius scale
   * Converted to rem units for better scalability
   * Based on 16px = 1rem
   */
  radius: {
    small: '0.5rem', // 8px - subtle rounding
    medium: '0.75rem', // 12px - moderate rounding
    large: '0.875rem', // 14px - pronounced rounding
  },
  /**
   * Border width scale
   * Using px for precise borders
   */
  borderWidth: {
    small: '1px', // Thin borders
    medium: '2px', // Standard borders
    large: '3px', // Thick borders
  },
  /**
   * Enhanced box shadow scale
   * Improved depth and layering
   * Better contrast for light theme
   */
  boxShadow: {
    small:
      '0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
    medium:
      '0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
    large:
      '0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
  },
  /**
   * Enhanced spacing scale for consistent layout control
   * Uses rem units for better scalability and accessibility
   */
  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '0.75rem', // 12px
    lg: '1rem', // 16px
    xl: '1.5rem', // 24px
    '2xl': '2rem', // 32px
    '3xl': '3rem', // 48px
    '4xl': '4rem', // 64px
  },
}

/**
 * Light theme layout overrides
 * Optimized for light backgrounds
 */
export const lightLayout: LayoutTheme = {
  /**
   * Hover opacity for light theme
   * Slightly lower for better contrast on light backgrounds
   */
  hoverOpacity: '.8',
}

/**
 * Dark theme layout overrides
 * Optimized for dark backgrounds
 */
export const darkLayout: LayoutTheme = {
  /**
   * Hover opacity for dark theme
   * Slightly higher for better visibility on dark backgrounds
   */
  hoverOpacity: '.9',
  /**
   * Enhanced box shadows for dark theme
   * Includes inset highlights for depth
   * Better contrast and visibility
   */
  boxShadow: {
    small:
      '0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
    medium:
      '0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
    large:
      '0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
  },
}

/**
 * Typography scale ratios for reference
 * These ratios help maintain consistent typography scaling
 */
export const typographyRatios = {
  tiny: {
    fontSize: 0.75, // 12px / 16px
    lineHeight: 1.33, // 16px / 12px
  },
  small: {
    fontSize: 0.875, // 14px / 16px
    lineHeight: 1.43, // 20px / 14px
  },
  medium: {
    fontSize: 1.0, // 16px / 16px
    lineHeight: 1.5, // 24px / 16px
  },
  large: {
    fontSize: 1.125, // 18px / 16px
    lineHeight: 1.56, // 28px / 18px
  },
} as const

/**
 * Radius scale in rem units for reference
 * Helps maintain consistent border radius scaling
 */
export const radiusScale = {
  small: 0.5, // 8px
  medium: 0.75, // 12px
  large: 0.875, // 14px
} as const

/**
 * Type for radius scale keys
 */
export type RadiusScaleKey = keyof typeof radiusScale

/**
 * Type for typography ratio keys
 */
export type TypographyRatioKey = keyof typeof typographyRatios
