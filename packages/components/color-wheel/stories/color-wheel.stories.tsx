import type { Meta, StoryObj } from '@storybook/react'

import { ColorWheel } from '../src/main'

const meta: Meta<typeof ColorWheel> = {
  title: 'Components/ColorWheel',
  component: ColorWheel,
}

export default meta
type Story = StoryObj<typeof ColorWheel>

export const Default: Story = {
  render: () => <ColorWheel defaultValue="hsl(200, 100%, 50%)" />,
}

export const Small: Story = {
  render: () => <ColorWheel defaultValue="hsl(120, 100%, 50%)" size="sm" />,
}

export const Large: Story = {
  render: () => <ColorWheel defaultValue="hsl(300, 100%, 50%)" size="lg" />,
}
