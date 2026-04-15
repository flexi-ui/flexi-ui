import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const modalOverlayVariants = tv({
  base: 'modal-overlay',
})

export const modalVariants = tv({
  base: 'modal',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'modal--sm',
      md: 'modal--md',
      lg: 'modal--lg',
      xl: 'modal--xl',
      full: 'modal--full',
    },
    scrollBehavior: {
      inside: 'modal--scroll-inside',
      outside: '',
    },
  },
})

export type ModalOverlayVariants = VariantProps<typeof modalOverlayVariants>
export type ModalVariants = VariantProps<typeof modalVariants>
