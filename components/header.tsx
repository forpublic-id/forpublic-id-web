import { Button } from '@/components/ui/button'
import { LanguageSwitcherWrapper } from '@/components/ui/language-switcher-wrapper'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'

export default async function Header({ locale }: { locale: string }) {
  const t = await getTranslations({ locale })

  return (
    <header className="border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8">
            <Image
              src="/logo.svg"
              alt="ForPublic.id Logo"
              width={32}
              height={32}
              className="w-full h-full"
            />
          </div>
          <span className="text-xl font-bold text-gray-900">
            ForPublic<span className="text-red-600">.id</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#applications" className="text-gray-600 hover:text-red-600 transition-colors">
            {t('header.nav.applications')}
          </a>
          <a href="#features" className="text-gray-600 hover:text-red-600 transition-colors">
            {t('header.nav.features')}
          </a>
          <a href="#about" className="text-gray-600 hover:text-red-600 transition-colors">
            {t('header.nav.about')}
          </a>
          <LanguageSwitcherWrapper locale={locale} />
          <Button
            variant="outline"
            size="sm"
            className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
          >
            {t('header.nav.contact')}
          </Button>
        </nav>
      </div>
    </header>
  )
}
