import type { Meta, StoryObj } from '@storybook/react'

import { DropZone } from '../src/main'

const meta: Meta<typeof DropZone> = {
  title: 'Components/DropZone',
  component: DropZone,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    size: 'md',
  },
}

export default meta
type Story = StoryObj<typeof DropZone>

export const Default: Story = {
  render: (args) => <DropZone {...args}>Drop files here</DropZone>,
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <DropZone key={size} size={size}>
          {size.toUpperCase()} drop zone
        </DropZone>
      ))}
    </div>
  ),
}
