import type { ComponentProps } from 'react'

import { Tab, TabPanel, TabsList, TabsRoot } from './tabs'

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Tabs = Object.assign(TabsRoot, {
  Root: TabsRoot,
  List: TabsList,
  Tab,
  Panel: TabPanel,
})

export type Tabs = {
  Props: ComponentProps<typeof TabsRoot>
  RootProps: ComponentProps<typeof TabsRoot>
  ListProps: ComponentProps<typeof TabsList>
  TabProps: ComponentProps<typeof Tab>
  PanelProps: ComponentProps<typeof TabPanel>
}

/* -------------------------------------------------------------------------------------------------
 * Named Exports
 * -----------------------------------------------------------------------------------------------*/
export { TabsRoot, TabsList, Tab, TabPanel }
export type {
  TabsRootProps,
  TabsRootProps as TabsProps,
  TabsListProps,
  TabProps,
  TabPanelProps,
} from './tabs'

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export { tabsVariants } from '@flexi-ui/styles'
export type { TabsVariants } from '@flexi-ui/styles'
