# ForPublic.id Web

**Digital Solutions for Public Good**

ForPublic.id is a Next.js 15 application focused on providing digital solutions for public good. This platform offers various free digital applications and tools to help Indonesian communities access public information and services with ease.

## 🎯 Project Mission

Empowering communities through accessible and beneficial technology that bridges the gap between citizens and public services. Every application we develop is designed with community needs as the top priority.

## ✨ Features

- **Open Data**: Easy access to public data and insights
- **Development Info**: Transparency in regional development projects  
- **Public Services**: Tools to simplify access to government services
- **Education**: Learning applications for the community
- **Health**: Public health information and tools
- **Economy**: Accessible economic data and analysis

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Runtime**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (New York style)
- **Icons**: Lucide React
- **Font**: Geist (Sans & Mono)
- **Package Manager**: Bun ⚡
- **Analytics**: Google Analytics 4

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

## 🌍 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics Measurement ID | `G-8B1BVF8KKG` |

## 🚀 Deployment

### Vercel (Recommended)

This project is optimized for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_GA_ID`: Your Google Analytics ID
3. Deploy automatically with every push to main

The project includes `vercel.json` configuration for optimal Bun support.

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## 📄 License

This project is dedicated to public good and community empowerment.

---

Made with ❤️ for Indonesian communities
