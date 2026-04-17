'use client'

import type { SearchFieldVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'
import type React from 'react'

import { searchFieldVariants } from '@flexi-ui/styles'
import {
  Button as ButtonPrimitive,
  Group as GroupPrimitive,
  Input as InputPrimitive,
  Label as LabelPrimitive,
  SearchField as SearchFieldPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * SearchField Root
 * -----------------------------------------------------------------------------------------------*/
interface SearchFieldRootProps extends Omit<ComponentPropsWithRef<typeof SearchFieldPrimitive>, 'children'>, SearchFieldVariants {
  children?: React.ReactNode
  label?: string
}

const SearchFieldRoot = ({
  children,
  className,
  label,
  size,
  ...rest
}: SearchFieldRootProps) => {
  const styles = searchFieldVariants({ size })

  return (
    <SearchFieldPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="search-field"
      {...rest}
    >
      {() => (
        <>
          {label && <LabelPrimitive className="search-field__label">{label}</LabelPrimitive>}
          <GroupPrimitive className="search-field__group">
            <span className="search-field__icon" aria-hidden="true">&#128269;</span>
            <InputPrimitive className="search-field__input" />
            <ButtonPrimitive className="search-field__clear">&#10005;</ButtonPrimitive>
          </GroupPrimitive>
          {children}
        </>
      )}
    </SearchFieldPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { SearchFieldRoot }
export type { SearchFieldRootProps }
