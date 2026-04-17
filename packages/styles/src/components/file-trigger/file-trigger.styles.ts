import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const fileTriggerVariants = tv({
  base: 'file-trigger',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'file-trigger--sm',
      md: 'file-trigger--md',
      lg: 'file-trigger--lg',
    },
  },
})

export type FileTriggerVariants = VariantProps<typeof fileTriggerVariants>
