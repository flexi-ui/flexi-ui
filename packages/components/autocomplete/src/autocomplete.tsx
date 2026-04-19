'use client'

import type { AutocompleteVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'
import type React from 'react'

import { autocompleteVariants } from '@flexi-ui/styles'
import { Autocomplete as AutocompletePrimitive } from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * Autocomplete Root
 * -----------------------------------------------------------------------------------------------*/
interface AutocompleteRootProps
  extends Omit<ComponentPropsWithRef<typeof AutocompletePrimitive>, 'children'>,
    AutocompleteVariants {
  children?: React.ReactNode
  className?: string
}

const AutocompleteRoot = ({ children, className, size, ...rest }: AutocompleteRootProps) => {
  const styles = autocompleteVariants({ size })

  return (
    <AutocompletePrimitive {...rest}>
      <div className={cx(styles, className) ?? ''} data-slot="autocomplete">
        {children}
      </div>
    </AutocompletePrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { AutocompleteRoot }
export type { AutocompleteRootProps }
