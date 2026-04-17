import type { Meta, StoryObj } from '@storybook/react'

import { Table } from '../src/main'

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
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
type Story = StoryObj<typeof Table>

export const Default: Story = {
  render: (args) => (
    <Table aria-label="Users" {...args}>
      <Table.Header>
        <Table.Column isRowHeader>Name</Table.Column>
        <Table.Column>Email</Table.Column>
        <Table.Column>Role</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>John Doe</Table.Cell>
          <Table.Cell>john@example.com</Table.Cell>
          <Table.Cell>Admin</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jane Smith</Table.Cell>
          <Table.Cell>jane@example.com</Table.Cell>
          <Table.Cell>Editor</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Bob Wilson</Table.Cell>
          <Table.Cell>bob@example.com</Table.Cell>
          <Table.Cell>Viewer</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Table key={size} aria-label={`${size} table`} size={size}>
          <Table.Header>
            <Table.Column isRowHeader>Name</Table.Column>
            <Table.Column>Value</Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Item A</Table.Cell>
              <Table.Cell>100</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Item B</Table.Cell>
              <Table.Cell>200</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      ))}
    </div>
  ),
}
