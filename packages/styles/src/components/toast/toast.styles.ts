import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const toastRegionVariants = tv({
  base: 'toast-region',
  defaultVariants: {
    position: 'bottom-right',
  },
  variants: {
    position: {
      'top-right': 'toast-region--top-right',
      'top-left': 'toast-region--top-left',
      'bottom-left': 'toast-region--bottom-left',
      'bottom-right': 'toast-region--bottom-right',
    },
  },
})

export const toastVariants = tv({
  base: 'toast',
  defaultVariants: {
    tone: 'info',
  },
  variants: {
    tone: {
      info: 'toast--info',
      success: 'toast--success',
      warning: 'toast--warning',
      danger: 'toast--danger',
    },
  },
})

export type ToastRegionVariants = VariantProps<typeof toastRegionVariants>
export type ToastVariants = VariantProps<typeof toastVariants>
