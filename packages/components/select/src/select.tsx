'use client'

import type { SelectVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { selectVariants } from '@flexi-ui/styles'
import {
  Button as ButtonPrimitive,
  ListBox as ListBoxPrimitive,
  ListBoxItem as ListBoxItemPrimitive,
  Popover as PopoverPrimitive,
  Select as SelectPrimitive,
  SelectValue as SelectValuePrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * Select Root
 * -----------------------------------------------------------------------------------------------*/
interface SelectRootProps extends ComponentPropsWithRef<typeof SelectPrimitive>, SelectVariants {}

const SelectRoot = ({ className, size, ...rest }: SelectRootProps) => {
  const styles = selectVariants({ size })

  return (
    <SelectPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="select"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Select Trigger
 * -----------------------------------------------------------------------------------------------*/
interface SelectTriggerProps extends ComponentPropsWithRef<typeof ButtonPrimitive> {}

const SelectTrigger = ({ className, children, ...rest }: SelectTriggerProps) => {
  return (
    <ButtonPrimitive
      className={(renderProps) =>
        cx('select__trigger', typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="select-trigger"
      {...rest}
    >
      {children ?? (
        <>
          <SelectValuePrimitive className="select__value" />
          <span className="select__icon" aria-hidden="true">&#8250;</span>
        </>
      )}
    </ButtonPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Select Popover
 * -----------------------------------------------------------------------------------------------*/
interface SelectPopoverProps extends ComponentPropsWithRef<typeof PopoverPrimitive> {}

const SelectPopover = ({ className, children, ...rest }: SelectPopoverProps) => {
  return (
    <PopoverPrimitive
      className={(renderProps) =>
        cx('select__popover', typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="select-popover"
      {...rest}
    >
      {children}
    </PopoverPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Select Listbox
 * -----------------------------------------------------------------------------------------------*/
interface SelectListboxProps extends ComponentPropsWithRef<typeof ListBoxPrimitive> {}

const SelectListbox = ({ className, ...rest }: SelectListboxProps) => {
  return (
    <ListBoxPrimitive
      className={(renderProps) =>
        cx('select__listbox', typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="select-listbox"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Select Option
 * -----------------------------------------------------------------------------------------------*/
interface SelectOptionProps extends ComponentPropsWithRef<typeof ListBoxItemPrimitive> {}

const SelectOption = ({ className, ...rest }: SelectOptionProps) => {
  return (
    <ListBoxItemPrimitive
      className={(renderProps) =>
        cx('select__option', typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="select-option"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { SelectRoot, SelectTrigger, SelectPopover, SelectListbox, SelectOption }
export type { SelectRootProps, SelectTriggerProps, SelectPopoverProps, SelectListboxProps, SelectOptionProps }
