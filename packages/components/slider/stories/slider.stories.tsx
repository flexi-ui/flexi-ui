import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from '../src/main'

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['accent', 'success', 'warning', 'danger'],
    },
  },
  args: {
    size: 'md',
    color: 'accent',
    label: 'Volume',
    defaultValue: 50,
  },
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {}

export const WithOutput: Story = {
  args: {
    showOutput: true,
  },
}

export const Colors: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      {(['accent', 'success', 'warning', 'danger'] as const).map((color) => (
        <Slider key={color} color={color} defaultValue={50} label={color} />
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Slider key={size} defaultValue={50} label={size} size={size} />
      ))}
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}
