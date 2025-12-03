/**
 * Component theme utilities for consistent variant patterns
 * Based on HeroUI v3 component theme patterns
 */

import type { ClassValue } from 'tailwind-variants'

import { colorVariants } from './variants'

/**
 * Standard color variants for components
 */
export const standardColors = ['default', 'primary', 'secondary', 'success', 'warning', 'danger'] as const

/**
 * Standard size variants
 */
export const standardSizes = ['sm', 'md', 'lg'] as const

/**
 * Standard radius variants
 */
export const standardRadius = ['none', 'sm', 'md', 'lg', 'full'] as const

/**
 * Standard variant types
 */
export const standardVariants = ['solid', 'bordered', 'light', 'flat', 'faded', 'shadow', 'ghost'] as const

/**
 * Type for standard color
 */
export type StandardColor = typeof standardColors[number]

/**
 * Type for standard size
 */
export type StandardSize = typeof standardSizes[number]

/**
 * Type for standard radius
 */
export type StandardRadius = typeof standardRadius[number]

/**
 * Type for standard variant
 */
export type StandardVariant = typeof standardVariants[number]

/**
 * Options for generating compound variants
 */
export interface CompoundVariantOptions {
  /**
   * Variant names to generate compound variants for
   */
  variants?: StandardVariant[]
  /**
   * Color names to generate compound variants for
   */
  colors?: StandardColor[]
  /**
   * Whether to use slots (for multi-part components)
   */
  useSlots?: boolean
  /**
   * Slot name to apply classes to (if useSlots is true)
   */
  slotName?: string
  /**
   * Custom class generator function
   */
  classGenerator?: (variant: StandardVariant, color: StandardColor) => ClassValue
}

/**
 * Generates compound variants for variant + color combinations
 * This reduces boilerplate in component theme definitions
 *
 * @param options - Options for generating compound variants
 * @returns Array of compound variant definitions
 *
 * @example
 * ```ts
 * const compoundVariants = generateColorVariants({
 *   variants: ['solid', 'bordered'],
 *   colors: ['default', 'primary'],
 * })
 * ```
 */
export function generateColorVariants(
  options: CompoundVariantOptions = {},
): Array<{
  variant: StandardVariant | StandardVariant[]
  color: StandardColor
  class: ClassValue | Record<string, ClassValue>
}> {
  const {
    variants = standardVariants,
    colors = standardColors,
    useSlots = false,
    slotName = 'base',
    classGenerator,
  } = options

  const compoundVariants: Array<{
    variant: StandardVariant | StandardVariant[]
    color: StandardColor
    class: ClassValue | Record<string, ClassValue>
  }> = []

  for (const variant of variants) {
    for (const color of colors) {
      let variantClass: ClassValue

      if (classGenerator) {
        variantClass = classGenerator(variant, color)
      } else {
        // Use default color variants
        const colorVariant = colorVariants[variant]?.[color]
        if (!colorVariant) {
          continue
        }
        variantClass = colorVariant
      }

      compoundVariants.push({
        variant,
        color,
        class: useSlots ? { [slotName]: variantClass } : variantClass,
      })
    }
  }

  return compoundVariants
}

/**
 * Generates compound variants for multiple variant types with colors
 * Useful for components that support multiple variant combinations
 *
 * @param variantGroups - Array of variant groups, each with variants and colors
 * @param useSlots - Whether to use slots
 * @param slotName - Slot name if using slots
 * @returns Array of compound variant definitions
 *
 * @example
 * ```ts
 * const compoundVariants = generateMultiVariantColorCombos([
 *   { variants: ['solid', 'shadow'], colors: ['primary', 'secondary'] },
 *   { variants: ['flat'], colors: ['default'] },
 * ])
 * ```
 */
export function generateMultiVariantColorCombos(
  variantGroups: Array<{
    variants: StandardVariant | StandardVariant[]
    colors: StandardColor[]
    classGenerator?: (variant: StandardVariant | StandardVariant[], color: StandardColor) => ClassValue
  }>,
  useSlots = false,
  slotName = 'base',
): Array<{
  variant: StandardVariant | StandardVariant[]
  color: StandardColor
  class: ClassValue | Record<string, ClassValue>
}> {
  const compoundVariants: Array<{
    variant: StandardVariant | StandardVariant[]
    color: StandardColor
    class: ClassValue | Record<string, ClassValue>
  }> = []

  for (const group of variantGroups) {
    const { variants, colors, classGenerator } = group
    const variantArray = Array.isArray(variants) ? variants : [variants]

    for (const color of colors) {
      let variantClass: ClassValue

      if (classGenerator) {
        variantClass = classGenerator(variants, color)
      } else {
        // For multiple variants, use the first one's color variant
        const firstVariant = variantArray[0]
        const colorVariant = colorVariants[firstVariant]?.[color]
        if (!colorVariant) {
          continue
        }
        variantClass = colorVariant
      }

      compoundVariants.push({
        variant: variants,
        color,
        class: useSlots ? { [slotName]: variantClass } : variantClass,
      })
    }
  }

  return compoundVariants
}

/**
 * Common base classes for interactive components
 */
export const commonInteractiveBase = [
  'relative',
  'inline-flex',
  'items-center',
  'justify-center',
  'box-border',
  'appearance-none',
  'outline-hidden',
  'select-none',
  'whitespace-nowrap',
  'subpixel-antialiased',
  'overflow-hidden',
  'tap-highlight-transparent',
] as const

/**
 * Common disabled state classes
 */
export const commonDisabledClasses = 'opacity-disabled pointer-events-none'

/**
 * Common focus visible classes (imported from utils)
 */
export { dataFocusVisibleClasses, groupDataFocusVisibleClasses } from './classes'

/**
 * Helper to create consistent size variants
 */
export function createSizeVariants(config: {
  sm: string
  md: string
  lg: string
}): Record<StandardSize, string> {
  return {
    sm: config.sm,
    md: config.md,
    lg: config.lg,
  }
}

/**
 * Helper to create consistent radius variants
 */
export function createRadiusVariants(): Record<StandardRadius, string> {
  return {
    none: 'rounded-none',
    sm: 'rounded-small',
    md: 'rounded-medium',
    lg: 'rounded-large',
    full: 'rounded-full',
  }
}

