import type { Meta, StoryObj } from '@storybook/react'

import { Tabs } from '../src/main'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    variant: {
      control: 'select',
      options: ['underlined', 'solid', 'bordered'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    variant: 'underlined',
    size: 'md',
  },
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: (args) => (
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Tab id="tab1">Tab 1</Tabs.Tab>
        <Tabs.Tab id="tab2">Tab 2</Tabs.Tab>
        <Tabs.Tab id="tab3">Tab 3</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel id="tab1">Content for Tab 1</Tabs.Panel>
      <Tabs.Panel id="tab2">Content for Tab 2</Tabs.Panel>
      <Tabs.Panel id="tab3">Content for Tab 3</Tabs.Panel>
    </Tabs>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {(['underlined', 'solid', 'bordered'] as const).map((variant) => (
        <div key={variant}>
          <h3 className="mb-2 text-sm font-semibold capitalize">{variant}</h3>
          <Tabs variant={variant}>
            <Tabs.List>
              <Tabs.Tab id={`${variant}-1`}>Tab 1</Tabs.Tab>
              <Tabs.Tab id={`${variant}-2`}>Tab 2</Tabs.Tab>
              <Tabs.Tab id={`${variant}-3`}>Tab 3</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel id={`${variant}-1`}>Content for {variant} Tab 1</Tabs.Panel>
            <Tabs.Panel id={`${variant}-2`}>Content for {variant} Tab 2</Tabs.Panel>
            <Tabs.Panel id={`${variant}-3`}>Content for {variant} Tab 3</Tabs.Panel>
          </Tabs>
        </div>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <div key={size}>
          <h3 className="mb-2 text-sm font-semibold capitalize">{size}</h3>
          <Tabs size={size}>
            <Tabs.List>
              <Tabs.Tab id={`${size}-1`}>Tab 1</Tabs.Tab>
              <Tabs.Tab id={`${size}-2`}>Tab 2</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel id={`${size}-1`}>Content for {size} Tab 1</Tabs.Panel>
            <Tabs.Panel id={`${size}-2`}>Content for {size} Tab 2</Tabs.Panel>
          </Tabs>
        </div>
      ))}
    </div>
  ),
}
