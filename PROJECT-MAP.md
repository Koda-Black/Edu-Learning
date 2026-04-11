# Edu Learning & Immersion — COMPLETE PROJECT MAP

**Live URL:** https://edu-learning-kappa.vercel.app
**GitHub:** https://github.com/Koda-Black/Edu-Learning
**Stack:** Next.js 15 · React 19 · TypeScript · Tailwind CSS · next-intl (EN/FR)
**Brand Color:** #0D883C (green) · WhatsApp: +234 810 083 5573

---

## FILE TREE

```
EduLearning/
├── package.json                    ← Dependencies & scripts (Next.js 15, React 19, next-intl)
├── next.config.js                  ← Next.js config with next-intl plugin
├── middleware.ts                   ← Locale routing (en/fr), excludes /api, /admin, /_next
├── tsconfig.json                   ← TypeScript strict mode, ES2020 target, @/* path alias
├── tailwind.config.ts              ← Brand colors, custom animations (fade-in, float, marquee)
├── postcss.config.js               ← Tailwind CSS + Autoprefixer
├── next-env.d.ts                   ← Next.js TypeScript declarations
├── LICENSE                         ← Project license
├── README.md                       ← Project readme
├── QUICKSTART.md                   ← Quick start guide
│
├── styles/
│   └── globals.css                 ← Tailwind directives, Google Fonts (Inter, Geist), animations
│
├── messages/
│   ├── en.json                     ← ALL English text content (428 lines)
│   └── fr.json                     ← ALL French text content (428 lines, full translation)
│
├── i18n/
│   ├── routing.ts                  ← Locales: [en, fr], default: en, prefix: always
│   ├── request.ts                  ← Server-side locale detection
│   └── ../lib/i18n.ts              ← Client-side message loader
│
├── lib/
│   ├── types.ts                    ← TypeScript interfaces (Lead, ProgramRegistration, QuoteRequest)
│   ├── whatsapp.ts                 ← WhatsApp URL helper (number: 2348100835573)
│   ├── admin-store.ts              ← JSON file-based storage (blog, pricing, requests, emails)
│   └── analytics.ts                ← Plausible analytics + dark/light theme toggle
│
├── data/
│   └── requests.json               ← Stored form submissions (quote, corporate, registration)
│
├── components/
│   ├── index.ts                    ← Barrel export for all 7 components
│   ├── Header.tsx                  ← Fixed nav bar, logo, language switcher (EN/FR), mobile menu
│   ├── Footer.tsx                  ← Links, social icons, back-to-top, copyright
│   ├── ChatBot.tsx                 ← Floating AI chatbot (20 Q&A patterns, quick actions)
│   ├── PriceCalculator.tsx         ← Translation price estimator (₦/word × speed multiplier)
│   ├── ProgramRegistrationForm.tsx ← Student enrollment form → /api/program-registration
│   ├── QuoteRequestForm.tsx        ← Quote request + file upload (10MB, PDF/DOC) → /api/quote-request
│   └── CorporateConsultationForm.tsx ← Modal: training calculator + WhatsApp → /api/corporate-consultation
│
├── app/
│   ├── layout.tsx                  ← Root layout (metadata only)
│   │
│   ├── [locale]/                   ← Bilingual pages (en/fr)
│   │   ├── layout.tsx              ← Main layout: Header + Footer + ChatBot + analytics scripts
│   │   ├── page.tsx                ← HOMEPAGE (hero, trust, stats, programs, projects, features, skills, testimonials, pricing, FAQ, CTA)
│   │   ├── programs/page.tsx       ← 9 language program cards with level filter
│   │   ├── corporate/page.tsx      ← B2B training (6 benefits, 4-step process, consultation modal)
│   │   ├── translation/page.tsx    ← 4 translation services + quote form + price calculator
│   │   ├── partnerships/page.tsx   ← 4 partner types + 8 language teaching opportunities
│   │   ├── about/page.tsx          ← Mission, vision, story, 4 values, 4 team members
│   │   ├── blog/page.tsx           ← 6 blog post cards (date, category, description)
│   │   └── contact/page.tsx        ← Email + WhatsApp cards + contact form
│   │
│   ├── admin/                      ← Admin panel (password: eduadmin2024)
│   │   ├── layout.tsx              ← Auth gate + sidebar nav + Tailwind import
│   │   ├── page.tsx                ← Dashboard: 6 stat cards + quick action links
│   │   ├── blog/page.tsx           ← Blog post editor (create/edit/delete, EN+FR fields)
│   │   ├── pricing/page.tsx        ← Pricing configuration manager
│   │   ├── requests/page.tsx       ← View/filter/delete form submissions
│   │   └── emails/page.tsx         ← Email contact list manager
│   │
│   └── api/
│       ├── program-registration/route.ts  ← POST: student enrollment
│       ├── quote-request/route.ts         ← POST: translation quote + file upload
│       ├── corporate-consultation/route.ts ← POST: corporate training inquiry
│       ├── upload/route.ts                ← POST: file upload handler (10MB limit)
│       └── admin/
│           ├── stats/route.ts             ← GET: dashboard statistics
│           ├── blog/route.ts              ← GET/POST/DELETE: blog posts
│           ├── pricing/route.ts           ← GET/POST: pricing config
│           ├── requests/route.ts          ← GET/DELETE: form submissions
│           └── emails/route.ts            ← GET/POST: email contacts
│
└── public/
    ├── manifest.json               ← PWA manifest (EduLearning & Immersion)
    └── images/
        ├── logo/                   ← Brand logo files
        ├── corporate/              ← Corporate page images
        ├── programs/               ← Program card images
        ├── projects/               ← Project showcase images
        ├── testimonials/           ← Testimonial avatar photos
        ├── translation/            ← Translation page images
        └── trust/                  ← Trust section images
```

---

## PAGE-BY-PAGE CONTENT MAP

### 1. HOMEPAGE (`/en` or `/fr`)

**File:** `app/[locale]/page.tsx`
**What visitors see (top to bottom):**

| Section              | Content                                                                                                                                                                                                                                                       |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Hero**             | "Learn Languages, Master Communication" · "Global training for individuals and businesses" · 2 buttons: Explore Programs, Chat with Us · Microphone wave animation                                                                                            |
| **Trust Bar**        | "Trusted by learners from 50+ countries" · "Made in Cameroon" badge                                                                                                                                                                                           |
| **About Snippet**    | "Learning Built for Real Careers" · 3 pills: English & French, Corporate Training, Translation Services                                                                                                                                                       |
| **Stats (animated)** | 97% Learner Satisfaction · 50 Courses Available · 3,000+ Active Learners · 25 Countries Reached                                                                                                                                                               |
| **Programs Preview** | 3 cards: General English & French (Most Popular) · Business & Professional (Corporate) · Translation & Interpretation (Professional)                                                                                                                          |
| **Projects**         | 3 cards: Online Learning Platform · Corporate Training Portal · Marketing Education Website                                                                                                                                                                   |
| **Features**         | 4 cards: Expert Instructors · Hands-On Projects · Career-Focused Curriculum · Recognized Certificates                                                                                                                                                         |
| **Skills**           | 12 learning outcomes in 2 columns (Structured Curriculum, Project Experience, Case Studies, Progress Tracking, Flexible Schedule, Career Assignments, Skill-Based Training, Industry Skills, Clear Goals, Industry Knowledge, Own Pace, Job-Ready Confidence) |
| **Testimonials**     | 4 reviews: Daniel Carter (Language Student) · Olivia Bennett (Marketing Professional) · Ethan Walker (Graduate Student) · Sophia Turner (Translation Student)                                                                                                 |
| **Pricing**          | 3 tiers: Basic ₦15,000/mo · Pro ₦30,000/mo (Most Popular) · Team ₦75,000/mo                                                                                                                                                                                   |
| **FAQ**              | 4 questions: Who can enroll? · Certificate? · Lifetime access? · Beginner friendly?                                                                                                                                                                           |
| **Final CTA**        | "Start Your Learning Journey Today" with background image                                                                                                                                                                                                     |

---

### 2. PROGRAMS PAGE (`/en/programs`)

**File:** `app/[locale]/programs/page.tsx`

**9 Program Cards (filterable by level):**

| Program                           | Level        | Duration | Format             | Price    |
| --------------------------------- | ------------ | -------- | ------------------ | -------- |
| General English                   | Beginner     | 3 months | Online / In-person | ₦35,000  |
| General French                    | Beginner     | 3 months | Online / In-person | ₦35,000  |
| Business English                  | Intermediate | 4 months | Online / In-person | ₦55,000  |
| Business French                   | Intermediate | 4 months | Online / In-person | ₦55,000  |
| Advanced Conversation             | Advanced     | 2 months | Online             | ₦40,000  |
| Exam Preparation (IELTS/DELF/TEF) | Advanced     | 3 months | Online / In-person | ₦65,000  |
| Kids & Teens English              | Beginner     | Ongoing  | Online / In-person | ₦25,000  |
| Corporate Training                | Custom       | Custom   | On-site / Virtual  | Custom   |
| Intensive Immersion               | All          | 1 month  | In-person          | ₦120,000 |

Each card has a "Register Now" button linking to WhatsApp.

---

### 3. CORPORATE TRAINING PAGE (`/en/corporate`)

**File:** `app/[locale]/corporate/page.tsx`

- **Hero:** "Corporate Training & Consulting" · "Solutions for modern teams" · "Get a Free Consultation" button
- **6 Benefits:** Customized Programs · Flexible Scheduling · Expert Trainers · Progress Tracking · Group & Individual · Certification
- **4-Step Process:** Assess → Design → Deliver → Track
- **CTA:** "Ready to Train Your Team?" opens consultation modal
- **Modal (CorporateConsultationForm):** Training type (corporate/personal), mode (online/hybrid/physical), sliders for sessions/week, hours/session, trainees, time of day, company name, contact info, live price calculator in Naira, sends to WhatsApp

---

### 4. TRANSLATION PAGE (`/en/translation`)

**File:** `app/[locale]/translation/page.tsx`

- **Hero:** "Translation & Interpretation Services" · "Professional quality, fast turnaround"
- **4 Services:** Document Translation · Simultaneous Interpretation · Website Localization · Certified Translation
- **Quote Section:** QuoteRequestForm (name, email, WhatsApp, subject, message, file upload PDF/DOC 10MB max)
- **Price Calculator:** Word count slider × document type (Simple ₦50/word, Technical ₦80/word, Legal ₦100/word) × speed (Standard 1x, Semi-Express 1.5x, Express 2x)

---

### 5. PARTNERSHIPS PAGE (`/en/partnerships`)

**File:** `app/[locale]/partnerships/page.tsx`

- **Hero:** "Become a Knowledge Partner"
- **4 Partner Types:** Academic Institutions · Corporate Partners · NGOs & International Orgs · Government Agencies
- **Teach Languages Section:** "Teach Your Language Under Edu Learning" with 8 language cards:
  - 🇳🇱 Dutch · 🇩🇪 German · 🇪🇸 Spanish · 🇨🇳 Chinese · 🇸🇦 Arabic · 🇵🇹 Portuguese · 🇮🇹 Italian · 🇯🇵 Japanese
  - "Apply to Teach" → WhatsApp link
- **CTA:** "Let's Build Something Together"

---

### 6. ABOUT PAGE (`/en/about`)

**File:** `app/[locale]/about/page.tsx`

- **Hero:** "Empowering individuals and organizations with language skills that transform careers and open doors."
- **Mission:** "To provide exceptional language training and communication solutions that empower people to connect across cultures, advance their careers, and achieve their goals."
- **Vision:** "To be the most trusted and impactful language education provider, recognized for quality, innovation, and the real-world success of our learners."
- **Story:** Founded with belief that language is the key to opportunity. Grew from small tutoring initiative to serving 25+ countries.
- **4 Values:** Excellence · Accessibility · Innovation · Impact
- **4 Team Members:**
  - Talom Mickael — Founder & CEO (15+ years in language education)
  - Jean-Pierre Moreau — Head of French Programs (native French, DELF examiner)
  - Adele Nwachukwu — Corporate Training Director (corporate communication specialist)
  - Michael Chen — Head of Translation Services (10+ years translation & localization)
- **CTA:** "Want to Learn More?" → WhatsApp

---

### 7. BLOG PAGE (`/en/blog`)

**File:** `app/[locale]/blog/page.tsx`

**6 Blog Posts:**

| Title                                     | Date         | Category      |
| ----------------------------------------- | ------------ | ------------- |
| 5 Tips to Learn a New Language Faster     | Mar 15, 2026 | Learning Tips |
| Why Bilingualism Boosts Your Career       | Mar 10, 2026 | Career        |
| The Future of Corporate Language Training | Mar 5, 2026  | Corporate     |
| French vs English: Which to Learn First?  | Feb 28, 2026 | Guide         |
| How Immersive Learning Changes Everything | Feb 20, 2026 | Research      |
| Translation Industry Trends in 2026       | Feb 15, 2026 | Translation   |

---

### 8. CONTACT PAGE (`/en/contact`)

**File:** `app/[locale]/contact/page.tsx`

- **Hero:** "Get In Touch" · "We're here to help. Reach out anytime."
- **2 Contact Cards:**
  - Email: info@edulearning.com
  - WhatsApp: +234 810 083 5573
- **Contact Form:** QuoteRequestForm (name, email, WhatsApp, subject, message, optional file upload)

---

## GLOBAL COMPONENTS (appear on every page)

### Header (`components/Header.tsx`)

- Fixed position with blur-on-scroll
- Logo + "Edu Learning"
- Nav links: Programs · Corporate · Translation · Partnerships · Blog · About
- Language switcher: EN | FR pill buttons
- "Get In Touch" CTA button
- Mobile: hamburger menu with animated icon

### Footer (`components/Footer.tsx`)

- Logo + tagline: "Master Languages. Build Your Future."
- Page links: Home · About · Programs · Corporate · Blog
- Support links: Contact · Partnerships · Translation
- Social: Facebook · Twitter · LinkedIn · YouTube
- Back-to-top button
- "© 2026 EduLearning. All rights reserved."
- Terms of Service · Privacy Policy

### ChatBot (`components/ChatBot.tsx`)

- Floating green button (bottom-right corner)
- 20 Q&A patterns covering: programs, pricing, corporate, translation, partnerships, certificates, contact, about, schedule, kids, exams
- Quick action buttons: Programs · Pricing · Corporate · WhatsApp
- Typing indicator animation

---

## ADMIN PANEL (`/admin`)

**Authentication:** Password = `eduadmin2024` (stored in sessionStorage)

| Page        | URL               | Function                                                                                                 |
| ----------- | ----------------- | -------------------------------------------------------------------------------------------------------- |
| Dashboard   | `/admin`          | 6 stat cards (Total Requests, Quotes, Corporate, Registrations, Blog Posts, Emails) + quick action links |
| Blog Editor | `/admin/blog`     | Create/edit/delete blog posts with EN+FR fields, slug, author, published toggle                          |
| Pricing     | `/admin/pricing`  | Edit pricing for homepage tiers, programs, corporate, and translation                                    |
| Requests    | `/admin/requests` | View/filter/delete all form submissions (quote, corporate, registration)                                 |
| Email List  | `/admin/emails`   | View email contacts collected from forms                                                                 |

---

## API ENDPOINTS

| Endpoint                      | Method          | Purpose                                 |
| ----------------------------- | --------------- | --------------------------------------- |
| `/api/program-registration`   | POST            | Student program enrollment              |
| `/api/quote-request`          | POST            | Translation quote + file upload         |
| `/api/corporate-consultation` | POST            | Corporate training inquiry with pricing |
| `/api/upload`                 | POST            | General file upload (10MB limit)        |
| `/api/admin/stats`            | GET             | Dashboard statistics                    |
| `/api/admin/blog`             | GET/POST/DELETE | Blog post management                    |
| `/api/admin/pricing`          | GET/POST        | Pricing configuration                   |
| `/api/admin/requests`         | GET/DELETE      | Form submissions                        |
| `/api/admin/emails`           | GET/POST        | Email contact list                      |

---

## ALL ENGLISH TEXT CONTENT (messages/en.json)

```json
{
  "header": {
    "home": "Home",
    "programs": "Language Programs",
    "corporate": "Corporate Training",
    "translation": "Translation & Interpretation",
    "partnerships": "Partnerships",
    "blog": "Blog",
    "about": "About",
    "contact": "Contact",
    "language": "Language"
  },
  "navigation": {
    "explorePrograms": "Explore Programs",
    "requestQuote": "Request Quote",
    "becomePartner": "Become Partner",
    "getInTouch": "Get In Touch"
  },
  "homepage": {
    "hero": {
      "title": "Learn Languages, Master Communication",
      "subtitle": "Global training for individuals and businesses",
      "cta1": "Explore Programs",
      "cta2": "Chat with Us",
      "badgeTitle": "Built for real growth.",
      "badgeDesc": "Follow guided learning paths from beginner to job-ready level.",
      "quote": "Hands-on lessons that helped me apply skills right away.",
      "coursesDesc": "Courses built around real-world projects.",
      "interactiveClassrooms": "Interactive Classrooms",
      "averageRating": "Average Rating",
      "languageTag": "Language"
    },
    "trust": {
      "title": "Trusted by learners from 50+ countries",
      "madeIn": "Made in Cameroon"
    },
    "about": {
      "title": "Learning Built for Real Careers",
      "desc": "Edu Learning & Immersion is a modern language training platform focused on practical, skill-based education.",
      "pill1": "English & French",
      "pill2": "Corporate Training",
      "pill3": "Translation Services"
    },
    "stats": {
      "satisfaction": "Learner Satisfaction",
      "courses": "Courses Available",
      "learners": "Active Learners",
      "countries": "Countries Reached"
    },
    "programs": {
      "title": "Explore Our Career-Focused Programs",
      "desc": "From general language courses to specialized corporate training, we have the right program for your goals.",
      "viewAll": "View All Programs",
      "p1Title": "General English & French",
      "p1Desc": "Comprehensive language courses from beginner to advanced, with focus on speaking, writing, listening and reading skills.",
      "p1Tag": "Most Popular",
      "p2Title": "Business & Professional",
      "p2Desc": "Specialized programs for corporate communication, presentations, negotiations, and workplace language skills.",
      "p2Tag": "Corporate",
      "p3Title": "Translation & Interpretation",
      "p3Desc": "Professional document translation, simultaneous interpretation, and localization services for all your needs.",
      "p3Tag": "Professional"
    },
    "projects": {
      "title": "Learning Platforms & Projects We've Built",
      "desc": "We create scalable platforms designed for online courses and professional training.",
      "p1": "Online Learning Platform",
      "p2": "Corporate Training Portal",
      "p3": "Marketing Education Website"
    },
    "features": {
      "title": "Built for Learners, Driven by Outcomes",
      "f1Title": "Expert Instructors",
      "f1Desc": "Learn from instructors with real industry experience who guide you step by step through your learning journey.",
      "f2Title": "Hands-On Projects",
      "f2Desc": "Practice what you learn with real-world projects and conversation exercises that build lasting skills.",
      "f3Title": "Career-Focused Curriculum",
      "f3Desc": "Programs designed with industry needs in mind, preparing you for professional communication in any setting.",
      "f4Title": "Recognized Certificates",
      "f4Desc": "Earn certificates recognized by employers and institutions worldwide upon successful course completion."
    },
    "skills": {
      "title": "Skills That Prepare You for Real Opportunities",
      "desc": "Our programs are designed to help you build practical knowledge, apply real-world skills, and grow with confidence.",
      "colTitle": "Core Learning Outcomes",
      "s1": "Structured, Ready-To-Use Curriculum",
      "s2": "Hands-On Project Experience",
      "s3": "Real-World Case Studies",
      "s4": "Performance Tracking & Feedback",
      "s5": "Flexible Learning Schedule",
      "s6": "Career-Focused Assignments",
      "s7": "Practical, Skill-Based Training",
      "s8": "Industry-Relevant Skills Training",
      "s9": "Clear Goals & Progress Milestones",
      "s10": "Industry-Relevant Knowledge",
      "s11": "Learn at Your Own Pace",
      "s12": "Job-Ready Confidence"
    },
    "testimonials": {
      "title": "What Our Clients Say",
      "desc": "Real feedback from students who completed courses at Edu Learning.",
      "viewMore": "View More Stories",
      "t1Title": "The lessons are practical and easy to follow.",
      "t1Text": "Edu Learning helped me build real skills and confidence to start my career successfully and grow with clear direction.",
      "t1Name": "Daniel Carter",
      "t1Role": "Language Student",
      "t1Tag1": "Immersive",
      "t1Tag2": "Practical",
      "t2Title": "I improved my professional English fast.",
      "t2Text": "The corporate training was exactly what we needed. Professional, structured, and delivered real results within weeks.",
      "t2Name": "Olivia Bennett",
      "t2Role": "Marketing Professional",
      "t2Tag1": "Corporate",
      "t2Tag2": "Professional",
      "t3Title": "Great platform for beginners.",
      "t3Text": "The hands-on exercises helped me understand concepts faster than expected and apply them with confidence.",
      "t3Name": "Ethan Walker",
      "t3Role": "Graduate Student",
      "t3Tag1": "French",
      "t3Tag2": "Hands-On",
      "t4Title": "Practical learning that really works.",
      "t4Text": "I gained confidence and skills that I can use in real jobs and personal projects going forward.",
      "t4Name": "Sophia Turner",
      "t4Role": "Translation Student",
      "t4Tag1": "Translation",
      "t4Tag2": "Career"
    },
    "pricing": {
      "title": "Flexible Plans for Every Learner",
      "desc": "Choose a plan that fits your learning goals and grow at your own pace with confidence.",
      "popular": "Most Popular",
      "getStarted": "Get Started",
      "plan1Name": "Basic",
      "plan1Period": "/ month",
      "plan1Desc": "Perfect for beginners starting their learning journey.",
      "plan1F1": "Access to selected courses",
      "plan1F2": "Community access",
      "plan1F3": "Downloadable resources",
      "plan1F4": "Certificates upon completion",
      "plan1E1": "Advanced projects",
      "plan1E2": "Priority support",
      "plan2Name": "Pro",
      "plan2Period": "/ month",
      "plan2Desc": "Best for learners who want full access and practical projects.",
      "plan2F1": "Access to all courses",
      "plan2F2": "Hands-on projects",
      "plan2F3": "Downloadable templates",
      "plan2F4": "Certificates",
      "plan2F5": "Advanced projects",
      "plan2E1": "1-on-1 mentorship",
      "plan3Name": "Team",
      "plan3Period": "/ month",
      "plan3Desc": "For small teams and organizations that want to scale learning.",
      "plan3F1": "Everything in Pro",
      "plan3F2": "Team dashboard",
      "plan3F3": "Progress tracking",
      "plan3F4": "Admin management",
      "plan3F5": "Dedicated support",
      "plan3F6": "Organization-wide course access"
    },
    "faq": {
      "title": "Frequently Asked Questions",
      "desc": "Helpful information to guide your learning journey.",
      "contactBtn": "Contact Us",
      "q1": "Who can enroll in Edu Learning courses?",
      "a1": "Anyone interested in building practical skills can enroll. Our courses are beginner-friendly and suitable for students and professionals.",
      "q2": "Do I get a certificate after completion?",
      "a2": "Yes! Upon completing our programs, learners receive certificates recognized by employers and academic institutions worldwide.",
      "q3": "Do I get lifetime access to the courses?",
      "a3": "Active subscribers have full access to their enrolled courses. Materials remain available throughout your subscription period.",
      "q4": "Are the courses beginner friendly?",
      "a4": "Absolutely. Our programs start from beginner level and progress through intermediate to advanced, with personalized pacing."
    },
    "cta": {
      "title": "Start Your Learning Journey Today",
      "desc": "Join thousands of learners building real-world language skills and growing their careers with confidence."
    }
  },
  "programs": {
    "pageTitle": "Language Programs",
    "subtitle": "Choose your path to fluency",
    "tag": "Our Programs",
    "filter": "Filter by level",
    "allLevels": "All Levels",
    "beginner": "Beginner",
    "intermediate": "Intermediate",
    "advanced": "Advanced",
    "duration": "Duration",
    "format": "Format",
    "price": "Price",
    "cta": "Register Now",
    "p1Title": "General English",
    "p1Desc": "Build a strong foundation in English with focus on speaking, listening, reading and writing.",
    "p1Duration": "3 months",
    "p1Format": "Online / In-person",
    "p2Title": "General French",
    "p2Desc": "Start your French journey with structured lessons covering all core language skills.",
    "p2Duration": "3 months",
    "p2Format": "Online / In-person",
    "p3Title": "Business English",
    "p3Desc": "Master professional English for meetings, presentations, emails and negotiations.",
    "p3Duration": "4 months",
    "p3Format": "Online / In-person",
    "p4Title": "Business French",
    "p4Desc": "Develop your professional French for the workplace and international business.",
    "p4Duration": "4 months",
    "p4Format": "Online / In-person",
    "p5Title": "Advanced Conversation",
    "p5Desc": "Refine your fluency with advanced discussion topics and real-world scenarios.",
    "p5Duration": "2 months",
    "p5Format": "Online",
    "p6Title": "Exam Preparation",
    "p6Desc": "Prepare for IELTS, DELF, TEF or other international proficiency exams.",
    "p6Duration": "3 months",
    "p6Format": "Online / In-person",
    "p7Title": "Kids & Teens English",
    "p7Desc": "Fun, engaging English classes designed specifically for young learners.",
    "p7Duration": "Ongoing",
    "p7Format": "Online / In-person",
    "p8Title": "Corporate Training",
    "p8Desc": "Tailored language programs for teams and organizations with flexible delivery.",
    "p8Duration": "Custom",
    "p8Format": "On-site / Virtual",
    "p9Title": "Intensive Immersion",
    "p9Desc": "Full immersion experience with daily classes, cultural activities and real-world practice.",
    "p9Duration": "1 month",
    "p9Format": "In-person"
  },
  "corporate": {
    "pageTitle": "Corporate Training & Consulting",
    "subtitle": "Solutions for modern teams",
    "tag": "Corporate Training",
    "cta": "Get a Free Consultation",
    "whyTitle": "Why Companies Choose Us",
    "b1Title": "Customized Programs",
    "b1Desc": "Training tailored to your industry, team size, and specific language goals.",
    "b2Title": "Flexible Scheduling",
    "b2Desc": "Choose from in-person, virtual, or hybrid formats that fit your team's workflow.",
    "b3Title": "Expert Trainers",
    "b3Desc": "Certified instructors with corporate training experience across industries.",
    "b4Title": "Progress Tracking",
    "b4Desc": "Detailed analytics and reports to measure team improvement and ROI.",
    "b5Title": "Group & Individual",
    "b5Desc": "Combine group sessions with 1-on-1 coaching for maximum impact.",
    "b6Title": "Certification",
    "b6Desc": "Team members earn recognized certificates upon program completion.",
    "howTitle": "How It Works",
    "step1": "Assess your team's current language levels",
    "step2": "Design a customized training program",
    "step3": "Deliver training with expert instructors",
    "step4": "Track progress and measure results",
    "ctaTitle": "Ready to Train Your Team?",
    "ctaDesc": "Contact us for a free consultation and customized training proposal.",
    "services": {
      "languageTraining": "Language Training",
      "communication": "Intercultural Communication",
      "digital": "Digital Communication",
      "strategy": "Communication Strategy"
    },
    "benefits": "Customized Solutions",
    "requestQuote": "Request a Quote",
    "caseStudies": "Our Case Studies"
  },
  "translation": {
    "pageTitle": "Translation & Interpretation Services",
    "subtitle": "Professional quality, fast turnaround",
    "tag": "Translation Services",
    "cta": "Request a Quote",
    "servicesTitle": "Our Services",
    "s1Title": "Document Translation",
    "s1Desc": "Professional translation of legal, medical, technical, and business documents.",
    "s2Title": "Simultaneous Interpretation",
    "s2Desc": "Real-time interpretation for conferences, meetings, and events.",
    "s3Title": "Website Localization",
    "s3Desc": "Adapt your website content for different languages and cultures.",
    "s4Title": "Certified Translation",
    "s4Desc": "Officially certified translations for immigration, academic, and legal purposes.",
    "quoteTitle": "Request a Quote",
    "quoteDesc": "Tell us about your translation needs and we'll get back to you within 24 hours.",
    "documentTypes": "Document Type",
    "simple": "Simple",
    "technical": "Technical",
    "legal": "Legal",
    "serviceSpeed": "Service Speed",
    "standard": "Standard",
    "semiExpress": "Semi-Express",
    "express": "Express",
    "uploadDocument": "Upload Document",
    "requestQuote": "Request Quote"
  },
  "partnerships": {
    "pageTitle": "Join Our Network",
    "subtitle": "Become a Knowledge Partner",
    "tag": "Partnerships",
    "becomePartner": "Become a Partner",
    "typesTitle": "Partnership Opportunities",
    "t1Title": "Academic Institutions",
    "t1Desc": "Partner with universities, colleges, and schools to expand language education offerings.",
    "t2Title": "Corporate Partners",
    "t2Desc": "Provide language training solutions to your employees through a partnership agreement.",
    "t3Title": "NGOs & International Orgs",
    "t3Desc": "Support multilingual communication for humanitarian and development projects.",
    "t4Title": "Government Agencies",
    "t4Desc": "Deliver language training programs for public sector employees and diplomatic staff.",
    "ctaTitle": "Let's Build Something Together",
    "ctaDesc": "Join our growing network of partners making language education accessible worldwide.",
    "description": "Share your expertise with our global community",
    "benefits": "Partner Benefits",
    "apply": "Apply Now"
  },
  "about": {
    "pageTitle": "About Edu Learning & Immersion",
    "tag": "About Us",
    "heroDesc": "Empowering individuals and organizations with language skills that transform careers and open doors.",
    "mission": "Our Mission",
    "missionText": "To provide exceptional language training and communication solutions that empower people to connect across cultures, advance their careers, and achieve their goals.",
    "vision": "Our Vision",
    "visionText": "To be the most trusted and impactful language education provider, recognized for quality, innovation, and the real-world success of our learners.",
    "story": "Our Story",
    "storyText1": "Edu Learning & Immersion was founded with a simple belief: language is the key to opportunity. What started as a small tutoring initiative has grown into a comprehensive training organization serving learners across 25+ countries.",
    "storyText2": "Our approach combines the best of traditional teaching with modern immersive techniques, creating programs that deliver real results.",
    "values": "Our Values",
    "v1Title": "Excellence",
    "v1Desc": "We deliver the highest quality training with certified instructors and proven methods.",
    "v2Title": "Accessibility",
    "v2Desc": "Language education should be available to everyone, everywhere.",
    "v3Title": "Innovation",
    "v3Desc": "We embrace modern teaching techniques and technology to enhance learning.",
    "v4Title": "Impact",
    "v4Desc": "Everything we do is measured by the real-world results our learners achieve.",
    "teamTitle": "Our Team",
    "tm1Name": "Talom Mickael",
    "tm1Role": "Founder & CEO",
    "tm1Desc": "15+ years in language education and international training.",
    "tm2Name": "Jean-Pierre Moreau",
    "tm2Role": "Head of French Programs",
    "tm2Desc": "Native French speaker, certified DELF examiner.",
    "tm3Name": "Adele Nwachukwu",
    "tm3Role": "Corporate Training Director",
    "tm3Desc": "Specialist in corporate communication and team development.",
    "tm4Name": "Michael Chen",
    "tm4Role": "Head of Translation Services",
    "tm4Desc": "10+ years in professional translation and localization.",
    "ctaTitle": "Want to Learn More?",
    "ctaDesc": "Get in touch and discover how we can help you achieve your language goals."
  },
  "blog": {
    "pageTitle": "Insights & Resources",
    "subtitle": "Stay updated with the latest language learning trends, tips, and industry news.",
    "tag": "Blog",
    "p1Title": "5 Tips to Learn a New Language Faster",
    "p1Desc": "Practical strategies backed by research to accelerate your language learning journey.",
    "p1Date": "Mar 15, 2026",
    "p1Tag": "Learning Tips",
    "p2Title": "Why Bilingualism Boosts Your Career",
    "p2Desc": "How speaking multiple languages opens doors to better job opportunities and higher salaries.",
    "p2Date": "Mar 10, 2026",
    "p2Tag": "Career",
    "p3Title": "The Future of Corporate Language Training",
    "p3Desc": "Trends shaping how companies invest in multilingual workforce development.",
    "p3Date": "Mar 5, 2026",
    "p3Tag": "Corporate",
    "p4Title": "French vs English: Which to Learn First?",
    "p4Desc": "A practical guide to choosing your first foreign language based on your goals.",
    "p4Date": "Feb 28, 2026",
    "p4Tag": "Guide",
    "p5Title": "How Immersive Learning Changes Everything",
    "p5Desc": "The science behind immersive language education and why it works better.",
    "p5Date": "Feb 20, 2026",
    "p5Tag": "Research",
    "p6Title": "Translation Industry Trends in 2026",
    "p6Desc": "Key developments in professional translation, AI tools, and localization services.",
    "p6Date": "Feb 15, 2026",
    "p6Tag": "Translation"
  },
  "contact": {
    "pageTitle": "Get In Touch",
    "subtitle": "We're here to help. Reach out anytime.",
    "tag": "Contact Us",
    "form": "Send us a Message",
    "formDesc": "Fill in the form below and we'll get back to you within 24 hours.",
    "whatsapp": "Chat on WhatsApp",
    "email": "Send an Email"
  },
  "footer": {
    "tagline": "Master Languages. Build Your Future.",
    "backToTop": "Back To Top",
    "home": "Home",
    "description": "Global language training and professional communication solutions",
    "quickLinks": "Quick Links",
    "services": "Services",
    "company": "Company",
    "contact": "Contact",
    "followUs": "Follow Us",
    "rights": "All rights reserved",
    "terms": "Terms of Service",
    "privacy": "Privacy Policy"
  },
  "forms": {
    "fullName": "Full Name",
    "email": "Email Address",
    "whatsapp": "WhatsApp Number",
    "subject": "Subject",
    "message": "Message",
    "submit": "Submit",
    "sending": "Sending...",
    "success": "Thank you! We'll be in touch soon.",
    "error": "Something went wrong. Please try again.",
    "program": "Selected Program",
    "level": "Level",
    "schedule": "Preferred Schedule",
    "documentType": "Document Type",
    "serviceSpeed": "Service Speed",
    "languagePair": "Language Pair",
    "uploadFile": "Upload File (Optional)",
    "required": "This field is required"
  },
  "common": {
    "loading": "Loading...",
    "error": "An error occurred",
    "retry": "Retry",
    "close": "Close",
    "more": "Learn More",
    "back": "Back",
    "next": "Next",
    "prev": "Previous"
  }
}
```

---

## PRICING SUMMARY (ALL IN NAIRA ₦)

### Subscription Plans (Homepage)

| Plan  | Price         | Includes                                                                        |
| ----- | ------------- | ------------------------------------------------------------------------------- |
| Basic | ₦15,000/month | Selected courses, community, resources, certificates                            |
| Pro   | ₦30,000/month | All courses, projects, templates, certificates, advanced projects               |
| Team  | ₦75,000/month | Everything in Pro + team dashboard, progress tracking, admin, dedicated support |

### Program Prices

| Program                 | Price        |
| ----------------------- | ------------ |
| General English/French  | ₦35,000      |
| Business English/French | ₦55,000      |
| Advanced Conversation   | ₦40,000      |
| Exam Preparation        | ₦65,000      |
| Kids & Teens            | ₦25,000      |
| Corporate Training      | Custom quote |
| Intensive Immersion     | ₦120,000     |

### Translation Rates

| Type      | Rate per Word |
| --------- | ------------- |
| Simple    | ₦50           |
| Technical | ₦80           |
| Legal     | ₦100          |

Speed multipliers: Standard (1x) · Semi-Express (1.5x) · Express (2x)

---

## KEY INTEGRATIONS

- **WhatsApp:** All CTAs link to wa.me/2348100835573 with pre-filled messages
- **Plausible Analytics:** Script in locale layout (needs domain config)
- **Google AdSense:** Placeholder ready in locale layout (commented out)
- **PWA:** manifest.json configured
- **ChatBot:** 20 keyword-matched Q&A patterns, floating widget on all pages
