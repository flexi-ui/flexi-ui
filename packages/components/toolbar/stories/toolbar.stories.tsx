import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@flexi-ui/button'

import { Toolbar } from '../src/main'

const meta: Meta<typeof Toolbar> = {
  title: 'Components/Toolbar',
  component: Toolbar,
}

export default meta
type Story = StoryObj<typeof Toolbar>

export const Default: Story = {
  render: () => (
    <Toolbar>
      <Toolbar.Group>
        <Button size="sm">Cut</Button>
        <Button size="sm">Copy</Button>
        <Button size="sm">Paste</Button>
      </Toolbar.Group>
      <Toolbar.Separator />
      <Toolbar.Group>
        <Button size="sm">Undo</Button>
        <Button size="sm">Redo</Button>
      </Toolbar.Group>
    </Toolbar>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Toolbar orientation="vertical">
      <Toolbar.Group>
        <Button size="sm">Cut</Button>
        <Button size="sm">Copy</Button>
      </Toolbar.Group>
      <Toolbar.Separator />
      <Toolbar.Group>
        <Button size="sm">Undo</Button>
      </Toolbar.Group>
    </Toolbar>
  ),
}
