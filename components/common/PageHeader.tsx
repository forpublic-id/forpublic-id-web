import { Button, Badge } from '@/components/ui'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface PageHeaderProps {
  title: string
  subtitle?: string
  badge?: string
  showBackButton?: boolean
  backUrl?: string
  backText?: string
  locale?: string
  children?: React.ReactNode
}

export function PageHeader({
  title,
  subtitle,
  badge,
  showBackButton = false,
  backUrl = '/',
  backText = 'Back',
  locale = 'id',
  children,
}: PageHeaderProps) {
  const finalBackUrl = backUrl === '/' ? `/${locale}` : backUrl

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-white">
      <div className="container mx-auto max-w-4xl">
        {showBackButton && (
          <div className="mb-8">
            <Button
              variant="ghost"
              className="text-red-600 hover:text-red-700 hover:bg-red-50 -ml-4"
              asChild
            >
              <Link href={finalBackUrl}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                {backText}
              </Link>
            </Button>
          </div>
        )}

        <div className="text-center">
          {badge && (
            <Badge
              variant="secondary"
              className="mb-6 px-3 py-1.5 text-sm bg-red-50 text-red-700 border-red-200"
            >
              {badge}
            </Badge>
          )}

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{title}</h1>

          {subtitle && (
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
          )}

          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  )
}
