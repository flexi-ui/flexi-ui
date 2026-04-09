import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonGroup } from '../src/main'

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    fullWidth: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof ButtonGroup>

export const Default: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  ),
}

export const WithVariant: Story = {
  render: () => (
    <ButtonGroup variant="bordered">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  ),
}

export const FullWidth: Story = {
  render: () => (
    <ButtonGroup fullWidth>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  ),
}
