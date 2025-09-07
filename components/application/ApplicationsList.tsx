import { Card, CardContent, Badge, Button } from '@/components/ui'
import { Star, Clock, ExternalLink } from 'lucide-react'
import ErrorBoundary, { SimpleError } from '@/components/common/ErrorBoundary'
import { CardSkeleton } from '@/components/common/Loading'
import type { Application, BrandColor } from '@/lib/types/application'

// Color mapping untuk menghindari dynamic Tailwind classes
const colorClassMap: Record<
  BrandColor,
  {
    bg: string
    icon: string
    button: string
    buttonHover: string
  }
> = {
  blue: {
    bg: 'bg-blue-100',
    icon: 'text-blue-600',
    button: 'bg-blue-600',
    buttonHover: 'hover:bg-blue-700',
  },
  green: {
    bg: 'bg-green-100',
    icon: 'text-green-600',
    button: 'bg-green-600',
    buttonHover: 'hover:bg-green-700',
  },
  purple: {
    bg: 'bg-purple-100',
    icon: 'text-purple-600',
    button: 'bg-purple-600',
    buttonHover: 'hover:bg-purple-700',
  },
  orange: {
    bg: 'bg-orange-100',
    icon: 'text-orange-600',
    button: 'bg-orange-600',
    buttonHover: 'hover:bg-orange-700',
  },
  red: {
    bg: 'bg-red-100',
    icon: 'text-red-600',
    button: 'bg-red-600',
    buttonHover: 'hover:bg-red-700',
  },
  teal: {
    bg: 'bg-teal-100',
    icon: 'text-teal-600',
    button: 'bg-teal-600',
    buttonHover: 'hover:bg-teal-700',
  },
}

interface TranslationFunction {
  (key: string): string
}

interface ApplicationsListProps {
  applications: Application[]
  t: TranslationFunction
  isLoading?: boolean
  error?: string
  onRetry?: () => void
}

export default function ApplicationsList({
  applications,
  t,
  isLoading,
  error,
  onRetry,
}: ApplicationsListProps) {
  if (isLoading) {
    return (
      <div className="space-y-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    )
  }

  if (error) {
    return <SimpleError title={t('errors.loadApplications')} message={error} onRetry={onRetry} />
  }

  if (applications.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">{t('applications.page.noResults')}</p>
      </div>
    )
  }

  return (
    <ErrorBoundary fallback={<SimpleError title={t('errors.displayError')} />}>
      <div className="space-y-6">
        {applications.map(app => {
          const colorClasses = colorClassMap[app.color]
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
                    <app.icon className={`w-8 h-8 ${colorClasses.icon}`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {typeof app.title === 'string' ? app.title : app.title.id}
                      </h3>
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

                    <p className="text-gray-600 mb-3 leading-relaxed">
                      {typeof app.description === 'string' ? app.description : app.description.id}
                    </p>

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
                          ? `${colorClasses.button} ${colorClasses.buttonHover}`
                          : ''
                      }
                      disabled={app.status !== 'available'}
                    >
                      {app.status === 'available' ? (
                        <>
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {t('applications.page.app.launch')}
                        </>
                      ) : (
                        t('applications.page.app.comingSoon')
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </ErrorBoundary>
  )
}
