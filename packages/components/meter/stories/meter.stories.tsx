import type { Meta, StoryObj } from '@storybook/react'

import { Meter } from '../src/main'

const meta: Meta<typeof Meter> = {
  title: 'Components/Meter',
  component: Meter,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['accent', 'success', 'warning', 'danger'],
    },
  },
  args: {
    label: 'Storage',
    value: 65,
    size: 'md',
    color: 'accent',
  },
}

export default meta
type Story = StoryObj<typeof Meter>

export const Default: Story = {}

export const Colors: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      {(['accent', 'success', 'warning', 'danger'] as const).map((color) => (
        <Meter key={color} color={color} label={color} value={65} />
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Meter key={size} label={size} size={size} value={50} />
      ))}
    </div>
  ),
}
