import type { Meta, StoryObj } from '@storybook/react'

import { NumberField } from '../src/main'

const meta: Meta<typeof NumberField> = {
  title: 'Components/NumberField',
  component: NumberField,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    label: 'Quantity',
    size: 'md',
    defaultValue: 1,
  },
}

export default meta
type Story = StoryObj<typeof NumberField>

export const Default: Story = {}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <NumberField key={size} defaultValue={1} label={size} size={size} />
      ))}
    </div>
  ),
}

export const MinMax: Story = {
  args: {
    minValue: 0,
    maxValue: 10,
    defaultValue: 5,
    label: 'Rating (0-10)',
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}
