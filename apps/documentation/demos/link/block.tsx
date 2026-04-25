'use client'

import { Link } from '@flexi-ui/link'

export default function Demo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-1">
      <Link color="foreground" href="#" isBlock>
        Account settings
      </Link>
      <Link color="foreground" href="#" isBlock>
        Notifications
      </Link>
      <Link color="foreground" href="#" isBlock>
        Billing
      </Link>
    </div>
  )
}
