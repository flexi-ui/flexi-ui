'use client'

import { Link } from '@flexi-ui/link'

export default function Demo() {
  return (
    <Link
      anchorIcon={<span aria-hidden>→</span>}
      href="https://github.com"
      isExternal
      showAnchorIcon
    >
      Open on GitHub
    </Link>
  )
}
