'use client'

import { Button } from '@/components/ui'
import { LanguageSwitcherWrapper } from '@/components/ui/language-switcher-wrapper'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface MobileMenuProps {
  locale: string
  translations: {
    applications: string
    features: string
    about: string
    contact: string
  }
}

interface MobileNavLinkProps {
  href: string
  children: React.ReactNode
  isActive?: boolean
  onClick: () => void
}

function MobileNavLink({ href, children, isActive, onClick }: MobileNavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block px-4 py-3 text-lg font-medium transition-colors hover:bg-red-50 hover:text-red-600 focus:outline-none focus:bg-red-50 focus:text-red-600 ${
        isActive ? 'text-red-600 bg-red-50' : 'text-gray-900'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  )
}

export default function MobileMenu({ locale, translations }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActivePage = (path: string) => {
    return pathname.includes(path)
  }

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  // Close menu when pathname changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-md text-gray-600 hover:text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 transition-colors"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <Menu className="h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-80 max-w-sm bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <button
            onClick={closeMenu}
            className="p-2 rounded-md text-gray-600 hover:text-red-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <nav className="py-2" role="navigation" aria-label="Mobile navigation">
          <MobileNavLink
            href={`/${locale}/applications`}
            isActive={isActivePage('applications')}
            onClick={closeMenu}
          >
            {translations.applications}
          </MobileNavLink>
          <MobileNavLink
            href={`/${locale}/features`}
            isActive={isActivePage('features')}
            onClick={closeMenu}
          >
            {translations.features}
          </MobileNavLink>
          <MobileNavLink
            href={`/${locale}/about`}
            isActive={isActivePage('about')}
            onClick={closeMenu}
          >
            {translations.about}
          </MobileNavLink>
          <MobileNavLink
            href={`/${locale}/contact`}
            isActive={isActivePage('contact')}
            onClick={closeMenu}
          >
            {translations.contact}
          </MobileNavLink>

          <div className="border-t my-4" />

          {/* Language Switcher */}
          <div className="px-4 py-2">
            <span className="block text-sm font-medium text-gray-500 mb-2">Language / Bahasa</span>
            <LanguageSwitcherWrapper locale={locale} />
          </div>

          <div className="border-t my-4" />

          {/* FAQ Button */}
          <div className="px-4 py-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent focus:ring-red-600"
              asChild
              onClick={closeMenu}
            >
              <Link href={`/${locale}/faq`}>FAQ</Link>
            </Button>
          </div>
        </nav>
      </div>
    </>
  )
}
