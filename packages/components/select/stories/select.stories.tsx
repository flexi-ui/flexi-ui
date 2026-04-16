import type { Meta, StoryObj } from '@storybook/react'

import { Select } from '../src/main'

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
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
type Story = StoryObj<typeof Select>

export const Default: Story = {
  render: (args) => (
    <Select placeholder="Select an option" {...args}>
      <Select.Trigger />
      <Select.Popover>
        <Select.Listbox>
          <Select.Option id="apple">Apple</Select.Option>
          <Select.Option id="banana">Banana</Select.Option>
          <Select.Option id="cherry">Cherry</Select.Option>
        </Select.Listbox>
      </Select.Popover>
    </Select>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Select key={size} placeholder={`Size: ${size}`} size={size}>
          <Select.Trigger />
          <Select.Popover>
            <Select.Listbox>
              <Select.Option id="one">Option One</Select.Option>
              <Select.Option id="two">Option Two</Select.Option>
            </Select.Listbox>
          </Select.Popover>
        </Select>
      ))}
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Select isDisabled placeholder="Disabled select">
      <Select.Trigger />
      <Select.Popover>
        <Select.Listbox>
          <Select.Option id="one">Option One</Select.Option>
        </Select.Listbox>
      </Select.Popover>
    </Select>
  ),
}
