'use client'

import { Link } from '@flexi-ui/link'

export default function Demo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Link href="https://github.com" isExternal>
        GitHub
      </Link>
      <Link href="https://github.com" isExternal showAnchorIcon>
        GitHub
      </Link>
    </div>
  )
}
