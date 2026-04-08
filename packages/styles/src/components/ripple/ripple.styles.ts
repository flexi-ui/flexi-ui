import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const rippleVariants = tv({
  base: 'ripple',
})

export type RippleVariants = VariantProps<typeof rippleVariants>
