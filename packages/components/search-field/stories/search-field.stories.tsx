import type { Meta, StoryObj } from '@storybook/react'

import { SearchField } from '../src/main'

const meta: Meta<typeof SearchField> = {
  title: 'Components/SearchField',
  component: SearchField,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    label: 'Search',
    size: 'md',
  },
}

export default meta
type Story = StoryObj<typeof SearchField>

export const Default: Story = {}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <SearchField key={size} label={size} size={size} />
      ))}
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}
