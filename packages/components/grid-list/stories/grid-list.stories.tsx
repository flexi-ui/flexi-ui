import type { Meta, StoryObj } from '@storybook/react'

import { GridList } from '../src/main'

const meta: Meta<typeof GridList> = {
  title: 'Components/GridList',
  component: GridList,
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
type Story = StoryObj<typeof GridList>

export const Default: Story = {
  render: (args) => (
    <GridList aria-label="Items" {...args}>
      <GridList.Item>Item One</GridList.Item>
      <GridList.Item>Item Two</GridList.Item>
      <GridList.Item>Item Three</GridList.Item>
    </GridList>
  ),
}

export const Selectable: Story = {
  render: () => (
    <GridList aria-label="Items" selectionMode="multiple">
      <GridList.Item>React</GridList.Item>
      <GridList.Item>Vue</GridList.Item>
      <GridList.Item>Angular</GridList.Item>
      <GridList.Item>Svelte</GridList.Item>
    </GridList>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <GridList key={size} aria-label={size} size={size}>
          <GridList.Item>Item A</GridList.Item>
          <GridList.Item>Item B</GridList.Item>
        </GridList>
      ))}
    </div>
  ),
}
