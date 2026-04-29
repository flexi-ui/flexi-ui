'use client'

import { Breadcrumbs } from '@flexi-ui/breadcrumbs'

export default function Demo() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#">Projects</Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link>FlexiUI</Breadcrumbs.Link>
      </Breadcrumbs.Item>
    </Breadcrumbs>
  )
}
