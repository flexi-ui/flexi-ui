import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '../src/main'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['accent', 'success', 'warning', 'danger'],
    },
    isDisabled: {
      control: 'boolean',
    },
  },
  args: {
    size: 'md',
    color: 'accent',
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: (args) => <Checkbox {...args}>Accept terms</Checkbox>,
}

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['accent', 'success', 'warning', 'danger'] as const).map((color) => (
        <Checkbox key={color} color={color} defaultSelected>
          {color}
        </Checkbox>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Checkbox key={size} size={size}>
          {size}
        </Checkbox>
      ))}
    </div>
  ),
}

export const Group: Story = {
  render: () => (
    <Checkbox.Group>
      <label className="checkbox-group__label">Favorite fruits</label>
      <Checkbox value="apple">Apple</Checkbox>
      <Checkbox value="banana">Banana</Checkbox>
      <Checkbox value="cherry">Cherry</Checkbox>
    </Checkbox.Group>
  ),
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
    defaultSelected: true,
  },
  render: (args) => <Checkbox {...args}>Disabled checkbox</Checkbox>,
}
