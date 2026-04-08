'use client'

import type { FormVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { formVariants } from '@flexi-ui/styles'
import { Form as FormPrimitive } from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * Form Root
 * -----------------------------------------------------------------------------------------------*/
interface FormRootProps
  extends Omit<ComponentPropsWithRef<typeof FormPrimitive>, 'className'>,
    FormVariants {
  className?: string
}

const FormRoot = ({ children, className, fullWidth, ...rest }: FormRootProps) => {
  const styles = formVariants({ fullWidth })

  return (
    <FormPrimitive className={cx(styles, className) ?? undefined} data-slot="form" {...rest}>
      {children}
    </FormPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { FormRoot }
export type { FormRootProps }
