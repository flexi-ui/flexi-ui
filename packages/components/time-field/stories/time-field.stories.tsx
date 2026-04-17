import type { Meta, StoryObj } from '@storybook/react'

import { TimeField } from '../src/main'

const meta: Meta<typeof TimeField> = {
  title: 'Components/TimeField',
  component: TimeField,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    label: 'Time',
    size: 'md',
  },
}

export default meta
type Story = StoryObj<typeof TimeField>

export const Default: Story = {}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <TimeField key={size} label={size} size={size} />
      ))}
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}
