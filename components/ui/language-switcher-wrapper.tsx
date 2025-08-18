'use client'

import { LanguageSwitcher } from './language-switcher'

export function LanguageSwitcherWrapper({ locale }: { locale: string }) {
  return <LanguageSwitcher currentLocale={locale} />
}
