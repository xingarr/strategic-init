# UXUI - Agile Development Team

A modern, responsive website for UXUI, your agile engineering partner that helps brands build exceptional digital products.

## 🚀 Overview

UXUI is an agile development team that partners with brands to deliver high-quality web applications, mobile apps, and digital experiences. Our website showcases our services, client success stories, and provides tools for potential clients to get started with their projects.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations and responsive layout
- **Service Showcase**: Detailed presentation of our development services and methodologies
- **Client Journeys**: Case studies and success stories from our client partnerships
- **Discovery Sessions**: Interactive forms for potential clients to start their project journey
- **Resource Library**: Curated resources and tools for development teams
- **ChatGPT Prompts Archive**: Collection of useful prompts for AI-assisted development
- **Contact Integration**: Calendly integration for scheduling intro calls
- **SEO Optimized**: Built with Next.js for optimal search engine performance

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 16** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI components (shadcn/ui)
- **Lucide React** - Beautiful icon library
- **Tailwind Animate** - Animation utilities

### Forms & Validation
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation
- **React Google reCAPTCHA** - Spam protection

### Additional Libraries
- **Framer Motion** - Animation library (via AnimateInView)
- **Recharts** - Data visualization components
- **Sonner** - Toast notifications
- **Next Themes** - Dark/light theme support
- **Date-fns** - Modern JavaScript date utility library

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── client-journeys/   # Client case studies
│   ├── discovery-session/ # Discovery session booking
│   ├── intro-call/        # Calendly integration
│   ├── resources/         # Resource library
│   ├── chatgpt-prompts/   # AI prompts archive
│   └── api/               # API routes
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   ├── forms/            # Form components
│   └── icons/            # Custom icons
├── hooks/                # Custom React hooks
├── lib/                  # Utility libraries
│   ├── sanity.ts         # Sanity CMS client (planned)
│   ├── navigation.ts     # Navigation utilities
│   └── utils.ts          # General utilities
└── public/               # Static assets
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **pnpm** package manager
- **Docker** (optional, for containerized development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd UXUI-2025
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Docker Development (Alternative)

```bash
docker-compose up
```

This will start the development server in a Docker container with hot reloading.

## 📜 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
# NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
# NEXT_PUBLIC_SANITY_DATASET=production
```

### Sanity CMS (Planned)

The project is configured to integrate with Sanity CMS for content management. Configuration will be added in `lib/sanity.ts`.

## 🚢 Deployment

### Build for Production

```bash
pnpm build
pnpm start
```

### Docker Deployment

```bash
docker build -t UXUI .
docker run -p 3000:3000 UXUI
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow React best practices and hooks patterns
- Use Tailwind CSS classes for styling
- Maintain consistent component structure

### Component Guidelines
- Use functional components with hooks
- Implement proper TypeScript interfaces
- Add proper accessibility attributes
- Use semantic HTML elements

### Performance
- Optimize images with Next.js Image component
- Implement lazy loading for components
- Minimize bundle size with tree shaking

## 📄 License

This project is private and proprietary to UXUI.

## 📞 Contact

For questions or inquiries, please visit our website or contact us through the discovery session form.

---

Built with ❤️ by the UXUI team