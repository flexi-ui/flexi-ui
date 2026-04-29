'use client'

import { SearchField } from '@flexi-ui/search-field'

export default function Demo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <SearchField label="Small" placeholder="Search…" size="sm" />
      <SearchField label="Medium" placeholder="Search…" size="md" />
      <SearchField label="Large" placeholder="Search…" size="lg" />
    </div>
  )
}
