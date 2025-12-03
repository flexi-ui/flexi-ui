/**
 * @flexi-ui/theme
 *
 * Main entry point for FlexiUI theme package
 *
 * For better tree-shaking, you can import from specific subpaths:
 * - `@flexi-ui/theme/components` - Component themes
 * - `@flexi-ui/theme/utils` - Utility functions
 * - `@flexi-ui/theme/colors` - Color definitions
 * - `@flexi-ui/theme/presets` - Theme presets
 * - `@flexi-ui/theme/test-utils` - Testing utilities
 *
 * @example
 * ```ts
 * // Main plugin
 * import { flexiui } from '@flexi-ui/theme'
 *
 * // Component themes (better tree-shaking)
 * import { button } from '@flexi-ui/theme/components'
 *
 * // Utilities
 * import { tv, cn } from '@flexi-ui/theme/utils'
 *
 * // Colors
 * import { colors, semanticColors } from '@flexi-ui/theme/colors'
 * ```
 */

// ============================================================================
// Core Plugin
// ============================================================================
export { flexiui } from './plugin'
export type { FlexiUIPluginConfig, ConfigTheme, ConfigThemes, LayoutTheme } from './types'

// ============================================================================
// Types
// ============================================================================
export type {
  DefaultThemeType,
  BaseThemeUnit,
  FontThemeUnit,
  ThemeName,
  GetThemeConfig,
  DeepPartial,
  RequireFields,
  OptionalFields,
} from './types'
// Type guards
export { isDefaultThemeType, isConfigTheme } from './types'

// ============================================================================
// Colors
// ============================================================================
export { colors, commonColors, semanticColors } from './colors'
// Individual color palettes for granular imports
export { blue, green, pink, purple, red, yellow, cyan, zinc } from './colors'
export type {
  ColorScale,
  FullColorScale,
  BaseColors,
  ThemeColors,
  SemanticBaseColors,
  ColorName,
  BaseColorName,
  SemanticColorName,
} from './colors/types'

// ============================================================================
// Layout
// ============================================================================
export {
  defaultLayout,
  lightLayout,
  darkLayout,
  typographyRatios,
  radiusScale,
} from './default-layout'
export type { RadiusScaleKey, TypographyRatioKey } from './default-layout'

// ============================================================================
// Utilities
// ============================================================================
export { tv } from './utils/tv'
export type { VariantProps, TV } from 'tailwind-variants'

// Validation utilities
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
} from './utils/validation'
export type { ValidationError, ValidationResult } from './utils/validation'

// Theme variant utilities
export {
  createThemeVariant,
  invertTheme,
  createInvertedTheme,
  mergeThemeVariants,
  createVariantFromThemes,
  cloneTheme,
  applyThemeVariant,
} from './utils/theme-variants'
export type { CreateThemeVariantOptions } from './utils/theme-variants'

// Theme generator utilities
export {
  generateThemeFromColor,
  generateThemeFromPalette,
  generateThemesFromColor,
  generateThemesFromPalette,
  generateConfigFromColor,
  generateConfigFromPalette,
} from './utils/theme-generator'
export type { ThemeGenOptions } from './utils/theme-generator'

// Performance & caching utilities
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
} from './utils/cache'

// Theme I/O utilities
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
} from './utils/theme-io'
export type { ExportOptions, ExportedTheme } from './utils/theme-io'

// Migration utilities
export {
  migrateFromTailwindConfig,
  migrateFromCSSVariables,
  migrateFromGenericTheme,
  createMigrationReport,
} from './utils/migration'

// Preview utilities
export {
  generateThemePreview,
  compareThemes,
  generateConfigPreview,
  createThemeDiffSummary,
} from './utils/preview'
export type { ThemePreview, ThemeDiff } from './utils/preview'

// Class utilities
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
} from './utils/classes'

// Color utilities
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
} from './utils/color'

// Component theme utilities
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
} from './utils/component-theme'
export type {
  StandardColor,
  StandardSize,
  StandardRadius,
  StandardVariant,
} from './utils/component-theme'

// Merge utilities
export {
  swapColorValues,
  removeDefaultKeys,
  flattenThemeObject,
  deepMergeTheme,
  mergeThemes,
  createColorMergeStrategy,
  createLayoutMergeStrategy,
} from './utils/object'
export type { MergeStrategy } from './utils/object'

// Other utilities
export { cn } from './utils/cn'
export { mergeClasses } from './utils/merge-classes'
export { colorVariants } from './utils/variants'
export { COMMON_UNITS, twMergeConfig } from './utils/tw-merge-config'
export type { SlotsToClasses, ComponentVariantProps, ComponentSlots } from './utils/types'

// ============================================================================
// Presets
// ============================================================================
// Note: For better tree-shaking, import from '@flexi-ui/theme/presets'
// Example: import { presets, createConfigFromPreset } from '@flexi-ui/theme/presets'
export {
  presets,
  modernPreset,
  minimalPreset,
  vibrantPreset,
  createConfigFromPreset,
  mergePresetWithThemes,
} from './presets'
export type { PresetName } from './presets'

// ============================================================================
// Component Themes
// ============================================================================
// Note: For better tree-shaking, import from '@flexi-ui/theme/components'
// Example: import { button } from '@flexi-ui/theme/components'
export * from './components'

// ============================================================================
// Utilities (Tailwind utilities)
// ============================================================================
// Note: These are used internally by the plugin, but exported for advanced usage
export { utilities } from './utilities'
export { animations } from './animations'

// ============================================================================
// Test Utilities
// ============================================================================
// Note: For better tree-shaking, import from '@flexi-ui/theme/test-utils'
// Example: import { createTestTheme } from '@flexi-ui/theme/test-utils'
export {
  createTestTheme,
  createTestConfig,
  assertValidTheme,
  assertValidConfig,
  createMinimalTestTheme,
  createCompleteTestTheme,
  createTestThemes,
  testThemeMerge,
  testThemeExtension,
  themeSnapshot,
  compareTestThemes,
} from './test-utils'
