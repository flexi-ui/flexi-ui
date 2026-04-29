'use client'

import { Table } from '@flexi-ui/table'

export default function Demo() {
  return (
    <Table
      aria-label="Selectable rows"
      className="w-full"
      defaultSelectedKeys={['alex']}
      selectionMode="multiple"
    >
      <Table.Header>
        <Table.Column isRowHeader>Name</Table.Column>
        <Table.Column>Email</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row id="alex">
          <Table.Cell>Alex Morgan</Table.Cell>
          <Table.Cell>alex@example.com</Table.Cell>
        </Table.Row>
        <Table.Row id="jamie">
          <Table.Cell>Jamie Lee</Table.Cell>
          <Table.Cell>jamie@example.com</Table.Cell>
        </Table.Row>
        <Table.Row id="sam">
          <Table.Cell>Sam Chen</Table.Cell>
          <Table.Cell>sam@example.com</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}
