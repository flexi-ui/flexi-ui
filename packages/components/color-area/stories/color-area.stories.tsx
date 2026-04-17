import type { Meta, StoryObj } from '@storybook/react'

import { ColorArea } from '../src/main'

const meta: Meta<typeof ColorArea> = {
  title: 'Components/ColorArea',
  component: ColorArea,
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
type Story = StoryObj<typeof ColorArea>

export const Default: Story = {
  render: (args) => <ColorArea aria-label="Color" defaultValue="hsl(200, 100%, 50%)" {...args} />,
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-row items-start gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <ColorArea
          key={size}
          aria-label={size}
          defaultValue="hsl(280, 100%, 50%)"
          size={size}
        />
      ))}
    </div>
  ),
}
