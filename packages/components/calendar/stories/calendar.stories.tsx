import type { Meta, StoryObj } from '@storybook/react'

import { Calendar } from '../src/main'

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
}

export default meta
type Story = StoryObj<typeof Calendar>

export const Default: Story = {
  render: () => <Calendar aria-label="Event date" />,
}

export const Composed: Story = {
  render: () => (
    <Calendar aria-label="Event date">
      <Calendar.Header />
      <Calendar.Grid />
    </Calendar>
  ),
}
