'use client'

import { FlexiUIProvider } from '@flexi-ui/system'
import { NextProvider } from 'fumadocs-core/framework/next'
import { type ThemeProviderProps, ThemeProvider as NextThemesProvider } from 'next-themes'
import { useRouter } from 'next/navigation'

export interface ProvidersProps {
  children: React.ReactNode
  themeProps?: ThemeProviderProps
}

export const Providers = ({ children, themeProps }: ProvidersProps) => {
  const router = useRouter()
  return (
    <NextProvider>
      <FlexiUIProvider navigate={router.push}>
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </FlexiUIProvider>
    </NextProvider>
  )
}
