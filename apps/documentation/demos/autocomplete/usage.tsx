'use client'

import { Autocomplete } from '@flexi-ui/autocomplete'
import { Menu } from '@flexi-ui/menu'
import { SearchField } from '@flexi-ui/search-field'

export default function Demo() {
  return (
    <div className="w-full max-w-sm">
      <Autocomplete>
        <SearchField label="Search" placeholder="Type to filter…" />
        <Menu>
          <Menu.Item id="alpha">Alpha</Menu.Item>
          <Menu.Item id="bravo">Bravo</Menu.Item>
          <Menu.Item id="charlie">Charlie</Menu.Item>
          <Menu.Item id="delta">Delta</Menu.Item>
          <Menu.Item id="echo">Echo</Menu.Item>
        </Menu>
      </Autocomplete>
    </div>
  )
}
