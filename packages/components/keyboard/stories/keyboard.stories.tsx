import type { Meta, StoryObj } from '@storybook/react'

import { Keyboard } from '../src/main'

const meta: Meta<typeof Keyboard> = {
  title: 'Components/Keyboard',
  component: Keyboard,
}

export default meta
type Story = StoryObj<typeof Keyboard>

export const Default: Story = {
  render: () => <Keyboard>Ctrl+K</Keyboard>,
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Keyboard size="sm">⌘K</Keyboard>
      <Keyboard size="md">⌘K</Keyboard>
      <Keyboard size="lg">⌘K</Keyboard>
    </div>
  ),
}

export const Combo: Story = {
  render: () => (
    <div className="flex items-center gap-1">
      <Keyboard>⌘</Keyboard>
      <span>+</span>
      <Keyboard>Shift</Keyboard>
      <span>+</span>
      <Keyboard>P</Keyboard>
    </div>
  ),
}
