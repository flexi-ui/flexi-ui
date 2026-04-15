import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const popoverVariants = tv({
  base: 'popover',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'popover--sm',
      md: 'popover--md',
      lg: 'popover--lg',
    },
  },
})

export type PopoverVariants = VariantProps<typeof popoverVariants>
