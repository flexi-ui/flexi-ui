'use client'

import { Link } from '@flexi-ui/link'

export default function Demo() {
  return (
    <div className="flex items-center gap-4">
      <Link href="#" size="sm">
        Small
      </Link>
      <Link href="#" size="md">
        Medium
      </Link>
      <Link href="#" size="lg">
        Large
      </Link>
    </div>
  )
}
