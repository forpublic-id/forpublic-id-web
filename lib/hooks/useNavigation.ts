'use client'

import { useMemo } from 'react'
import { routes } from '@/lib/constants'

interface NavigationItem {
  href: string
  label: string
  section?: string
}

interface UseNavigationProps {
  locale: string
  translations?: {
    applications?: string
    features?: string
    about?: string
    contact?: string
  }
}

export function useNavigation({ locale, translations }: UseNavigationProps) {
  const navigationItems = useMemo((): NavigationItem[] => {
    const baseItems = [
      {
        href: `${routes.home(locale)}#applications`,
        label: translations?.applications || 'Applications',
        section: 'applications'
      },
      {
        href: `${routes.home(locale)}#features`,
        label: translations?.features || 'Features', 
        section: 'features'
      },
      {
        href: `${routes.home(locale)}#about`,
        label: translations?.about || 'About',
        section: 'about'
      }
    ]

    return baseItems
  }, [locale, translations])

  const getNavigationBySection = useMemo(() => {
    return (section: string) => navigationItems.find(item => item.section === section)
  }, [navigationItems])

  const getLocalizedRoute = useMemo(() => {
    return (routeName: keyof typeof routes) => {
      if (typeof routes[routeName] === 'function') {
        return (routes[routeName] as (locale: string) => string)(locale)
      }
      return routes[routeName]
    }
  }, [locale])

  return {
    navigationItems,
    getNavigationBySection,
    getLocalizedRoute,
    routes: {
      home: routes.home(locale),
      applications: routes.applications(locale),
      notFound: routes.notFound(locale)
    }
  }
}