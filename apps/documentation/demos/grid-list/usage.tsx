'use client'

import { GridList } from '@flexi-ui/grid-list'

export default function Demo() {
  return (
    <GridList aria-label="Files" className="w-full max-w-sm">
      <GridList.Item id="readme">README.md</GridList.Item>
      <GridList.Item id="package">package.json</GridList.Item>
      <GridList.Item id="tsconfig">tsconfig.json</GridList.Item>
      <GridList.Item id="src">src/</GridList.Item>
    </GridList>
  )
}
