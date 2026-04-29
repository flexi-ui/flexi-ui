'use client'

import { Text } from '@flexi-ui/text'

export default function Demo() {
  return (
    <div className="flex flex-col gap-1">
      <Text size="xs">Extra small text (xs)</Text>
      <Text size="sm">Small text (sm) — the default</Text>
      <Text size="md">Medium text (md)</Text>
      <Text size="lg">Large text (lg)</Text>
      <Text size="xl">Extra large text (xl)</Text>
    </div>
  )
}
