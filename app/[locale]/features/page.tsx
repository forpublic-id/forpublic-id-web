import { Button } from '@/components/ui'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui'
import { Header } from '@/components/layout'
import { Footer } from '@/components/layout'
import { StructuredData, PageHeader } from '@/components/common'
import {
  CheckCircle,
  Smartphone,
  Shield,
  Zap,
  Globe,
  Lock,
  Users,
  TrendingUp,
  Heart,
  ArrowRight,
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
    title: `${t('featuresPage.page.title')} - ForPublic.id`,
    description:
      locale === 'id'
        ? '🚀 Temukan fitur-fitur unggulan ForPublic.id: aplikasi gratis, data terpercaya, mobile-friendly, keamanan terjamin, dan akses 24/7 untuk transparansi publik.'
        : '🚀 Discover ForPublic.id key features: free applications, trusted data, mobile-friendly, guaranteed security, and 24/7 access for public transparency.',
    keywords:
      locale === 'id'
        ? 'fitur unggulan, aplikasi gratis, data terpercaya, mobile friendly, keamanan data, transparansi publik'
        : 'key features, free applications, trusted data, mobile friendly, data security, public transparency',
    openGraph: {
      title: `${t('featuresPage.page.title')} - ForPublic.id`,
      description:
        locale === 'id'
          ? '🚀 Temukan fitur-fitur unggulan ForPublic.id: aplikasi gratis, data terpercaya, mobile-friendly, keamanan terjamin, dan akses 24/7 untuk transparansi publik.'
          : '🚀 Discover ForPublic.id key features: free applications, trusted data, mobile-friendly, guaranteed security, and 24/7 access for public transparency.',
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/features`,
      languages: {
        'id-ID': '/id/features',
        'en-US': '/en/features',
      },
    },
  }
}

export default async function FeaturesPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params
  const locale = resolvedParams?.locale || 'id'
  const t = await getTranslations({ locale })

  const coreFeatures = [
    {
      icon: CheckCircle,
      color: 'green',
      title: locale === 'id' ? 'Sepenuhnya Gratis' : 'Completely Free',
      description:
        locale === 'id'
          ? 'Semua aplikasi dan layanan tersedia tanpa biaya, tanpa iklan, tanpa langganan.'
          : 'All applications and services available at no cost, no ads, no subscriptions.',
    },
    {
      icon: Smartphone,
      color: 'blue',
      title: locale === 'id' ? 'Mobile-Friendly' : 'Mobile-Friendly',
      description:
        locale === 'id'
          ? 'Desain responsif yang optimal di semua perangkat: desktop, tablet, dan smartphone.'
          : 'Responsive design optimized for all devices: desktop, tablet, and smartphone.',
    },
    {
      icon: Shield,
      color: 'red',
      title: locale === 'id' ? 'Data Terpercaya' : 'Trusted Data',
      description:
        locale === 'id'
          ? 'Semua data bersumber dari instansi pemerintah resmi dan diverifikasi secara berkala.'
          : 'All data sourced from official government agencies and regularly verified.',
    },
    {
      icon: Zap,
      color: 'yellow',
      title: locale === 'id' ? 'Cepat & Handal' : 'Fast & Reliable',
      description:
        locale === 'id'
          ? 'Performa tinggi dengan uptime 99.9% dan loading time di bawah 3 detik.'
          : 'High performance with 99.9% uptime and loading time under 3 seconds.',
    },
    {
      icon: Globe,
      color: 'indigo',
      title: locale === 'id' ? 'Akses Global' : 'Global Access',
      description:
        locale === 'id'
          ? 'Dapat diakses dari mana saja, kapan saja, dengan dukungan multi-bahasa.'
          : 'Accessible from anywhere, anytime, with multi-language support.',
    },
    {
      icon: Lock,
      color: 'purple',
      title: locale === 'id' ? 'Keamanan Terjamin' : 'Security Guaranteed',
      description:
        locale === 'id'
          ? 'Enkripsi end-to-end, privacy-first approach, dan perlindungan data pengguna.'
          : 'End-to-end encryption, privacy-first approach, and user data protection.',
    },
  ]

  const benefits = [
    {
      icon: Users,
      title: locale === 'id' ? 'Untuk Masyarakat' : 'For Community',
      description:
        locale === 'id'
          ? 'Dikembangkan khusus untuk kebutuhan masyarakat Indonesia dalam mengakses informasi publik.'
          : 'Specifically developed for Indonesian community needs in accessing public information.',
    },
    {
      icon: TrendingUp,
      title: locale === 'id' ? 'Terus Berkembang' : 'Continuously Growing',
      description:
        locale === 'id'
          ? 'Platform terus dikembangkan dengan fitur baru dan peningkatan berdasarkan feedback pengguna.'
          : 'Platform continuously developed with new features and improvements based on user feedback.',
    },
    {
      icon: Heart,
      title: locale === 'id' ? 'Non-Profit' : 'Non-Profit',
      description:
        locale === 'id'
          ? 'Dijalankan dengan semangat gotong royong untuk kepentingan bersama, bukan keuntungan komersial.'
          : 'Run with the spirit of mutual cooperation for common interests, not commercial profit.',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <StructuredData
        organization={{}}
        website={{
          description: t('featuresPage.page.description'),
          inLanguage: locale === 'id' ? ['id-ID'] : ['en-US'],
        }}
      />
      <Header locale={locale} />

      {/* Page Header */}
      <PageHeader
        title={t('featuresPage.hero.title')}
        subtitle={t('featuresPage.hero.description')}
        showBackButton={true}
        backUrl={`/${locale}`}
        backText={t('notFound.backToHome')}
        locale={locale}
      />

      {/* Core Features */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {locale === 'id' ? 'Fitur Inti Platform' : 'Core Platform Features'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {locale === 'id'
                ? 'Setiap fitur dirancang khusus untuk memberikan pengalaman terbaik dalam mengakses informasi publik.'
                : 'Every feature is specifically designed to provide the best experience in accessing public information.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {coreFeatures.map((feature, index) => {
              const Icon = feature.icon
              const colorClasses = {
                green: 'bg-green-100 text-green-600 border-l-green-500',
                blue: 'bg-blue-100 text-blue-600 border-l-blue-500',
                red: 'bg-red-100 text-red-600 border-l-red-500',
                yellow: 'bg-yellow-100 text-yellow-600 border-l-yellow-500',
                indigo: 'bg-indigo-100 text-indigo-600 border-l-indigo-500',
                purple: 'bg-purple-100 text-purple-600 border-l-purple-500',
              }

              return (
                <Card
                  key={index}
                  className={`hover:shadow-lg transition-all duration-300 border-l-4 ${colorClasses[feature.color as keyof typeof colorClasses].split(' ')[2]}`}
                >
                  <CardHeader>
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${colorClasses[feature.color as keyof typeof colorClasses].split(' ').slice(0, 2).join(' ')}`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-center">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Benefits Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                {locale === 'id' ? 'Mengapa Memilih Kami?' : 'Why Choose Us?'}
              </h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Technology & Stats */}
            <div className="space-y-8">
              <Card className="p-6 bg-gradient-to-r from-red-500 to-blue-600 text-white">
                <CardContent className="text-center">
                  <h4 className="text-xl font-bold mb-6">
                    {locale === 'id' ? 'Platform Statistics' : 'Platform Statistics'}
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-2xl font-bold mb-1">10+</div>
                      <p className="text-sm opacity-90">{locale === 'id' ? 'Apps' : 'Apps'}</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold mb-1">99.9%</div>
                      <p className="text-sm opacity-90">{locale === 'id' ? 'Uptime' : 'Uptime'}</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold mb-1">24/7</div>
                      <p className="text-sm opacity-90">
                        {locale === 'id' ? 'Support' : 'Support'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 border-red-200 bg-red-50">
                <CardHeader className="pb-4">
                  <CardTitle className="text-red-800">
                    {locale === 'id' ? 'Mulai Sekarang' : 'Get Started'}
                  </CardTitle>
                  <CardDescription className="text-red-700">
                    {locale === 'id'
                      ? 'Jelajahi aplikasi dan mulai mengakses informasi publik hari ini.'
                      : 'Explore applications and start accessing public information today.'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    size="sm"
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    asChild
                  >
                    <Link href={`/${locale}/applications`}>
                      {locale === 'id' ? 'Jelajahi Aplikasi' : 'Explore Applications'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-red-300 text-red-700 hover:bg-red-100"
                    asChild
                  >
                    <Link href={`/${locale}/about`}>
                      {locale === 'id' ? 'Tentang Kami' : 'About Us'}
                    </Link>
                  </Button>
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
