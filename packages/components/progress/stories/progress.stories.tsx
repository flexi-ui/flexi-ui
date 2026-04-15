import type { Meta, StoryObj } from '@storybook/react'

import { Progress } from '../src/main'

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['accent', 'success', 'warning', 'danger'],
    },
    isStriped: {
      control: 'boolean',
    },
    isIndeterminate: {
      control: 'boolean',
    },
  },
  args: {
    size: 'md',
    color: 'accent',
    value: 60,
  },
}

export default meta
type Story = StoryObj<typeof Progress>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: 400 }}>
      <Progress {...args} label="Loading" showValueLabel />
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-4" style={{ maxWidth: 400 }}>
      {(['accent', 'success', 'warning', 'danger'] as const).map((color) => (
        <Progress key={color} color={color} value={65} label={color} showValueLabel />
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4" style={{ maxWidth: 400 }}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Progress key={size} size={size} value={50} label={size} />
      ))}
    </div>
  ),
}

export const Striped: Story = {
  args: {
    isStriped: true,
    value: 70,
  },
  render: (args) => (
    <div style={{ maxWidth: 400 }}>
      <Progress {...args} label="Uploading" showValueLabel />
    </div>
  ),
}

export const Indeterminate: Story = {
  args: {
    isIndeterminate: true,
  },
  render: (args) => (
    <div style={{ maxWidth: 400 }}>
      <Progress {...args} label="Loading..." />
    </div>
  ),
}
