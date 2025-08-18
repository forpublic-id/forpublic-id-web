import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  // Always ensure we have a valid locale and messages
  const validLocale = (locale && ['id', 'en'].includes(locale)) ? locale : 'id'
  const messages = (await import(`./messages/${validLocale}.json`)).default
  
  return {
    locale: validLocale,
    messages
  };
});