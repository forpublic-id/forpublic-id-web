import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { LanguageSwitcher } from "@/components/ui/language-switcher"
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
  Github,
  Twitter,
  Linkedin,
} from "lucide-react"
import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'

export default function HomePage() {
  const t = useTranslations()
  const locale = useLocale()
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8">
              <Image src="/logo.svg" alt="ForPublic.id Logo" width={32} height={32} className="w-full h-full" />
            </div>
            <span className="text-xl font-bold text-gray-900">{t('header.brand')}</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#applications" className="text-gray-600 hover:text-red-600 transition-colors">
              {t('header.nav.applications')}
            </a>
            <a href="#features" className="text-gray-600 hover:text-red-600 transition-colors">
              {t('header.nav.features')}
            </a>
            <a href="#about" className="text-gray-600 hover:text-red-600 transition-colors">
              {t('header.nav.about')}
            </a>
            <LanguageSwitcher />
            <Button
              variant="outline"
              size="sm"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
            >
              {t('header.nav.contact')}
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-4 bg-red-50 text-red-700 border-red-200">
            {t('hero.badge')}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            {t('hero.title')}{" "}
            <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">{t('hero.titleHighlight')}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-red-600 hover:bg-red-700 text-white">
              {t('hero.cta.explore')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
            >
              {t('hero.cta.learnMore')}
            </Button>
          </div>
        </div>
      </section>

      {/* Application Categories */}
      <section id="applications" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{t('applications.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('applications.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
              <CardHeader>
                <Database className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>{t('applications.categories.openData.title')}</CardTitle>
                <CardDescription>{t('applications.categories.openData.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  {t('applications.categories.openData.content')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
              <CardHeader>
                <Building2 className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>{t('applications.categories.developmentInfo.title')}</CardTitle>
                <CardDescription>{t('applications.categories.developmentInfo.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  {t('applications.categories.developmentInfo.content')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
              <CardHeader>
                <Users className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>{t('applications.categories.publicServices.title')}</CardTitle>
                <CardDescription>{t('applications.categories.publicServices.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  {t('applications.categories.publicServices.content')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-orange-600 mb-4" />
                <CardTitle>{t('applications.categories.education.title')}</CardTitle>
                <CardDescription>{t('applications.categories.education.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  {t('applications.categories.education.content')}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-red-500">
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

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-teal-500">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-teal-600 mb-4" />
                <CardTitle>{t('applications.categories.economy.title')}</CardTitle>
                <CardDescription>{t('applications.categories.economy.description')}</CardDescription>
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
      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{t('features.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('features.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{t('features.items.free.title')}</h3>
              <p className="text-gray-600">
                {t('features.items.free.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{t('features.items.easyToUse.title')}</h3>
              <p className="text-gray-600">
                {t('features.items.easyToUse.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{t('features.items.trustedData.title')}</h3>
              <p className="text-gray-600">
                {t('features.items.trustedData.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{t('features.items.responsive.title')}</h3>
              <p className="text-gray-600">
                {t('features.items.responsive.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{t('features.items.fastReliable.title')}</h3>
              <p className="text-gray-600">{t('features.items.fastReliable.description')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{t('features.items.continuousGrowth.title')}</h3>
              <p className="text-gray-600">
                {t('features.items.continuousGrowth.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{t('comingSoon.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('comingSoon.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="relative overflow-hidden border-l-4 border-l-blue-300">
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
                <p className="text-sm text-gray-600">
                  {t('comingSoon.apps.smartCity.content')}
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-l-4 border-l-green-300">
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

            <Card className="relative overflow-hidden border-l-4 border-l-orange-300">
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-orange-50 text-orange-700">
                  {t('comingSoon.apps.emergencyAlerts.status')}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle>{t('comingSoon.apps.emergencyAlerts.title')}</CardTitle>
                <CardDescription>{t('comingSoon.apps.emergencyAlerts.description')}</CardDescription>
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
                  <Input placeholder={t('comingSoon.newsletter.placeholder')} type="email" className="border-gray-200 focus:border-red-500" />
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
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">{t('about.title')}</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              <strong className="text-red-600">{t('about.vision')}</strong> {t('about.visionText')}
            </p>
            <p>
              {t('about.content1')}
            </p>
            <p>
              {t('about.content2')}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8">
                  <Image src="/logo.svg" alt="ForPublic.id Logo" width={32} height={32} className="w-full h-full" />
                </div>
                <span className="text-xl font-bold">{t('header.brand')}</span>
              </div>
              <p className="text-gray-300 text-sm">
                {t('footer.description')}
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t('footer.sections.applications')}</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t('footer.links.openData')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t('footer.links.developmentInfo')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t('footer.links.publicServices')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t('footer.links.education')}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t('footer.sections.support')}</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t('footer.links.helpCenter')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t('footer.links.contactUs')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t('footer.links.privacyPolicy')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t('footer.links.termsOfService')}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t('footer.connect')}</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <div className="mt-4 text-sm text-gray-300">
                <p>{t('footer.email')}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
