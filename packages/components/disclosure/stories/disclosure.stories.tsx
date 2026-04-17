import type { Meta, StoryObj } from '@storybook/react'

import { Disclosure } from '../src/main'

const meta: Meta<typeof Disclosure> = {
  title: 'Components/Disclosure',
  component: Disclosure,
}

export default meta
type Story = StoryObj<typeof Disclosure>

export const Default: Story = {
  render: () => (
    <Disclosure>
      <Disclosure.Trigger>Details</Disclosure.Trigger>
      <Disclosure.Panel>
        Here are the details you requested. Click the header to toggle visibility.
      </Disclosure.Panel>
    </Disclosure>
  ),
}

export const Group: Story = {
  render: () => (
    <Disclosure.Group defaultExpandedKeys={['shipping']} className="max-w-md">
      <Disclosure id="shipping">
        <Disclosure.Trigger>Shipping</Disclosure.Trigger>
        <Disclosure.Panel>
          We ship to most countries within 3-5 business days.
        </Disclosure.Panel>
      </Disclosure>
      <Disclosure id="returns">
        <Disclosure.Trigger>Returns</Disclosure.Trigger>
        <Disclosure.Panel>
          Returns are accepted within 30 days of purchase.
        </Disclosure.Panel>
      </Disclosure>
      <Disclosure id="warranty">
        <Disclosure.Trigger>Warranty</Disclosure.Trigger>
        <Disclosure.Panel>All products come with a one-year warranty.</Disclosure.Panel>
      </Disclosure>
    </Disclosure.Group>
  ),
}
