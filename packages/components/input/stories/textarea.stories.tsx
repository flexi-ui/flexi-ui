import type { Meta, StoryObj } from '@storybook/react'

import { TextArea } from '../src/main'

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['flat', 'bordered', 'underlined'],
    },
    isDisabled: {
      control: 'boolean',
    },
  },
  args: {
    label: 'Comment',
    placeholder: 'Enter your comment',
    size: 'md',
  },
}

export default meta
type Story = StoryObj<typeof TextArea>

export const Default: Story = {}

export const WithDescription: Story = {
  args: {
    description: 'Max 500 characters.',
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}
