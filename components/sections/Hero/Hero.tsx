import { Badge, Button } from '@/components/ui'

interface HeroProps {
  locale: string
  title: string
  titleHighlight: string
  description: string
  badge: string
  ctaPrimary: string
  ctaSecondary: string
}

export default function Hero({
  locale,
  title,
  titleHighlight,
  description,
  badge,
  ctaPrimary,
  ctaSecondary,
}: HeroProps) {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto text-center max-w-4xl">
        <Badge variant="secondary" className="mb-4 bg-red-50 text-red-700 border-red-200">
          {badge}
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
          {title}{' '}
          <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
            {titleHighlight}
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-red-600 text-white hover:bg-red-700 border-0 shadow-lg hover:shadow-xl transition-all duration-200"
            asChild
          >
            <a href={`/${locale}#applications`}>{ctaPrimary}</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gray-300 text-gray-700 hover:bg-gray-50 shadow-sm hover:shadow-md transition-all duration-200"
          >
            {ctaSecondary}
          </Button>
        </div>
      </div>
    </section>
  )
}