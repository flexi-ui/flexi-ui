import type { ComponentProps } from 'react'

import { PopoverContent, PopoverTrigger } from './popover'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Popover = Object.assign(PopoverTrigger, {
  Trigger: PopoverTrigger,
  Content: PopoverContent,
})

export type Popover = {
  Props: ComponentProps<typeof PopoverTrigger>
  TriggerProps: ComponentProps<typeof PopoverTrigger>
  ContentProps: ComponentProps<typeof PopoverContent>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { PopoverTrigger, PopoverContent }
export type {
  PopoverTriggerProps,
  PopoverTriggerProps as PopoverProps,
  PopoverContentProps,
} from './popover'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { popoverVariants } from '@flexi-ui/styles'
export type { PopoverVariants } from '@flexi-ui/styles'
