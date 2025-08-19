export const colors = {
  brand: {
    primary: 'rgb(220 38 38)', // red-600
    primaryHover: 'rgb(185 28 28)', // red-700
    accent: 'rgb(254 226 226)', // red-50
    text: 'rgb(239 68 68)', // red-500
  },
  semantic: {
    success: 'rgb(22 163 74)', // green-600
    warning: 'rgb(245 158 11)', // amber-500
    error: 'rgb(239 68 68)', // red-500
    info: 'rgb(59 130 246)', // blue-500
  },
  neutral: {
    white: 'rgb(255 255 255)',
    gray50: 'rgb(249 250 251)',
    gray100: 'rgb(243 244 246)',
    gray200: 'rgb(229 231 235)',
    gray300: 'rgb(209 213 219)',
    gray400: 'rgb(156 163 175)',
    gray500: 'rgb(107 114 128)',
    gray600: 'rgb(75 85 99)',
    gray700: 'rgb(55 65 81)',
    gray800: 'rgb(31 41 55)',
    gray900: 'rgb(17 24 39)',
    black: 'rgb(0 0 0)',
  },
} as const

export type BrandColorKey = keyof typeof colors.brand
export type SemanticColor = keyof typeof colors.semantic
export type NeutralColor = keyof typeof colors.neutral
