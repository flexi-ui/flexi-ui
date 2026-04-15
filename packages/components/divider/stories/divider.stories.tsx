import type { Meta, StoryObj } from '@storybook/react'

import { Divider } from '../src/main'

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
  args: {
    orientation: 'horizontal',
  },
}

export default meta
type Story = StoryObj<typeof Divider>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 400 }}>
      <p>Content above</p>
      <Divider {...args} />
      <p>Content below</p>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center gap-4" style={{ height: 40 }}>
      <span>Left</span>
      <Divider orientation="vertical" />
      <span>Right</span>
    </div>
  ),
}
