import { Card, CardContent, CardDescription, CardHeader, CardTitle, Badge, Button } from '@/components/ui'
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

interface ApplicationCardProps {
  app: Application
  t: TranslationFunction
}

export default function ApplicationCard({ app, t }: ApplicationCardProps) {
  const Icon = app.icon

  return (
    <Card
      className={`hover:shadow-lg transition-all duration-300 border-l-4 border-l-${app.color}-500 ${app.status === 'available' ? 'cursor-pointer' : 'opacity-75'} relative`}
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
              <ExternalLink className="w-4 h-4 mr-2" />
              {t('applications.page.app.launch')}
            </>
          ) : (
            t('applications.page.app.comingSoon')
          )}
        </Button>
      </CardContent>
    </Card>
  )
}