import type { Meta, StoryObj } from '@storybook/react'

import { Radio } from '../src/main'

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
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
  },
}

export default meta
type Story = StoryObj<typeof Radio>

export const Default: Story = {
  render: () => (
    <Radio.Group>
      <Radio value="apple">Apple</Radio>
      <Radio value="banana">Banana</Radio>
      <Radio value="cherry">Cherry</Radio>
    </Radio.Group>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['accent', 'success', 'warning', 'danger'] as const).map((color) => (
        <Radio.Group key={color} defaultValue="selected">
          <Radio color={color} value="selected">{color}</Radio>
          <Radio color={color} value="other">Other</Radio>
        </Radio.Group>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Radio.Group key={size}>
          <Radio size={size} value="a">{size}</Radio>
          <Radio size={size} value="b">Option B</Radio>
        </Radio.Group>
      ))}
    </div>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <Radio.Group orientation="horizontal">
      <Radio value="a">Option A</Radio>
      <Radio value="b">Option B</Radio>
      <Radio value="c">Option C</Radio>
    </Radio.Group>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Radio.Group isDisabled defaultValue="a">
      <Radio value="a">Option A</Radio>
      <Radio value="b">Option B</Radio>
    </Radio.Group>
  ),
}
