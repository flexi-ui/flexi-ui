'use client'

import { Tree } from '@flexi-ui/tree'

export default function Demo() {
  return (
    <Tree
      aria-label="Files"
      className="w-full max-w-sm"
      defaultExpandedKeys={['src']}
    >
      <Tree.Item id="src" textValue="src">
        <Tree.ItemContent>src/</Tree.ItemContent>
        <Tree.Item id="components" textValue="components">
          <Tree.ItemContent>components/</Tree.ItemContent>
          <Tree.Item id="button" textValue="button.tsx">
            <Tree.ItemContent>button.tsx</Tree.ItemContent>
          </Tree.Item>
          <Tree.Item id="card" textValue="card.tsx">
            <Tree.ItemContent>card.tsx</Tree.ItemContent>
          </Tree.Item>
        </Tree.Item>
        <Tree.Item id="utils" textValue="utils.ts">
          <Tree.ItemContent>utils.ts</Tree.ItemContent>
        </Tree.Item>
      </Tree.Item>
      <Tree.Item id="readme" textValue="README.md">
        <Tree.ItemContent>README.md</Tree.ItemContent>
      </Tree.Item>
    </Tree>
  )
}
