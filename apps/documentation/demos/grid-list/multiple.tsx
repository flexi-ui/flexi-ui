'use client'

import { GridList } from '@flexi-ui/grid-list'

export default function Demo() {
  return (
    <GridList
      aria-label="Selected items"
      className="w-full max-w-sm"
      defaultSelectedKeys={['inbox']}
      selectionMode="multiple"
    >
      <GridList.Item id="inbox">Inbox (24)</GridList.Item>
      <GridList.Item id="drafts">Drafts (3)</GridList.Item>
      <GridList.Item id="sent">Sent</GridList.Item>
      <GridList.Item id="archive">Archive</GridList.Item>
    </GridList>
  )
}
