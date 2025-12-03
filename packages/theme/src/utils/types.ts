import { ClassValue } from 'tailwind-variants'

/**
 * This Typescript utility transform a list of slots into a list of {slot: classes}
 * Enhanced with better type safety and flexibility
 */
export type SlotsToClasses<S extends string> = {
  [key in S]?: Exclude<ClassValue, 0n>
}

/**
 * Helper type for component variant props
 * Extracts variant props from a tailwind-variants component
 */
export type ComponentVariantProps<T> = T extends (...args: unknown[]) => unknown
  ? Parameters<T>[0] extends infer Props
    ? Props extends Record<string, unknown>
      ? Props
      : never
    : never
  : never

/**
 * Helper type for component slots
 * Extracts slot names from a tailwind-variants component with slots
 */
export type ComponentSlots<T> = T extends (...args: unknown[]) => infer Return
  ? Return extends Record<string, (...args: unknown[]) => string>
    ? keyof Return
    : never
  : never
