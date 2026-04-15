import type { Meta, StoryObj } from '@storybook/react'

import { Skeleton } from '../src/main'

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  argTypes: {
    isLoaded: {
      control: 'boolean',
    },
  },
  args: {
    isLoaded: false,
  },
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4" style={{ width: 300 }}>
      <Skeleton {...args} style={{ height: 16, borderRadius: 8 }} />
      <Skeleton {...args} style={{ height: 16, width: '80%', borderRadius: 8 }} />
      <Skeleton {...args} style={{ height: 16, width: '60%', borderRadius: 8 }} />
    </div>
  ),
}

export const Loaded: Story = {
  args: {
    isLoaded: true,
  },
  render: (args) => (
    <Skeleton {...args}>
      <p>Content is now visible when loaded.</p>
    </Skeleton>
  ),
}

export const Card: Story = {
  render: (args) => (
    <div className="flex flex-col gap-3" style={{ width: 300 }}>
      <Skeleton {...args} style={{ height: 200, borderRadius: 12 }} />
      <Skeleton {...args} style={{ height: 16, borderRadius: 8 }} />
      <Skeleton {...args} style={{ height: 16, width: '70%', borderRadius: 8 }} />
    </div>
  ),
}
