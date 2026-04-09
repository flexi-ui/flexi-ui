import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@flexi-ui/button'
import { Input } from '@flexi-ui/input'

import { Form } from '../src/main'

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  argTypes: {
    fullWidth: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Form>

export const Default: Story = {
  render: (args) => (
    <Form {...args} className="flex flex-col gap-4 w-80">
      <Input label="Email" placeholder="Enter your email" />
      <Input label="Password" placeholder="Enter your password" />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  ),
}

export const FullWidth: Story = {
  render: () => (
    <Form fullWidth className="flex flex-col gap-4">
      <Input label="Name" placeholder="Enter your name" />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  ),
}
