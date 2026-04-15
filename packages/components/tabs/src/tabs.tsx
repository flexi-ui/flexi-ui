'use client'

import type { TabsVariants } from '@flexi-ui/styles'
import type { ComponentPropsWithRef } from 'react'

import { tabsVariants } from '@flexi-ui/styles'
import {
  Tab as TabPrimitive,
  TabList as TabListPrimitive,
  TabPanel as TabPanelPrimitive,
  Tabs as TabsPrimitive,
} from 'react-aria-components'
import { cx } from 'tailwind-variants'

/* -------------------------------------------------------------------------------------------------
 * Tabs Root
 * -----------------------------------------------------------------------------------------------*/
interface TabsRootProps extends ComponentPropsWithRef<typeof TabsPrimitive>, TabsVariants {}

const TabsRoot = ({
  children,
  className,
  size,
  variant,
  ...rest
}: TabsRootProps) => {
  const styles = tabsVariants({ size, variant })

  return (
    <TabsPrimitive
      className={(renderProps) =>
        cx(styles, typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="tabs"
      {...rest}
    >
      {children}
    </TabsPrimitive>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Tabs List
 * -----------------------------------------------------------------------------------------------*/
interface TabsListProps extends ComponentPropsWithRef<typeof TabListPrimitive> {}

const TabsList = ({ className, ...rest }: TabsListProps) => {
  return (
    <TabListPrimitive
      className={(renderProps) =>
        cx('tabs__list', typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="tabs-list"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Tab
 * -----------------------------------------------------------------------------------------------*/
interface TabProps extends ComponentPropsWithRef<typeof TabPrimitive> {}

const Tab = ({ className, ...rest }: TabProps) => {
  return (
    <TabPrimitive
      className={(renderProps) =>
        cx('tabs__tab', typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="tab"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Tab Panel
 * -----------------------------------------------------------------------------------------------*/
interface TabPanelProps extends ComponentPropsWithRef<typeof TabPanelPrimitive> {}

const TabPanel = ({ className, ...rest }: TabPanelProps) => {
  return (
    <TabPanelPrimitive
      className={(renderProps) =>
        cx('tabs__panel', typeof className === 'function' ? className(renderProps) : className) ?? ''
      }
      data-slot="tab-panel"
      {...rest}
    />
  )
}

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export { TabsRoot, TabsList, Tab, TabPanel }
export type { TabsRootProps, TabsListProps, TabProps, TabPanelProps }
