import { supportedLocales, defaultLocale } from '@/lib/constants'

export type Locale = typeof supportedLocales[number]
export type DefaultLocale = typeof defaultLocale

export interface LocalizedString {
  id: string
  en: string
}

export interface LocaleConfig {
  locale: Locale
  label: string
  flag: string
  dir: 'ltr' | 'rtl'
}

export interface TranslationFunction {
  (key: string): string
}

export interface NavigationItem {
  href: string
  label: string
  section?: string
}

export interface RouteParams {
  locale: Locale
  [key: string]: string | string[] | undefined
}

export interface LocaleContextType {
  currentLocale: Locale
  switchLocale: (locale: Locale) => void
  getLocalizedPath: (path: string, locale?: Locale) => string
  supportedLocales: readonly Locale[]
  defaultLocale: DefaultLocale
}