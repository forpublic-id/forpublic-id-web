import { Database, Building2, Users, GraduationCap, Heart, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import CategoryCard from './CategoryCard'

interface ApplicationCategoriesProps {
  title: string
  description: string
  categories: {
    openData: { title: string; description: string; content: string }
    developmentInfo: { title: string; description: string; content: string }
    publicServices: { title: string; description: string; content: string }
    education: { title: string; description: string; content: string }
    health: { title: string; description: string; content: string }
    economy: { title: string; description: string; content: string }
  }
}

export default function ApplicationCategories({ title, description, categories }: ApplicationCategoriesProps) {
  return (
    <section id="applications" className="py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CategoryCard
            icon={Database}
            title={categories.openData.title}
            description={categories.openData.description}
            content={categories.openData.content}
            color="blue"
          />
          <CategoryCard
            icon={Building2}
            title={categories.developmentInfo.title}
            description={categories.developmentInfo.description}
            content={categories.developmentInfo.content}
            color="green"
          />
          <CategoryCard
            icon={Users}
            title={categories.publicServices.title}
            description={categories.publicServices.description}
            content={categories.publicServices.content}
            color="purple"
          />
          <CategoryCard
            icon={GraduationCap}
            title={categories.education.title}
            description={categories.education.description}
            content={categories.education.content}
            color="orange"
          />
          <CategoryCard
            icon={Heart}
            title={categories.health.title}
            description={categories.health.description}
            content={categories.health.content}
            color="red"
          />
          <CategoryCard
            icon={TrendingUp}
            title={categories.economy.title}
            description={categories.economy.description}
            content={categories.economy.content}
            color="teal"
          />
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Tertarik untuk mengeksplorasi aplikasi-aplikasi ini?</p>
          <Link
            href="/applications"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            Lihat Semua Aplikasi
          </Link>
        </div>
      </div>
    </section>
  )
}