import type { Meta, StoryObj } from '@storybook/react'

import { Tree } from '../src/main'

const meta: Meta<typeof Tree> = {
  title: 'Components/Tree',
  component: Tree,
}

export default meta
type Story = StoryObj<typeof Tree>

export const Default: Story = {
  render: () => (
    <Tree aria-label="Files">
      <Tree.Item id="documents" textValue="Documents">
        <Tree.ItemContent>Documents</Tree.ItemContent>
      </Tree.Item>
      <Tree.Item id="photos" textValue="Photos">
        <Tree.ItemContent>Photos</Tree.ItemContent>
      </Tree.Item>
      <Tree.Item id="music" textValue="Music">
        <Tree.ItemContent>Music</Tree.ItemContent>
      </Tree.Item>
    </Tree>
  ),
}

export const Selectable: Story = {
  render: () => (
    <Tree aria-label="Files" selectionMode="multiple">
      <Tree.Item id="src" textValue="src">
        <Tree.ItemContent>src</Tree.ItemContent>
      </Tree.Item>
      <Tree.Item id="public" textValue="public">
        <Tree.ItemContent>public</Tree.ItemContent>
      </Tree.Item>
      <Tree.Item id="package" textValue="package.json">
        <Tree.ItemContent>package.json</Tree.ItemContent>
      </Tree.Item>
    </Tree>
  ),
}
