/**
 * @flexi-ui/theme/colors
 * 
 * Color definitions and utilities
 * 
 * @example
 * ```ts
 * import { colors, commonColors, semanticColors } from '@flexi-ui/theme/colors'
 * ```
 */

import { commonColors } from './common'
import { semanticColors } from './semantic'

// Re-export types
export type {
  ColorScale,
  FullColorScale,
  BaseColors,
  ThemeColors,
  SemanticBaseColors,
  ColorName,
  BaseColorName,
  SemanticColorName,
} from './types'

// Combined colors (common + semantic)
const colors = {
  ...commonColors,
  ...semanticColors,
}

// Named exports for better tree-shaking
export { colors, commonColors, semanticColors }

// Re-export individual color palettes for granular imports
export { blue } from './blue'
export { green } from './green'
export { pink } from './pink'
export { purple } from './purple'
export { red } from './red'
export { yellow } from './yellow'
export { cyan } from './cyan'
export { zinc } from './zinc'
