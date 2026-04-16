import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const dropdownVariants = tv({
  base: 'dropdown',
})

export const dropdownItemVariants = tv({
  base: 'dropdown__item',
  defaultVariants: {
    color: 'default',
  },
  variants: {
    color: {
      default: '',
      danger: 'dropdown__item--danger',
    },
  },
})

export type DropdownVariants = VariantProps<typeof dropdownVariants>
export type DropdownItemVariants = VariantProps<typeof dropdownItemVariants>
