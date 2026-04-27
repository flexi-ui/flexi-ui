'use client'

import { Tabs } from '@flexi-ui/tabs'

export default function Demo() {
  return (
    <Tabs className="w-full max-w-md" defaultSelectedKey="active">
      <Tabs.List>
        <Tabs.Tab id="active">Active</Tabs.Tab>
        <Tabs.Tab id="archived">Archived</Tabs.Tab>
        <Tabs.Tab id="locked" isDisabled>
          Locked
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  )
}
