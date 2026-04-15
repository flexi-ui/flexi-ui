import type { Meta, StoryObj } from '@storybook/react'

import { Button } from 'react-aria-components'

import { Tooltip } from '../src/main'

const meta: Meta = {
  title: 'Components/Tooltip',
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Tooltip>
      <Button>Hover me</Button>
      <Tooltip.Content>This is a tooltip</Tooltip.Content>
    </Tooltip>
  ),
}

export const WithArrow: Story = {
  render: () => (
    <Tooltip>
      <Button>With arrow</Button>
      <Tooltip.Content showArrow>Tooltip with arrow</Tooltip.Content>
    </Tooltip>
  ),
}

export const Placements: Story = {
  render: () => (
    <div className="flex gap-8 p-12">
      {(['top', 'bottom', 'left', 'right'] as const).map((placement) => (
        <Tooltip key={placement}>
          <Button className="capitalize">{placement}</Button>
          <Tooltip.Content placement={placement}>{placement} tooltip</Tooltip.Content>
        </Tooltip>
      ))}
    </div>
  ),
}
