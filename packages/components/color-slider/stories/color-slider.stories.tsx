import type { Meta, StoryObj } from '@storybook/react'

import { ColorSlider } from '../src/main'

const meta: Meta<typeof ColorSlider> = {
  title: 'Components/ColorSlider',
  component: ColorSlider,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    size: 'md',
    label: 'Hue',
  },
}

export default meta
type Story = StoryObj<typeof ColorSlider>

export const Default: Story = {
  render: (args) => <ColorSlider channel="hue" defaultValue="hsl(200, 100%, 50%)" {...args} />,
}

export const Lightness: Story = {
  args: {
    label: 'Lightness',
  },
  render: (args) => (
    <ColorSlider channel="lightness" defaultValue="hsl(200, 100%, 50%)" {...args} />
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <ColorSlider
          key={size}
          channel="hue"
          defaultValue="hsl(200, 100%, 50%)"
          label={size}
          size={size}
        />
      ))}
    </div>
  ),
}
