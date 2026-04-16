import type { Meta, StoryObj } from '@storybook/react'

import { Breadcrumbs } from '../src/main'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    size: 'md',
  },
}

export default meta
type Story = StoryObj<typeof Breadcrumbs>

export const Default: Story = {
  render: (args) => (
    <Breadcrumbs {...args}>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="/products">Products</Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link>Current Page</Breadcrumbs.Link>
      </Breadcrumbs.Item>
    </Breadcrumbs>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Breadcrumbs key={size} size={size}>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href="/docs">Docs</Breadcrumbs.Link>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link>{size}</Breadcrumbs.Link>
          </Breadcrumbs.Item>
        </Breadcrumbs>
      ))}
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Breadcrumbs isDisabled>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link>Disabled</Breadcrumbs.Link>
      </Breadcrumbs.Item>
    </Breadcrumbs>
  ),
}
