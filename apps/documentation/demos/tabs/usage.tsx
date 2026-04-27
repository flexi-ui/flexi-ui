'use client'

import { Tabs } from '@flexi-ui/tabs'

export default function Demo() {
  return (
    <Tabs className="w-full max-w-md">
      <Tabs.List>
        <Tabs.Tab id="overview">Overview</Tabs.Tab>
        <Tabs.Tab id="activity">Activity</Tabs.Tab>
        <Tabs.Tab id="settings">Settings</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel id="overview">
        <p className="text-sm text-muted-foreground">
          A summary of recent activity, alerts, and metrics.
        </p>
      </Tabs.Panel>
      <Tabs.Panel id="activity">
        <p className="text-sm text-muted-foreground">
          A timeline of changes across your workspace.
        </p>
      </Tabs.Panel>
      <Tabs.Panel id="settings">
        <p className="text-sm text-muted-foreground">
          Configure preferences, integrations, and security.
        </p>
      </Tabs.Panel>
    </Tabs>
  )
}
