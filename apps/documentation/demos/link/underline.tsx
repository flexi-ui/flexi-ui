'use client'

import { Link } from '@flexi-ui/link'

export default function Demo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Link href="#" underline="none">
        none
      </Link>
      <Link href="#" underline="hover">
        hover
      </Link>
      <Link href="#" underline="always">
        always
      </Link>
      <Link href="#" underline="active">
        active
      </Link>
    </div>
  )
}
