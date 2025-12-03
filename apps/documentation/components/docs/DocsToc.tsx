'use client'

import { useEffect, useState } from 'react'
import type { Heading } from '@/libs/docs/utils'

interface DocsTocProps {
  headings: Heading[]
}

export const DocsToc = ({ headings }: DocsTocProps) => {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '0px 0px -80% 0px' },
    )

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  if (!headings || headings.length === 0) return null

  return (
    <div className="space-y-2">
      <p className="font-semibold text-sm mb-4">On this page</p>
      <ul className="space-y-2 text-sm">
        {headings
          .filter((heading) => heading.level > 1 && heading.level <= 3)
          .map((heading) => (
            <li key={heading.id} className={`${heading.level === 3 ? 'ml-4' : ''}`}>
              <a
                href={`#${heading.id}`}
                className={`block py-1 transition-colors hover:text-foreground ${
                  activeId === heading.id ? 'text-primary font-medium' : 'text-foreground'
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
      </ul>
    </div>
  )
}
