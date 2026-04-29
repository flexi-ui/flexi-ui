'use client'

import { Button } from '@flexi-ui/button'
import { Menu } from '@flexi-ui/menu'

export default function Demo() {
  return (
    <Menu.Trigger>
      <Button variant="bordered">Actions</Button>
      <Menu.Popover>
        <Menu disabledKeys={['delete']}>
          <Menu.Item id="edit">Edit</Menu.Item>
          <Menu.Item id="duplicate">Duplicate</Menu.Item>
          <Menu.Item id="delete">Delete</Menu.Item>
        </Menu>
      </Menu.Popover>
    </Menu.Trigger>
  )
}
