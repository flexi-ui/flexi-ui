import type { Meta, StoryObj } from '@storybook/react'

import { ColorSwatchPicker } from '../src/main'

const meta: Meta<typeof ColorSwatchPicker> = {
  title: 'Components/ColorSwatchPicker',
  component: ColorSwatchPicker,
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
type Story = StoryObj<typeof ColorSwatchPicker>

const PALETTE = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899']

export const Default: Story = {
  render: (args) => (
    <ColorSwatchPicker aria-label="Color palette" defaultValue={PALETTE[0]} {...args}>
      {PALETTE.map((color) => (
        <ColorSwatchPicker.Item key={color} color={color} />
      ))}
    </ColorSwatchPicker>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <ColorSwatchPicker key={size} aria-label={size} defaultValue={PALETTE[0]} size={size}>
          {PALETTE.map((color) => (
            <ColorSwatchPicker.Item key={color} color={color} />
          ))}
        </ColorSwatchPicker>
      ))}
    </div>
  ),
}
