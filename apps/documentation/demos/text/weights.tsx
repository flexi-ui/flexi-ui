'use client'

import { Text } from '@flexi-ui/text'

export default function Demo() {
  return (
    <div className="flex flex-col gap-1">
      <Text weight="normal">Normal weight — for body copy.</Text>
      <Text weight="medium">Medium weight — labels and de-emphasized headings.</Text>
      <Text weight="semibold">Semibold weight — table headers and emphasis.</Text>
      <Text weight="bold">Bold weight — strong emphasis within prose.</Text>
    </div>
  )
}
