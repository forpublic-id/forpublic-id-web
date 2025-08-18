// Re-export with explicit naming to avoid conflicts

// Constants
export { 
  colors, 
  spacing, 
  containerSizes, 
  borderRadius, 
  typography,
  routes,
  supportedLocales,
  defaultLocale
} from './constants'

export type {
  BrandColorKey,
  SemanticColor,
  NeutralColor,
  SpacingKey,
  ContainerSize,
  BorderRadiusKey,
  FontFamily,
  FontSize,
  FontWeight,
  LetterSpacing,
  LineHeight,
  Locale as ConstantsLocale,
  RouteKey,
  SectionKey
} from './constants'

// Hooks  
export { useLocale, useNavigation } from './hooks'

// Types
export type {
  Locale,
  DefaultLocale,
  LocalizedString,
  LocaleConfig,
  TranslationFunction,
  NavigationItem,
  RouteParams,
  LocaleContextType,
  ApplicationStatus,
  ApplicationCategory,
  BrandColor,
  ApplicationMetadata,
  Application,
  ApplicationFilter,
  ApplicationStats,
  CategoryInfo,
  ApplicationListProps,
  ApplicationCardProps
} from './types'

// Utils
export { cn } from './utils'