import type { Meta, StoryObj } from '@storybook/react'

import { Input, Label, SearchField } from 'react-aria-components'

import { Autocomplete } from '../src/main'

const meta: Meta<typeof Autocomplete> = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
}

export default meta
type Story = StoryObj<typeof Autocomplete>

export const Default: Story = {
  render: () => (
    <Autocomplete>
      <SearchField>
        <Label className="text-sm">Search</Label>
        <Input className="input rounded-md border px-3 py-2" placeholder="Type to filter..." />
      </SearchField>
    </Autocomplete>
  ),
}

export const Small: Story = {
  render: () => (
    <Autocomplete size="sm">
      <SearchField>
        <Label className="text-xs">Search</Label>
        <Input className="input rounded-md border px-2 py-1 text-xs" placeholder="Search" />
      </SearchField>
    </Autocomplete>
  ),
}
