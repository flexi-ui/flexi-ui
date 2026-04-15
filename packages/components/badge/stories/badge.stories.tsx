import type { Meta, StoryObj } from '@storybook/react'

import { Badge } from '../src/main'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'flat', 'bordered', 'dot'],
    },
    color: {
      control: 'select',
      options: ['default', 'accent', 'success', 'warning', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    variant: 'solid',
    color: 'default',
    size: 'md',
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  render: (args) => <Badge {...args}>Badge</Badge>,
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {(['solid', 'flat', 'bordered', 'dot'] as const).map((variant) => (
        <Badge key={variant} variant={variant} color="accent">
          {variant}
        </Badge>
      ))}
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {(['default', 'accent', 'success', 'warning', 'danger'] as const).map((color) => (
        <Badge key={color} color={color}>
          {color}
        </Badge>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Badge key={size} size={size} color="accent">
          {size}
        </Badge>
      ))}
    </div>
  ),
}
