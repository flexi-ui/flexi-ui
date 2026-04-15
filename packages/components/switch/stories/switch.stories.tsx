import type { Meta, StoryObj } from '@storybook/react'

import { Switch } from '../src/main'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
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
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  render: (args) => <Switch {...args}>Notifications</Switch>,
}

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['accent', 'success', 'warning', 'danger'] as const).map((color) => (
        <Switch key={color} color={color} defaultSelected>
          {color}
        </Switch>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Switch key={size} size={size}>
          {size}
        </Switch>
      ))}
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
  render: (args) => <Switch {...args}>Disabled switch</Switch>,
}
