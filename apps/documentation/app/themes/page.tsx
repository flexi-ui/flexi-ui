'use client'

import { useState, useMemo } from 'react'
import { Button } from '@flexi-ui/button'
import { Input } from '@flexi-ui/input'
import { Card } from '@/components/Card'
import { Spinner } from '@flexi-ui/spinner'
import { generateConfigFromColor } from '@flexi-ui/theme'
import { Copy, Check, Download, RefreshCw, Palette } from 'lucide-react'

export default function ThemesPage() {
  const [primaryColor, setPrimaryColor] = useState('#761AE8')
  const [secondaryColor, setSecondaryColor] = useState('#06B6D4')
  const [copied, setCopied] = useState(false)
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light')

  // Generate theme config from colors
  const themeConfig = useMemo(() => {
    try {
      return generateConfigFromColor(primaryColor, {
        defaultTheme: themeMode,
        additionalColors: {
          secondary: secondaryColor,
        },
      })
    } catch (error) {
      console.error('Error generating theme:', error)
      return null
    }
  }, [primaryColor, secondaryColor, themeMode])

  // Generate theme code string
  const themeCode = useMemo(() => {
    if (!themeConfig) return ''

    return `import { flexiui } from '@flexi-ui/theme'
import { generateConfigFromColor } from '@flexi-ui/theme'

const themeConfig = generateConfigFromColor('${primaryColor}', {
  defaultTheme: '${themeMode}',
  additionalColors: {
    secondary: '${secondaryColor}',
  },
})

export default flexiui(themeConfig)`
  }, [themeConfig, primaryColor, secondaryColor, themeMode])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(themeCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  const handleDownload = () => {
    const blob = new Blob([themeCode], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'flexiui-theme.ts'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleReset = () => {
    setPrimaryColor('#761AE8')
    setSecondaryColor('#06B6D4')
    setThemeMode('light')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-divider">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/5 to-primary-500/10" />
        <div className="relative container mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800">
              <Palette className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Theme Generator</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Create Your Perfect Theme
            </h1>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              Customize your FlexiUI theme in real-time. Adjust colors, preview components, and
              export your configuration.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Controls Panel */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Theme Settings</h2>

              {/* Primary Color */}
              <div className="space-y-2 mb-6">
                <label className="text-sm font-medium text-foreground">Primary Color</label>
                <div className="flex gap-3 items-center">
                  <div
                    className="w-12 h-12 rounded-lg border-2 border-default-200 cursor-pointer"
                    style={{ backgroundColor: primaryColor }}
                  />
                  <Input
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="flex-1"
                  />
                  <Input
                    type="text"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="w-24 font-mono text-sm"
                  />
                </div>
              </div>

              {/* Secondary Color */}
              <div className="space-y-2 mb-6">
                <label className="text-sm font-medium text-foreground">Secondary Color</label>
                <div className="flex gap-3 items-center">
                  <div
                    className="w-12 h-12 rounded-lg border-2 border-default-200 cursor-pointer"
                    style={{ backgroundColor: secondaryColor }}
                  />
                  <Input
                    type="color"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="flex-1"
                  />
                  <Input
                    type="text"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="w-24 font-mono text-sm"
                  />
                </div>
              </div>

              {/* Theme Mode */}
              <div className="space-y-2 mb-6">
                <label className="text-sm font-medium text-foreground">Default Theme</label>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant={themeMode === 'light' ? 'solid' : 'bordered'}
                    color={themeMode === 'light' ? 'primary' : 'default'}
                    onPress={() => setThemeMode('light')}
                    className="flex-1"
                  >
                    Light
                  </Button>
                  <Button
                    size="sm"
                    variant={themeMode === 'dark' ? 'solid' : 'bordered'}
                    color={themeMode === 'dark' ? 'primary' : 'default'}
                    onPress={() => setThemeMode('dark')}
                    className="flex-1"
                  >
                    Dark
                  </Button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-4 border-t border-divider">
                <Button
                  size="sm"
                  variant="bordered"
                  onPress={handleReset}
                  startContent={<RefreshCw className="h-4 w-4" />}
                  className="flex-1"
                >
                  Reset
                </Button>
                <Button
                  size="sm"
                  variant="bordered"
                  onPress={handleCopy}
                  startContent={
                    copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />
                  }
                  className="flex-1"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </Button>
                <Button
                  size="sm"
                  variant="solid"
                  color="primary"
                  onPress={handleDownload}
                  startContent={<Download className="h-4 w-4" />}
                  className="flex-1"
                >
                  Export
                </Button>
              </div>
            </Card>

            {/* Color Preview */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Color Preview</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded border border-default-200"
                    style={{ backgroundColor: primaryColor }}
                  />
                  <span className="text-sm text-foreground">Primary</span>
                  <span className="ml-auto text-xs font-mono text-foreground-400">
                    {primaryColor}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded border border-default-200"
                    style={{ backgroundColor: secondaryColor }}
                  />
                  <span className="text-sm text-foreground">Secondary</span>
                  <span className="ml-auto text-xs font-mono text-foreground-400">
                    {secondaryColor}
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Component Preview */}
            <Card className="p-8">
              <h2 className="text-xl font-semibold mb-6">Live Preview</h2>
              <div className="space-y-6">
                {/* Buttons Preview */}
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-foreground">Buttons</h3>
                  <div className="flex flex-wrap gap-3">
                    <Button color="primary" variant="solid">
                      Primary
                    </Button>
                    <Button color="secondary" variant="solid">
                      Secondary
                    </Button>
                    <Button color="primary" variant="bordered">
                      Bordered
                    </Button>
                    <Button color="primary" variant="light">
                      Light
                    </Button>
                    <Button color="primary" variant="flat">
                      Flat
                    </Button>
                  </div>
                </div>

                {/* Input Preview */}
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-foreground">Input</h3>
                  <Input
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    description="We'll never share your email"
                  />
                </div>

                {/* Card Preview */}
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-foreground">Card</h3>
                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Card Title</h4>
                    <p className="text-sm text-foreground">
                      This is a preview of how your theme will look with different components.
                    </p>
                  </Card>
                </div>

                {/* Spinner Preview */}
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-foreground">Spinner</h3>
                  <div className="flex gap-4">
                    <Spinner color="primary" />
                    <Spinner color="secondary" />
                    <Spinner color="success" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Generated Code */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Generated Theme Code</h2>
              <pre className="p-4 rounded-lg bg-default-100 dark:bg-default-50 overflow-x-auto text-sm font-mono">
                <code>{themeCode}</code>
              </pre>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
