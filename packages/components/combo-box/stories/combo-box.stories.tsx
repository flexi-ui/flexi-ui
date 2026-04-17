import type { Meta, StoryObj } from '@storybook/react'

import { ComboBox } from '../src/main'

const meta: Meta<typeof ComboBox> = {
  title: 'Components/ComboBox',
  component: ComboBox,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    size: 'md',
    label: 'Framework',
  },
}

export default meta
type Story = StoryObj<typeof ComboBox>

export const Default: Story = {
  render: (args) => (
    <ComboBox {...args}>
      <ComboBox.Popover>
        <ComboBox.Listbox>
          <ComboBox.Option id="react">React</ComboBox.Option>
          <ComboBox.Option id="vue">Vue</ComboBox.Option>
          <ComboBox.Option id="angular">Angular</ComboBox.Option>
          <ComboBox.Option id="svelte">Svelte</ComboBox.Option>
        </ComboBox.Listbox>
      </ComboBox.Popover>
    </ComboBox>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <ComboBox key={size} label={size} size={size}>
          <ComboBox.Popover>
            <ComboBox.Listbox>
              <ComboBox.Option id="one">Option One</ComboBox.Option>
              <ComboBox.Option id="two">Option Two</ComboBox.Option>
            </ComboBox.Listbox>
          </ComboBox.Popover>
        </ComboBox>
      ))}
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <ComboBox isDisabled label="Disabled">
      <ComboBox.Popover>
        <ComboBox.Listbox>
          <ComboBox.Option id="one">Option One</ComboBox.Option>
        </ComboBox.Listbox>
      </ComboBox.Popover>
    </ComboBox>
  ),
}
