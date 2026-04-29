'use client'

import { DropZone } from '@flexi-ui/drop-zone'
import { useState } from 'react'

export default function Demo() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full max-w-sm">
      <DropZone
        onDrop={async (e) => {
          const items = await Promise.all(
            e.items
              .filter((item) => item.kind === 'file')
              .map((item) => (item as { getFile: () => Promise<File> }).getFile()),
          )
          setCount(items.length)
        }}
      >
        <p className="text-sm text-muted-foreground">
          Drop files here. {count > 0 && `(${count} dropped)`}
        </p>
      </DropZone>
    </div>
  )
}
