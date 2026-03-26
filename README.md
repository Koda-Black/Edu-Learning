# Edu Learning & Immersion - Global Bilingual Platform

A professional, mobile-responsive website for language training and communication services. Built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **next-intl** for bilingual (EN/FR) support.

## Features

✨ **Core Features:**

- 🌍 Bilingual support (English/French)
- 📱 Mobile-responsive design
- 🎨 Light/Dark mode
- 💬 AI Chatbot with WhatsApp integration
- 💰 Dynamic price calculator for B2B translations
- 📝 Lead management with forms
- ⚡ Microphone wave animation on homepage
- 🎯 Conversion-focused design

### Pages

- **Homepage** - Hero section with microphone wave animation, services preview
- **Programs** - Language training programs with filtering
- **Corporate** - B2B training solutions and case studies
- **Translation** - Translation services with price calculator
- **Partnerships** - Partner network information
- **About** - Company story, mission, vision, and team
- **Contact** - Contact information and FAQ
- **Blog** - Insights and resources

## Tech Stack

### Frontend

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **next-intl** - Bilingual routing and content
- **React** 19

### Backend

- **Next.js API Routes** - Serverless functions
- **TypeScript** - Type safety

### Future Integrations

- PostgreSQL for database
- Stripe for payments (optional)
- SendGrid for emails
- AWS S3 for file uploads
- Plausible Analytics for tracking
- WhatsApp Business API
- Cloudinary for image management

## Project Structure

```
EduLearning/
├── app/
│   ├── [locale]/
│   │   ├── page.tsx (homepage)
│   │   ├── programs/
│   │   ├── corporate/
│   │   ├── translation/
│   │   ├── partnerships/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── blog/
│   │   └── layout.tsx
│   ├── api/
│   │   ├── program-registration/
│   │   ├── quote-request/
│   │   └── upload/
│   └── layout.tsx (root)
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ChatBot.tsx
│   ├── PriceCalculator.tsx
│   ├── ProgramRegistrationForm.tsx
│   └── QuoteRequestForm.tsx
├── lib/
│   ├── i18n.ts
│   ├── analytics.ts
│   └── types.ts
├── messages/
│   ├── en.json (English translations)
│   └── fr.json (French translations)
├── styles/
│   └── globals.css
├── public/
│   └── manifest.json
├── middleware.ts (locale routing)
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm or yarn

### Installation

1. **Navigate to project directory:**

   ```bash
   cd /Users/macbook/Desktop/Personal-Projects/EduLearning
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   ```bash
   cp .env.example .env.local
   ```

4. **Run development server:**

   ```bash
   npm run dev
   ```

5. **Open browser:**
   Navigate to `http://localhost:3000/en` or `http://localhost:3000/fr`

## Build & Deployment

### Build for production:

```bash
npm run build
npm start
```

### Deployment Options

- **Vercel** (Recommended) - `vercel deploy`
- **Netlify** - Connect GitHub repo
- **AWS** - EC2, Amplify, or Lightsail
- **DigitalOcean** - App Platform

## Key Components

### Header

- Navigation menu
- Language switcher (EN/FR)
- Dark/Light mode toggle
- Mobile-responsive hamburger menu

### ChatBot

- Floating widget
- WhatsApp integration
- Quick reply options
- Always accessible

### PriceCalculator

- Dynamic pricing for B2B translations
- Based on document type, complexity, and urgency
- Real-time estimation

### Forms

- Program registration (B2C)
- Quote requests (B2B)
- Contact forms
- Built-in validation

## Customization

### Change Colors

Edit `tailwind.config.ts` to modify the primary and accent colors:

```typescript
primary: { ... }  // Default: Blue
accent: { ... }   // Default: Orange
warm: { ... }     // Default: Warm
```

### Update Content

Edit JSON files in `messages/` folder:

- `messages/en.json` - English content
- `messages/fr.json` - French content

### Add New Pages

1. Create new folder in `app/[locale]/`
2. Add `page.tsx` file
3. Auto-routes with i18n support

## Analytics & Tracking

The platform is ready for Plausible Analytics integration. Add your domain:

```typescript
// In your script tag:
NEXT_PUBLIC_PLAUSIBLE_DOMAIN = yourdomain.com;
```

## Database Integration (Future)

When ready to add a database, connect PostgreSQL:

```bash
npm install @prisma/client prisma
npx prisma init
```

## API Endpoints

- `POST /api/program-registration` - Register for programs
- `POST /api/quote-request` - Request quotes
- `POST /api/upload` - Upload files

## Performance

- ✅ Static generation (SSG) for fast loading
- ✅ Image optimization with Next.js Image component
- ✅ CSS minification with Tailwind
- ✅ Tree-shaking for smaller bundle
- ✅ CDN ready (Vercel, Cloudflare)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

To contribute:

1. Create a feature branch
2. Make your changes
3. Test responsiveness & functionality
4. Submit pull request

## License

Proprietary - Edu Learning & Immersion © 2024

## Support

For support:

- 📧 Email: info@edulearning.com
- 💬 WhatsApp: +234XXXXXXXXX

---

**Built with ❤️ for global learners and professionals**
