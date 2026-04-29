'use client'

import { Tabs } from '@flexi-ui/tabs'

export default function Demo() {
  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs variant="underlined">
        <Tabs.List>
          <Tabs.Tab id="u1">Underlined</Tabs.Tab>
          <Tabs.Tab id="u2">Two</Tabs.Tab>
          <Tabs.Tab id="u3">Three</Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <Tabs variant="solid">
        <Tabs.List>
          <Tabs.Tab id="s1">Solid</Tabs.Tab>
          <Tabs.Tab id="s2">Two</Tabs.Tab>
          <Tabs.Tab id="s3">Three</Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <Tabs variant="bordered">
        <Tabs.List>
          <Tabs.Tab id="b1">Bordered</Tabs.Tab>
          <Tabs.Tab id="b2">Two</Tabs.Tab>
          <Tabs.Tab id="b3">Three</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </div>
  )
}
