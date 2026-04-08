import type { ComponentProps } from 'react'

import { FormRoot } from './form'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Form = Object.assign(FormRoot, {
  Root: FormRoot,
})

export type Form = {
  Props: ComponentProps<typeof FormRoot>
  RootProps: ComponentProps<typeof FormRoot>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { FormRoot }
export type { FormRootProps, FormRootProps as FormProps } from './form'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { formVariants } from '@flexi-ui/styles'
export type { FormVariants } from '@flexi-ui/styles'
