import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  color: 'green' | 'blue' | 'purple' | 'orange' | 'yellow' | 'red'
}

const colorClasses = {
  green: {
    bg: 'bg-green-100',
    text: 'text-green-600',
  },
  blue: {
    bg: 'bg-blue-100',
    text: 'text-blue-600',
  },
  purple: {
    bg: 'bg-purple-100',
    text: 'text-purple-600',
  },
  orange: {
    bg: 'bg-orange-100',
    text: 'text-orange-600',
  },
  yellow: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-600',
  },
  red: {
    bg: 'bg-red-100',
    text: 'text-red-600',
  },
}

export default function FeatureCard({ icon: Icon, title, description, color }: FeatureCardProps) {
  const colorClass = colorClasses[color]

  return (
    <div className="text-center">
      <div className={`w-16 h-16 ${colorClass.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
        <Icon className={`w-8 h-8 ${colorClass.text}`} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}