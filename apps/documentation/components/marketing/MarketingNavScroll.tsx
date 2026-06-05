'use client'

import { useEffect } from 'react'

// Tracks scroll direction on the marketing/home page and toggles
// `data-nav-mode` on <body> so globals.css can style the nav as:
//   "top"      — at the page top, no chrome
//   "hidden"   — user is scrolling down
//   "revealed" — user just scrolled up, show floating pill nav
export function MarketingNavScroll() {
  useEffect(() => {
    let lastY = window.scrollY
    let ticking = false
    const DELTA = 8
    const TOP_BAND = 24

    const update = () => {
      const y = window.scrollY
      const dy = y - lastY

      if (y < TOP_BAND) {
        document.body.dataset.navMode = 'top'
      } else if (dy > DELTA) {
        document.body.dataset.navMode = 'hidden'
      } else if (dy < -DELTA) {
        document.body.dataset.navMode = 'revealed'
      }

      lastY = y
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    document.body.dataset.navMode = 'top'
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      delete document.body.dataset.navMode
    }
  }, [])

  return null
}
