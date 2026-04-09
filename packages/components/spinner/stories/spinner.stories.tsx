import type { Meta, StoryObj } from '@storybook/react'

import { Spinner } from '../src/main'

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    color: {
      control: 'select',
      options: ['current', 'primary', 'secondary', 'success', 'warning', 'danger', 'white'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    size: 'md',
    color: 'primary',
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = {}

export const WithLabel: Story = {
  args: {
    label: 'Loading...',
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner color="primary" />
      <Spinner color="secondary" />
      <Spinner color="success" />
      <Spinner color="warning" />
      <Spinner color="danger" />
    </div>
  ),
}
