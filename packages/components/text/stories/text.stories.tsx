import type { Meta, StoryObj } from '@storybook/react'

import { Text } from '../src/main'

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
}

export default meta
type Story = StoryObj<typeof Text>

export const Default: Story = {
  render: () => <Text>The quick brown fox jumps over the lazy dog.</Text>,
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Text size="xs">Extra small text</Text>
      <Text size="sm">Small text</Text>
      <Text size="md">Medium text</Text>
      <Text size="lg">Large text</Text>
      <Text size="xl">Extra large text</Text>
    </div>
  ),
}

export const Tones: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Text tone="default">Default tone</Text>
      <Text tone="muted">Muted tone</Text>
      <Text tone="danger">Danger tone</Text>
      <Text tone="success">Success tone</Text>
    </div>
  ),
}

export const Weights: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Text weight="normal">Normal weight</Text>
      <Text weight="medium">Medium weight</Text>
      <Text weight="semibold">Semibold weight</Text>
      <Text weight="bold">Bold weight</Text>
    </div>
  ),
}
