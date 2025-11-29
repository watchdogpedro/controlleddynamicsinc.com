# Controlled Dynamics Inc. Website

Professional website for Controlled Dynamics Inc. - Precision Engineering & Advanced Motion Control Solutions

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Heroku
- **Repository:** GitHub

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git

### Installation

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
Edit `.env.local` with your configuration.

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
controlleddynamicsinc.com/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── public/                # Static assets
├── .env.example           # Environment variables template
├── .env.local            # Local environment (not committed)
└── package.json          # Dependencies
```

## Deployment

### Heroku Deployment

1. Login to Heroku:
```bash
heroku login
```

2. Create Heroku app:
```bash
heroku create controlleddynamicsinc
```

3. Set up automatic deploys from GitHub:
   - Go to Heroku Dashboard
   - Navigate to your app
   - Click "Deploy" tab
   - Connect to GitHub repository
   - Enable automatic deploys from main branch

4. Configure environment variables in Heroku:
```bash
heroku config:set NEXT_PUBLIC_SITE_URL=https://controlleddynamicsinc.com
```

### Custom Domain Setup

1. Add domain in Heroku:
```bash
heroku domains:add controlleddynamicsinc.com
heroku domains:add www.controlleddynamicsinc.com
```

2. Update DNS at Porkbun:
   - Add CNAME record: `www` → `[your-app].herokuapp.com`
   - Add ALIAS/ANAME record: `@` → `[your-app].herokuapp.com`

## Domain Information

- **Domain:** controlleddynamicsinc.com
- **Registrar:** Porkbun.com
- **Nameservers:**
  - curitiba.ns.porkbun.com
  - fortaleza.ns.porkbun.com
  - maceio.ns.porkbun.com
  - salvador.ns.porkbun.com

## Development

### Adding New Pages

Create new pages in the `app/` directory:

```tsx
// app/about/page.tsx
export default function About() {
  return <div>About Page</div>;
}
```

### Styling

This project uses Tailwind CSS. Customize the theme in `tailwind.config.ts`.

## Repository

- **GitHub:** https://github.com/watchdogpedro/controlleddynamicsinc.com
- **Live Site:** https://controlleddynamicsinc.com (pending deployment)

## License

Copyright © 2024 Controlled Dynamics Inc. All rights reserved.

## Contact

For questions or support, contact: Paul Denman
- Email: watchdogpedro@gmail.com
- Organization: Winfield Tech
