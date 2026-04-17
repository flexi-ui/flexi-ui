import type { Meta, StoryObj } from '@storybook/react'

import { TagGroup } from '../src/main'

const meta: Meta<typeof TagGroup> = {
  title: 'Components/TagGroup',
  component: TagGroup,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['accent', 'success', 'warning', 'danger'],
    },
  },
  args: {
    size: 'md',
  },
}

export default meta
type Story = StoryObj<typeof TagGroup>

export const Default: Story = {
  render: (args) => (
    <TagGroup label="Categories" {...args}>
      <TagGroup.List>
        <TagGroup.Tag id="react">React</TagGroup.Tag>
        <TagGroup.Tag id="vue">Vue</TagGroup.Tag>
        <TagGroup.Tag id="svelte">Svelte</TagGroup.Tag>
      </TagGroup.List>
    </TagGroup>
  ),
}

export const Removable: Story = {
  render: () => (
    <TagGroup label="Tags" onRemove={() => {}}>
      <TagGroup.List>
        <TagGroup.Tag id="a">Tag A</TagGroup.Tag>
        <TagGroup.Tag id="b">Tag B</TagGroup.Tag>
        <TagGroup.Tag id="c">Tag C</TagGroup.Tag>
      </TagGroup.List>
    </TagGroup>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['accent', 'success', 'warning', 'danger'] as const).map((color) => (
        <TagGroup key={color} color={color} label={color}>
          <TagGroup.List>
            <TagGroup.Tag id="a">Tag A</TagGroup.Tag>
            <TagGroup.Tag id="b">Tag B</TagGroup.Tag>
          </TagGroup.List>
        </TagGroup>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <TagGroup key={size} label={size} size={size}>
          <TagGroup.List>
            <TagGroup.Tag id="a">Tag A</TagGroup.Tag>
            <TagGroup.Tag id="b">Tag B</TagGroup.Tag>
          </TagGroup.List>
        </TagGroup>
      ))}
    </div>
  ),
}
