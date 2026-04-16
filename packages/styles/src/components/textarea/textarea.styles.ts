import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const textareaVariants = tv({
  base: 'textarea',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'textarea--sm',
      md: 'textarea--md',
      lg: 'textarea--lg',
    },
  },
})

export type TextareaVariants = VariantProps<typeof textareaVariants>
