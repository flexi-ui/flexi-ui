'use client'

import { Button } from '@flexi-ui/button'
import { Dropdown } from '@flexi-ui/dropdown'

export default function Demo() {
  return (
    <Dropdown>
      <Button variant="bordered">File</Button>
      <Dropdown.Menu>
        <Dropdown.Section>
          <Dropdown.Item id="new">New file</Dropdown.Item>
          <Dropdown.Item id="copy">Copy link</Dropdown.Item>
        </Dropdown.Section>
        <Dropdown.Separator />
        <Dropdown.Section>
          <Dropdown.Item id="rename">Rename</Dropdown.Item>
          <Dropdown.Item id="archive" color="danger">
            Archive
          </Dropdown.Item>
        </Dropdown.Section>
      </Dropdown.Menu>
    </Dropdown>
  )
}
