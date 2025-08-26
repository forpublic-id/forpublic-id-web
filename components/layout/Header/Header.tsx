import { getTranslations } from 'next-intl/server'
import Logo from './Logo'
import Navigation from './Navigation'
import MobileMenu from './MobileMenu'

export default async function Header({ locale }: { locale: string }) {
  const t = await getTranslations({ locale })

  const translations = {
    applications: t('header.nav.applications'),
    features: t('header.nav.features'),
    about: t('header.nav.about'),
    contact: t('header.nav.contact'),
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm" role="banner">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Logo locale={locale} size="md" />
        <div className="flex items-center space-x-4">
          <Navigation locale={locale} translations={translations} />
          <MobileMenu locale={locale} translations={translations} />
        </div>
      </div>
    </header>
  )
}
