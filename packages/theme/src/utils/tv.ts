import type { TV } from 'tailwind-variants'
import { tv as tvBase } from 'tailwind-variants'

import { twMergeConfig } from './tw-merge-config'

/**
 * Enhanced tv (tailwind-variants) function with better type inference
 * Automatically applies FlexiUI's twMerge configuration
 *
 * @param options - Tailwind variants options
 * @param config - Optional configuration
 * @returns Tailwind variants function with FlexiUI configuration
 *
 * @example
 * ```ts
 * const button = tv({
 *   base: 'px-4 py-2',
 *   variants: {
 *     size: {
 *       sm: 'text-sm',
 *       md: 'text-base',
 *     },
 *   },
 * })
 * ```
 */
export const tv: TV = (options, config) =>
  tvBase(options, {
    ...config,
    twMerge: config?.twMerge ?? true,
    twMergeConfig: {
      ...config?.twMergeConfig,
      theme: {
        ...config?.twMergeConfig?.theme,
        ...twMergeConfig.theme,
      },
      classGroups: {
        ...config?.twMergeConfig?.classGroups,
        ...twMergeConfig.classGroups,
      },
    },
  })
