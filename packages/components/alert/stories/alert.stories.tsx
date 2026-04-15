import type { Meta, StoryObj } from '@storybook/react'

import { Alert } from '../src/main'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'danger', 'accent'],
    },
    isFlat: {
      control: 'boolean',
    },
  },
  args: {
    variant: 'default',
    isFlat: false,
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <Alert.Content>
        <Alert.Title>Heads up!</Alert.Title>
        <Alert.Description>This is a default alert message.</Alert.Description>
      </Alert.Content>
    </Alert>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['default', 'success', 'warning', 'danger', 'accent'] as const).map((variant) => (
        <Alert key={variant} variant={variant}>
          <Alert.Content>
            <Alert.Title className="capitalize">{variant}</Alert.Title>
            <Alert.Description>This is a {variant} alert message.</Alert.Description>
          </Alert.Content>
        </Alert>
      ))}
    </div>
  ),
}

export const Flat: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['default', 'success', 'warning', 'danger', 'accent'] as const).map((variant) => (
        <Alert key={variant} variant={variant} isFlat>
          <Alert.Content>
            <Alert.Title className="capitalize">{variant} Flat</Alert.Title>
            <Alert.Description>This is a flat {variant} alert.</Alert.Description>
          </Alert.Content>
        </Alert>
      ))}
    </div>
  ),
}

export const WithClose: Story = {
  render: (args) => (
    <Alert {...args} variant="warning">
      <Alert.Content>
        <Alert.Title>Warning</Alert.Title>
        <Alert.Description>This alert can be dismissed.</Alert.Description>
      </Alert.Content>
      <Alert.Close>✕</Alert.Close>
    </Alert>
  ),
}
