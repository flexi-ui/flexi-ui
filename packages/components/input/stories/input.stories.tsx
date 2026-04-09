import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '../src/main'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['flat', 'bordered', 'underlined'],
    },
    fullWidth: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    isInvalid: {
      control: 'boolean',
    },
  },
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    size: 'md',
    variant: 'flat',
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input label="Flat" placeholder="Flat input" variant="flat" />
      <Input label="Bordered" placeholder="Bordered input" variant="bordered" />
      <Input label="Underlined" placeholder="Underlined input" variant="underlined" />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input label="Small" placeholder="Small input" size="sm" />
      <Input label="Medium" placeholder="Medium input" size="md" />
      <Input label="Large" placeholder="Large input" size="lg" />
    </div>
  ),
}

export const WithDescription: Story = {
  args: {
    description: "We'll never share your email.",
  },
}

export const WithError: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Please enter a valid email address.',
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}
