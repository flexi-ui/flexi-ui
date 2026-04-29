'use client'

import { Table } from '@flexi-ui/table'

export default function Demo() {
  return (
    <Table aria-label="Members" className="w-full">
      <Table.Header>
        <Table.Column isRowHeader>Name</Table.Column>
        <Table.Column>Role</Table.Column>
        <Table.Column>Joined</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Alex Morgan</Table.Cell>
          <Table.Cell>Owner</Table.Cell>
          <Table.Cell>Jan 2024</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jamie Lee</Table.Cell>
          <Table.Cell>Editor</Table.Cell>
          <Table.Cell>Mar 2024</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Sam Chen</Table.Cell>
          <Table.Cell>Viewer</Table.Cell>
          <Table.Cell>Aug 2024</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}
