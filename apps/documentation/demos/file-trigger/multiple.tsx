'use client'

import { FileTrigger } from '@flexi-ui/file-trigger'

export default function Demo() {
  return (
    <FileTrigger
      acceptedFileTypes={['image/png', 'image/jpeg']}
      allowsMultiple
      onSelect={(files) => {
        if (files) alert(`Uploading ${files.length} image(s)`)
      }}
    >
      Upload images
    </FileTrigger>
  )
}
