import { Button } from '@/components/ui'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui'
import { Input } from '@/components/ui'
import { Badge } from '@/components/ui'
import { Header } from '@/components/layout'
import { Footer } from '@/components/layout'
import { StructuredData } from '@/components/common'
import { FAQ } from '@/components/sections'
import {
  Database,
  Building2,
  Users,
  GraduationCap,
  Heart,
  TrendingUp,
  CheckCircle,
  Smartphone,
  Shield,
  Zap,
  Plus,
  Mail,
} from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const locale = resolvedParams?.locale || 'id'
  const t = await getTranslations({ locale })

  return {
    title: `${t('hero.title')} ${t('hero.titleHighlight')} - ForPublic.id`,
    description: locale === 'id' 
      ? '🎯 Tools digital GRATIS untuk masyarakat Indonesia. Akses data publik, layanan pemerintah & transparansi. 100% gratis, mobile-friendly, dwi bahasa.'
      : '🎯 FREE digital tools for Indonesian communities. Access public data, government services & transparency. 100% free, mobile-friendly, bilingual.',
    keywords: locale === 'id' 
      ? 'aplikasi publik, layanan digital, data terbuka Indonesia, transparansi publik, teknologi untuk masyarakat'
      : 'public applications, digital services, open data Indonesia, public transparency, technology for communities',
    openGraph: {
      title: `${t('hero.title')} ${t('hero.titleHighlight')} - ForPublic.id`,
      description: locale === 'id' 
        ? '🎯 Tools digital GRATIS untuk masyarakat Indonesia. Akses data publik, layanan pemerintah & transparansi. 100% gratis, mobile-friendly, dwi bahasa.'
        : '🎯 FREE digital tools for Indonesian communities. Access public data, government services & transparency. 100% free, mobile-friendly, bilingual.',
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'ForPublic.id - Digital Solutions for Public Good',
        },
      ],
    },
    twitter: {
      title: `${t('hero.title')} ${t('hero.titleHighlight')} - ForPublic.id`,
      description: locale === 'id' 
        ? '🎯 Tools digital GRATIS untuk masyarakat Indonesia. Akses data publik, layanan pemerintah & transparansi. 100% gratis, mobile-friendly, dwi bahasa.'
        : '🎯 FREE digital tools for Indonesian communities. Access public data, government services & transparency. 100% free, mobile-friendly, bilingual.',
      images: ['/og-image.png'],
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'id-ID': '/id',
        'en-US': '/en',
      },
    },
  }
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params
  const locale = resolvedParams?.locale || 'id'
  const t = await getTranslations({ locale })

  // Generate FAQ schema manually for server component
  const faqItems = t.raw('faq.items') as Array<{ question: string; answer: string }>
  const faqSchema = {
    mainEntity: faqItems.map(faq => ({
      '@type': 'Question' as const,
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer' as const,
        text: faq.answer
      }
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      <StructuredData 
        organization={{}}
        website={{
          description: t('hero.description'),
          inLanguage: locale === 'id' ? ['id-ID'] : ['en-US']
        }}
        faq={faqSchema}
      />
      <Header locale={locale} />

      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-4 bg-red-50 text-red-700 border-red-200">
            {t('hero.badge')}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            {t('hero.title')}{' '}
            <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              {t('hero.titleHighlight')}
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 bg-red-600 hover:bg-red-700 hover:shadow-lg transition-all duration-300 text-white"
              asChild
            >
              <Link href={`/${locale}/applications`}>{t('hero.cta.explore')}</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 border-gray-300 text-gray-700 hover:bg-gray-50 hover:shadow-lg transition-all duration-300 bg-transparent"
            >
              {t('hero.cta.learnMore')}
            </Button>
          </div>
        </div>
      </section>

      {/* Application Categories */}
      <section id="applications" className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {t('applications.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('applications.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500 cursor-pointer">
              <CardHeader>
                <Database className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>{t('applications.categories.openData.title')}</CardTitle>
                <CardDescription>
                  {t('applications.categories.openData.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  {t('applications.categories.openData.content')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500 cursor-pointer">
              <CardHeader>
                <Building2 className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>{t('applications.categories.developmentInfo.title')}</CardTitle>
                <CardDescription>
                  {t('applications.categories.developmentInfo.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  {t('applications.categories.developmentInfo.content')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500 cursor-pointer">
              <CardHeader>
                <Users className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>{t('applications.categories.publicServices.title')}</CardTitle>
                <CardDescription>
                  {t('applications.categories.publicServices.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  {t('applications.categories.publicServices.content')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500 cursor-pointer">
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-orange-600 mb-4" />
                <CardTitle>{t('applications.categories.education.title')}</CardTitle>
                <CardDescription>
                  {t('applications.categories.education.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  {t('applications.categories.education.content')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-red-500 cursor-pointer">
              <CardHeader>
                <Heart className="w-12 h-12 text-red-600 mb-4" />
                <CardTitle>{t('applications.categories.health.title')}</CardTitle>
                <CardDescription>{t('applications.categories.health.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  {t('applications.categories.health.content')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-teal-500 cursor-pointer">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-teal-600 mb-4" />
                <CardTitle>{t('applications.categories.economy.title')}</CardTitle>
                <CardDescription>
                  {t('applications.categories.economy.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  {t('applications.categories.economy.content')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {locale === 'id' ? (
                <>
                  Mengapa Memilih ForPublic<span className="text-red-600">.id</span>
                </>
              ) : (
                <>
                  Why Choose ForPublic<span className="text-red-600">.id</span>
                </>
              )}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('features.description')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {t('features.items.free.title')}
              </h3>
              <p className="text-gray-600">{t('features.items.free.description')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {t('features.items.easyToUse.title')}
              </h3>
              <p className="text-gray-600">{t('features.items.easyToUse.description')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {t('features.items.trustedData.title')}
              </h3>
              <p className="text-gray-600">{t('features.items.trustedData.description')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {t('features.items.responsive.title')}
              </h3>
              <p className="text-gray-600">{t('features.items.responsive.description')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {t('features.items.fastReliable.title')}
              </h3>
              <p className="text-gray-600">{t('features.items.fastReliable.description')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {t('features.items.continuousGrowth.title')}
              </h3>
              <p className="text-gray-600">{t('features.items.continuousGrowth.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {t('comingSoon.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('comingSoon.description')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="relative overflow-hidden border-l-4 border-l-blue-300 cursor-pointer hover:shadow-lg transition-shadow">
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                  {t('comingSoon.apps.smartCity.status')}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle>{t('comingSoon.apps.smartCity.title')}</CardTitle>
                <CardDescription>{t('comingSoon.apps.smartCity.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{t('comingSoon.apps.smartCity.content')}</p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-l-4 border-l-green-300 cursor-pointer hover:shadow-lg transition-shadow">
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-green-50 text-green-700">
                  {t('comingSoon.apps.communityForum.status')}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle>{t('comingSoon.apps.communityForum.title')}</CardTitle>
                <CardDescription>{t('comingSoon.apps.communityForum.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  {t('comingSoon.apps.communityForum.content')}
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-l-4 border-l-orange-300 cursor-pointer hover:shadow-lg transition-shadow">
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-orange-50 text-orange-700">
                  {t('comingSoon.apps.emergencyAlerts.status')}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle>{t('comingSoon.apps.emergencyAlerts.title')}</CardTitle>
                <CardDescription>
                  {t('comingSoon.apps.emergencyAlerts.description')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  {t('comingSoon.apps.emergencyAlerts.content')}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Newsletter Subscription */}
          <div className="max-w-md mx-auto">
            <Card className="border-gray-200">
              <CardHeader className="text-center">
                <CardTitle className="text-gray-900">{t('comingSoon.newsletter.title')}</CardTitle>
                <CardDescription>{t('comingSoon.newsletter.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Input
                    placeholder={t('comingSoon.newsletter.placeholder')}
                    type="email"
                    className="border-gray-200 focus:border-red-500"
                  />
                  <Button className="bg-red-600 hover:bg-red-700">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            {locale === 'id' ? (
              <>
                Tentang ForPublic<span className="text-red-600">.id</span>
              </>
            ) : (
              <>
                About ForPublic<span className="text-red-600">.id</span>
              </>
            )}
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              <strong className="text-red-600">{t('about.vision')}</strong> {t('about.visionText')}
            </p>
            <p>{t('about.content1')}</p>
            <p>{t('about.content2')}</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        title={t('faq.title')}
        subtitle={t('faq.subtitle')}
        items={faqItems}
      />

      <Footer locale={locale} />
    </div>
  )
}
