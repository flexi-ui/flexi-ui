import type { Meta, StoryObj } from '@storybook/react'

import { Button } from 'react-aria-components'

import { Dropdown } from '../src/main'

const meta: Meta = {
  title: 'Components/Dropdown',
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Dropdown>
      <Button>Open Menu</Button>
      <Dropdown.Menu>
        <Dropdown.Item id="edit">Edit</Dropdown.Item>
        <Dropdown.Item id="duplicate">Duplicate</Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item id="delete" color="danger">Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ),
}

export const WithSections: Story = {
  render: () => (
    <Dropdown>
      <Button>Actions</Button>
      <Dropdown.Menu>
        <Dropdown.Section>
          <Dropdown.Item id="new">New file</Dropdown.Item>
          <Dropdown.Item id="copy">Copy link</Dropdown.Item>
        </Dropdown.Section>
        <Dropdown.Separator />
        <Dropdown.Section>
          <Dropdown.Item id="edit">Edit</Dropdown.Item>
          <Dropdown.Item id="delete" color="danger">Delete</Dropdown.Item>
        </Dropdown.Section>
      </Dropdown.Menu>
    </Dropdown>
  ),
}
