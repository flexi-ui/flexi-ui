import type { Meta, StoryObj } from '@storybook/react'

import { ToggleButton } from '../src/main'

const meta: Meta<typeof ToggleButton> = {
  title: 'Components/ToggleButton',
  component: ToggleButton,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    size: 'md',
  },
}

export default meta
type Story = StoryObj<typeof ToggleButton>

export const Default: Story = {
  render: (args) => <ToggleButton {...args}>Toggle</ToggleButton>,
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <ToggleButton key={size} size={size}>{size}</ToggleButton>
      ))}
    </div>
  ),
}

export const Group: Story = {
  render: () => (
    <ToggleButton.Group selectionMode="single">
      <ToggleButton id="left">Left</ToggleButton>
      <ToggleButton id="center">Center</ToggleButton>
      <ToggleButton id="right">Right</ToggleButton>
    </ToggleButton.Group>
  ),
}

export const MultipleSelection: Story = {
  render: () => (
    <ToggleButton.Group selectionMode="multiple">
      <ToggleButton id="bold">B</ToggleButton>
      <ToggleButton id="italic">I</ToggleButton>
      <ToggleButton id="underline">U</ToggleButton>
    </ToggleButton.Group>
  ),
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
  render: (args) => <ToggleButton {...args}>Disabled</ToggleButton>,
}
