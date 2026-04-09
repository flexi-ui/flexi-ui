import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../src/main'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
        'ghost',
        'bordered',
        'flat',
        'shadow',
        'light',
      ],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    fullWidth: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    isIconOnly: {
      control: 'boolean',
    },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="bordered">Bordered</Button>
      <Button variant="flat">Flat</Button>
      <Button variant="shadow">Shadow</Button>
      <Button variant="light">Light</Button>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
}

export const IconOnly: Story = {
  args: {
    isIconOnly: true,
    children: '✕',
    'aria-label': 'Close',
  },
}
