import { Button, Input } from '@/components/ui'
import { Search, Grid3X3, List } from 'lucide-react'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

interface Category {
  key: string
  icon: LucideIcon
}

interface FilterBarProps {
  locale: string
  search: string
  category: string | null
  view: 'grid' | 'list'
  categories: Category[]
  translations: {
    search: string
    allCategories: string
    categoriesLabel: (key: string) => string
  }
}

export default function FilterBar({
  locale,
  search,
  category,
  view,
  categories,
  translations,
}: FilterBarProps) {
  return (
    <section className="py-8 px-4 md:px-6 lg:px-8 bg-white border-b border-gray-200">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder={translations.search}
              defaultValue={search}
              className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              name="search"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={!category ? 'default' : 'outline'}
                size="sm"
                className={
                  !category
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }
                asChild
              >
                <Link href={`/${locale}/applications`}>{translations.allCategories}</Link>
              </Button>
              {categories.map(cat => (
                <Button
                  key={cat.key}
                  variant={category === cat.key ? 'default' : 'outline'}
                  size="sm"
                  className={
                    category === cat.key
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }
                  asChild
                >
                  <Link href={`/${locale}/applications?category=${cat.key}`}>
                    <cat.icon className="w-4 h-4 mr-2" />
                    {translations.categoriesLabel(cat.key)}
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
      </div>
    </section>
  )
}
