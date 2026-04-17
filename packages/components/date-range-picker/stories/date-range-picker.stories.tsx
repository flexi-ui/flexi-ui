import type { Meta, StoryObj } from '@storybook/react'

import { DateRangePicker } from '../src/main'

const meta: Meta<typeof DateRangePicker> = {
  title: 'Components/DateRangePicker',
  component: DateRangePicker,
  args: {
    label: 'Date Range',
  },
}

export default meta
type Story = StoryObj<typeof DateRangePicker>

export const Default: Story = {}

export const WithLabel: Story = {
  args: {
    label: 'Trip dates',
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}
