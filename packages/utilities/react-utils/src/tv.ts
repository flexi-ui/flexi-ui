import type { TV } from 'tailwind-variants'

import { tv as tvBase } from 'tailwind-variants'

export type { VariantProps } from 'tailwind-variants'

/**
 * FlexiUI's wrapper around tailwind-variants `tv()` that disables `twMerge`
 * by default. Components in FlexiUI use BEM-style class names from
 * `@flexi-ui/styles`, so the merge step is unnecessary and only adds cost.
 */
export const tv: TV = (options, config) =>
  tvBase(options, {
    ...config,
    twMerge: config?.twMerge ?? false,
    twMergeConfig: {
      ...config?.twMergeConfig,
      classGroups: {
        ...config?.twMergeConfig?.classGroups,
      },
      theme: {
        ...config?.twMergeConfig?.theme,
      },
    },
  })
