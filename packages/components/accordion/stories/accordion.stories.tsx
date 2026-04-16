import type { Meta, StoryObj } from '@storybook/react'

import { Accordion } from '../src/main'

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'splitted'],
    },
  },
  args: {
    variant: 'default',
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: (args) => (
    <Accordion {...args} style={{ maxWidth: 500 }}>
      <Accordion.Item id="item-1">
        <Accordion.Trigger>What is FlexiUI?</Accordion.Trigger>
        <Accordion.Panel>
          FlexiUI is a modern React UI library built with Tailwind CSS v4.
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item id="item-2">
        <Accordion.Trigger>How do I install it?</Accordion.Trigger>
        <Accordion.Panel>
          Install via npm or pnpm: pnpm add @flexi-ui/button
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item id="item-3">
        <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
        <Accordion.Panel>
          Yes, all components are built on React Aria Components for full accessibility.
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-8" style={{ maxWidth: 500 }}>
      {(['default', 'bordered', 'splitted'] as const).map((variant) => (
        <div key={variant}>
          <h3 className="mb-2 text-sm font-semibold capitalize">{variant}</h3>
          <Accordion variant={variant}>
            <Accordion.Item id={`${variant}-1`}>
              <Accordion.Trigger>First item</Accordion.Trigger>
              <Accordion.Panel>Content for {variant} first item.</Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item id={`${variant}-2`}>
              <Accordion.Trigger>Second item</Accordion.Trigger>
              <Accordion.Panel>Content for {variant} second item.</Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>
      ))}
    </div>
  ),
}
