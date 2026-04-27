'use client'

import { Button } from '@flexi-ui/button'
import { Menu } from '@flexi-ui/menu'

export default function Demo() {
  return (
    <Menu.Trigger>
      <Button variant="bordered">Actions</Button>
      <Menu.Popover>
        <Menu>
          <Menu.Item>Edit</Menu.Item>
          <Menu.Item>Duplicate</Menu.Item>
          <Menu.Separator />
          <Menu.Item>Delete</Menu.Item>
        </Menu>
      </Menu.Popover>
    </Menu.Trigger>
  )
}
