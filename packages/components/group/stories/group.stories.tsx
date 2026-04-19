import type { Meta, StoryObj } from '@storybook/react'

import { Button, Input, Label, TextField } from 'react-aria-components'

import { Group } from '../src/main'

const meta: Meta<typeof Group> = {
  title: 'Components/Group',
  component: Group,
}

export default meta
type Story = StoryObj<typeof Group>

export const Default: Story = {
  render: () => (
    <Group aria-label="Volume controls">
      <Button className="rounded border px-3 py-1">-</Button>
      <span>50</span>
      <Button className="rounded border px-3 py-1">+</Button>
    </Group>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Group aria-label="Actions" orientation="vertical" className="w-40">
      <Button className="rounded border px-3 py-1">Save</Button>
      <Button className="rounded border px-3 py-1">Duplicate</Button>
      <Button className="rounded border px-3 py-1">Delete</Button>
    </Group>
  ),
}

export const WithTextField: Story = {
  render: () => (
    <TextField>
      <Label className="mb-1 block text-sm">Search</Label>
      <Group>
        <Input className="rounded border px-2 py-1" placeholder="Type here" />
        <Button className="rounded border px-3 py-1">Go</Button>
      </Group>
    </TextField>
  ),
}
