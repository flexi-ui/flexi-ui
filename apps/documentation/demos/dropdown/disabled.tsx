'use client'

import { Button } from '@flexi-ui/button'
import { Dropdown } from '@flexi-ui/dropdown'

export default function Demo() {
  return (
    <Dropdown>
      <Button variant="bordered">Actions</Button>
      <Dropdown.Menu>
        <Dropdown.Item id="edit">Edit</Dropdown.Item>
        <Dropdown.Item id="duplicate">Duplicate</Dropdown.Item>
        <Dropdown.Item id="archive" isDisabled>
          Archive (locked)
        </Dropdown.Item>
        <Dropdown.Item id="delete" color="danger">
          Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
