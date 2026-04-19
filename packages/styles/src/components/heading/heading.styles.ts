import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const headingVariants = tv({
  base: 'heading',
  defaultVariants: {
    level: 'h2',
  },
  variants: {
    level: {
      h1: 'heading--h1',
      h2: 'heading--h2',
      h3: 'heading--h3',
      h4: 'heading--h4',
      h5: 'heading--h5',
      h6: 'heading--h6',
    },
  },
})

export type HeadingVariants = VariantProps<typeof headingVariants>
