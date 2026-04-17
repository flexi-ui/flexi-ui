'use client'

import type { ComboBoxVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'
import type React from 'react'

import { comboBoxVariants } from '@flexi-ui/styles'
import {
  Button as ButtonPrimitive,
  ComboBox as ComboBoxPrimitive,
  Group as GroupPrimitive,
  Input as InputPrimitive,
  Label as LabelPrimitive,
  ListBox as ListBoxPrimitive,
  ListBoxItem as ListBoxItemPrimitive,
  Popover as PopoverPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * ComboBox Root
 * -----------------------------------------------------------------------------------------------*/
interface ComboBoxRootProps extends Omit<ComponentPropsWithRef<typeof ComboBoxPrimitive>, 'children'>, ComboBoxVariants {
  children?: React.ReactNode
  label?: string
}

const ComboBoxRoot = ({
  children,
  className,
  label,
  size,
  ...rest
}: ComboBoxRootProps) => {
  const styles = comboBoxVariants({ size })

  return (
    <ComboBoxPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="combo-box"
      {...rest}
    >
      {() => (
        <>
          {label && <LabelPrimitive className="combo-box__label">{label}</LabelPrimitive>}
          <GroupPrimitive className="combo-box__group">
            <InputPrimitive className="combo-box__input" />
            <ButtonPrimitive className="combo-box__button">&#8250;</ButtonPrimitive>
          </GroupPrimitive>
          {children}
        </>
      )}
    </ComboBoxPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * ComboBox Popover
 * -----------------------------------------------------------------------------------------------*/
interface ComboBoxPopoverProps extends ComponentPropsWithRef<typeof PopoverPrimitive> {}

const ComboBoxPopover = ({ className, ...rest }: ComboBoxPopoverProps) => {
  return (
    <PopoverPrimitive
      className={(renderProps) =>
        cx('combo-box__popover', typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="combo-box-popover"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * ComboBox Listbox
 * -----------------------------------------------------------------------------------------------*/
interface ComboBoxListboxProps extends ComponentPropsWithRef<typeof ListBoxPrimitive> {}

const ComboBoxListbox = ({ className, ...rest }: ComboBoxListboxProps) => {
  return (
    <ListBoxPrimitive
      className={(renderProps) =>
        cx('combo-box__listbox', typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="combo-box-listbox"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * ComboBox Option
 * -----------------------------------------------------------------------------------------------*/
interface ComboBoxOptionProps extends ComponentPropsWithRef<typeof ListBoxItemPrimitive> {}

const ComboBoxOption = ({ className, ...rest }: ComboBoxOptionProps) => {
  return (
    <ListBoxItemPrimitive
      className={(renderProps) =>
        cx('combo-box__option', typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="combo-box-option"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { ComboBoxRoot, ComboBoxPopover, ComboBoxListbox, ComboBoxOption }
export type { ComboBoxRootProps, ComboBoxPopoverProps, ComboBoxListboxProps, ComboBoxOptionProps }
