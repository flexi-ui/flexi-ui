import type { Meta, StoryObj } from '@storybook/react'

import { DateField } from '../src/main'

const meta: Meta<typeof DateField> = {
  title: 'Components/DateField',
  component: DateField,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    label: 'Date',
    size: 'md',
  },
}

export default meta
type Story = StoryObj<typeof DateField>

export const Default: Story = {}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <DateField key={size} label={size} size={size} />
      ))}
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}
