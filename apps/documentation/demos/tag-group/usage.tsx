'use client'

import { TagGroup } from '@flexi-ui/tag-group'

export default function Demo() {
  return (
    <TagGroup label="Filter">
      <TagGroup.List>
        <TagGroup.Tag>React</TagGroup.Tag>
        <TagGroup.Tag>TypeScript</TagGroup.Tag>
        <TagGroup.Tag>Tailwind</TagGroup.Tag>
        <TagGroup.Tag>Storybook</TagGroup.Tag>
      </TagGroup.List>
    </TagGroup>
  )
}
