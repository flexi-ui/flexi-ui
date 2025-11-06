// Core exports
export * from './plugin'
export * from './types'
export * from './colors'
export * from './default-layout'
export * from './utils'

// Component themes - import individually for better tree-shaking
// Example: import { button } from '@flexi-ui/theme/components'
export * from './components'

// Utilities
export { tv } from './utils/tv'
export type { VariantProps, TV } from 'tailwind-variants'
