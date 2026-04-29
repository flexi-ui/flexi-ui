'use client'

import { Autocomplete } from '@flexi-ui/autocomplete'
import { Menu } from '@flexi-ui/menu'
import { SearchField } from '@flexi-ui/search-field'

export default function Demo() {
  return (
    <div className="w-full max-w-sm">
      <Autocomplete>
        <SearchField label="Quick switcher" placeholder="Search projects, people…" />
        <Menu>
          <Menu.Section>
            <Menu.Header>Projects</Menu.Header>
            <Menu.Item id="api">api-server</Menu.Item>
            <Menu.Item id="docs">docs-site</Menu.Item>
            <Menu.Item id="mobile">mobile-app</Menu.Item>
          </Menu.Section>
          <Menu.Separator />
          <Menu.Section>
            <Menu.Header>People</Menu.Header>
            <Menu.Item id="alex">Alex Morgan</Menu.Item>
            <Menu.Item id="jamie">Jamie Lee</Menu.Item>
          </Menu.Section>
        </Menu>
      </Autocomplete>
    </div>
  )
}
