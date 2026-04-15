import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '../src/main'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'flat', 'shadow'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    fullWidth: {
      control: 'boolean',
    },
    isPressable: {
      control: 'boolean',
    },
  },
  args: {
    variant: 'default',
    size: 'md',
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: (args) => (
    <Card {...args} style={{ maxWidth: 400 }}>
      <Card.Header>
        <h3 className="text-lg font-semibold">Card Title</h3>
        <p className="text-sm text-muted">Card description</p>
      </Card.Header>
      <Card.Body>
        <p>This is the card body content. You can place any content here.</p>
      </Card.Body>
      <Card.Footer>
        <p className="text-sm text-muted">Card footer</p>
      </Card.Footer>
    </Card>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {(['default', 'bordered', 'flat', 'shadow'] as const).map((variant) => (
        <Card key={variant} variant={variant} style={{ width: 250 }}>
          <Card.Header>
            <h3 className="text-lg font-semibold capitalize">{variant}</h3>
          </Card.Header>
          <Card.Body>
            <p className="text-sm">This is a {variant} card variant.</p>
          </Card.Body>
        </Card>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Card key={size} size={size} style={{ maxWidth: 400 }}>
          <Card.Header>
            <h3 className="font-semibold capitalize">{size} Card</h3>
          </Card.Header>
          <Card.Body>
            <p className="text-sm">Content with {size} padding.</p>
          </Card.Body>
          <Card.Footer>
            <p className="text-sm text-muted">Footer</p>
          </Card.Footer>
        </Card>
      ))}
    </div>
  ),
}

export const Pressable: Story = {
  args: {
    isPressable: true,
  },
  render: (args) => (
    <Card {...args} style={{ maxWidth: 400 }}>
      <Card.Header>
        <h3 className="text-lg font-semibold">Pressable Card</h3>
      </Card.Header>
      <Card.Body>
        <p className="text-sm">Hover and click me for interactive feedback.</p>
      </Card.Body>
    </Card>
  ),
}
