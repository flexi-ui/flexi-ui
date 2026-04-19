import type { ComponentProps } from 'react'

import { AutocompleteRoot } from './autocomplete'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Autocomplete = Object.assign(AutocompleteRoot, {
  Root: AutocompleteRoot,
})

export type Autocomplete = {
  Props: ComponentProps<typeof AutocompleteRoot>
  RootProps: ComponentProps<typeof AutocompleteRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { AutocompleteRoot }
export type { AutocompleteRootProps, AutocompleteRootProps as AutocompleteProps } from './autocomplete'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { autocompleteVariants } from '@flexi-ui/styles'
export type { AutocompleteVariants } from '@flexi-ui/styles'
