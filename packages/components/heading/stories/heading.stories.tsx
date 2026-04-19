import type { Meta, StoryObj } from '@storybook/react'

import { Heading } from '../src/main'

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
}

export default meta
type Story = StoryObj<typeof Heading>

export const Default: Story = {
  render: () => <Heading>The quick brown fox</Heading>,
}

export const Levels: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Heading level="h1">Heading level 1</Heading>
      <Heading level="h2">Heading level 2</Heading>
      <Heading level="h3">Heading level 3</Heading>
      <Heading level="h4">Heading level 4</Heading>
      <Heading level="h5">Heading level 5</Heading>
      <Heading level="h6">Heading level 6</Heading>
    </div>
  ),
}
