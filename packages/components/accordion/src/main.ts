import type { ComponentProps } from 'react'

import { AccordionItem, AccordionPanel, AccordionRoot, AccordionTrigger } from './accordion'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Accordion = Object.assign(AccordionRoot, {
  Root: AccordionRoot,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Panel: AccordionPanel,
})

export type Accordion = {
  Props: ComponentProps<typeof AccordionRoot>
  RootProps: ComponentProps<typeof AccordionRoot>
  ItemProps: ComponentProps<typeof AccordionItem>
  TriggerProps: ComponentProps<typeof AccordionTrigger>
  PanelProps: ComponentProps<typeof AccordionPanel>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { AccordionRoot, AccordionItem, AccordionTrigger, AccordionPanel }
export type {
  AccordionRootProps,
  AccordionRootProps as AccordionProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionPanelProps,
} from './accordion'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { accordionVariants } from '@flexi-ui/styles'
export type { AccordionVariants } from '@flexi-ui/styles'
