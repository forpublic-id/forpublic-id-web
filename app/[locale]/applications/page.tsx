import { Button } from '@/components/ui'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui'
import { Badge } from '@/components/ui'
import { Header } from '@/components/layout'
import { Footer } from '@/components/layout'
import { StructuredData } from '@/components/common'
import {
  Database,
  Building2,
  Users,
  GraduationCap,
  Heart,
  TrendingUp,
  Search,
  ExternalLink,
  Clock,
  Star,
  Grid3X3,
  List,
  ArrowLeft,
  Calendar,
} from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { Suspense } from 'react'
import { SearchInput } from '@/components/application'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const locale = resolvedParams?.locale || 'id'
  const t = await getTranslations({ locale })

  return {
    title: `${t('applications.page.title')} - ForPublic.id`,
    description: locale === 'id'
      ? '📱 Direktori lengkap aplikasi digital GRATIS untuk masyarakat Indonesia. 7+ kategori, tools transparansi, layanan publik. Akses mudah, mobile-friendly.'
      : '📱 Complete directory of FREE digital applications for Indonesian communities. 7+ categories, transparency tools, public services. Easy access, mobile-friendly.',
    keywords: locale === 'id'
      ? 'direktori aplikasi, layanan publik, aplikasi digital Indonesia, tools gratis, aplikasi masyarakat'
      : 'application directory, public services, digital applications Indonesia, free tools, community applications',
    openGraph: {
      title: `${t('applications.page.title')} - ForPublic.id`,
      description: locale === 'id'
        ? '📱 Direktori lengkap aplikasi digital GRATIS untuk masyarakat Indonesia. 7+ kategori, tools transparansi, layanan publik. Akses mudah, mobile-friendly.'
        : '📱 Complete directory of FREE digital applications for Indonesian communities. 7+ categories, transparency tools, public services. Easy access, mobile-friendly.',
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/og-image-applications.png',
          width: 1200,
          height: 630,
          alt: 'ForPublic.id Applications - Free digital tools for public services and data access',
        },
      ],
    },
    twitter: {
      title: `${t('applications.page.title')} - ForPublic.id`,
      description: locale === 'id'
        ? '📱 Direktori lengkap aplikasi digital GRATIS untuk masyarakat Indonesia. 7+ kategori, tools transparansi, layanan publik. Akses mudah, mobile-friendly.'
        : '📱 Complete directory of FREE digital applications for Indonesian communities. 7+ categories, transparency tools, public services. Easy access, mobile-friendly.',
      images: ['/og-image-applications.png'],
    },
    alternates: {
      canonical: `/${locale}/applications`,
      languages: {
        'id-ID': '/id/applications',
        'en-US': '/en/applications',
      },
    },
  }
}

interface ApplicationsPageProps {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ category?: string; search?: string; view?: 'grid' | 'list' }>
}

interface Application {
  id: string
  category: string
  title: string
  description: string
  status: 'available' | 'coming-soon'
  featured: boolean
  icon: React.ComponentType<{ className?: string }>
  color: string
  link: string
  tags: string[]
}

interface TranslationFunction {
  (key: string): string
}

// Mock data for applications - in a real app, this would come from a database or API
const getApplications = (locale: string) => [
  {
    id: 'holiday-calendar',
    category: 'publicServices',
    title: locale === 'id' ? 'Kalender Hari Libur Indonesia' : 'Holiday Calendar Indonesia',
    description:
      locale === 'id'
        ? 'Kalender interaktif untuk hari libur nasional, regional, dan cuti bersama Indonesia'
        : 'Interactive calendar for Indonesian national holidays, regional holidays, and joint leave days',
    status: 'available' as const,
    featured: true,
    icon: Calendar,
    color: 'red',
    link: 'https://holiday.forpublic.id',
    tags: locale === 'id' ? ['Gratis', 'Web', 'Mobile', 'Dwi Bahasa'] : ['Free', 'Web', 'Mobile', 'Bilingual'],
  },
  {
    id: 'data-transparency',
    category: 'openData',
    title: locale === 'id' ? 'Portal Transparansi Data' : 'Data Transparency Portal',
    description:
      locale === 'id'
        ? 'Akses mudah ke data anggaran, belanja daerah, dan informasi keuangan publik'
        : 'Easy access to budget data, regional spending, and public financial information',
    status: 'coming-soon' as const,
    featured: false,
    icon: Database,
    color: 'blue',
    link: '#',
    tags: locale === 'id' ? ['Segera Hadir', 'Web', 'Mobile'] : ['Coming Soon', 'Web', 'Mobile'],
  },
  {
    id: 'infrastructure-monitor',
    category: 'developmentInfo',
    title: locale === 'id' ? 'Monitor Infrastruktur' : 'Infrastructure Monitor',
    description:
      locale === 'id'
        ? 'Pantau kemajuan proyek infrastruktur dan pembangunan di wilayah Anda'
        : 'Monitor infrastructure projects and development progress in your area',
    status: 'coming-soon' as const,
    featured: false,
    icon: Building2,
    color: 'green',
    link: '#',
    tags: locale === 'id' ? ['Segera Hadir', 'Real-time'] : ['Coming Soon', 'Real-time'],
  },
  {
    id: 'public-service-portal',
    category: 'publicServices',
    title: locale === 'id' ? 'Portal Layanan Publik' : 'Public Service Portal',
    description:
      locale === 'id'
        ? 'Platform terintegrasi untuk mengakses berbagai layanan pemerintah online'
        : 'Integrated platform to access various government services online',
    status: 'coming-soon' as const,
    featured: false,
    icon: Users,
    color: 'purple',
    link: '#',
    tags: locale === 'id' ? ['Segera Hadir', 'Terintegrasi'] : ['Coming Soon', 'Integrated'],
  },
  {
    id: 'education-hub',
    category: 'education',
    title: locale === 'id' ? 'Hub Pendidikan' : 'Education Hub',
    description:
      locale === 'id'
        ? 'Sumber daya pendidikan, informasi sekolah, dan tools pembelajaran interaktif'
        : 'Educational resources, school information, and interactive learning tools',
    status: 'coming-soon' as const,
    featured: false,
    icon: GraduationCap,
    color: 'orange',
    link: '#',
    tags: locale === 'id' ? ['Segera Hadir', 'Pembelajaran'] : ['Coming Soon', 'Learning'],
  },
  {
    id: 'health-tracker',
    category: 'health',
    title: locale === 'id' ? 'Tracker Kesehatan Publik' : 'Public Health Tracker',
    description:
      locale === 'id'
        ? 'Informasi fasilitas kesehatan, jadwal vaksinasi, dan data kesehatan masyarakat'
        : 'Healthcare facility information, vaccination schedules, and public health data',
    status: 'coming-soon' as const,
    featured: false,
    icon: Heart,
    color: 'red',
    link: '#',
    tags: locale === 'id' ? ['Segera Hadir', 'Kesehatan'] : ['Coming Soon', 'Health'],
  },
  {
    id: 'economic-dashboard',
    category: 'economy',
    title: locale === 'id' ? 'Dashboard Ekonomi' : 'Economic Dashboard',
    description:
      locale === 'id'
        ? 'Data pasar real-time, indikator ekonomi, dan analisis ekonomi lokal'
        : 'Real-time market data, economic indicators, and local economic analysis',
    status: 'coming-soon' as const,
    featured: false,
    icon: TrendingUp,
    color: 'teal',
    link: '#',
    tags: locale === 'id' ? ['Segera Hadir', 'Real-time', 'Analisis'] : ['Coming Soon', 'Real-time', 'Analysis'],
  },
]

const categories = [
  { key: 'openData', icon: Database, color: 'blue' },
  { key: 'developmentInfo', icon: Building2, color: 'green' },
  { key: 'publicServices', icon: Users, color: 'purple' },
  { key: 'education', icon: GraduationCap, color: 'orange' },
  { key: 'health', icon: Heart, color: 'red' },
  { key: 'economy', icon: TrendingUp, color: 'teal' },
]

// Utility function to get color classes
const getColorClasses = (color: string) => {
  switch (color) {
    case 'blue':
      return {
        border: 'border-l-blue-500',
        bg: 'bg-blue-100',
        text: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700',
      }
    case 'green':
      return {
        border: 'border-l-green-500',
        bg: 'bg-green-100',
        text: 'text-green-600',
        button: 'bg-green-600 hover:bg-green-700',
      }
    case 'purple':
      return {
        border: 'border-l-purple-500',
        bg: 'bg-purple-100',
        text: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700',
      }
    case 'orange':
      return {
        border: 'border-l-orange-500',
        bg: 'bg-orange-100',
        text: 'text-orange-600',
        button: 'bg-orange-600 hover:bg-orange-700',
      }
    case 'red':
      return {
        border: 'border-l-red-500',
        bg: 'bg-red-100',
        text: 'text-red-600',
        button: 'bg-red-600 hover:bg-red-700',
      }
    case 'teal':
      return {
        border: 'border-l-teal-500',
        bg: 'bg-teal-100',
        text: 'text-teal-600',
        button: 'bg-teal-600 hover:bg-teal-700',
      }
    default:
      return {
        border: 'border-l-gray-500',
        bg: 'bg-gray-100',
        text: 'text-gray-600',
        button: 'bg-gray-600 hover:bg-gray-700',
      }
  }
}

function ApplicationCard({ app, t }: { app: Application; t: TranslationFunction }) {
  const Icon = app.icon
  const colorClasses = getColorClasses(app.color)

  return (
    <Card
      className={`hover:shadow-lg transition-all duration-300 border-l-4 ${colorClasses.border} ${app.status === 'available' ? 'cursor-pointer' : 'opacity-75'}`}
    >
      {app.featured && (
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            <Star className="w-3 h-3 mr-1" />
            {t('applications.page.app.featured')}
          </Badge>
        </div>
      )}

      <CardHeader>
        <div className="flex items-start justify-between">
          <div
            className={`w-12 h-12 ${colorClasses.bg} rounded-lg flex items-center justify-center mb-4`}
          >
            <Icon className={`w-6 h-6 ${colorClasses.text}`} />
          </div>
          {app.status === 'coming-soon' && (
            <Badge variant="outline" className="text-gray-500">
              <Clock className="w-3 h-3 mr-1" />
              {t('applications.page.app.comingSoon')}
            </Badge>
          )}
        </div>
        <div className="mb-2">
          <Badge 
            variant="outline" 
            className={`text-xs ${colorClasses.text} border-current`}
          >
            {t(`applications.categories.${app.category}.title`)}
          </Badge>
        </div>
        <CardTitle className="text-lg">{app.title}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">{app.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {app.tags.map((tag: string) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {app.status === 'available' ? (
          <Button
            variant="default"
            className={`w-full ${colorClasses.button} text-white`}
            asChild
          >
            <a href={app.link} target="_blank" rel="noopener noreferrer">
              {t('applications.page.app.openApp')}
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        ) : (
          <Button variant="secondary" className="w-full" disabled>
            {t('applications.page.app.comingSoon')}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

function ApplicationsList({
  applications,
  t,
}: {
  applications: Application[]
  t: TranslationFunction
}) {
  return (
    <div className="space-y-6">
      {applications.map(app => {
        const colorClasses = getColorClasses(app.color)
        
        return (
          <Card
            key={app.id}
            className={`hover:shadow-md transition-all duration-300 ${app.status === 'available' ? 'cursor-pointer' : 'opacity-75'}`}
          >
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div
                  className={`w-16 h-16 ${colorClasses.bg} rounded-lg flex items-center justify-center flex-shrink-0`}
                >
                  <app.icon className={`w-8 h-8 ${colorClasses.text}`} />
                </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{app.title}</h3>
                  {app.featured && (
                    <Badge
                      variant="secondary"
                      className="bg-yellow-50 text-yellow-700 border-yellow-200"
                    >
                      <Star className="w-3 h-3 mr-1" />
                      {t('applications.page.app.featured')}
                    </Badge>
                  )}
                  {app.status === 'coming-soon' && (
                    <Badge variant="outline" className="text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      {t('applications.page.app.comingSoon')}
                    </Badge>
                  )}
                </div>

                <div className="mb-2">
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${colorClasses.text} border-current`}
                  >
                    {t(`applications.categories.${app.category}.title`)}
                  </Badge>
                </div>

                <p className="text-gray-600 mb-3 leading-relaxed">{app.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {app.tags.map((tag: string) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

                <div className="flex-shrink-0">
                  {app.status === 'available' ? (
                    <Button
                      variant="default"
                      className={`${colorClasses.button} text-white`}
                      asChild
                    >
                      <a href={app.link} target="_blank" rel="noopener noreferrer">
                        {t('applications.page.app.open')}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  ) : (
                    <Button variant="secondary" disabled>
                      {t('applications.page.app.soon')}
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

export default async function ApplicationsPage({ params, searchParams }: ApplicationsPageProps) {
  const resolvedParams = await params
  const locale = resolvedParams?.locale || 'id'
  const resolvedSearchParams = await searchParams
  const category = resolvedSearchParams?.category
  const search = resolvedSearchParams?.search
  const view = resolvedSearchParams?.view || 'grid'
  const t = await getTranslations({ locale })

  const applications = getApplications(locale)
  const filteredApplications = applications.filter(app => {
    const matchesCategory = !category || app.category === category
    const matchesSearch =
      !search ||
      app.title.toLowerCase().includes(search.toLowerCase()) ||
      app.description.toLowerCase().includes(search.toLowerCase())

    return matchesCategory && matchesSearch
  })

  const featuredApplications = filteredApplications.filter(app => app.featured)
  const availableCount = applications.filter(app => app.status === 'available').length
  const comingSoonCount = applications.filter(app => app.status === 'coming-soon').length

  // Generate breadcrumb schema manually for server component
  const breadcrumbSchema = {
    itemListElement: [
      {
        '@type': 'ListItem' as const,
        position: 1,
        name: t('header.brand'),
        item: `https://forpublic.id/${locale}`
      },
      {
        '@type': 'ListItem' as const,
        position: 2,
        name: t('applications.page.title'),
        item: `https://forpublic.id/${locale}/applications`
      }
    ]
  }

  return (
    <div className="min-h-screen bg-background">
      <StructuredData 
        breadcrumb={breadcrumbSchema}
      />
      <Header locale={locale} />

      {/* Page Header */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center space-x-4 mb-6">
            <Button variant="ghost" size="sm" asChild className="text-gray-600">
              <Link href={`/${locale}`}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('applications.page.back')}
              </Link>
            </Button>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t('applications.page.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('applications.page.subtitle')}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{availableCount}</div>
                <div className="text-sm text-gray-600">
                  {t('applications.page.stats.available')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{comingSoonCount}</div>
                <div className="text-sm text-gray-600">
                  {t('applications.page.stats.comingSoon')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">6</div>
                <div className="text-sm text-gray-600">
                  {t('applications.page.stats.categories')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-4 md:px-6 lg:px-8 bg-white border-b">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <SearchInput
                placeholder={t('applications.page.search.placeholder')}
                locale={locale}
                category={category}
                defaultValue={search}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={!category ? 'default' : 'outline'}
                size="sm"
                className={!category ? 'bg-red-600 hover:bg-red-700' : ''}
                asChild
              >
                <Link href={`/${locale}/applications`}>{t('applications.page.filters.all')}</Link>
              </Button>

              {categories.map(cat => {
                const getActiveClasses = (color: string) => {
                  switch (color) {
                    case 'blue':
                      return 'bg-blue-600 hover:bg-blue-700 text-white'
                    case 'green':
                      return 'bg-green-600 hover:bg-green-700 text-white'
                    case 'purple':
                      return 'bg-purple-600 hover:bg-purple-700 text-white'
                    case 'orange':
                      return 'bg-orange-600 hover:bg-orange-700 text-white'
                    case 'red':
                      return 'bg-red-600 hover:bg-red-700 text-white'
                    case 'teal':
                      return 'bg-teal-600 hover:bg-teal-700 text-white'
                    default:
                      return 'bg-gray-600 hover:bg-gray-700 text-white'
                  }
                }

                return (
                  <Button
                    key={cat.key}
                    variant={category === cat.key ? 'default' : 'outline'}
                    size="sm"
                    className={category === cat.key ? getActiveClasses(cat.color) : ''}
                    asChild
                  >
                    <Link href={`/${locale}/applications?category=${cat.key}`}>
                      <cat.icon className="w-4 h-4 mr-2" />
                      {t(`applications.categories.${cat.key}.title`)}
                    </Link>
                  </Button>
                )
              })}
            </div>

            {/* View Toggle */}
            <div className="flex rounded-lg border border-gray-200 p-1">
              <Button
                variant={view === 'grid' ? 'default' : 'ghost'}
                size="sm"
                className="rounded-md"
                asChild
              >
                <Link
                  href={`/${locale}/applications?view=grid${category ? `&category=${category}` : ''}`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                variant={view === 'list' ? 'default' : 'ghost'}
                size="sm"
                className="rounded-md"
                asChild
              >
                <Link
                  href={`/${locale}/applications?view=list${category ? `&category=${category}` : ''}`}
                >
                  <List className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Applications */}
      {featuredApplications.length > 0 && !category && !search && (
        <section className="py-12 px-4 md:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-center space-x-2 mb-8">
              <Star className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {t('applications.page.featured')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredApplications.map(app => (
                <ApplicationCard key={app.id} app={app} t={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Applications Grid/List */}
      <section className="py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {category
                ? t(`applications.categories.${category}.title`)
                : t('applications.page.allApps')}
            </h2>
            <div className="text-sm text-gray-600">
              {filteredApplications.length} {t('applications.page.stats.applications')}
            </div>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            {view === 'grid' ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredApplications.map(app => (
                  <ApplicationCard key={app.id} app={app} t={t} />
                ))}
              </div>
            ) : (
              <ApplicationsList applications={filteredApplications} t={t} />
            )}
          </Suspense>

          {filteredApplications.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('applications.page.search.noResults')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('applications.page.search.noResultsDescription')}
              </p>
              <Button variant="outline" asChild>
                <Link href={`/${locale}/applications`}>
                  {t('applications.page.search.viewAll')}
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-red-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {t('applications.page.cta.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">{t('applications.page.cta.description')}</p>
          <Button size="lg" className="text-lg px-8 bg-red-600 hover:bg-red-700 text-white">
            {t('applications.page.cta.button')}
          </Button>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  )
}
