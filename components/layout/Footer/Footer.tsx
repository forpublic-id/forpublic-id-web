import Image from 'next/image'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { Github, Twitter } from 'lucide-react'

interface FooterProps {
  locale: string
  variant?: 'full' | 'simple'
  className?: string
}

export default async function Footer({ locale, variant = 'full', className = '' }: FooterProps) {
  const t = await getTranslations({ locale })

  if (variant === 'simple') {
    return (
      <footer className={`bg-gray-900 text-white py-8 px-4 md:px-6 lg:px-8 ${className}`}>
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6">
              <Image
                src="/logo.svg"
                alt="ForPublic.id Logo"
                width={24}
                height={24}
                className="w-full h-full"
              />
            </div>
            <span className="text-lg font-bold">
              ForPublic<span className="text-red-600">.id</span>
            </span>
          </div>
          <p className="text-sm text-gray-300">
            {t('footer.copyright').replace('2024', new Date().getFullYear().toString())}
          </p>
        </div>
      </footer>
    )
  }

  return (
    <footer className={`bg-gray-900 text-white py-12 px-4 md:px-6 lg:px-8 ${className}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8">
                <Image
                  src="/logo.svg"
                  alt="ForPublic.id Logo"
                  width={32}
                  height={32}
                  className="w-full h-full"
                />
              </div>
              <span className="text-xl font-bold">
                ForPublic<span className="text-red-600">.id</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm">{t('footer.description')}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.sections.applications')}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="https://holiday.forpublic.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {t('footer.links.holidayCalendar')}
                </a>
              </li>
              <li>
                <Link
                  href={`/${locale}/applications`}
                  className="hover:text-white transition-colors"
                >
                  {t('footer.links.allApplications')}
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('footer.links.openData')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('footer.links.developmentInfo')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('footer.links.publicServices')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.sections.support')}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('footer.links.helpCenter')}
                </a>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="hover:text-white transition-colors">
                  {t('footer.links.contactUs')}
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('footer.links.privacyPolicy')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('footer.links.termsOfService')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.connect')}</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/forpublic-id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/forpublicid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-4 text-sm text-gray-300">
              <p>{t('footer.email')}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>{t('footer.copyright').replace('2024', new Date().getFullYear().toString())}</p>
        </div>
      </div>
    </footer>
  )
}
