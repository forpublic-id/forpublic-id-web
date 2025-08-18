import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  // For undefined locale, fallback to default locale
  if (!locale) {
    return {
      locale: 'id',
      messages: (await import(`./messages/id.json`)).default
    };
  }
  
  // Fallback for invalid locales
  if (!['id', 'en'].includes(locale)) {
    return {
      locale: 'id',
      messages: (await import(`./messages/id.json`)).default
    };
  }
  
  return {
    locale: locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});