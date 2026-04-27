'use client'

import { FileTrigger } from '@flexi-ui/file-trigger'
import { useState } from 'react'

export default function Demo() {
  const [name, setName] = useState<string | null>(null)

  return (
    <div className="flex flex-col items-start gap-2">
      <FileTrigger
        acceptedFileTypes={['application/pdf']}
        onSelect={(files) => {
          const first = files?.[0]
          setName(first ? first.name : null)
        }}
      >
        Attach PDF
      </FileTrigger>
      {name && <p className="text-xs text-muted-foreground">Selected: {name}</p>}
    </div>
  )
}
