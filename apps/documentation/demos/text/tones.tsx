'use client'

import { Text } from '@flexi-ui/text'

export default function Demo() {
  return (
    <div className="flex flex-col gap-1">
      <Text tone="default">Default tone — body content.</Text>
      <Text tone="muted">Muted tone — secondary copy and captions.</Text>
      <Text tone="success">Success tone — confirmations and positive state.</Text>
      <Text tone="danger">Danger tone — errors and destructive warnings.</Text>
    </div>
  )
}
