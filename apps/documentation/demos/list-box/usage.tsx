'use client'

import { ListBox } from '@flexi-ui/list-box'

export default function Demo() {
  return (
    <ListBox aria-label="Inbox" className="w-full max-w-sm">
      <ListBox.Item id="alex">Alex Morgan</ListBox.Item>
      <ListBox.Item id="jamie">Jamie Lee</ListBox.Item>
      <ListBox.Item id="sam">Sam Chen</ListBox.Item>
      <ListBox.Item id="taylor">Taylor Reed</ListBox.Item>
    </ListBox>
  )
}
