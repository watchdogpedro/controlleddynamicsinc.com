# Development Guide

Complete guide for developing the Controlled Dynamics Inc website.

## Table of Contents

- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Development Commands](#development-commands)
- [Environment Variables](#environment-variables)
- [Adding New Pages](#adding-new-pages)
- [Adding New Components](#adding-new-components)
- [Styling Guidelines](#styling-guidelines)
- [SEO Best Practices](#seo-best-practices)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

## Quick Start

```bash
# Navigate to project
cd /Users/pauldenman/controlleddynamicsinc.com

# Or use the shortcut (after reloading shell)
cdi

# Install dependencies
npm install

# Start development server
npm run dev

# Or use shortcut
cdi-dev
```

Open http://localhost:3000

## Project Structure

```
controlleddynamicsinc.com/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout (metadata, fonts)
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles
│   ├── about/
│   │   └── page.tsx             # About page
│   ├── contact/
│   │   └── page.tsx             # Contact page
│   └── api/                     # API routes (if needed)
│       └── contact/
│           └── route.ts         # Contact form API
├── components/                   # React components
│   ├── ui/                      # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   └── features/                # Feature-specific components
│       ├── ContactForm.tsx
│       └── ServiceCard.tsx
├── lib/                         # Utilities and helpers
│   ├── utils.ts                 # Utility functions
│   └── constants.ts             # Constants
├── public/                      # Static files
│   ├── images/                  # Image assets
│   ├── fonts/                   # Custom fonts
│   └── favicon.ico              # Favicon
├── types/                       # TypeScript type definitions
│   └── index.ts
├── .env.example                 # Environment template
├── .env.local                   # Local environment (gitignored)
├── .editorconfig                # Editor configuration
├── .prettierrc                  # Prettier configuration
├── CONTRIBUTING.md              # Contribution guidelines
├── CODE_OF_CONDUCT.md           # Code of conduct
├── DEVELOPMENT.md               # This file
├── README.md                    # Project documentation
└── package.json                 # Dependencies

## Development Commands

### Essential Commands

```bash
# Development
npm run dev          # Start development server (with hot reload)
npm run build        # Build for production
npm start            # Start production server locally
npm run lint         # Run ESLint

# Deployment
./EXECUTE_DEPLOYMENT.sh    # Full deployment to Heroku
git push heroku main       # Deploy latest code to Heroku

# Shortcuts (after sourcing ~/.zshrc)
cdi                  # Go to project directory
cdi-dev              # Start development server
cdi-deploy           # Deploy to Heroku
```

### Helpful Commands

```bash
# Check build output
npm run build

# Type checking
npx tsc --noEmit

# Format code with Prettier
npx prettier --write .

# Check for outdated packages
npm outdated

# Update packages
npm update
```

## Environment Variables

### Local Development (.env.local)

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Controlled Dynamics Inc."
```

### Production (Heroku)

```env
NEXT_PUBLIC_SITE_URL=https://controlleddynamicsinc.com
NEXT_PUBLIC_SITE_NAME="Controlled Dynamics Inc."
NODE_ENV=production
```

### Adding New Environment Variables

1. Add to `.env.example` with documentation
2. Add to `.env.local` for local development
3. Add to Heroku:
   ```bash
   heroku config:set VARIABLE_NAME=value -a controlleddynamicsinc
   ```

## Adding New Pages

### Simple Page

Create `app/[page-name]/page.tsx`:

```typescript
export default function PageName() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <main className="container mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold text-white">Page Title</h1>
        <p className="text-xl text-blue-200 mt-6">Page content</p>
      </main>
    </div>
  );
}
```

### Page with Metadata

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title | Controlled Dynamics Inc.',
  description: 'Page description for SEO',
};

export default function PageName() {
  return <div>Content</div>;
}
```

### Dynamic Route

Create `app/blog/[slug]/page.tsx`:

```typescript
export default function BlogPost({ params }: { params: { slug: string } }) {
  return <div>Post: {params.slug}</div>;
}
```

## Adding New Components

### Component Template

Create `components/ui/ComponentName.tsx`:

```typescript
interface ComponentNameProps {
  title: string;
  description?: string;
  onClick?: () => void;
}

export function ComponentName({ title, description, onClick }: ComponentNameProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-xl font-semibold">{title}</h3>
      {description && <p className="mt-2 text-gray-600">{description}</p>}
      {onClick && (
        <button
          onClick={onClick}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Action
        </button>
      )}
    </div>
  );
}
```

### Client Component (with state)

```typescript
'use client';

import { useState } from 'react';

export function InteractiveComponent() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```

## Styling Guidelines

### Tailwind CSS Classes

Use Tailwind's utility classes following mobile-first approach:

```tsx
<div className="
  p-4 md:p-8 lg:p-12              // Padding
  text-base md:text-lg lg:text-xl  // Typography
  bg-blue-500 hover:bg-blue-600    // Colors
  rounded-lg shadow-lg             // Effects
  transition-all duration-300       // Animations
">
  Content
</div>
```

### Color Palette

- **Primary:** `blue-500`, `blue-600`
- **Background:** `slate-900`, `blue-900`
- **Text:** `white`, `blue-200`, `blue-300`
- **Accent:** `blue-400`

### Responsive Breakpoints

- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px
- `2xl:` 1536px

## SEO Best Practices

### Page Metadata

```typescript
export const metadata: Metadata = {
  title: 'Page Title | Controlled Dynamics Inc.',
  description: 'Clear, concise description (150-160 characters)',
  keywords: ['motion control', 'precision engineering'],
  openGraph: {
    title: 'Page Title',
    description: 'Description for social sharing',
    url: 'https://controlleddynamicsinc.com/page',
    images: ['/images/og-image.png'],
  },
};
```

### Image Optimization

```tsx
import Image from 'next/image';

<Image
  src="/images/photo.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  priority={false}  // Set true for above-fold images
/>
```

### Semantic HTML

```tsx
<article>
  <header>
    <h1>Main Title</h1>
  </header>
  <section>
    <h2>Section Title</h2>
    <p>Content</p>
  </section>
  <footer>
    <p>Footer content</p>
  </footer>
</article>
```

## Deployment

### Deploy to Heroku

#### Quick Deploy
```bash
./EXECUTE_DEPLOYMENT.sh
```

#### Manual Deploy
```bash
git push heroku main
```

#### View Logs
```bash
heroku logs --tail -a controlleddynamicsinc
```

#### Check Status
```bash
heroku apps:info -a controlleddynamicsinc
```

### Deploy Checklist

- [ ] Code builds successfully (`npm run build`)
- [ ] No linting errors (`npm run lint`)
- [ ] Environment variables set
- [ ] Images optimized
- [ ] Metadata updated
- [ ] Links tested
- [ ] Mobile responsive
- [ ] Accessibility checked

## Troubleshooting

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

### Port Already in Use

```bash
# Find and kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm run dev
```

### Git Issues

```bash
# Check status
git status

# Discard local changes
git checkout -- .

# Pull latest
git pull origin main
```

### Heroku Issues

```bash
# Check logs
heroku logs --tail -a controlleddynamicsinc

# Restart app
heroku restart -a controlleddynamicsinc

# Check environment variables
heroku config -a controlleddynamicsinc
```

## Performance Optimization

### Image Optimization
- Use Next.js Image component
- Compress images before uploading
- Use appropriate image formats (WebP when possible)

### Code Splitting
```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
```

### Lazy Loading
```tsx
<Image
  src="/image.jpg"
  alt="Description"
  loading="lazy"
  width={800}
  height={600}
/>
```

## Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Heroku Dev Center](https://devcenter.heroku.com)
- [MDN Web Docs](https://developer.mozilla.org)

## Getting Help

- Check documentation files in this repository
- Review [CONTRIBUTING.md](CONTRIBUTING.md) for coding standards
- Open an issue on GitHub for bugs or questions
- Contact: watchdogpedro@gmail.com

---

Happy coding! 🚀
