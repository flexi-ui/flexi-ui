'use client'

import { DropZone } from '@flexi-ui/drop-zone'
import { FileTrigger } from '@flexi-ui/file-trigger'
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
          setCount((prev) => prev + items.length)
        }}
      >
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm text-muted-foreground">Drag and drop files, or</p>
          <FileTrigger
            allowsMultiple
            onSelect={(files) => {
              if (files) setCount((prev) => prev + files.length)
            }}
          >
            Browse files
          </FileTrigger>
          {count > 0 && (
            <p className="text-xs text-muted-foreground">
              Total uploaded: {count}
            </p>
          )}
        </div>
      </DropZone>
    </div>
  )
}
