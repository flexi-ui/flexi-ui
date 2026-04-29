'use client'

import { ListBox } from '@flexi-ui/list-box'

export default function Demo() {
  return (
    <ListBox aria-label="Switch project" className="w-full max-w-sm">
      <ListBox.Section>
        <ListBox.Header>Recent</ListBox.Header>
        <ListBox.Item id="api">api-server</ListBox.Item>
        <ListBox.Item id="docs">docs-site</ListBox.Item>
      </ListBox.Section>
      <ListBox.Section>
        <ListBox.Header>Archived</ListBox.Header>
        <ListBox.Item id="legacy">legacy-admin</ListBox.Item>
        <ListBox.Item id="proto">prototype-2024</ListBox.Item>
      </ListBox.Section>
    </ListBox>
  )
}
