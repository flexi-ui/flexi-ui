/**
 * Enhanced color utilities for FlexiUI theme system
 * Based on HeroUI v3 color system improvements
 */

import { parseToHsla, readableColor, mix, darken, lighten, saturate, desaturate } from 'color2k'

/**
 * Gets the relative luminance of a color (WCAG 2.1)
 * @param color - Color to get luminance for
 * @returns Luminance value between 0 and 1
 */
function getLuminance(color: string): number {
  try {
    const [h, s, l] = parseToHsla(color)
    
    // Convert HSL to RGB
    const hNorm = h / 360
    const sNorm = s / 100
    const lNorm = l / 100

    const c = (1 - Math.abs(2 * lNorm - 1)) * sNorm
    const x = c * (1 - Math.abs(((hNorm * 6) % 2) - 1))
    const m = lNorm - c / 2

    let r = 0, g = 0, b = 0

    if (hNorm < 1 / 6) {
      r = c; g = x; b = 0
    } else if (hNorm < 2 / 6) {
      r = x; g = c; b = 0
    } else if (hNorm < 3 / 6) {
      r = 0; g = c; b = x
    } else if (hNorm < 4 / 6) {
      r = 0; g = x; b = c
    } else if (hNorm < 5 / 6) {
      r = x; g = 0; b = c
    } else {
      r = c; g = 0; b = x
    }

    r = (r + m) * 255
    g = (g + m) * 255
    b = (b + m) * 255

    // Convert to linear RGB and calculate relative luminance
    const toLinear = (val: number) => {
      val = val / 255
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4)
    }

    return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b)
  } catch {
    return 0.5 // Default to middle luminance on error
  }
}

/**
 * Color contrast ratio calculation (WCAG 2.1)
 * Returns a value between 1 and 21
 * @param color1 - First color
 * @param color2 - Second color
 * @returns Contrast ratio
 */
export function getContrastRatio(color1: string, color2: string): number {
  try {
    const l1 = getLuminance(color1)
    const l2 = getLuminance(color2)

    const lighter = Math.max(l1, l2)
    const darker = Math.min(l1, l2)

    return (lighter + 0.05) / (darker + 0.05)
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[FlexiUI Color] Failed to calculate contrast ratio:`, error)
    }
    return 1 // Return minimum contrast on error
  }
}

/**
 * Checks if a color meets WCAG contrast requirements
 * @param foreground - Foreground color
 * @param background - Background color
 * @param level - WCAG level ('AA' or 'AAA')
 * @param size - Text size ('normal' or 'large')
 * @returns Whether the contrast meets requirements
 */
export function meetsContrastRequirements(
  foreground: string,
  background: string,
  level: 'AA' | 'AAA' = 'AA',
  size: 'normal' | 'large' = 'normal',
): boolean {
  const ratio = getContrastRatio(foreground, background)

  // WCAG 2.1 requirements
  if (level === 'AAA') {
    return size === 'large' ? ratio >= 4.5 : ratio >= 7
  } else {
    return size === 'large' ? ratio >= 3 : ratio >= 4.5
  }
}

/**
 * Gets the best readable color (black or white) for a given background
 * Enhanced version with better contrast calculation
 * @param background - Background color
 * @param lightColor - Light color option (default: white)
 * @param darkColor - Dark color option (default: black)
 * @returns Best readable color
 */
export function getReadableColor(
  background: string,
  lightColor: string = '#ffffff',
  darkColor: string = '#000000',
): string {
  try {
    // Use color2k's readableColor as base
    const baseReadable = readableColor(background)

    // Verify contrast and adjust if needed
    const contrast = getContrastRatio(baseReadable, background)
    if (contrast < 4.5) {
      // If contrast is too low, try the opposite color
      const oppositeColor = baseReadable === lightColor ? darkColor : lightColor
      const oppositeContrast = getContrastRatio(oppositeColor, background)
      return oppositeContrast > contrast ? oppositeColor : baseReadable
    }

    return baseReadable
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[FlexiUI Color] Failed to get readable color:`, error)
    }
    // Fallback to color2k's readableColor
    return readableColor(background)
  }
}

/**
 * Generates a color scale from a base color
 * Creates a 50-900 scale similar to Tailwind's color system
 * @param baseColor - Base color (typically the 500 value)
 * @returns Color scale object
 */
export function generateColorScale(baseColor: string): Record<number, string> {
  try {
    const scale: Record<number, string> = {}

    // Generate lighter shades (50-400)
    for (let i = 50; i <= 400; i += 50) {
      const lightness = (i / 500) * 100
      scale[i] = lighten(baseColor, 100 - lightness)
    }

    // 500 is the base color
    scale[500] = baseColor

    // Generate darker shades (600-900)
    for (let i = 600; i <= 900; i += 100) {
      const darkness = ((i - 500) / 400) * 50
      scale[i] = darken(baseColor, darkness)
    }

    return scale
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[FlexiUI Color] Failed to generate color scale:`, error)
    }
    return { 500: baseColor }
  }
}

/**
 * Adjusts color saturation
 * @param color - Color to adjust
 * @param amount - Amount to adjust (-100 to 100)
 * @returns Adjusted color
 */
export function adjustSaturation(color: string, amount: number): string {
  try {
    if (amount > 0) {
      return saturate(color, Math.min(amount, 100))
    } else if (amount < 0) {
      return desaturate(color, Math.min(Math.abs(amount), 100))
    }
    return color
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[FlexiUI Color] Failed to adjust saturation:`, error)
    }
    return color
  }
}

/**
 * Mixes two colors
 * @param color1 - First color
 * @param color2 - Second color
 * @param weight - Weight of color1 (0-1)
 * @returns Mixed color
 */
export function mixColors(color1: string, color2: string, weight: number = 0.5): string {
  try {
    return mix(color1, color2, weight)
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[FlexiUI Color] Failed to mix colors:`, error)
    }
    return color1
  }
}

/**
 * Gets a color with adjusted opacity
 * @param color - Base color
 * @param opacity - Opacity (0-1)
 * @returns Color with opacity
 */
export function withOpacity(color: string, opacity: number): string {
  try {
    const [h, s, l] = parseToHsla(color)
    return `hsla(${Math.round(h)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%, ${opacity})`
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[FlexiUI Color] Failed to apply opacity:`, error)
    }
    return color
  }
}

/**
 * Validates if a string is a valid color
 * @param color - Color string to validate
 * @returns Whether the color is valid
 */
export function isValidColor(color: string): boolean {
  if (!color || typeof color !== 'string') {
    return false
  }

  try {
    parseToHsla(color)
    return true
  } catch {
    return false
  }
}

/**
 * Converts a color to HSL format
 * @param color - Color to convert
 * @returns HSL string (e.g., "hsl(210, 100%, 50%)")
 */
export function toHSL(color: string): string {
  try {
    const [h, s, l] = parseToHsla(color)
    return `hsl(${Math.round(h)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[FlexiUI Color] Failed to convert to HSL:`, error)
    }
    return color
  }
}

/**
 * Converts a color to HSLA format
 * @param color - Color to convert
 * @param alpha - Alpha value (0-1)
 * @returns HSLA string
 */
export function toHSLA(color: string, alpha: number = 1): string {
  try {
    const [h, s, l, a] = parseToHsla(color)
    return `hsla(${Math.round(h)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%, ${alpha !== undefined ? alpha : a})`
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[FlexiUI Color] Failed to convert to HSLA:`, error)
    }
    return color
  }
}

