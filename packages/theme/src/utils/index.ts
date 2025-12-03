/**
 * @flexi-ui/theme/utils
 * 
 * Utility functions and helpers
 * 
 * @example
 * ```ts
 * import { tv, cn, getContrastRatio } from '@flexi-ui/theme/utils'
 * ```
 */

// ============================================================================
// Core Utilities
// ============================================================================
export { tv } from './tv'
export { cn } from './cn'
export { mergeClasses } from './merge-classes'
export type { VariantProps, TV } from 'tailwind-variants'

// ============================================================================
// Class Utilities
// ============================================================================
export {
  baseStyles,
  ringClasses,
  focusVisibleClasses,
  dataFocusVisibleClasses,
  groupDataFocusVisibleClasses,
  translateCenterClasses,
  absoluteFullClasses,
  collapseAdjacentVariantBorders,
  hiddenInputClasses,
} from './classes'

// ============================================================================
// Color Utilities
// ============================================================================
export {
  getContrastRatio,
  meetsContrastRequirements,
  getReadableColor,
  generateColorScale,
  adjustSaturation,
  mixColors,
  withOpacity,
  isValidColor,
  toHSL,
  toHSLA,
} from './color'

// ============================================================================
// Component Theme Utilities
// ============================================================================
export {
  generateColorVariants,
  generateMultiVariantColorCombos,
  createSizeVariants,
  createRadiusVariants,
  standardColors,
  standardSizes,
  standardRadius,
  standardVariants,
  commonInteractiveBase,
  commonDisabledClasses,
} from './component-theme'
export type {
  StandardColor,
  StandardSize,
  StandardRadius,
  StandardVariant,
} from './component-theme'

// ============================================================================
// Merge Utilities
// ============================================================================
export {
  swapColorValues,
  removeDefaultKeys,
  flattenThemeObject,
  deepMergeTheme,
  mergeThemes,
  createColorMergeStrategy,
  createLayoutMergeStrategy,
} from './object'
export type { MergeStrategy } from './object'

// ============================================================================
// Variant Utilities
// ============================================================================
export { colorVariants } from './variants'

// ============================================================================
// Config Utilities
// ============================================================================
export { COMMON_UNITS, twMergeConfig } from './tw-merge-config'

// ============================================================================
// Type Utilities
// ============================================================================
export type { SlotsToClasses, ComponentVariantProps, ComponentSlots } from './types'

// ============================================================================
// Validation Utilities
// ============================================================================
export {
  validatePluginConfig,
  validateThemes,
  validateTheme,
  validateLayout,
  validateColors,
  formatValidationErrors,
  validatePluginConfigStrict,
  validateColorValue,
  validateOpacityValue,
} from './validation'
export type { ValidationError, ValidationResult } from './validation'

// ============================================================================
// Theme Variant Utilities
// ============================================================================
export {
  createThemeVariant,
  invertTheme,
  createInvertedTheme,
  mergeThemeVariants,
  createVariantFromThemes,
  cloneTheme,
  applyThemeVariant,
} from './theme-variants'
export type { CreateThemeVariantOptions } from './theme-variants'

// ============================================================================
// Theme Generator Utilities
// ============================================================================
export {
  generateThemeFromColor,
  generateThemeFromPalette,
  generateThemesFromColor,
  generateThemesFromPalette,
  generateConfigFromColor,
  generateConfigFromPalette,
} from './theme-generator'
export type { ThemeGenOptions } from './theme-generator'

// ============================================================================
// Performance & Caching Utilities
// ============================================================================
export {
  getCachedResolvedConfig,
  setCachedResolvedConfig,
  getCachedTheme,
  setCachedTheme,
  clearThemeCache,
  getCacheStats,
  cleanupCache,
  memoize,
  lazyLoad,
} from './cache'

// ============================================================================
// Theme I/O Utilities
// ============================================================================
export {
  exportTheme,
  importTheme,
  exportSingleTheme,
  importSingleTheme,
  exportThemesToFile,
  importThemesFromFile,
  validateExportedTheme,
  createThemeBackup,
  restoreThemeFromBackup,
} from './theme-io'
export type { ExportOptions, ExportedTheme } from './theme-io'

// ============================================================================
// Migration Utilities
// ============================================================================
export {
  migrateFromTailwindConfig,
  migrateFromCSSVariables,
  migrateFromGenericTheme,
  createMigrationReport,
} from './migration'

// ============================================================================
// Preview Utilities
// ============================================================================
export {
  generateThemePreview,
  compareThemes,
  generateConfigPreview,
  createThemeDiffSummary,
} from './preview'
export type { ThemePreview, ThemeDiff } from './preview'
