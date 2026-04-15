import type { Meta, StoryObj } from '@storybook/react'

import { Button } from 'react-aria-components'

import { Popover } from '../src/main'

const meta: Meta = {
  title: 'Components/Popover',
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Popover>
      <Button>Open Popover</Button>
      <Popover.Content>
        <h3 className="mb-2 text-sm font-semibold">Popover Title</h3>
        <p className="text-sm text-muted">This is popover content.</p>
      </Popover.Content>
    </Popover>
  ),
}

export const WithArrow: Story = {
  render: () => (
    <Popover>
      <Button>With Arrow</Button>
      <Popover.Content showArrow>
        <h3 className="mb-2 text-sm font-semibold">Popover</h3>
        <p className="text-sm text-muted">This popover has an arrow.</p>
      </Popover.Content>
    </Popover>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Popover key={size}>
          <Button className="capitalize">{size}</Button>
          <Popover.Content size={size}>
            <h3 className="mb-2 text-sm font-semibold capitalize">{size} Popover</h3>
            <p className="text-sm text-muted">Content for the {size} popover.</p>
          </Popover.Content>
        </Popover>
      ))}
    </div>
  ),
}
