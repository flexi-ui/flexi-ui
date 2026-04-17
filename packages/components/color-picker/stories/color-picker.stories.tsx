import type { Meta, StoryObj } from '@storybook/react'

import { ColorArea, ColorSlider } from 'react-aria-components'

import { ColorPicker } from '../src/main'

const meta: Meta<typeof ColorPicker> = {
  title: 'Components/ColorPicker',
  component: ColorPicker,
}

export default meta
type Story = StoryObj<typeof ColorPicker>

export const Default: Story = {
  render: () => (
    <ColorPicker defaultValue="hsl(200, 100%, 50%)">
      <ColorArea aria-label="Color area" className="color-area" />
      <ColorSlider aria-label="Hue" channel="hue" className="color-slider" />
    </ColorPicker>
  ),
}
