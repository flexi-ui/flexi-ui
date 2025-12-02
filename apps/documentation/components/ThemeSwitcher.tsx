'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@flexi-ui/button'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button isIconOnly size="sm" variant="light" aria-label="Theme switcher loading">
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      isIconOnly
      size="sm"
      variant="light"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  )
}
