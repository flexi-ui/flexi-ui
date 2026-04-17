import type { Meta, StoryObj } from '@storybook/react'

import { FileTrigger } from '../src/main'

const meta: Meta<typeof FileTrigger> = {
  title: 'Components/FileTrigger',
  component: FileTrigger,
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
type Story = StoryObj<typeof FileTrigger>

export const Default: Story = {
  render: (args) => (
    <FileTrigger {...args}>
      Upload File
    </FileTrigger>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <FileTrigger key={size} size={size}>{size}</FileTrigger>
      ))}
    </div>
  ),
}

export const AcceptImages: Story = {
  render: () => (
    <FileTrigger acceptedFileTypes={['image/png', 'image/jpeg']}>
      Upload Image
    </FileTrigger>
  ),
}

export const MultipleFiles: Story = {
  render: () => (
    <FileTrigger allowsMultiple>
      Upload Files
    </FileTrigger>
  ),
}
