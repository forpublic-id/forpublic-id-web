import { Button } from '@/components/ui'
import { Badge } from '@/components/ui'
import { Card, CardContent } from '@/components/ui'
import Logo from '@/components/common/Logo'
import {
  Target,
  Users,
  Shield,
  Heart,
  Globe,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Award,
  Mail,
} from 'lucide-react'

interface AboutProps {
  locale: string
  translations: {
    title: string
    subtitle: string
    vision: {
      title: string
      description: string
    }
    mission: {
      title: string
      description: string
    }
    values: {
      title: string
      items: Array<{
        title: string
        description: string
        icon: string
      }>
    }
    stats: {
      title: string
      items: Array<{
        value: string
        label: string
        description: string
      }>
    }
    cta: {
      title: string
      description: string
      primary: string
      secondary: string
    }
  }
}

const iconMap = {
  transparency: Shield,
  community: Users,
  innovation: Lightbulb,
  accessibility: Heart,
  impact: TrendingUp,
  trust: Award,
}

export function About({ locale, translations: t }: AboutProps) {
  return (
    <section id="about" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-2 text-base bg-gray-100 text-gray-700 border-gray-200"
          >
            {t.title}
          </Badge>
          <div className="flex justify-center mb-8">
            <Logo locale={locale} size="lg" clickable={false} className="scale-[1.8]" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t.subtitle}</p>
        </div>

        {/* Combined Section: Vision + Stats */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Vision & Mission Combined */}
          <div>
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t.vision.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{t.vision.description}</p>
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t.mission.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{t.mission.description}</p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t.stats.title}</h3>
            <div className="grid grid-cols-1 gap-6">
              {t.stats.items.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-1">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compact Values Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.values.title}</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.values.items.slice(0, 3).map((value, index) => {
              const IconComponent = iconMap[value.icon as keyof typeof iconMap] || CheckCircle
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div
          id="contact"
          className="text-center bg-white rounded-2xl p-8 md:p-12 shadow-lg scroll-mt-32"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t.cta.title}</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            {t.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 bg-red-600 hover:bg-red-700 text-white group"
              asChild
            >
              <a href="https://studio.forpublic.id" target="_blank" rel="noopener noreferrer">
                {t.cta.primary}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 border-gray-300 text-gray-700 hover:bg-gray-50 group"
              asChild
            >
              <a href="mailto:forpublic.indonesia@gmail.com">
                {t.cta.secondary}
                <Mail className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
