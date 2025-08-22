import { getTranslations } from 'next-intl/server'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ChartNoAxesCombined, DollarSign, MapPin, Check, ExternalLink } from 'lucide-react'

import { Header } from '@/components/layout/Header'
import { Hero } from '@/components/sections/Hero'
import { ApplicationCategories } from '@/components/sections/ApplicationCategories'
import { Features } from '@/components/sections/Features'
import { About } from '@/components/sections/About'
import { FAQ } from '@/components/sections/FAQ'
import { Footer } from '@/components/layout/Footer'

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale })

  const faqItems = t.raw('faq.items')

  return (
    <div className="min-h-screen bg-gray-50">
      <Header locale={locale} />

      {/* Hero Section */}
      <Hero
        locale={locale}
        title={t('hero.title')}
        titleHighlight={t('hero.titleHighlight')}
        description={t('hero.description')}
        badge={t('hero.badge')}
        ctaPrimary={t('hero.cta.explore')}
        ctaSecondary={t('hero.cta.learnMore')}
      />

      {/* Application Categories Section */}
      <ApplicationCategories
        title={t('applications.title')}
        description={t('applications.description')}
        categories={t.raw('applications.categories')}
      />

      {/* Features Section */}
      <Features
        locale={locale}
        description={t('features.description')}
        features={t.raw('features.items')}
      />

      {/* About Section */}
      <About locale={locale} translations={t.raw('about')} />

      {/* FAQ Section */}
      <FAQ title={t('faq.title')} subtitle={t('faq.subtitle')} items={faqItems} locale={locale} />

      {/* Latest Applications Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {t('newApplications.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('newApplications.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500 flex flex-col h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <ChartNoAxesCombined className="w-6 h-6 text-blue-600" />
                  </div>
                  <Badge variant="outline" className="text-green-600">
                    <Check className="w-3 h-3 mr-1" />
                    {t('newApplications.apps.budget.status')}
                  </Badge>
                </div>
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs text-blue-600 border-current">
                    {t('applications.categories.openData.title')}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{t('newApplications.apps.budget.title')}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {t('newApplications.apps.budget.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-sm text-gray-600 mb-4 flex-grow">
                  {t('newApplications.apps.budget.content')}
                </p>
                <Button
                  variant="default"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  asChild
                >
                  <a href="https://budget.forpublic.id" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t('applications.page.app.openApp')}
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500 flex flex-col h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <Badge variant="outline" className="text-green-600">
                    <Check className="w-3 h-3 mr-1" />
                    {t('newApplications.apps.salary.status')}
                  </Badge>
                </div>
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs text-green-600 border-current">
                    {t('applications.categories.openData.title')}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{t('newApplications.apps.salary.title')}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {t('newApplications.apps.salary.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-sm text-gray-600 mb-4 flex-grow">
                  {t('newApplications.apps.salary.content')}
                </p>
                <Button
                  variant="default"
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  asChild
                >
                  <a href="https://salary.forpublic.id" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t('applications.page.app.openApp')}
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 flex flex-col h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <Badge variant="outline" className="text-green-600">
                    <Check className="w-3 h-3 mr-1" />
                    {t('newApplications.apps.plan.status')}
                  </Badge>
                </div>
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs text-orange-600 border-current">
                    {t('applications.categories.developmentInfo.title')}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{t('newApplications.apps.plan.title')}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {t('newApplications.apps.plan.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-sm text-gray-600 mb-4 flex-grow">
                  {t('newApplications.apps.plan.content')}
                </p>
                <Button
                  variant="default"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                  asChild
                >
                  <a href="https://plan.forpublic.id" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t('applications.page.app.openApp')}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  )
}
