import type { Meta, StoryObj } from '@storybook/react'

import { ColorSwatch } from '../src/main'

const meta: Meta<typeof ColorSwatch> = {
  title: 'Components/ColorSwatch',
  component: ColorSwatch,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    size: 'md',
    color: '#0ea5e9',
  },
}

export default meta
type Story = StoryObj<typeof ColorSwatch>

export const Default: Story = {}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <ColorSwatch key={size} color="#f59e0b" size={size} />
      ))}
    </div>
  ),
}

export const Palette: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'].map((color) => (
        <ColorSwatch key={color} color={color} />
      ))}
    </div>
  ),
}
