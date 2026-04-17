import type { ComponentProps } from 'react'

import { SearchFieldRoot } from './search-field'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const SearchField = Object.assign(SearchFieldRoot, {
  Root: SearchFieldRoot,
})

export type SearchField = {
  Props: ComponentProps<typeof SearchFieldRoot>
  RootProps: ComponentProps<typeof SearchFieldRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { SearchFieldRoot }
export type { SearchFieldRootProps, SearchFieldRootProps as SearchFieldProps } from './search-field'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { searchFieldVariants } from '@flexi-ui/styles'
export type { SearchFieldVariants } from '@flexi-ui/styles'
