'use client'

import { Link } from '@flexi-ui/link'

export default function Demo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Link color="foreground" href="#">
        foreground
      </Link>
      <Link color="primary" href="#">
        primary
      </Link>
      <Link color="secondary" href="#">
        secondary
      </Link>
      <Link color="success" href="#">
        success
      </Link>
      <Link color="warning" href="#">
        warning
      </Link>
      <Link color="danger" href="#">
        danger
      </Link>
    </div>
  )
}
