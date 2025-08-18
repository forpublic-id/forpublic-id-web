# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ForPublic.id is a Next.js 15 application focused on providing digital solutions for public good. It's a platform that offers various free digital applications and tools to help Indonesian communities access public information and services. The application features a landing page showcasing different categories of public services including Open Data, Development Info, Public Services, Education, Health, and Economy applications.

## Development Commands

**Package Manager: Bun** (faster alternative to npm/yarn)
- `bun install` - Install dependencies
- `bun run dev` - Start development server with Turbopack (runs on http://localhost:3000)
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint for code quality checks

## Architecture & Tech Stack

### Frontend Framework
- **Next.js 15** with App Router architecture
- **React 19** for UI components
- **TypeScript** for type safety

### Styling & UI
- **Tailwind CSS v4** for utility-first styling
- **shadcn/ui** component library (configured in `components.json`)
- **Geist font family** (Sans and Mono variants from Vercel)
- **Lucide React** for icons
- **class-variance-authority** for component variants
- Custom red branding color scheme (#dc2626)

### Project Structure
```
app/                    # Next.js App Router pages
├── layout.tsx         # Root layout with metadata and fonts
├── page.tsx           # Homepage with full landing page
└── globals.css        # Global styles

components/
└── ui/                # shadcn/ui components
    ├── button.tsx     # Button with variants (default, destructive, outline, etc.)
    ├── card.tsx       # Card components with header/content
    ├── input.tsx      # Form input component
    └── badge.tsx      # Badge component for labels

lib/
└── utils.ts           # Utility functions (cn helper for className merging)
```

### Key Configuration
- **shadcn/ui config**: "new-york" style, RSC enabled, neutral base color
- **Path aliases**: `@/components`, `@/lib`, `@/utils`, `@/ui`, `@/hooks`
- **ESLint**: Next.js recommended configuration
- **PostCSS**: Configured for Tailwind CSS processing

### Component Patterns
- Uses shadcn/ui component system with consistent variant patterns
- Implements compound components (Card + CardHeader + CardContent)
- Follows Next.js 15 App Router conventions with server components by default
- TypeScript interfaces for component props with proper typing

### Brand Identity
- Primary brand color: Red (#dc2626, #b91c1c for hover states)
- Logo: "FP" in white text on red background
- Consistent red accent throughout the UI
- Professional, accessible design focused on public service

### Data & Content
The homepage showcases six main application categories with detailed descriptions, feature highlights, and a "Coming Soon" section for future applications. All content is static and focuses on transparency, accessibility, and public service.

### Deployment & Production
- **Package Manager**: Bun (configured for faster builds and development)
- **Platform**: Vercel (optimized with `vercel.json` configuration)
- **Analytics**: Google Analytics 4 (G-8B1BVF8KKG) via `@next/third-parties`
- **Environment Variables**: 
  - `NEXT_PUBLIC_GA_ID` for Google Analytics tracking
  - Configure in Vercel dashboard for production deployment