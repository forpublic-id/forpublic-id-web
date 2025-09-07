import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Badge,
  Button,
} from '@/components/ui'
import { Star, Clock, ExternalLink } from 'lucide-react'
import type { Application, BrandColor } from '@/lib/types/application'

interface TranslationFunction {
  (key: string): string
}

interface ApplicationCardProps {
  app: Application
  t: TranslationFunction
}

// Color mapping untuk menghindari dynamic Tailwind classes
const colorClassMap: Record<
  BrandColor,
  {
    border: string
    bg: string
    icon: string
    button: string
    buttonHover: string
  }
> = {
  blue: {
    border: 'border-l-blue-500',
    bg: 'bg-blue-100',
    icon: 'text-blue-600',
    button: 'bg-blue-600',
    buttonHover: 'hover:bg-blue-700',
  },
  green: {
    border: 'border-l-green-500',
    bg: 'bg-green-100',
    icon: 'text-green-600',
    button: 'bg-green-600',
    buttonHover: 'hover:bg-green-700',
  },
  purple: {
    border: 'border-l-purple-500',
    bg: 'bg-purple-100',
    icon: 'text-purple-600',
    button: 'bg-purple-600',
    buttonHover: 'hover:bg-purple-700',
  },
  orange: {
    border: 'border-l-orange-500',
    bg: 'bg-orange-100',
    icon: 'text-orange-600',
    button: 'bg-orange-600',
    buttonHover: 'hover:bg-orange-700',
  },
  red: {
    border: 'border-l-red-500',
    bg: 'bg-red-100',
    icon: 'text-red-600',
    button: 'bg-red-600',
    buttonHover: 'hover:bg-red-700',
  },
  teal: {
    border: 'border-l-teal-500',
    bg: 'bg-teal-100',
    icon: 'text-teal-600',
    button: 'bg-teal-600',
    buttonHover: 'hover:bg-teal-700',
  },
}

export default function ApplicationCard({ app, t }: ApplicationCardProps) {
  const Icon = app.icon
  const colorClasses = colorClassMap[app.color]

  return (
    <Card
      className={`hover:shadow-lg transition-all duration-300 border-l-4 ${colorClasses.border} ${
        app.status === 'available' ? 'cursor-pointer' : 'opacity-75'
      } relative flex flex-col h-full`}
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
            <Icon className={`w-6 h-6 ${colorClasses.icon}`} />
          </div>
          {app.status === 'coming-soon' && (
            <Badge variant="outline" className="text-gray-500">
              <Clock className="w-3 h-3 mr-1" />
              {t('applications.page.app.comingSoon')}
            </Badge>
          )}
        </div>
        <CardTitle className="text-lg">
          {typeof app.title === 'string' ? app.title : app.title.id}
        </CardTitle>
        <CardDescription className="text-sm leading-relaxed">
          {typeof app.description === 'string' ? app.description : app.description.id}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col h-full">
        <div className="flex-grow">
          <div className="flex flex-wrap gap-2 mb-6">
            {app.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {app.status === 'available' && app.link ? (
          <Button
            variant="default"
            className={`w-full ${colorClasses.button} ${colorClasses.buttonHover} text-white`}
            asChild
          >
            <a href={app.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              {t('applications.page.app.launch')}
            </a>
          </Button>
        ) : (
          <Button variant="secondary" className="w-full" disabled>
            <Clock className="w-4 h-4 mr-2" />
            {t('applications.page.app.comingSoon')}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
