import type { ComponentProps } from 'react'

import {
  DisclosureGroupRoot,
  DisclosurePanel,
  DisclosureRoot,
  DisclosureTrigger,
} from './disclosure'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Disclosure = Object.assign(DisclosureRoot, {
  Root: DisclosureRoot,
  Group: DisclosureGroupRoot,
  Trigger: DisclosureTrigger,
  Panel: DisclosurePanel,
})

export type Disclosure = {
  Props: ComponentProps<typeof DisclosureRoot>
  RootProps: ComponentProps<typeof DisclosureRoot>
  GroupProps: ComponentProps<typeof DisclosureGroupRoot>
  TriggerProps: ComponentProps<typeof DisclosureTrigger>
  PanelProps: ComponentProps<typeof DisclosurePanel>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { DisclosureGroupRoot, DisclosureRoot, DisclosureTrigger, DisclosurePanel }
export type {
  DisclosureGroupRootProps,
  DisclosureRootProps,
  DisclosureRootProps as DisclosureProps,
  DisclosureTriggerProps,
  DisclosurePanelProps,
} from './disclosure'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { disclosureGroupVariants, disclosureVariants } from '@flexi-ui/styles'
export type { DisclosureGroupVariants, DisclosureVariants } from '@flexi-ui/styles'
