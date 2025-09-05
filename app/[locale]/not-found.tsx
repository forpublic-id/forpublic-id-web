import { Button } from '@/components/ui'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'
import { Home, Search, ArrowLeft, AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import BackButton from '@/components/common/BackButton'
import { getTranslations } from 'next-intl/server'
import { Header } from '@/components/layout'
import { Footer } from '@/components/layout'

interface NotFoundProps {
  params: Promise<{ locale: string }>
}

export default async function LocaleNotFound({ params }: NotFoundProps) {
  const resolvedParams = await params
  const locale = resolvedParams?.locale || 'id'
  const t = await getTranslations({ locale })

  return (
    <div className="min-h-screen bg-background">
      <Header locale={locale} />

      {/* 404 Content */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center max-w-4xl">
          {/* 404 Icon */}
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-12 h-12 text-red-600" />
          </div>

          {/* 404 Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gray-900">
            4<span className="text-red-600">0</span>4
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            {t('notFound.title')}
          </h2>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('notFound.description')}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              asChild
              className="text-lg px-8 bg-red-600 hover:bg-red-700 text-white"
            >
              <Link href={`/${locale}`}>
                <Home className="w-5 h-5 mr-2" />
                {t('notFound.backToHome')}
              </Link>
            </Button>
            <BackButton label={t('notFound.previousPage')} />
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">
                  {t('notFound.quickLinks.applications.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  {t('notFound.quickLinks.applications.description')}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/${locale}#applications`}>
                    <Search className="w-4 h-4 mr-2" />
                    {t('notFound.quickLinks.applications.action')}
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">{t('notFound.quickLinks.about.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  {t('notFound.quickLinks.about.description')}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/${locale}#about`}>
                    <Search className="w-4 h-4 mr-2" />
                    {t('notFound.quickLinks.about.action')}
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
              <CardHeader className="text-center">
                <CardTitle className="text-lg">{t('notFound.quickLinks.contact.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  {t('notFound.quickLinks.contact.description')}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/${locale}#contact`}>
                    <Search className="w-4 h-4 mr-2" />
                    {t('notFound.quickLinks.contact.action')}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer locale={locale} variant="simple" className="mt-auto" />
    </div>
  )
}
