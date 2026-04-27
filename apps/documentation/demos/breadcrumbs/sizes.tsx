'use client'

import { Breadcrumbs } from '@flexi-ui/breadcrumbs'

export default function Demo() {
  return (
    <div className="flex flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Breadcrumbs key={size} size={size}>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link href="#">Settings</Breadcrumbs.Link>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>
            <Breadcrumbs.Link>{`${size.toUpperCase()} size`}</Breadcrumbs.Link>
          </Breadcrumbs.Item>
        </Breadcrumbs>
      ))}
    </div>
  )
}
