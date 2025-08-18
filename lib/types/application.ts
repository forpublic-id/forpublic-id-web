import { LucideIcon } from 'lucide-react'
import { LocalizedString } from './locale'

export type ApplicationStatus = 'available' | 'coming-soon' | 'maintenance'

export type ApplicationCategory = 
  | 'openData'
  | 'developmentInfo' 
  | 'publicServices'
  | 'education'
  | 'health'
  | 'economy'

export type BrandColor = 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'teal'

export interface ApplicationMetadata {
  lastUpdated: Date
  version: string
  compatibility: string[]
  author?: string
  license?: string
}

export interface Application {
  id: string
  category: ApplicationCategory
  title: string | LocalizedString
  description: string | LocalizedString
  status: ApplicationStatus
  featured: boolean
  icon: LucideIcon
  color: BrandColor
  link?: string
  tags: string[]
  metadata?: ApplicationMetadata
}

export interface ApplicationFilter {
  category?: ApplicationCategory
  status?: ApplicationStatus
  featured?: boolean
  search?: string
}

export interface ApplicationStats {
  total: number
  available: number
  comingSoon: number
  maintenance: number
  byCategory: Record<ApplicationCategory, number>
}

export interface CategoryInfo {
  key: ApplicationCategory
  icon: LucideIcon
  color: BrandColor
  title: string | LocalizedString
  description: string | LocalizedString
  content: string | LocalizedString
}

export interface ApplicationListProps {
  applications: Application[]
  view?: 'grid' | 'list'
  showFeatured?: boolean
  filter?: ApplicationFilter
}

export interface ApplicationCardProps {
  app: Application
  variant?: 'default' | 'compact' | 'featured'
  showCategory?: boolean
  showStatus?: boolean
}