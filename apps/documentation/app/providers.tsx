'use client'

import { FlexiUIProvider } from '@flexi-ui/system'
import { type ThemeProviderProps, ThemeProvider as NextThemesProvider } from 'next-themes'
import { useRouter } from 'next/navigation'

export interface ProvidersProps {
  children: React.ReactNode
  themeProps?: ThemeProviderProps
}

export const Providers = ({ children, themeProps }: ProvidersProps) => {
  const router = useRouter()
  return (
    <FlexiUIProvider navigate={router.push} >
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </FlexiUIProvider>
  )
}
