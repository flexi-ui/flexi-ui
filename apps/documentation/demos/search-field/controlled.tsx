'use client'

import { SearchField } from '@flexi-ui/search-field'
import { useState } from 'react'

export default function Demo() {
  const [value, setValue] = useState('')

  return (
    <div className="w-full max-w-sm space-y-2">
      <SearchField
        label="Filter results"
        onChange={setValue}
        placeholder="Type to filter…"
        value={value}
      />
      <p className="text-xs text-muted-foreground">
        Current query: {value ? <code>{value}</code> : <em>empty</em>}
      </p>
    </div>
  )
}
