'use client'

import { FileTrigger } from '@flexi-ui/file-trigger'

export default function Demo() {
  return (
    <FileTrigger
      onSelect={(files) => {
        if (files) alert(`Selected ${files.length} file(s)`)
      }}
    >
      Choose file
    </FileTrigger>
  )
}
