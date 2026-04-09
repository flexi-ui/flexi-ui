import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from '../src/main'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    isBordered: {
      control: 'boolean',
    },
  },
  args: {
    size: 'md',
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    alt: 'User avatar',
  },
}

export const WithInitials: Story = {
  args: {
    name: 'Muneeb Mughal',
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar size="md" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar size="lg" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar size="xl" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
    </div>
  ),
}

export const Bordered: Story = {
  args: {
    isBordered: true,
    src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  },
}

export const Fallback: Story = {
  args: {
    src: 'https://broken-link.example.com/avatar.png',
    fallback: <span>FB</span>,
  },
}
