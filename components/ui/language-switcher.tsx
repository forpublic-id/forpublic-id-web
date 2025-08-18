"use client";

import { useLocale } from 'next-intl';
import { Button } from './button';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'id', name: 'Indonesia', flag: '🇮🇩' },
  { code: 'en', name: 'English', flag: '🇺🇸' }
];

export function LanguageSwitcher() {
  const locale = useLocale();

  const handleLanguageChange = (newLocale: string) => {
    // Get current URL and replace locale
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    
    // Replace the locale in the pathname
    const segments = url.pathname.split('/').filter(Boolean);
    
    // If first segment is a locale, replace it, otherwise add locale
    if (segments.length > 0 && ['id', 'en'].includes(segments[0])) {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }
    
    url.pathname = '/' + segments.join('/');
    
    // Navigate to new URL
    window.location.href = url.toString();
  };

  const currentLanguage = languages.find(lang => lang.code === locale);

  return (
    <div className="relative group">
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-2 border-gray-200 hover:border-red-600 bg-transparent"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLanguage?.name}</span>
        <span className="sm:hidden">{currentLanguage?.flag}</span>
      </Button>
      
      <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-[140px]">
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg flex items-center gap-2 transition-colors ${
              locale === language.code ? 'bg-red-50 text-red-600' : 'text-gray-700'
            }`}
          >
            <span>{language.flag}</span>
            <span>{language.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}