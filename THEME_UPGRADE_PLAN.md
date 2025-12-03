# FlexiUI Theme Package Upgrade Plan - HeroUI v3 Style

## Overview

This plan outlines the upgrade of `@flexi-ui/theme` package to match HeroUI v3's theming architecture and capabilities. The upgrade will improve theme resolution, color system, component themes, utilities, and overall developer experience.

## Current State Analysis

### Current Structure
- **Plugin**: `src/plugin.ts` - Tailwind CSS plugin with theme resolution
- **Colors**: `src/colors/` - Color palettes (common, semantic, individual colors)
- **Components**: `src/components/` - Component theme variants (44 components)
- **Utilities**: `src/utilities/` - Custom Tailwind utilities
- **Utils**: `src/utils/` - Helper functions (tv, cn, merge, etc.)
- **Types**: `src/types.ts` - TypeScript definitions
- **Layout**: `src/default-layout.ts` - Default layout tokens

### Current Capabilities
- ✅ Tailwind CSS v4 support
- ✅ CSS variable generation
- ✅ Theme variants (light/dark/custom)
- ✅ Component theme variants
- ✅ Color system with semantic colors
- ✅ Layout tokens (radius, spacing, shadows)
- ✅ TypeScript types

## Upgrade Goals

1. **Enhanced Plugin Architecture**
   - Better theme resolution logic
   - Improved CSS variable generation
   - Better Tailwind v4 compatibility
   - Enhanced theme variant system

2. **Improved Color System**
   - Better semantic color generation
   - Enhanced color utilities
   - Improved color palette structure
   - Better color contrast calculations

3. **Component Theme Enhancements**
   - More consistent variant patterns
   - Better slot-based styling
   - Improved type safety
   - Enhanced default variants

4. **Better Utilities**
   - Enhanced transition system
   - Improved animation utilities
   - Better custom utility functions
   - Enhanced merge utilities

5. **Type System Improvements**
   - Better type inference
   - Enhanced ConfigTheme types
   - Improved LayoutTheme types
   - Better component theme types

6. **Theme Merging & Inheritance**
   - Improved deep merge logic
   - Better extend functionality
   - Enhanced theme inheritance
   - Better default value handling

## Detailed Upgrade Tasks

### Phase 1: Plugin Architecture Enhancement

#### 1.1 Improve Theme Resolution (`src/plugin.ts`)
- [ ] Enhance `resolveConfig` function with better error handling
- [ ] Improve CSS variable generation logic
- [ ] Add better support for nested theme objects
- [ ] Enhance theme variant generation
- [ ] Improve color parsing and HSL conversion
- [ ] Add theme validation warnings

#### 1.2 Enhance Core Plugin Function
- [ ] Improve `corePlugin` with better Tailwind integration
- [ ] Add support for more Tailwind utilities
- [ ] Enhance base styles generation
- [ ] Improve utility generation
- [ ] Better variant registration

#### 1.3 Better Default Theme Handling
- [ ] Improve default theme selection logic
- [ ] Better theme extension mechanism
- [ ] Enhanced theme merging for light/dark
- [ ] Better custom theme support

### Phase 2: Color System Enhancement

#### 2.1 Improve Semantic Colors (`src/colors/semantic.ts`)
- [ ] Better semantic color generation
- [ ] Improved contrast calculations
- [ ] Enhanced foreground color selection
- [ ] Better content layer colors
- [ ] Improved overlay and focus colors

#### 2.2 Enhance Color Utilities
- [ ] Better color manipulation functions
- [ ] Improved color conversion utilities
- [ ] Enhanced color validation
- [ ] Better color palette generation

#### 2.3 Color Type Improvements
- [ ] Better TypeScript types for colors
- [ ] Enhanced color palette types
- [ ] Improved semantic color types
- [ ] Better color theme types

### Phase 3: Component Theme Enhancements

#### 3.1 Standardize Component Patterns
- [ ] Review all 44 component themes
- [ ] Ensure consistent variant patterns
- [ ] Improve slot-based styling
- [ ] Better default variant handling
- [ ] Enhanced compound variants

#### 3.2 Component-Specific Improvements
- [ ] Better button theme variants
- [ ] Enhanced input theme structure
- [ ] Improved card theme slots
- [ ] Better form theme integration
- [ ] Enhanced modal/drawer themes

#### 3.3 Component Type Safety
- [ ] Better VariantProps types
- [ ] Enhanced component theme types
- [ ] Improved slot type definitions
- [ ] Better theme prop types

### Phase 4: Utilities Enhancement

#### 4.1 Transition System (`src/utilities/transition.ts`)
- [ ] Enhanced transition utilities
- [ ] Better transition timing functions
- [ ] Improved transition duration system
- [ ] Better easing functions

#### 4.2 Animation System (`src/utilities/animation.ts`)
- [ ] Enhanced animation utilities
- [ ] Better animation keyframes
- [ ] Improved animation timing
- [ ] Better animation composition

#### 4.3 Custom Utilities
- [ ] Enhanced text utilities
- [ ] Better scrollbar utilities
- [ ] Improved custom utility functions
- [ ] Better utility composition

### Phase 5: Type System Improvements

#### 5.1 Enhanced Config Types (`src/types.ts`)
- [ ] Better FlexiUIPluginConfig types
- [ ] Improved ConfigTheme types
- [ ] Enhanced LayoutTheme types
- [ ] Better theme extension types

#### 5.2 Component Theme Types
- [ ] Better component theme type inference
- [ ] Enhanced variant prop types
- [ ] Improved slot type definitions
- [ ] Better compound variant types

#### 5.3 Utility Types
- [ ] Better tv() function types
- [ ] Enhanced cn() function types
- [ ] Improved merge utility types
- [ ] Better color utility types

### Phase 6: Theme Merging & Inheritance

#### 6.1 Improve Merge Logic (`src/utils/object.ts`)
- [ ] Better deep merge implementation
- [ ] Enhanced object flattening
- [ ] Improved color value swapping
- [ ] Better nested object handling

#### 6.2 Theme Extension
- [ ] Better theme extend mechanism
- [ ] Enhanced base theme selection
- [ ] Improved theme inheritance
- [ ] Better default value merging

#### 6.3 Layout Merging
- [ ] Better layout theme merging
- [ ] Enhanced default layout application
- [ ] Improved layout token inheritance
- [ ] Better layout override handling

### Phase 7: Default Layout Enhancement

#### 7.1 Improve Default Values (`src/default-layout.ts`)
- [ ] Better default radius values
- [ ] Enhanced spacing system
- [ ] Improved typography scale
- [ ] Better shadow system

#### 7.2 Layout Token System
- [ ] Better layout token structure
- [ ] Enhanced layout utilities
- [ ] Improved layout type definitions
- [ ] Better layout validation

### Phase 8: Export & API Improvements

#### 8.1 Better Exports (`src/main.ts`)
- [ ] Improve tree-shaking support
- [ ] Better named exports
- [ ] Enhanced default exports
- [ ] Better re-export structure

#### 8.2 API Surface
- [ ] Cleaner public API
- [ ] Better internal/external separation
- [ ] Enhanced documentation
- [ ] Better example exports

### Phase 9: Validation & Error Handling

#### 9.1 Theme Validation
- [ ] Add runtime theme validation
- [ ] Better error messages
- [ ] Enhanced warning system
- [ ] Better type checking

#### 9.2 Error Handling
- [ ] Better error recovery
- [ ] Enhanced error messages
- [ ] Improved debugging support
- [ ] Better validation feedback

### Phase 10: Documentation & Testing

#### 10.1 Documentation
- [ ] Update theme documentation
- [ ] Better API documentation
- [ ] Enhanced examples
- [ ] Better migration guide

#### 10.2 Testing
- [ ] Add theme validation tests
- [ ] Better color system tests
- [ ] Enhanced plugin tests
- [ ] Improved utility tests

## Implementation Priority

### High Priority (Core Functionality)
1. Plugin architecture enhancement
2. Color system improvements
3. Type system improvements
4. Theme merging enhancements

### Medium Priority (Developer Experience)
5. Component theme standardization
6. Utilities enhancement
7. Default layout improvements
8. Export improvements

### Low Priority (Polish)
9. Validation & error handling
10. Documentation & testing

## Breaking Changes Considerations

### Potential Breaking Changes
- Theme config structure changes
- Color system API changes
- Component theme variant changes
- Utility function signature changes

### Migration Strategy
- Maintain backward compatibility where possible
- Provide migration guide
- Add deprecation warnings
- Support both old and new APIs during transition

## Success Criteria

1. ✅ Better theme resolution and CSS variable generation
2. ✅ Improved color system with better semantic colors
3. ✅ Enhanced component theme consistency
4. ✅ Better TypeScript type inference
5. ✅ Improved theme merging and inheritance
6. ✅ Enhanced developer experience
7. ✅ Better performance and tree-shaking
8. ✅ Comprehensive documentation

## References

- [HeroUI v3 Repository](https://github.com/heroui-inc/heroui/tree/v3/packages)
- Current FlexiUI theme package structure
- Tailwind CSS v4 documentation
- Tailwind Variants documentation

