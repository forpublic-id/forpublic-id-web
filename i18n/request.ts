import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ locale }) => {
  // Validate locale and fallback to 'id' if invalid
  const validLocale: string = ['id', 'en'].includes(locale as string) ? (locale as string) : 'id'

  const messages = (await import(`./messages/${validLocale}.json`)).default

  return {
    locale: validLocale,
    messages,
  }
})
