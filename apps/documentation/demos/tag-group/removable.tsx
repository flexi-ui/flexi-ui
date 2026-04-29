'use client'

import { TagGroup } from '@flexi-ui/tag-group'
import { useState } from 'react'

const initial = [
  { id: 'react', label: 'React' },
  { id: 'ts', label: 'TypeScript' },
  { id: 'tw', label: 'Tailwind' },
  { id: 'sb', label: 'Storybook' },
]

export default function Demo() {
  const [tags, setTags] = useState(initial)

  return (
    <TagGroup
      label="Selected tags"
      onRemove={(keys) => setTags((prev) => prev.filter((tag) => !keys.has(tag.id)))}
    >
      <TagGroup.List>
        {tags.map((tag) => (
          <TagGroup.Tag key={tag.id} id={tag.id}>
            {tag.label}
          </TagGroup.Tag>
        ))}
      </TagGroup.List>
    </TagGroup>
  )
}
