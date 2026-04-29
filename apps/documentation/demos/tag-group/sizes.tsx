'use client'

import { TagGroup } from '@flexi-ui/tag-group'

export default function Demo() {
  return (
    <div className="flex flex-col gap-4">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <TagGroup key={size} label={`${size.toUpperCase()} size`} size={size}>
          <TagGroup.List>
            <TagGroup.Tag>Draft</TagGroup.Tag>
            <TagGroup.Tag>Review</TagGroup.Tag>
            <TagGroup.Tag>Published</TagGroup.Tag>
          </TagGroup.List>
        </TagGroup>
      ))}
    </div>
  )
}
