# 🗳️ Suyash Gupta — Student Council Campaign Portfolio

A modern, immersive political campaign portfolio website built for college student council candidate **Suyash Gupta**. Featuring interactive 3D visuals, smooth scroll-driven animations, a glassmorphism design system, and full-stack MongoDB integration for live campaign engagement.

**Live Site:** [suyash-profile.vercel.app](https://suyash-profile.vercel.app) *(update with your actual domain)*

---

## ✨ Features

### 🎨 Design & UX
- **Dark Navy + Gold/Cyan Theme** — Curated color palette with glassmorphism surfaces and gradient accents
- **Custom Cursor System** — Glowing cursor core with animated ring and particle trail (desktop only)
- **Smooth Scroll Navigation** — Sticky navbar with scroll-spy that highlights the active section
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop viewports
- **Loading Screen** — Animated entry screen with progress indicator
- **Section Dividers** — Subtle gold gradient separators between content blocks

### 🌐 3D & Animations
- **Interactive Aurora Particles** — 4,000-particle WebGL background with mouse parallax and scroll reactivity
- **Floating 3D "ISM" Text** — React Three Fiber rendered text with wireframe shader in the hero section
- **3D Vision Pillars** — Animated rising pillars in the Vision section using custom geometry
- **Floating Ballot Box** — 3D ballot box model in the hero area
- **Mobile Optimization** — 3D canvases are conditionally disabled on mobile (≤768px) and replaced with CSS gradient fallbacks to preserve performance

### 📄 Content Sections (9 Active)
| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Animated headline with 3D ISM text and CTA button |
| 2 | **About** | Two-column layout with profile photo, stat cards, and key values |
| 3 | **Vision** | Full-width section with 3D pillar background and vision cards |
| 4 | **Agenda & Promises** | Animated grid of agenda/promise cards |
| 5 | **Experience & Leadership** | Vertical alternating timeline of leadership roles |
| 6 | **Works & Contributions** | Tagged grid of contribution cards |
| 7 | **Campaign Poster** | Full campaign poster display |
| 8 | **Join the Movement** | Email sign-up form with confetti effect, unique email enforcement, live supporter counter |
| 9 | **Contact** | Contact form with name, email, subject, and message fields |

### 🗄️ Backend & Database
- **MongoDB Atlas** — Cloud-hosted database via Mongoose ODM
- **Contact Form API** (`POST /api/contact`) — Saves contact messages with validation
- **Volunteer Sign-Up API** (`POST /api/volunteer`) — Registers campaign supporters with unique email constraint
- **Live Supporter Counter** (`GET /api/volunteer/count`) — Returns real-time count of sign-ups, displayed on the Join section
- **Duplicate Prevention** — Both application-level `findOne` check and MongoDB unique index on email

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Language** | TypeScript |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) + Vanilla CSS |
| **3D Graphics** | [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [Drei](https://github.com/pmndrs/drei) + [Three.js](https://threejs.org/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) + [GSAP](https://gsap.com/) |
| **Database** | [MongoDB Atlas](https://www.mongodb.com/atlas) via [Mongoose](https://mongoosejs.com/) |
| **Fonts** | [Inter](https://fonts.google.com/specimen/Inter) (body) + [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (headings) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📁 Project Structure

```
demo/
├── public/                          # Static assets
│   ├── fonts/                       # Custom font files
│   ├── suyashProfile.jpeg           # Profile photo (About section)
│   ├── poster.png                   # Campaign poster
│   └── manifesto.jpeg               # Campaign manifesto image
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/
│   │   │   │   └── route.ts         # POST — save contact messages
│   │   │   └── volunteer/
│   │   │       ├── route.ts         # POST — register volunteer (unique email)
│   │   │       └── count/
│   │   │           └── route.ts     # GET  — live supporter count
│   │   ├── globals.css              # Design system (colors, glass, glow, cursors)
│   │   ├── icon.png                 # Favicon
│   │   ├── layout.tsx               # Root layout (fonts, metadata, effects layer)
│   │   └── page.tsx                 # Main page (composes all sections)
│   ├── components/
│   │   ├── sections/                # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── VisionSection.tsx
│   │   │   ├── AgendaSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── WorksSection.tsx
│   │   │   ├── PosterSection.tsx
│   │   │   ├── JoinSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── TestimonialsSection.tsx  # (currently disabled)
│   │   │   └── GallerySection.tsx       # (currently disabled)
│   │   ├── three/                   # 3D / WebGL components
│   │   │   ├── BackgroundCanvas.tsx     # Global particle background (mobile-aware)
│   │   │   ├── GlobalBackground.tsx     # Aurora dust particles (4000 count)
│   │   │   ├── SceneCanvas.tsx          # Reusable R3F canvas wrapper
│   │   │   ├── FloatingText.tsx         # 3D "ISM" wireframe text
│   │   │   ├── FloatingBallotBox.tsx    # 3D ballot box model
│   │   │   ├── VisionScene.tsx          # 3D rising pillars
│   │   │   └── ParticleField.tsx        # Section-level particle field
│   │   └── ui/                      # UI components
│   │       ├── Navbar.tsx               # Sticky nav with scroll-spy
│   │       ├── LoadingScreen.tsx        # Animated loading screen
│   │       ├── EffectsLayer.tsx         # Background canvas + cursor layer
│   │       ├── CustomCursor.tsx         # Glowing cursor (desktop only)
│   │       ├── CursorTrail.tsx          # Particle trail canvas (desktop only)
│   │       ├── ConfettiEffect.tsx       # Join form + confetti animation
│   │       ├── ContactForm.tsx          # Contact form with API submission
│   │       ├── AgendaCard.tsx           # Agenda item card
│   │       ├── TimelineItem.tsx         # Timeline entry
│   │       ├── TestimonialCarousel.tsx  # Auto-sliding testimonial carousel
│   │       ├── GalleryGrid.tsx          # Masonry image gallery
│   │       └── SectionWrapper.tsx       # Section container with InView trigger
│   ├── lib/
│   │   └── mongodb.ts               # Mongoose connection singleton
│   └── models/
│       ├── ContactMessage.ts        # Contact message schema
│       └── Volunteer.ts             # Volunteer schema (unique email, role enum)
├── .env.local                       # Environment variables (not committed)
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── tailwind.config (via CSS @theme)
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** ≥ 18.x
- **npm** ≥ 9.x
- A **MongoDB Atlas** cluster (or local MongoDB instance)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/suyash-profile.git
cd suyash-profile
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
```

> [!IMPORTANT]
> **Do NOT wrap the URI in quotes.** The value should start directly with `mongodb://` or `mongodb+srv://`.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
npm start
```

---

## ☁️ Deploying to Vercel

### 1. Push to GitHub

```bash
git add .
git commit -m "ready for deployment"
git push origin main
```

### 2. Import Project on Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Vercel auto-detects Next.js — no custom build settings needed

### 3. Add Environment Variables
1. Go to **Project Settings** → **Environment Variables**
2. Add `MONGODB_URI` with your connection string as the value

> [!CAUTION]
> **Do NOT include quotes** around the value in Vercel's environment variable input. Vercel treats the entire field content as the literal value. Including quotes causes:
> ```
> Error: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"
> ```

### 4. Configure MongoDB Atlas Network Access
1. Go to your MongoDB Atlas dashboard → **Network Access**
2. Add `0.0.0.0/0` to allow connections from Vercel's dynamic IPs
3. Alternatively, use [Vercel's static IP](https://vercel.com/docs/security/static-ips) if on a paid plan

### 5. Redeploy
After updating environment variables, trigger a redeployment:
- Go to **Deployments** tab → click the three dots on the latest deployment → **Redeploy**

---

## 🔌 API Reference

### `POST /api/contact`
Save a contact form message.

**Request Body:**
```json
{
  "name": "string (required, max 100 chars)",
  "email": "string (required, valid email)",
  "subject": "string (required, max 200 chars)",
  "message": "string (required, max 2000 chars)"
}
```

**Responses:**
| Status | Description |
|--------|-------------|
| `201` | Message saved successfully |
| `400` | Missing required fields |
| `500` | Server / database error |

---

### `POST /api/volunteer`
Register a campaign supporter.

**Request Body:**
```json
{
  "email": "string (required, valid email, must be unique)",
  "role": "string (required, one of: 'Join Campaign', 'Volunteer', 'Share Ideas')"
}
```

**Responses:**
| Status | Description |
|--------|-------------|
| `201` | Volunteer registered successfully |
| `400` | Missing email or role |
| `409` | Email already registered |
| `500` | Server / database error |

---

### `GET /api/volunteer/count`
Get the total number of registered supporters.

**Response:**
```json
{ "count": 42 }
```

> The frontend displays this as `100 + count` to show social proof.

---

## ⚡ Performance Optimizations

| Optimization | Details |
|-------------|---------|
| **Dynamic Imports** | All sections and 3D components are lazy-loaded with `next/dynamic` and `{ ssr: false }` |
| **Mobile 3D Disabling** | `BackgroundCanvas`, `HeroSection`, and `VisionSection` skip WebGL rendering on screens ≤768px |
| **Cursor Disabling** | `CustomCursor` and `CursorTrail` return `null` on touch/mobile devices |
| **Particle Optimization** | Aurora particles capped at 4,000 (down from 15,000), DPR limited to `[1, 1.5]` |
| **Anti-aliasing Disabled** | Background canvas runs with `antialias: false` to reduce GPU load |
| **Reduced Motion Support** | Respects `prefers-reduced-motion` — disables animations and cursor effects |
| **Cached DB Connection** | Mongoose connection is cached globally to reuse across serverless invocations |

---

## 🎨 Design System

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `navy-950` | `#0a0e27` | Page background |
| `navy-900` | `#0d1333` | Card backgrounds |
| `gold` | `#f0c040` | Primary accent, CTAs, glows |
| `gold-light` | `#f7d774` | Hover states, highlights |
| `cyan-accent` | `#00e5ff` | Secondary accent, links |
| `cyan-glow` | `#00b8d4` | Glow effects |

### CSS Utilities
- `.glass` / `.glass-light` — Glassmorphism surfaces with backdrop blur
- `.gradient-text` / `.gradient-text-gold` — Gradient text clipping
- `.glow-gold` / `.glow-cyan` — Box-shadow glow effects
- `.text-glow-gold` — Text-shadow glow
- `.section-divider` — Gold gradient line separator
- `.animate-float` / `.animate-pulse-glow` — Keyframe animations

---

## 📝 Database Schemas

### ContactMessage
```typescript
{
  name:      String   // required, max 100 chars
  email:     String   // required, regex validated
  subject:   String   // required, max 200 chars
  message:   String   // required, max 2000 chars
  createdAt: Date     // auto-generated
  updatedAt: Date     // auto-generated
}
```

### Volunteer
```typescript
{
  email:     String   // required, unique, regex validated
  role:      String   // required, enum: ["Join Campaign", "Volunteer", "Share Ideas"]
  timestamp: Date     // default: Date.now
  createdAt: Date     // auto-generated
  updatedAt: Date     // auto-generated
}
```

---

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 📄 License

This project is private and built for the personal campaign use of Suyash Gupta.

---

<p align="center">
  Built with ❤️ using Next.js, React Three Fiber, and Framer Motion
</p>
