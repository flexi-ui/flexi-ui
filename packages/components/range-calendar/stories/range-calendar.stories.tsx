import type { Meta, StoryObj } from '@storybook/react'

import { RangeCalendar } from '../src/main'

const meta: Meta<typeof RangeCalendar> = {
  title: 'Components/RangeCalendar',
  component: RangeCalendar,
}

export default meta
type Story = StoryObj<typeof RangeCalendar>

export const Default: Story = {
  render: () => <RangeCalendar aria-label="Trip dates" />,
}
