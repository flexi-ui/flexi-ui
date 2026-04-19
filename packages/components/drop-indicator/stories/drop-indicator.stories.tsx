import type { Meta, StoryObj } from '@storybook/react'

import { DropIndicator } from '../src/main'

const meta: Meta<typeof DropIndicator> = {
  title: 'Components/DropIndicator',
  component: DropIndicator,
}

export default meta
type Story = StoryObj<typeof DropIndicator>

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-64">
      <div className="drop-indicator p-3 rounded border" data-drop-target="true">
        Active drop target (outline)
      </div>
      <div className="drop-indicator p-3 rounded border">Inactive drop target</div>
    </div>
  ),
}

export const Between: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-64">
      <div className="p-3 rounded border">Item 1</div>
      <div className="drop-indicator drop-indicator--between" data-drop-target="true" />
      <div className="p-3 rounded border">Item 2</div>
      <div className="drop-indicator drop-indicator--between" />
      <div className="p-3 rounded border">Item 3</div>
    </div>
  ),
}
