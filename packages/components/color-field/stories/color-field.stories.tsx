import type { Meta, StoryObj } from '@storybook/react'

import { ColorField } from '../src/main'

const meta: Meta<typeof ColorField> = {
  title: 'Components/ColorField',
  component: ColorField,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    label: 'Color',
    size: 'md',
  },
}

export default meta
type Story = StoryObj<typeof ColorField>

export const Default: Story = {}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: '#7f007f',
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
    defaultValue: '#444',
  },
}
