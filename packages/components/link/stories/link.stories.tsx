import type { Meta, StoryObj } from '@storybook/react'

import { Link } from '../src/main'

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    color: {
      control: 'select',
      options: ['foreground', 'primary', 'secondary', 'success', 'warning', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    underline: {
      control: 'select',
      options: ['none', 'hover', 'always', 'active'],
    },
    isDisabled: {
      control: 'boolean',
    },
  },
  args: {
    children: '"First solve the problem. Then, write the code." - Jon Johnson.',
    color: 'primary',
    size: 'md',
    href: '#',
  },
}

export default meta
type Story = StoryObj<typeof Link>

export const Default: Story = {}

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Link href="#" color="foreground">Foreground</Link>
      <Link href="#" color="primary">Primary</Link>
      <Link href="#" color="secondary">Secondary</Link>
      <Link href="#" color="success">Success</Link>
      <Link href="#" color="warning">Warning</Link>
      <Link href="#" color="danger">Danger</Link>
    </div>
  ),
}

export const Underlines: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Link href="#" underline="none">None</Link>
      <Link href="#" underline="hover">Hover</Link>
      <Link href="#" underline="always">Always</Link>
      <Link href="#" underline="active">Active</Link>
    </div>
  ),
}

export const External: Story = {
  args: {
    isExternal: true,
    showAnchorIcon: true,
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}

export const Block: Story = {
  args: {
    isBlock: true,
    color: 'secondary',
  },
}
