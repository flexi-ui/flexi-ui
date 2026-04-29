'use client'

import { Tabs } from '@flexi-ui/tabs'

export default function Demo() {
  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs size="sm">
        <Tabs.List>
          <Tabs.Tab id="sm1">Small</Tabs.Tab>
          <Tabs.Tab id="sm2">Two</Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <Tabs size="md">
        <Tabs.List>
          <Tabs.Tab id="md1">Medium</Tabs.Tab>
          <Tabs.Tab id="md2">Two</Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <Tabs size="lg">
        <Tabs.List>
          <Tabs.Tab id="lg1">Large</Tabs.Tab>
          <Tabs.Tab id="lg2">Two</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </div>
  )
}
