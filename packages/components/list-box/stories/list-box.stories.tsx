import type { Meta, StoryObj } from '@storybook/react'

import { ListBox } from '../src/main'

const meta: Meta<typeof ListBox> = {
  title: 'Components/ListBox',
  component: ListBox,
}

export default meta
type Story = StoryObj<typeof ListBox>

export const Default: Story = {
  render: () => (
    <ListBox aria-label="Favorite fruit" selectionMode="single" className="w-64">
      <ListBox.Item id="apple">Apple</ListBox.Item>
      <ListBox.Item id="banana">Banana</ListBox.Item>
      <ListBox.Item id="cherry">Cherry</ListBox.Item>
      <ListBox.Item id="durian">Durian</ListBox.Item>
    </ListBox>
  ),
}

export const Sections: Story = {
  render: () => (
    <ListBox aria-label="Food" selectionMode="multiple" className="w-64">
      <ListBox.Section>
        <ListBox.Header>Fruit</ListBox.Header>
        <ListBox.Item id="apple">Apple</ListBox.Item>
        <ListBox.Item id="banana">Banana</ListBox.Item>
      </ListBox.Section>
      <ListBox.Section>
        <ListBox.Header>Vegetables</ListBox.Header>
        <ListBox.Item id="broccoli">Broccoli</ListBox.Item>
        <ListBox.Item id="carrot">Carrot</ListBox.Item>
      </ListBox.Section>
    </ListBox>
  ),
}

export const Small: Story = {
  render: () => (
    <ListBox aria-label="Size sm" selectionMode="single" size="sm" className="w-56">
      <ListBox.Item id="one">One</ListBox.Item>
      <ListBox.Item id="two">Two</ListBox.Item>
      <ListBox.Item id="three">Three</ListBox.Item>
    </ListBox>
  ),
}
