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
        <Sun className="size-5" />
      </Button>
    )
  }

  return (
    <Button
      isIconOnly
      radius="full"
      variant="light"
      color="default"
      onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </Button>
  )
}
