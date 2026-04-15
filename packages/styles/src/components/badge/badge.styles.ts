import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

export const badgeVariants = tv({
  base: 'badge',
  defaultVariants: {
    size: 'md',
    variant: 'solid',
    color: 'default',
  },
  variants: {
    size: {
      sm: 'badge--sm',
      md: 'badge--md',
      lg: 'badge--lg',
    },
    variant: {
      solid: '',
      flat: '',
      bordered: '',
      dot: 'badge--dot',
    },
    color: {
      default: '',
      accent: '',
      success: '',
      warning: '',
      danger: '',
    },
  },
  compoundVariants: [
    // Solid
    { variant: 'solid', color: 'default', className: 'badge--default' },
    { variant: 'solid', color: 'accent', className: 'badge--accent' },
    { variant: 'solid', color: 'success', className: 'badge--success' },
    { variant: 'solid', color: 'warning', className: 'badge--warning' },
    { variant: 'solid', color: 'danger', className: 'badge--danger' },
    // Flat
    { variant: 'flat', color: 'default', className: 'badge--flat-default' },
    { variant: 'flat', color: 'accent', className: 'badge--flat-accent' },
    { variant: 'flat', color: 'success', className: 'badge--flat-success' },
    { variant: 'flat', color: 'warning', className: 'badge--flat-warning' },
    { variant: 'flat', color: 'danger', className: 'badge--flat-danger' },
    // Bordered
    { variant: 'bordered', color: 'default', className: 'badge--bordered-default' },
    { variant: 'bordered', color: 'accent', className: 'badge--bordered-accent' },
    { variant: 'bordered', color: 'success', className: 'badge--bordered-success' },
    { variant: 'bordered', color: 'warning', className: 'badge--bordered-warning' },
    { variant: 'bordered', color: 'danger', className: 'badge--bordered-danger' },
    // Dot (uses solid colors for the dot itself)
    { variant: 'dot', color: 'default', className: 'badge--flat-default' },
    { variant: 'dot', color: 'accent', className: 'badge--flat-accent' },
    { variant: 'dot', color: 'success', className: 'badge--flat-success' },
    { variant: 'dot', color: 'warning', className: 'badge--flat-warning' },
    { variant: 'dot', color: 'danger', className: 'badge--flat-danger' },
  ],
})

export type BadgeVariants = VariantProps<typeof badgeVariants>
