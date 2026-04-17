import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@flexi-ui/button'

import { Menu } from '../src/main'

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
}

export default meta
type Story = StoryObj<typeof Menu>

export const Default: Story = {
  render: () => (
    <Menu.Trigger>
      <Button>Actions</Button>
      <Menu.Popover>
        <Menu>
          <Menu.Item>Edit</Menu.Item>
          <Menu.Item>Duplicate</Menu.Item>
          <Menu.Separator />
          <Menu.Item>Delete</Menu.Item>
        </Menu>
      </Menu.Popover>
    </Menu.Trigger>
  ),
}

export const WithSections: Story = {
  render: () => (
    <Menu.Trigger>
      <Button>Options</Button>
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
            <Menu.Item>Zoom In</Menu.Item>
            <Menu.Item>Zoom Out</Menu.Item>
          </Menu.Section>
        </Menu>
      </Menu.Popover>
    </Menu.Trigger>
  ),
}

export const DisabledItems: Story = {
  render: () => (
    <Menu.Trigger>
      <Button>Actions</Button>
      <Menu.Popover>
        <Menu disabledKeys={['delete']}>
          <Menu.Item id="edit">Edit</Menu.Item>
          <Menu.Item id="duplicate">Duplicate</Menu.Item>
          <Menu.Item id="delete">Delete</Menu.Item>
        </Menu>
      </Menu.Popover>
    </Menu.Trigger>
  ),
}
