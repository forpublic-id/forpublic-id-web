import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/header'
import { Footer } from '@/components/layout'
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
} from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { Suspense } from 'react'

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
    id: 'data-transparency',
    category: 'openData',
    title: locale === 'id' ? 'Portal Transparansi Data' : 'Data Transparency Portal',
    description:
      locale === 'id'
        ? 'Akses mudah ke data anggaran, belanja daerah, dan informasi keuangan publik'
        : 'Easy access to budget data, regional spending, and public financial information',
    status: 'available' as const,
    featured: true,
    icon: Database,
    color: 'blue',
    link: '#',
    tags: locale === 'id' ? ['Gratis', 'Web', 'Mobile'] : ['Free', 'Web', 'Mobile'],
  },
  {
    id: 'infrastructure-monitor',
    category: 'developmentInfo',
    title: locale === 'id' ? 'Monitor Infrastruktur' : 'Infrastructure Monitor',
    description:
      locale === 'id'
        ? 'Pantau kemajuan proyek infrastruktur dan pembangunan di wilayah Anda'
        : 'Monitor infrastructure projects and development progress in your area',
    status: 'available' as const,
    featured: true,
    icon: Building2,
    color: 'green',
    link: '#',
    tags: locale === 'id' ? ['Gratis', 'Real-time'] : ['Free', 'Real-time'],
  },
  {
    id: 'public-service-portal',
    category: 'publicServices',
    title: locale === 'id' ? 'Portal Layanan Publik' : 'Public Service Portal',
    description:
      locale === 'id'
        ? 'Platform terintegrasi untuk mengakses berbagai layanan pemerintah online'
        : 'Integrated platform to access various government services online',
    status: 'available' as const,
    featured: false,
    icon: Users,
    color: 'purple',
    link: '#',
    tags: locale === 'id' ? ['Gratis', 'Terintegrasi'] : ['Free', 'Integrated'],
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
    status: 'available' as const,
    featured: true,
    icon: TrendingUp,
    color: 'teal',
    link: '#',
    tags: locale === 'id' ? ['Gratis', 'Real-time', 'Analisis'] : ['Free', 'Real-time', 'Analysis'],
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

function ApplicationCard({ app, t }: { app: Application; t: TranslationFunction }) {
  const Icon = app.icon

  return (
    <Card
      className={`hover:shadow-lg transition-all duration-300 border-l-4 border-l-${app.color}-500 ${app.status === 'available' ? 'cursor-pointer' : 'opacity-75'}`}
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
            className={`w-12 h-12 bg-${app.color}-100 rounded-lg flex items-center justify-center mb-4`}
          >
            <Icon className={`w-6 h-6 text-${app.color}-600`} />
          </div>
          {app.status === 'coming-soon' && (
            <Badge variant="outline" className="text-gray-500">
              <Clock className="w-3 h-3 mr-1" />
              {t('applications.page.app.comingSoon')}
            </Badge>
          )}
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

        <Button
          variant={app.status === 'available' ? 'default' : 'secondary'}
          className={`w-full ${app.status === 'available' ? `bg-${app.color}-600 hover:bg-${app.color}-700` : ''}`}
          disabled={app.status !== 'available'}
        >
          {app.status === 'available' ? (
            <>
              {t('applications.page.app.openApp')}
              <ExternalLink className="w-4 h-4 ml-2" />
            </>
          ) : (
            t('applications.page.app.comingSoon')
          )}
        </Button>
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
      {applications.map(app => (
        <Card
          key={app.id}
          className={`hover:shadow-md transition-all duration-300 ${app.status === 'available' ? 'cursor-pointer' : 'opacity-75'}`}
        >
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div
                className={`w-16 h-16 bg-${app.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}
              >
                <app.icon className={`w-8 h-8 text-${app.color}-600`} />
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
                <Button
                  variant={app.status === 'available' ? 'default' : 'secondary'}
                  className={
                    app.status === 'available'
                      ? `bg-${app.color}-600 hover:bg-${app.color}-700`
                      : ''
                  }
                  disabled={app.status !== 'available'}
                >
                  {app.status === 'available' ? (
                    <>
                      {t('applications.page.app.open')}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </>
                  ) : (
                    t('applications.page.app.soon')
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
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

  return (
    <div className="min-h-screen bg-background">
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
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder={t('applications.page.search.placeholder')}
                  className="pl-10 border-gray-200 focus:border-red-500"
                />
              </div>
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

              {categories.map(cat => (
                <Button
                  key={cat.key}
                  variant={category === cat.key ? 'default' : 'outline'}
                  size="sm"
                  className={
                    category === cat.key ? `bg-${cat.color}-600 hover:bg-${cat.color}-700` : ''
                  }
                  asChild
                >
                  <Link href={`/${locale}/applications?category=${cat.key}`}>
                    <cat.icon className="w-4 h-4 mr-2" />
                    {t(`applications.categories.${cat.key}.title`)}
                  </Link>
                </Button>
              ))}
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
