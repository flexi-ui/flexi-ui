'use client'

import { ListBox } from '@flexi-ui/list-box'

export default function Demo() {
  return (
    <ListBox
      aria-label="Permissions"
      className="w-full max-w-sm"
      defaultSelectedKeys={['read']}
      selectionMode="multiple"
    >
      <ListBox.Item id="read">Read</ListBox.Item>
      <ListBox.Item id="write">Write</ListBox.Item>
      <ListBox.Item id="admin">Admin</ListBox.Item>
    </ListBox>
  )
}
