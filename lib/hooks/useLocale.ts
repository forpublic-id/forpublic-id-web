'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useCallback, useMemo } from 'react'
import { supportedLocales, defaultLocale, type Locale } from '@/lib/constants'

export function useLocale() {
  const pathname = usePathname()
  const router = useRouter()

  const currentLocale = useMemo(() => {
    const segments = pathname.split('/')
    const localeSegment = segments[1]
    
    return supportedLocales.includes(localeSegment as Locale) 
      ? localeSegment 
      : defaultLocale
  }, [pathname])

  const switchLocale = useCallback(
    (newLocale: string) => {
      if (!supportedLocales.includes(newLocale as Locale)) {
        console.warn(`Unsupported locale: ${newLocale}`)
        return
      }

      const segments = pathname.split('/')
      const currentLocaleSegment = segments[1]
      
      let newPath: string
      
      if (supportedLocales.includes(currentLocaleSegment as Locale)) {
        // Replace existing locale
        segments[1] = newLocale
        newPath = segments.join('/')
      } else {
        // Add locale to path
        newPath = `/${newLocale}${pathname}`
      }
      
      router.push(newPath)
    },
    [pathname, router]
  )

  const getLocalizedPath = useCallback(
    (path: string, locale?: string) => {
      const targetLocale = locale || currentLocale
      return `/${targetLocale}${path.startsWith('/') ? path : `/${path}`}`
    },
    [currentLocale]
  )

  return { 
    currentLocale, 
    switchLocale, 
    getLocalizedPath,
    supportedLocales,
    defaultLocale
  }
}