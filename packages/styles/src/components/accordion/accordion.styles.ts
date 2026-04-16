import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const accordionVariants = tv({
  base: 'accordion',
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    variant: {
      default: '',
      bordered: 'accordion--bordered',
      splitted: 'accordion--splitted',
    },
  },
})

export type AccordionVariants = VariantProps<typeof accordionVariants>
