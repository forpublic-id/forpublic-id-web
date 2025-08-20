import { Button } from '@/components/ui'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui'
import { Input } from '@/components/ui'
import { Header } from '@/components/layout'
import { Footer } from '@/components/layout'
import { StructuredData, PageHeader } from '@/components/common'
import {
  Mail,
  MapPin,
  Clock,
  Send,
  Github,
  Twitter,
  MessageSquare,
  Users,
} from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const locale = resolvedParams?.locale || 'id'
  const t = await getTranslations({ locale })

  return {
    title: `${t('contact.page.title')} - ForPublic.id`,
    description:
      locale === 'id'
        ? '📞 Hubungi tim ForPublic.id untuk pertanyaan, saran, atau kerjasama. Tim support 24/7 siap membantu Anda. Kontak via email, form, atau media sosial.'
        : '📞 Contact ForPublic.id team for questions, suggestions, or partnerships. 24/7 support team ready to help. Contact via email, form, or social media.',
    keywords:
      locale === 'id'
        ? 'kontak forpublic, hubungi kami, customer service, support tim, bantuan teknis'
        : 'contact forpublic, contact us, customer service, support team, technical help',
    openGraph: {
      title: `${t('contact.page.title')} - ForPublic.id`,
      description:
        locale === 'id'
          ? '📞 Hubungi tim ForPublic.id untuk pertanyaan, saran, atau kerjasama. Tim support 24/7 siap membantu Anda.'
          : '📞 Contact ForPublic.id team for questions, suggestions, or partnerships. 24/7 support team ready to help.',
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        'id-ID': '/id/contact',
        'en-US': '/en/contact',
      },
    },
  }
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params
  const locale = resolvedParams?.locale || 'id'
  const t = await getTranslations({ locale })

  return (
    <div className="min-h-screen bg-background">
      <StructuredData
        organization={{}}
        website={{
          description: t('contact.page.description'),
          inLanguage: locale === 'id' ? ['id-ID'] : ['en-US'],
        }}
      />
      <Header locale={locale} />

      {/* Page Header */}
      <PageHeader
        title={t('contact.hero.title')}
        subtitle={t('contact.hero.description')}
        showBackButton={true}
        backUrl={`/${locale}`}
        backText={t('notFound.backToHome')}
        locale={locale}
      />

      {/* Contact Methods */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <Card className="text-center hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>{t('contact.methods.email.title')}</CardTitle>
                <CardDescription>{t('contact.methods.email.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:hello@forpublic.id"
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  hello@forpublic.id
                </a>
                <p className="text-sm text-gray-500 mt-2">{t('contact.methods.email.response')}</p>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="text-center hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>{t('contact.methods.response.title')}</CardTitle>
                <CardDescription>{t('contact.methods.response.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-green-600 font-semibold text-lg">
                  {t('contact.methods.response.time')}
                </p>
                <p className="text-sm text-gray-500 mt-2">{t('contact.methods.response.note')}</p>
              </CardContent>
            </Card>

            {/* Community */}
            <Card className="text-center hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>{t('contact.methods.community.title')}</CardTitle>
                <CardDescription>{t('contact.methods.community.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://github.com/forpublic-id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://x.com/forpublicid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="w-6 h-6 text-red-600" />
                  <span>{t('contact.form.title')}</span>
                </CardTitle>
                <CardDescription>{t('contact.form.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.fields.name.label')}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder={t('contact.form.fields.name.placeholder')}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.fields.email.label')}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder={t('contact.form.fields.email.placeholder')}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.fields.subject.label')}
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="">{t('contact.form.fields.subject.placeholder')}</option>
                      <option value="general">{t('contact.form.fields.subject.options.general')}</option>
                      <option value="technical">{t('contact.form.fields.subject.options.technical')}</option>
                      <option value="partnership">{t('contact.form.fields.subject.options.partnership')}</option>
                      <option value="feedback">{t('contact.form.fields.subject.options.feedback')}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.fields.message.label')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder={t('contact.form.fields.message.placeholder')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-vertical"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {t('contact.form.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Office Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-6 h-6 text-red-600" />
                    <span>{t('contact.info.office.title')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">{t('contact.info.office.virtual.title')}</h4>
                    <p className="text-gray-600">{t('contact.info.office.virtual.description')}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{t('contact.info.office.coverage.title')}</h4>
                    <p className="text-gray-600">{t('contact.info.office.coverage.description')}</p>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Link */}
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-800">{t('contact.faq.title')}</CardTitle>
                  <CardDescription className="text-red-700">
                    {t('contact.faq.description')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-100" asChild>
                    <Link href={`/${locale}/faq`}>{t('contact.faq.button')}</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Working Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-6 h-6 text-red-600" />
                    <span>{t('contact.hours.title')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('contact.hours.weekdays')}</span>
                      <span className="font-medium">09:00 - 17:00 WIB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('contact.hours.weekend')}</span>
                      <span className="font-medium">{t('contact.hours.emailOnly')}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  )
}