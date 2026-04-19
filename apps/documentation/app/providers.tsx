'use client'

import { NextProvider } from 'fumadocs-core/framework/next'
import { type ThemeProviderProps, ThemeProvider as NextThemesProvider } from 'next-themes'

export interface ProvidersProps {
  children: React.ReactNode
  themeProps?: ThemeProviderProps
}

export const Providers = ({ children, themeProps }: ProvidersProps) => {
  return (
    <NextProvider>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </NextProvider>
  )
}
