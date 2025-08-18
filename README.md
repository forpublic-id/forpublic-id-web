# ForPublic.id Web

**Digital Solutions for Public Good**

ForPublic.id is a modern Next.js 15 application focused on providing digital solutions for public good. This bilingual platform (Indonesian/English) offers various free digital applications and tools to help Indonesian communities access public information and services with transparency and ease.

## 🎯 Project Mission

Empowering communities through accessible and beneficial technology that bridges the gap between citizens and public services. Every application we develop is designed with community needs as the top priority, featuring full internationalization and mobile-responsive design.

## ✨ Features

### 🌐 **Core Features**

- **Bilingual Support**: Complete Indonesian/English internationalization
- **Mobile-First Design**: Responsive across all devices
- **SEO Optimized**: Dynamic sitemap, robots.txt, and meta tags
- **Performance Focused**: Bundle optimization with Turbopack

### 📱 **Application Categories**

- **Open Data**: Easy access to public data and insights
- **Development Info**: Transparency in regional development projects
- **Public Services**: Tools to simplify access to government services
- **Education**: Learning applications for the community
- **Health**: Public health information and tools
- **Economy**: Accessible economic data and analysis

### 🔧 **Developer Experience**

- **Modern Architecture**: Modular component organization
- **Type Safety**: Comprehensive TypeScript coverage
- **Design System**: Consistent UI with centralized constants
- **Code Quality**: ESLint + Prettier with strict formatting

## 🛠️ Tech Stack

### **Core Framework**

- **Framework**: Next.js 15 with App Router
- **Runtime**: React 19
- **Language**: TypeScript
- **Package Manager**: Bun ⚡

### **Styling & UI**

- **Styling**: Tailwind CSS v4 with design tokens
- **UI Components**: shadcn/ui (New York style)
- **Icons**: Lucide React
- **Font**: Geist (Sans & Mono)
- **Component Variants**: class-variance-authority

### **Features & Tools**

- **Internationalization**: next-intl with middleware routing
- **Analytics**: Google Analytics 4
- **Deployment**: Vercel with optimized configuration
- **Development**: Turbopack for fast builds

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh) installed on your machine

### Installation

1. Clone the repository:

```bash
git clone https://github.com/forpublic-id/forpublic-id-web.git
cd forpublic-id-web
```

2. Install dependencies:

```bash
bun install
```

3. Set up environment variables:

```bash
cp .env.local.example .env.local
```

4. Start the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Available Scripts

- `bun run dev` - Start development server with Turbopack
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint for code quality checks
- `bun run format` - Format code using Prettier
- `bun run format:check` - Check code formatting without modifying files

## 🏗️ Project Structure

```
forpublic-id-web/
├── app/                     # Next.js App Router
│   ├── [locale]/           # Internationalized routes (id/en)
│   └── globals.css         # Global styles with design tokens
├── components/             # React components (organized by purpose)
│   ├── ui/                # Base UI components (shadcn/ui)
│   ├── layout/            # Layout components (Header, Footer)
│   ├── sections/          # Page section components
│   └── common/            # Reusable components
├── lib/                   # Utilities and configuration
│   ├── constants/         # Design system constants
│   ├── hooks/            # Custom React hooks
│   └── types/            # TypeScript definitions
├── i18n/                 # Internationalization
└── developments/         # Architecture documentation
```

## 🌍 Environment Variables

| Variable            | Description                     | Example        | Required |
| ------------------- | ------------------------------- | -------------- | -------- |
| `NEXT_PUBLIC_GA_ID` | Google Analytics Measurement ID | `G-8B1BVF8KKG` | No       |

## 🚀 Deployment

### Vercel (Recommended)

This project is optimized for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_GA_ID`: Your Google Analytics ID
3. Deploy automatically with every push to main

The project includes `vercel.json` configuration for optimal Bun support.

## 📚 Architecture Documentation

Detailed architecture analysis and improvement proposals are available in the `/developments` directory:

- **`architecture-analysis.md`** - Comprehensive analysis of current architecture, issues, and recommendations
- **`restructured-architecture-proposal.md`** - Detailed proposal for improved modular architecture

### Current Status

- ⚠️ **In Progress**: Migrating to modular component architecture
- 🎯 **Priority**: Eliminating footer code duplication (424+ lines across 4 files)
- 📈 **Goal**: 15-20% bundle size reduction through component optimization

## 🧪 Development Principles

### Component Organization

- **Purpose-driven folders**: Components organized by functionality
- **Single Responsibility**: Each component has one clear purpose
- **Reusability**: DRY principle - avoid code duplication
- **Type Safety**: Comprehensive TypeScript interfaces

### Code Quality

- **Consistent Naming**: PascalCase for components, camelCase for functions
- **Barrel Exports**: Clean imports using index.ts files
- **Design System**: Centralized constants instead of hardcoded values
- **Performance**: Bundle optimization and tree-shaking

## 🤝 Contributing

We welcome contributions! Please:

1. Follow the component organization principles outlined in `CLAUDE.md`
2. Ensure TypeScript types are properly defined
3. Use the existing design system constants
4. Write reusable components to avoid duplication
5. Test across both Indonesian and English locales

### Priority Contributions Needed

- [ ] Extract Footer component to eliminate duplication
- [ ] Implement design system constants
- [ ] Create modular component structure
- [ ] Add error boundaries and loading states

## 📄 License

This project is dedicated to public good and community empowerment.

---

Made with ❤️ for Indonesian communities | 🚀 Built with modern web technologies
