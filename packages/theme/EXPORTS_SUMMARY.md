# Theme Package Exports Summary

## Main Entry Point (`@flexi-ui/theme`)

### Core Plugin
- `flexiui` - Main Tailwind plugin function
- Types: `FlexiUIPluginConfig`, `ConfigTheme`, `ConfigThemes`, `LayoutTheme`

### Types
- `DefaultThemeType`, `BaseThemeUnit`, `FontThemeUnit`
- `ThemeName`, `GetThemeConfig`, `DeepPartial`
- `RequireFields`, `OptionalFields`
- Type guards: `isDefaultThemeType`, `isConfigTheme`

### Colors
- `colors`, `commonColors`, `semanticColors`
- Individual palettes: `blue`, `green`, `pink`, `purple`, `red`, `yellow`, `cyan`, `zinc`
- Types: `ColorScale`, `FullColorScale`, `BaseColors`, `ThemeColors`, etc.

### Layout
- `defaultLayout`, `lightLayout`, `darkLayout`
- `typographyRatios`, `radiusScale`
- Types: `RadiusScaleKey`, `TypographyRatioKey`

### Utilities
- `tv` - Tailwind variants helper
- `cn` - Class name utility
- `mergeClasses` - Merge class utilities
- `colorVariants` - Color variant utilities
- `COMMON_UNITS`, `twMergeConfig`

### Validation
- `validatePluginConfig`, `validateThemes`, `validateTheme`
- `validateLayout`, `validateColors`
- `formatValidationErrors`, `validatePluginConfigStrict`
- `validateColorValue`, `validateOpacityValue`
- Types: `ValidationError`, `ValidationResult`

### Theme Variants
- `createThemeVariant`, `invertTheme`, `createInvertedTheme`
- `mergeThemeVariants`, `createVariantFromThemes`
- `cloneTheme`, `applyThemeVariant`
- Types: `CreateThemeVariantOptions`

### Theme Generators
- `generateThemeFromColor`, `generateThemeFromPalette`
- `generateThemesFromColor`, `generateThemesFromPalette`
- `generateConfigFromColor`, `generateConfigFromPalette`
- Types: `ThemeGenOptions`

### Performance & Caching
- `getCachedResolvedConfig`, `setCachedResolvedConfig`
- `getCachedTheme`, `setCachedTheme`
- `clearThemeCache`, `getCacheStats`, `cleanupCache`
- `memoize`, `lazyLoad`

### Theme I/O
- `exportTheme`, `importTheme`
- `exportSingleTheme`, `importSingleTheme`
- `exportThemesToFile`, `importThemesFromFile`
- `validateExportedTheme`
- `createThemeBackup`, `restoreThemeFromBackup`
- Types: `ExportOptions`, `ExportedTheme`

### Migration
- `migrateFromTailwindConfig`
- `migrateFromCSSVariables`
- `migrateFromGenericTheme`
- `createMigrationReport`

### Preview
- `generateThemePreview`, `compareThemes`
- `generateConfigPreview`, `createThemeDiffSummary`
- Types: `ThemePreview`, `ThemeDiff`

### Class Utilities
- `baseStyles`, `ringClasses`, `focusVisibleClasses`
- `dataFocusVisibleClasses`, `groupDataFocusVisibleClasses`
- `translateCenterClasses`, `absoluteFullClasses`
- `collapseAdjacentVariantBorders`, `hiddenInputClasses`

### Color Utilities
- `getContrastRatio`, `meetsContrastRequirements`, `getReadableColor`
- `generateColorScale`, `adjustSaturation`, `mixColors`
- `withOpacity`, `isValidColor`, `toHSL`, `toHSLA`

### Component Theme Utilities
- `generateColorVariants`, `generateMultiVariantColorCombos`
- `createSizeVariants`, `createRadiusVariants`
- `standardColors`, `standardSizes`, `standardRadius`, `standardVariants`
- `commonInteractiveBase`, `commonDisabledClasses`
- Types: `StandardColor`, `StandardSize`, `StandardRadius`, `StandardVariant`

### Merge Utilities
- `swapColorValues`, `removeDefaultKeys`, `flattenThemeObject`
- `deepMergeTheme`, `mergeThemes`
- `createColorMergeStrategy`, `createLayoutMergeStrategy`
- Types: `MergeStrategy`

### Presets
- `presets`, `modernPreset`, `minimalPreset`, `vibrantPreset`
- `createConfigFromPreset`, `mergePresetWithThemes`
- Types: `PresetName`

### Component Themes
- All component theme functions (button, input, card, etc.)
- Import from `@flexi-ui/theme/components` for better tree-shaking

### Tailwind Utilities
- `utilities` - Custom Tailwind utilities
- `animations` - Animation keyframes and utilities

### Test Utilities
- `createTestTheme`, `createTestConfig`
- `assertValidTheme`, `assertValidConfig`
- `createMinimalTestTheme`, `createCompleteTestTheme`, `createTestThemes`
- `testThemeMerge`, `testThemeExtension`
- `themeSnapshot`, `compareTestThemes`

## Subpath Exports

### `@flexi-ui/theme/components`
All component theme functions

### `@flexi-ui/theme/utils`
All utility functions (same as main, but better for tree-shaking)

### `@flexi-ui/theme/colors`
Color definitions and palettes

### `@flexi-ui/theme/presets`
Theme presets and helpers

### `@flexi-ui/theme/test-utils`
Testing utilities

## Export Statistics

- **Total exports**: 100+ functions, types, and constants
- **Main bundle**: 32.13 kB (8.25 kB gzipped)
- **Subpath bundles**: Optimized for tree-shaking
- **Type coverage**: 100% TypeScript support

## Usage Recommendations

1. **Main entry** (`@flexi-ui/theme`) - For convenience, includes everything
2. **Subpaths** - For better tree-shaking and smaller bundles
3. **Type imports** - Use `import type` for types to reduce bundle size

