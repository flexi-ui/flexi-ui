import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const keyboardVariants = tv({
  base: 'keyboard',
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: 'keyboard--sm',
      md: 'keyboard--md',
      lg: 'keyboard--lg',
    },
  },
})

export type KeyboardVariants = VariantProps<typeof keyboardVariants>
