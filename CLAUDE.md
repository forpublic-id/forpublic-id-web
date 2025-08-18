# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ForPublic.id is a Next.js 15 application focused on providing digital solutions for public good. It's a platform that offers various free digital applications and tools to help Indonesian communities access public information and services. The application features internationalization (Indonesian/English), a comprehensive landing page, and dedicated applications directory.

## Development Commands

**Package Manager: Bun** (faster alternative to npm/yarn)

- `bun install` - Install dependencies
- `bun run dev` - Start development server with Turbopack (runs on http://localhost:3000)
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint for code quality checks
- `bun run format` - Format code using Prettier
- `bun run format:check` - Check code formatting without modifying files

## Architecture & Tech Stack

### Frontend Framework

- **Next.js 15** with App Router architecture
- **React 19** for UI components
- **TypeScript** for type safety
- **next-intl** for internationalization (Indonesian/English)

### Styling & UI

- **Tailwind CSS v4** for utility-first styling with design tokens
- **shadcn/ui** component library (New York style, configured in `components.json`)
- **Geist font family** (Sans and Mono variants from Vercel)
- **Lucide React** for icons
- **class-variance-authority** for component variants
- **Design System**: Custom red branding (#dc2626) with consistent spacing and typography

### Project Structure

```
app/                              # Next.js App Router
├── [locale]/                     # Internationalized routes (id/en)
│   ├── applications/page.tsx     # Applications directory page
│   ├── layout.tsx               # Locale-specific layout
│   ├── not-found.tsx           # Localized 404 page
│   └── page.tsx                # Localized homepage
├── globals.css                  # Global styles and design tokens
├── layout.tsx                   # Root layout
├── not-found.tsx               # Global 404 page (English)
├── robots.ts                    # SEO robots configuration
└── sitemap.ts                   # SEO sitemap generation

components/                       # React components (organized by purpose)
├── ui/                          # Base UI components (shadcn/ui)
│   ├── Badge.tsx               # PascalCase naming convention
│   ├── Button.tsx              # Button with variants
│   ├── Card.tsx                # Card components with compound pattern
│   ├── Input.tsx               # Form input component
│   └── index.ts               # Barrel exports
├── layout/                      # Layout components
│   ├── Footer/                 # Footer component module
│   │   ├── Footer.tsx         # Main footer component (reusable)
│   │   ├── FooterColumn.tsx   # Reusable column component
│   │   ├── SocialLinks.tsx    # Social media component
│   │   └── index.ts          # Barrel exports
│   ├── Header/                # Header component module
│   │   ├── Header.tsx         # Main header component
│   │   ├── Navigation.tsx     # Navigation component
│   │   ├── LanguageSwitcher.tsx # Language switching component
│   │   └── index.ts          # Barrel exports
│   └── index.ts              # Barrel exports
├── sections/                   # Page section components
│   ├── Hero/                  # Hero section components
│   ├── ApplicationCategories/ # Application categories section
│   ├── Features/              # Features section
│   └── index.ts              # Barrel exports
├── application/               # Application-specific components
│   ├── ApplicationCard.tsx   # Individual application card
│   ├── ApplicationsList.tsx  # Applications list view
│   ├── FilterBar.tsx        # Search and filter component
│   └── index.ts             # Barrel exports
└── common/                   # Common reusable components
    ├── Logo.tsx             # Reusable logo component
    ├── Loading.tsx         # Loading states
    ├── ErrorBoundary.tsx   # Error handling
    └── index.ts           # Barrel exports

lib/                          # Utilities and configuration
├── constants/               # Application constants and design system
│   ├── colors.ts           # Design system colors
│   ├── spacing.ts          # Spacing scale
│   ├── typography.ts       # Typography scale
│   ├── routes.ts           # Route constants
│   └── index.ts           # Barrel exports
├── hooks/                  # Custom React hooks
│   ├── useLocale.ts       # Locale management hook
│   ├── useNavigation.ts   # Navigation utilities hook
│   └── index.ts          # Barrel exports
├── types/                 # TypeScript definitions
│   ├── application.ts     # Application-related types
│   ├── locale.ts         # Locale-related types
│   └── index.ts         # Barrel exports
├── utils.ts              # Utility functions (cn helper, etc.)
└── index.ts             # Barrel exports

i18n/                        # Internationalization
├── messages/               # Translation files
│   ├── en.json           # English translations
│   └── id.json           # Indonesian translations
└── request.ts            # i18n request configuration

developments/               # Architecture documentation
├── architecture-analysis.md
└── restructured-architecture-proposal.md
```

### Key Configuration

- **shadcn/ui config**: "new-york" style, RSC enabled, neutral base color
- **Path aliases**: `@/components`, `@/lib`, `@/utils`, `@/ui`, `@/hooks`
- **ESLint**: Next.js recommended configuration
- **PostCSS**: Configured for Tailwind CSS processing
- **Internationalization**: Middleware-based routing with locale detection disabled (force default)

### Component Patterns & Architecture Principles

- **Modular Architecture**: Components organized by purpose (ui/, layout/, sections/, application/, common/)
- **Reusable Components**: Single source of truth for shared components (especially Footer)
- **PascalCase Naming**: Consistent component naming convention
- **Barrel Exports**: index.ts files for clean imports
- **Compound Components**: Card + CardHeader + CardContent pattern
- **Server Components**: Default to server components, client components only when necessary
- **TypeScript**: Comprehensive type safety with dedicated types/ directory
- **Design System**: Centralized constants for colors, spacing, and typography

### Brand Identity & Design System

- **Primary brand color**: Red (#dc2626, #b91c1c for hover states)
- **Logo**: "FP" in white text on red background with SVG support
- **Typography**: Geist Sans for headings, system fonts for body
- **Spacing**: Consistent scale using design tokens
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Professional design**: Focused on public service and transparency

### Data & Content Management

- **Static Content**: Homepage showcases six main application categories
- **Internationalization**: Complete Indonesian/English support
- **SEO Optimized**: Dynamic sitemap, robots.txt, proper meta tags
- **Applications Directory**: Dedicated page for browsing public tools
- **Search & Filter**: Advanced filtering by category and search terms

### Development Workflow & Quality

- **Code Quality**: ESLint + Prettier with consistent formatting
- **Performance**: Bundle optimization, code splitting, image optimization
- **Error Handling**: Error boundaries for graceful failure handling
- **Loading States**: Proper loading indicators for better UX
- **Component Reusability**: DRY principle - no code duplication

### Deployment & Production

- **Package Manager**: Bun (configured for faster builds and development)
- **Platform**: Vercel (optimized with `vercel.json` configuration)
- **Analytics**: Google Analytics 4 (G-8B1BVF8KKG) via `@next/third-parties`
- **Environment Variables**:
  - `NEXT_PUBLIC_GA_ID` for Google Analytics tracking
  - Configure in Vercel dashboard for production deployment
- **Build Optimization**: Turbopack for faster development builds

## Architecture Principles

### Component Organization

- **Purpose-driven folders**: Organize by functionality, not file type
- **Single Responsibility**: Each component has one clear purpose
- **Composition over Inheritance**: Build complex UI through component composition
- **Reusability**: Avoid code duplication - create reusable components

### Code Quality Standards

- **TypeScript First**: All components must have proper TypeScript interfaces
- **Consistent Naming**: PascalCase for components, camelCase for functions/variables
- **Barrel Exports**: Use index.ts for clean import statements
- **Design System**: Use constants from `lib/constants/` instead of hardcoded values

### Performance Guidelines

- **Server Components**: Use by default, client components only when necessary
- **Bundle Optimization**: Avoid duplicated code, use tree-shaking
- **Image Optimization**: Use Next.js Image component with proper sizing
- **Loading States**: Implement proper loading and error states

### Internationalization Best Practices

- **Server-side Translation**: Use `getTranslations` in server components
- **Consistent Keys**: Organize translation keys by feature/page
- **Fallback Handling**: Proper fallbacks for missing translations

## Critical Implementation Notes

### Footer Component (PRIORITY)

- **Problem**: 424+ lines of duplicated footer code across 4 files
- **Solution**: Extract into reusable `components/layout/Footer/Footer.tsx`
- **Impact**: Reduces bundle size and maintenance overhead

### Component Structure Requirements

- All layout components must be in `components/layout/`
- All page sections must be in `components/sections/`
- All reusable UI must be in `components/ui/` or `components/common/`
- Use TypeScript interfaces for all component props

### Design System Integration

- Colors: Use `lib/constants/colors.ts` instead of hardcoded Tailwind classes
- Spacing: Use design tokens from `lib/constants/spacing.ts`
- Typography: Follow scale defined in `lib/constants/typography.ts`

**CRITICAL**: When working on this codebase, prioritize eliminating code duplication, especially the footer component. Follow the modular architecture principles outlined above.
