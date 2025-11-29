# Contributing to Controlled Dynamics Inc Website

Thank you for your interest in contributing to the Controlled Dynamics Inc website! This document provides guidelines and best practices for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before contributing.

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm (comes with Node.js)
- Git
- A code editor (VS Code recommended)

### Local Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/watchdogpedro/controlleddynamicsinc.com.git
   cd controlleddynamicsinc.com
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open http://localhost:3000 in your browser

## Development Workflow

### Branching Strategy

- `main` - Production-ready code
- `develop` - Development branch (create if needed)
- `feature/*` - New features
- `fix/*` - Bug fixes
- `hotfix/*` - Critical production fixes

### Creating a New Feature

1. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes

3. Test thoroughly:
   ```bash
   npm run build
   npm run lint
   ```

4. Commit your changes (see [Commit Guidelines](#commit-guidelines))

5. Push to GitHub:
   ```bash
   git push origin feature/your-feature-name
   ```

6. Create a Pull Request

## Coding Standards

### TypeScript

- **Use TypeScript** for all new files
- **Define types** explicitly - avoid `any` when possible
- **Use interfaces** for object shapes
- **Export types** that are used in multiple files

```typescript
// Good
interface UserProps {
  name: string;
  email: string;
  age?: number;
}

function UserCard({ name, email, age }: UserProps) {
  // ...
}

// Avoid
function UserCard(props: any) {
  // ...
}
```

### React/Next.js Best Practices

#### Component Structure

- **Use functional components** with hooks
- **Keep components small** and focused on a single responsibility
- **Use Server Components** by default (Next.js 14 App Router)
- **Mark Client Components** explicitly with `'use client'`

```typescript
// Server Component (default)
export default function HomePage() {
  return <div>Server-rendered content</div>;
}

// Client Component (when needed)
'use client';

import { useState } from 'react';

export default function InteractiveButton() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

#### File Naming

- **Pages:** `page.tsx` (Next.js convention)
- **Layouts:** `layout.tsx` (Next.js convention)
- **Components:** `PascalCase.tsx` (e.g., `UserCard.tsx`)
- **Utilities:** `camelCase.ts` (e.g., `formatDate.ts`)
- **Types:** `types.ts` or inline in component files

#### Directory Structure

```
app/
├── (routes)/
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   └── about/
│       └── page.tsx       # About page
components/
├── ui/                    # Reusable UI components
│   ├── Button.tsx
│   └── Card.tsx
├── layout/                # Layout components
│   ├── Header.tsx
│   └── Footer.tsx
└── features/              # Feature-specific components
    └── ContactForm.tsx
lib/                       # Utilities and helpers
├── utils.ts
└── constants.ts
public/                    # Static assets
├── images/
└── fonts/
```

### Tailwind CSS Guidelines

- **Use Tailwind utility classes** instead of custom CSS when possible
- **Follow mobile-first** responsive design
- **Use consistent spacing** from Tailwind's spacing scale
- **Extract repeated patterns** into components when you see 3+ uses

```tsx
// Good - Mobile first, semantic classes
<div className="p-4 md:p-8 lg:p-12">
  <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white">
    Title
  </h1>
</div>

// Avoid - Desktop first
<div className="lg:p-12 md:p-8 p-4">
  ...
</div>
```

### Code Organization

#### Imports

Order imports logically:

```typescript
// 1. React/Next.js imports
import { useState } from 'react';
import Image from 'next/image';

// 2. Third-party libraries
import { format } from 'date-fns';

// 3. Local components
import { Button } from '@/components/ui/Button';

// 4. Local utilities
import { formatCurrency } from '@/lib/utils';

// 5. Types
import type { User } from '@/types';
```

#### Comments

- **Write self-documenting code** - use clear variable names
- **Add comments** for complex logic or business rules
- **Use JSDoc** for function documentation

```typescript
/**
 * Calculates the total price including tax
 * @param subtotal - The price before tax
 * @param taxRate - Tax rate as a decimal (e.g., 0.08 for 8%)
 * @returns Total price including tax
 */
function calculateTotal(subtotal: number, taxRate: number): number {
  return subtotal * (1 + taxRate);
}
```

### Performance Best Practices

- **Use Next.js Image component** for all images
- **Implement lazy loading** for below-fold content
- **Minimize client-side JavaScript** - use Server Components when possible
- **Code split** large components with dynamic imports

```typescript
// Lazy load heavy components
import dynamic from 'next/dynamic';

const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <p>Loading chart...</p>,
  ssr: false,
});
```

### Accessibility (a11y)

- **Use semantic HTML** (`<button>` not `<div onClick>`)
- **Add alt text** to all images
- **Ensure keyboard navigation** works
- **Use ARIA labels** when needed
- **Maintain color contrast** ratios (WCAG AA minimum)

```tsx
// Good
<button
  onClick={handleClick}
  aria-label="Close modal"
  className="focus:ring-2 focus:ring-blue-500"
>
  <CloseIcon />
</button>

// Avoid
<div onClick={handleClick}>
  <CloseIcon />
</div>
```

### Security Best Practices

- **Never commit** API keys or secrets
- **Use environment variables** for configuration
- **Sanitize user input** before displaying
- **Use HTTPS** everywhere
- **Validate data** on both client and server

### Testing

- **Test locally** before committing:
  ```bash
  npm run build
  npm run lint
  ```
- **Test responsive design** on multiple screen sizes
- **Test in multiple browsers** (Chrome, Firefox, Safari)
- **Test accessibility** with keyboard navigation

## Commit Guidelines

### Commit Message Format

Use conventional commits:

```
<type>(<scope>): <subject>

<body>

<footer>
```

#### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Build process or tooling changes

#### Examples

```bash
# Feature
git commit -m "feat(homepage): add hero section with CTA buttons"

# Bug fix
git commit -m "fix(contact): resolve form validation error"

# Documentation
git commit -m "docs(readme): update deployment instructions"

# Multiple changes
git commit -m "feat(services): add services page

- Created services page layout
- Added service card components
- Integrated with Tailwind CSS
- Tested responsive design"
```

## Pull Request Process

1. **Update documentation** if needed
2. **Test thoroughly** - build succeeds, no console errors
3. **Write clear PR description**:
   - What changed?
   - Why was it changed?
   - How to test?
4. **Link related issues** if applicable
5. **Request review** from maintainers
6. **Address feedback** promptly
7. **Squash commits** if requested before merging

### PR Checklist

- [ ] Code follows project coding standards
- [ ] All tests pass (`npm run build`)
- [ ] No linting errors (`npm run lint`)
- [ ] Responsive design tested
- [ ] Accessibility considered
- [ ] Documentation updated
- [ ] Environment variables documented in `.env.example`
- [ ] Commit messages follow conventions

## Questions?

If you have questions:
- Check existing documentation
- Review closed issues/PRs
- Open a new issue for discussion

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to Controlled Dynamics Inc! 🚀
