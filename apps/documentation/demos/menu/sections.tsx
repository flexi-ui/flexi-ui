'use client'

import { Button } from '@flexi-ui/button'
import { Menu } from '@flexi-ui/menu'

export default function Demo() {
  return (
    <Menu.Trigger>
      <Button variant="bordered">Options</Button>
      <Menu.Popover>
        <Menu>
          <Menu.Section>
            <Menu.Header>Edit</Menu.Header>
            <Menu.Item>Cut</Menu.Item>
            <Menu.Item>Copy</Menu.Item>
            <Menu.Item>Paste</Menu.Item>
          </Menu.Section>
          <Menu.Separator />
          <Menu.Section>
            <Menu.Header>View</Menu.Header>
            <Menu.Item>Zoom in</Menu.Item>
            <Menu.Item>Zoom out</Menu.Item>
          </Menu.Section>
        </Menu>
      </Menu.Popover>
    </Menu.Trigger>
  )
}
