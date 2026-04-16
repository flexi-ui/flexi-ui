import type { ComponentProps } from 'react'

import { TooltipContent, TooltipTrigger } from './tooltip'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Tooltip = Object.assign(TooltipTrigger, {
  Trigger: TooltipTrigger,
  Content: TooltipContent,
})

export type Tooltip = {
  Props: ComponentProps<typeof TooltipTrigger>
  TriggerProps: ComponentProps<typeof TooltipTrigger>
  ContentProps: ComponentProps<typeof TooltipContent>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { TooltipTrigger, TooltipContent }
export type {
  TooltipTriggerProps,
  TooltipTriggerProps as TooltipProps,
  TooltipContentProps,
} from './tooltip'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { tooltipVariants } from '@flexi-ui/styles'
export type { TooltipVariants } from '@flexi-ui/styles'
