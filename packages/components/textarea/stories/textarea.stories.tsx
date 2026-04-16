import type { Meta, StoryObj } from '@storybook/react'

import { Textarea } from '../src/main'

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    label: 'Comment',
    placeholder: 'Enter your comment',
    size: 'md',
  },
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {}

export const WithDescription: Story = {
  args: {
    description: 'Max 500 characters.',
  },
}

export const WithError: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'This field is required.',
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Textarea key={size} label={size} placeholder={`Size: ${size}`} size={size} />
      ))}
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
