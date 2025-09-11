'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { Button } from '@/components/ui' // Not used after hiding FAQ button
import { LanguageSwitcherWrapper } from '@/components/ui/language-switcher-wrapper';

interface NavigationProps {
  locale: string;
  translations: {
    applications: string;
    features: string;
    about: string;
    contact: string;
  };
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

function NavLink({ href, children, isActive, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`transition-colors hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 rounded-sm px-1 py-1 ${
        isActive ? 'text-red-600 font-medium' : 'text-gray-600'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
}

export default function Navigation({ locale, translations }: NavigationProps) {
  const pathname = usePathname();

  const isActivePage = (path: string) => {
    return pathname.includes(path);
  };

  return (
    <nav
      className="hidden md:flex items-center space-x-6"
      role="navigation"
      aria-label="Main navigation"
    >
      <NavLink
        href={`/${locale}/applications`}
        isActive={isActivePage('applications')}
      >
        {translations.applications}
      </NavLink>
      <NavLink href={`/${locale}/features`} isActive={isActivePage('features')}>
        {translations.features}
      </NavLink>
      <NavLink href={`/${locale}/about`} isActive={isActivePage('about')}>
        {translations.about}
      </NavLink>
      <NavLink href={`/${locale}/contact`} isActive={isActivePage('contact')}>
        {translations.contact}
      </NavLink>
      <LanguageSwitcherWrapper locale={locale} />
      {/* FAQ Button disembunyikan
      <Button
        variant="outline"
        size="sm"
        className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent focus:ring-red-600"
        asChild
      >
        <Link href={`/${locale}/faq`}>FAQ</Link>
      </Button>
      */}
    </nav>
  );
}
