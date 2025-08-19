import { Card, CardContent, Badge, Button } from '@/components/ui'
import { Star, Clock, ExternalLink } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

interface Application {
  id: string
  title: string
  description: string
  icon: LucideIcon
  color: string
  status: 'available' | 'coming-soon' | 'maintenance'
  featured: boolean
  tags: string[]
  link?: string
}

interface TranslationFunction {
  (key: string): string
}

interface ApplicationsListProps {
  applications: Application[]
  t: TranslationFunction
}

export default function ApplicationsList({ applications, t }: ApplicationsListProps) {
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
      ))}
    </div>
  )
}
