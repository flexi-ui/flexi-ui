import type { Meta, StoryObj } from '@storybook/react'

import { DatePicker } from '../src/main'

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  args: {
    label: 'Date',
  },
}

export default meta
type Story = StoryObj<typeof DatePicker>

export const Default: Story = {}

export const WithLabel: Story = {
  args: {
    label: 'Appointment date',
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}
