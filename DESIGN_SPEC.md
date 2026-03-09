# Peak Paws — Design Specification

> A complete visual reference for reproducing the Peak Paws brand aesthetic.
> Every value below is extracted directly from the codebase — no approximations.

---

## 1. Tech Stack & Dependencies

| Layer | Package | Version |
|---|---|---|
| Build tool | Vite | ^6.1.0 |
| Framework | React | ^18.2.0 |
| Routing | react-router-dom | ^6.26.0 |
| CSS framework | Tailwind CSS | ^3.4.17 |
| Tailwind plugin | tailwindcss-animate | ^1.0.7 |
| Component library | shadcn/ui (new-york style, neutral base) | — |
| Class merging | tailwind-merge ^3.0.2, clsx ^2.1.1, class-variance-authority ^0.7.1 | — |
| Animation | framer-motion | ^11.16.4 |
| Icons | lucide-react | ^0.475.0 |
| Carousel | embla-carousel-react | ^8.5.2 |
| Forms | @formspree/react ^3.0.0, react-hook-form ^7.54.2 | — |

### shadcn/ui Config (`components.json`)

```json
{
  "style": "new-york",
  "rsc": false,
  "tsx": false,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

### Tailwind Config — Copy-Paste Ready (`tailwind.config.js`)

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        brand: {
          orange: '#F9A93A',
          brown: '#8B4513',
          'dark-brown': '#6B3410'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}
```

---

## 2. Color System

### 2.1 Brand Colors (Hardcoded Hex)

| Token | Hex | HSL (approx) | Usage |
|---|---|---|---|
| `brand-orange` | `#F9A93A` | 37 94% 60% | Primary CTA, Shop buttons, product buttons |
| `brand-orange-hover` | `#e89820` | 37 84% 52% | CTA hover state (used inline as `hover:bg-[#e89820]`) |
| `brand-brown` | `#8B4513` | 25 75% 31% | Secondary brand accent (defined in config) |
| `brand-dark-brown` | `#6B3410` | 25 75% 24% | Dark accent (defined in config) |

### 2.2 CSS Variable Semantic Palette

#### Light Mode (`:root`)

```css
:root {
  --background: 0 0% 100%;          /* #ffffff */
  --foreground: 0 0% 3.9%;          /* #0a0a0a */
  --card: 0 0% 100%;                /* #ffffff */
  --card-foreground: 0 0% 3.9%;     /* #0a0a0a */
  --popover: 0 0% 100%;             /* #ffffff */
  --popover-foreground: 0 0% 3.9%;  /* #0a0a0a */
  --primary: 0 0% 9%;               /* #171717 */
  --primary-foreground: 0 0% 98%;   /* #fafafa */
  --secondary: 0 0% 96.1%;          /* #f5f5f5 */
  --secondary-foreground: 0 0% 9%;  /* #171717 */
  --muted: 0 0% 96.1%;              /* #f5f5f5 */
  --muted-foreground: 0 0% 45.1%;   /* #737373 */
  --accent: 0 0% 96.1%;             /* #f5f5f5 */
  --accent-foreground: 0 0% 9%;     /* #171717 */
  --destructive: 0 84.2% 60.2%;     /* #ef4444 */
  --destructive-foreground: 0 0% 98%; /* #fafafa */
  --border: 0 0% 89.8%;             /* #e5e5e5 */
  --input: 0 0% 89.8%;              /* #e5e5e5 */
  --ring: 0 0% 3.9%;                /* #0a0a0a */
  --chart-1: 12 76% 61%;            /* #e57050 */
  --chart-2: 173 58% 39%;           /* #2a9d8f */
  --chart-3: 197 37% 24%;           /* #264653 */
  --chart-4: 43 74% 66%;            /* #e9c46a */
  --chart-5: 27 87% 67%;            /* #f4a261 */
  --radius: 0.5rem;
  --sidebar-background: 0 0% 98%;
  --sidebar-foreground: 240 5.3% 26.1%;
  --sidebar-primary: 240 5.9% 10%;
  --sidebar-primary-foreground: 0 0% 98%;
  --sidebar-accent: 240 4.8% 95.9%;
  --sidebar-accent-foreground: 240 5.9% 10%;
  --sidebar-border: 220 13% 91%;
  --sidebar-ring: 217.2 91.2% 59.8%;
}
```

#### Dark Mode (`.dark`)

```css
.dark {
  --background: 0 0% 3.9%;           /* #0a0a0a */
  --foreground: 0 0% 98%;            /* #fafafa */
  --card: 0 0% 3.9%;                 /* #0a0a0a */
  --card-foreground: 0 0% 98%;       /* #fafafa */
  --popover: 0 0% 3.9%;              /* #0a0a0a */
  --popover-foreground: 0 0% 98%;    /* #fafafa */
  --primary: 0 0% 98%;               /* #fafafa */
  --primary-foreground: 0 0% 9%;     /* #171717 */
  --secondary: 0 0% 14.9%;           /* #262626 */
  --secondary-foreground: 0 0% 98%;  /* #fafafa */
  --muted: 0 0% 14.9%;               /* #262626 */
  --muted-foreground: 0 0% 63.9%;    /* #a3a3a3 */
  --accent: 0 0% 14.9%;              /* #262626 */
  --accent-foreground: 0 0% 98%;     /* #fafafa */
  --destructive: 0 62.8% 30.6%;      /* #7f1d1d */
  --destructive-foreground: 0 0% 98%; /* #fafafa */
  --border: 0 0% 14.9%;              /* #262626 */
  --input: 0 0% 14.9%;               /* #262626 */
  --ring: 0 0% 83.1%;                /* #d4d4d4 */
  --chart-1: 220 70% 50%;
  --chart-2: 160 60% 45%;
  --chart-3: 30 80% 55%;
  --chart-4: 280 65% 60%;
  --chart-5: 340 75% 55%;
  --sidebar-background: 240 5.9% 10%;
  --sidebar-foreground: 240 4.8% 95.9%;
  --sidebar-primary: 224.3 76.3% 48%;
  --sidebar-primary-foreground: 0 0% 100%;
  --sidebar-accent: 240 3.7% 15.9%;
  --sidebar-accent-foreground: 240 4.8% 95.9%;
  --sidebar-border: 240 3.7% 15.9%;
  --sidebar-ring: 217.2 91.2% 59.8%;
}
```

#### Base Layer Styles

```css
@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

### 2.3 Tailwind Utility Colors Used in Components

| Family | Shades used | Role |
|---|---|---|
| **Sky** | sky-50, sky-100, sky-200, sky-300, sky-400, sky-600, sky-700, sky-900, sky-950 | Primary cool tone — headers, links, active states, gradients |
| **Blue** | blue-50, blue-100, blue-400, blue-500, blue-600, blue-700, blue-800, blue-950 | Deeper accent — gradient endpoints, footer, CTA buttons |
| **Orange** | orange-50, orange-100, orange-300, orange-400, orange-500, orange-600 | Warm accent — background tints, gradients, icon containers |
| **Amber** | amber-100, amber-300, amber-400, amber-500, amber-600, amber-900 | Gold tones — stars, badges, icon containers, shadows |
| **Slate** | slate-50, slate-100, slate-200, slate-300, slate-400, slate-500, slate-600, slate-700, slate-900 | Neutrals — text, borders, card backgrounds |
| **Emerald** | emerald-50, emerald-100, emerald-400 | Success states, trust indicators |
| **Teal** | teal-50, teal-100, teal-500 | Paired with emerald for success gradients |
| **Rose** | rose-400 | Accent icon gradient start |
| **Pink** | pink-500 | Accent icon gradient end |
| **Gray** | gray-500 | Minimal use (icon gradient endpoint) |
| **White** | white (bg-white, text-white) | Cards, text on dark, backgrounds |

### 2.4 Key Gradients

| Name | Tailwind Classes | Where Used |
|---|---|---|
| **Page background** | `bg-gradient-to-br from-sky-50 via-white to-orange-50` | `Layout.jsx` root div, `About.jsx` wrapper |
| **Hero background** | `bg-gradient-to-br from-sky-100 via-blue-50 to-orange-100` | `HeroSection.jsx` |
| **Products hero bg** | `bg-gradient-to-br from-slate-50 via-sky-50/30 to-orange-50/20` | `Products.jsx` hero section |
| **Contact hero bg** | `bg-gradient-to-br from-slate-50 via-sky-50/30 to-white` | `Contact.jsx` hero section |
| **Heading text gradient** | `bg-gradient-to-r from-sky-700 via-blue-700 to-orange-600 bg-clip-text text-transparent` | Hero h1 first line |
| **Heading text (alt)** | `bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent` | Section headings (Benefits, Trust, About) |
| **Heading text (warm)** | `bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent` | "Churpi" heading on About page |
| **CTA submit button** | `bg-gradient-to-r from-sky-600 to-blue-700` | Contact form submit; hover: `from-sky-700 to-blue-800` |
| **Mission banner** | `bg-gradient-to-r from-sky-600 via-blue-600 to-sky-700` | About page mission section |
| **Footer** | `bg-gradient-to-br from-slate-900 via-sky-950 to-blue-950` | `Layout.jsx` footer |
| **Card background** | `bg-gradient-to-br from-slate-50 to-white` | Benefit cards, process step cards |
| **Success state** | `bg-gradient-to-br from-emerald-50 to-teal-50` | Contact form success, About "Natural" info card |
| **Info card (sky)** | `bg-gradient-to-br from-sky-50 to-blue-50` | About "Himalayan" info card, Ingredients section |
| **Badge (sky)** | `bg-gradient-to-r from-sky-100 to-blue-100` | Benefits section badge |
| **Badge (emerald)** | `bg-gradient-to-r from-emerald-100 to-teal-100` | Trust section badge |
| **Badge (amber)** | `bg-gradient-to-r from-amber-100 to-orange-100` | About "Ancient Tradition" badge |
| **Badge (warm)** | `bg-gradient-to-r from-amber-50 to-orange-50` | About production method award banner |
| **Hero blob (sky)** | `bg-gradient-to-br from-sky-300 to-blue-400` | Floating blur circle (top-right) |
| **Hero blob (warm)** | `bg-gradient-to-br from-orange-300 to-amber-400` | Floating blur circle (bottom-left) |
| **Image overlay** | `bg-gradient-to-br from-sky-400/20 to-orange-400/20 mix-blend-overlay` | Hero carousel images |
| **Image overlay (alt)** | `bg-gradient-to-br from-sky-600/10 to-orange-600/10 mix-blend-overlay` | Trust carousel, About images |
| **Image overlay (warm)** | `bg-gradient-to-br from-orange-600/10 to-amber-600/10 mix-blend-overlay` | About Churpi image |
| **Carousel glow** | `bg-gradient-to-br from-sky-400/30 via-blue-400/20 to-orange-400/30` | Trust section behind carousel |
| **Avatar circles** | `bg-gradient-to-br from-orange-200 via-amber-300 to-orange-400` | Hero social proof avatars |

#### Icon Container Gradients

| Name | Classes | Component |
|---|---|---|
| Emerald/Teal | `from-emerald-400 to-teal-500` | "Natural" benefit, trust checkmarks, success icon, contact clock |
| Sky/Blue | `from-sky-400 to-blue-500` | "Grain-Free" benefit, contact email, About "Himalayan" |
| Orange/Amber | `from-orange-400 to-amber-500` | "Long Lasting" benefit, contact location |
| Rose/Pink | `from-rose-400 to-pink-500` | "High Protein" benefit, process step 4 |
| Amber/Orange | `from-amber-400 to-orange-500` | Trust stat card icon, process step 3 |
| Blue/Sky | `from-blue-400 to-sky-500` | Ingredients milk icon, process step 1 |
| Slate/Gray | `from-slate-400 to-gray-500` | Ingredients salt icon |

---

## 3. Typography

### 3.1 Font Stack

System font stack (Tailwind defaults) — **no custom web fonts** are loaded.

### 3.2 Scale

| Element | Tailwind Classes | Details |
|---|---|---|
| **Page hero h1** | `text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight` | Gradient text on first line, solid `text-slate-900` on second |
| **Products/Contact hero h1** | `text-5xl lg:text-7xl font-black leading-tight` | `text-slate-900` with accent line in `text-sky-600` |
| **Section h2 (large)** | `text-4xl md:text-5xl lg:text-6xl font-extrabold` | Used in BenefitsSection |
| **Section h2 (standard)** | `text-4xl md:text-5xl font-extrabold` | Used in Trust, About, Ingredients, Production |
| **Mission text** | `text-3xl md:text-4xl font-bold leading-relaxed` | White text on blue gradient banner |
| **Card h3** | `text-2xl font-bold text-slate-900` | Benefit cards, ingredient cards, product cards |
| **Product card h3** | `text-xl font-bold text-slate-900` | With `group-hover:text-sky-700 transition-colors` |
| **Form section h2** | `text-3xl font-bold text-slate-900` | Contact form/info headings |
| **Body text (large)** | `text-xl text-slate-600 leading-relaxed` | Section descriptions, hero subtitles |
| **Body text (standard)** | `text-lg text-slate-600 leading-relaxed` | Paragraphs, trust points, descriptions |
| **Body text (card)** | `text-slate-600 leading-relaxed` | Card descriptions (inherits base size) |
| **Small text** | `text-sm text-slate-500 font-medium` | Captions, sub-labels |
| **Uppercase label** | `text-sm font-bold text-sky-700 tracking-widest` | Products/Contact page section labels (e.g., "PEAK PAWS COLLECTION") |
| **Badge text** | `text-sm font-semibold text-sky-900` | Inline pill badges |
| **Nav link** | `text-sm font-medium text-slate-700` | Desktop navigation items |
| **Nav link (mobile)** | `text-lg font-medium text-slate-700` | Mobile menu items |
| **Footer heading** | `font-semibold text-white` | Footer column headings |
| **Footer link** | `text-sky-200 hover:text-white text-sm` | Footer nav links |
| **Footer body** | `text-sky-100 leading-relaxed` | Footer description paragraph |
| **Footer copyright** | `text-sky-300 text-sm` | Bottom bar text |
| **Form label** | `text-slate-700 font-semibold text-lg` | Contact form field labels |
| **Form input** | `text-lg` (overrides base `md:text-sm`) | Contact form inputs |
| **Error text** | `text-red-500 text-sm` | Form validation errors |
| **Star rating caption** | `text-sm text-slate-500 font-medium` | "Trusted by dog parents" |

### 3.3 Gradient Text Technique

```html
<span class="bg-gradient-to-r from-sky-700 via-blue-700 to-orange-600 bg-clip-text text-transparent">
  Gradient Text Here
</span>
```

Variants used:
- `from-sky-700 via-blue-700 to-orange-600` — hero main heading
- `from-sky-700 to-blue-700` — section headings (most common)
- `from-orange-600 to-amber-600` — warm accent headings ("Churpi", "Time-Honored")

---

## 4. Spacing & Layout

### 4.1 Container

```
container mx-auto px-6 lg:px-12
```

### 4.2 Section Padding

| Context | Classes |
|---|---|
| Major sections | `py-32` (BenefitsSection, TrustSection) |
| Standard sections | `py-24` (About sub-sections, Ingredients, Production) |
| Hero sections | `py-20 lg:py-32` (Products hero, Contact content), `py-24 lg:py-32` (Contact hero) |
| Banner/closing | `py-20` (Mission banner, footer, closing statement) |
| Hero full-height | `min-h-[95vh]` (Home HeroSection) |

### 4.3 Card Padding

| Context | Classes |
|---|---|
| Standard card | `p-8` (Benefit cards, process step cards, ingredient cards) |
| Contact form | `p-10 md:p-12` |
| Success state | `p-16` |
| Info mini-cards | `p-5` (About feature boxes) |
| Stat card | `p-8` (Trust floating card) |
| Product card body | `p-7` |

### 4.4 Grid Patterns

| Pattern | Classes |
|---|---|
| 4-column benefits | `grid md:grid-cols-2 lg:grid-cols-4 gap-8` |
| 3-column products | `grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16` |
| 3-column ingredients | `grid md:grid-cols-3 gap-8 max-w-5xl mx-auto` |
| 2-column process | `grid md:grid-cols-2 gap-8 max-w-5xl mx-auto` |
| 2-column split | `grid lg:grid-cols-2 gap-16 items-center` |
| 2-column split (wide) | `grid lg:grid-cols-2 gap-20 items-center` |
| 2-column contact | `grid lg:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto` |
| 2-column about features | `grid grid-cols-2 gap-6` |
| Footer columns | `grid md:grid-cols-4 gap-12 mb-12` (brand col is `md:col-span-2`) |

### 4.5 Spacing Between Elements

| Context | Classes |
|---|---|
| Section title to content | `mb-20` (heading blocks to card grids) |
| Heading to paragraph | `mb-6` (standard), `mb-8` (larger sections) |
| Paragraph to CTA | `mb-10` to `mb-12` |
| Card items vertical | `space-y-5` (trust points), `space-y-7` (form fields) |
| Gap between CTA buttons | `gap-4` in `flex flex-col sm:flex-row` |
| Nav link gap | `gap-2` |
| Badge icon gap | `gap-2` |
| Section content gap | `gap-8` (standard grid), `gap-12` (footer) |

### 4.6 Border Radius

| Element | Classes |
|---|---|
| Base (--radius) | `0.5rem` |
| Cards | `rounded-3xl` |
| Hero image | `rounded-[4rem]` |
| About/Trust image | `rounded-[3rem]` |
| Form wrapper | `rounded-[2.5rem]` |
| Form inputs | `rounded-2xl` |
| Form submit button | `rounded-2xl` |
| Product CTA button | `rounded-2xl` |
| Icon containers | `rounded-2xl` |
| Small icon boxes | `rounded-xl` |
| Pill buttons (CTA) | `rounded-full` |
| Badges | `rounded-full` |
| Nav links | `rounded-lg` |
| Info mini-cards | `rounded-2xl` |
| Ingredient cards | `rounded-3xl` |
| Stat floating card | `rounded-3xl` |
| Carousel container | `rounded-[3rem]` |
| Footer social circle | `rounded-full` |

---

## 5. Component Recipes

### 5.1 Primary CTA Button (Orange Pill)

**Nav header version:**
```
bg-[#F9A93A] hover:bg-[#e89820] text-white rounded-full px-6 shadow-lg shadow-amber-900/20
```

**Hero large version:**
```
bg-[#F9A93A] hover:bg-[#e89820] text-white rounded-full px-10 py-7 text-lg shadow-2xl shadow-amber-900/30 group
```
Icon inside: `group-hover:rotate-12 transition-transform`

**Product card version:**
```
w-full bg-[#F9A93A] hover:bg-[#e89820] text-white rounded-2xl py-6 shadow-lg shadow-amber-900/20 group/btn
```

**Empty state version:**
```
bg-[#F9A93A] hover:bg-[#e89820] text-white rounded-full px-8
```

### 5.2 Secondary Button (Outline Pill)

**Hero version:**
```
border-2 border-slate-300 bg-white/80 backdrop-blur text-slate-700 hover:bg-slate-50 rounded-full px-10 py-7 text-lg shadow-lg
```

**Products page version:**
```
w-full border-2 border-slate-300 bg-white/80 backdrop-blur text-slate-700 hover:bg-slate-50 rounded-full px-6 py-7 text-lg shadow-lg
```

### 5.3 Gradient Submit Button (Sky-to-Blue)

```
w-full bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white rounded-2xl py-7 text-lg font-bold shadow-xl shadow-sky-900/20
```

### 5.4 Card (Benefit/Process Step Style)

```html
<div class="relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 h-full border border-slate-100 shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500">
  <!-- Icon container -->
  <div class="w-16 h-16 bg-gradient-to-br {gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
    <Icon class="w-8 h-8 text-white" strokeWidth={2.5} />
  </div>
  <h3 class="text-2xl font-bold text-slate-900 mb-4">Title</h3>
  <p class="text-slate-600 leading-relaxed">Description</p>
  <!-- Decorative corner paw -->
  <div class="absolute top-4 right-4 text-4xl opacity-10 group-hover:opacity-20 transition-opacity">🐾</div>
</div>
```

Wrapper has `whileHover={{ y: -10 }}` (benefits) or `whileHover={{ y: -8 }}` (process steps, ingredients).

### 5.5 Ingredient Card (White, Centered)

```
bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500
```
Icon container: `w-20 h-20 mx-auto bg-gradient-to-br {gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`

### 5.6 Badge/Pill

**Glassmorphic badge (hero):**
```
inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg shadow-sky-900/10
```

**Gradient badge (section labels):**
```
inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-sky-100 to-blue-100 rounded-full
```

**White badge with shadow:**
```
inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full shadow-lg
```

**Uppercase tracking label (Products/Contact hero):**
```
text-sm font-bold text-sky-700 tracking-widest flex items-center gap-2
```

### 5.7 Form Input

**Base (shadcn):**
```
flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm
```

**Contact form override:**
```
rounded-2xl border-2 border-slate-200 focus:border-sky-500 focus:ring-sky-500 py-6 px-5 text-lg
```

**Textarea base (shadcn):**
```
flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm
```

**Contact textarea override:**
```
rounded-2xl border-2 border-slate-200 focus:border-sky-500 focus:ring-sky-500 resize-none p-5 text-lg
```

### 5.8 Form Wrapper

```
bg-white rounded-[2.5rem] p-10 md:p-12 shadow-xl border border-slate-100
```

### 5.9 Success State

```html
<div class="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[2.5rem] p-16 text-center shadow-xl border border-emerald-100">
  <div class="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
    <CheckCircle class="w-10 h-10 text-white" strokeWidth={2.5} />
  </div>
  <h3 class="text-3xl font-extrabold text-slate-900 mb-4">Message Sent!</h3>
  <p class="text-lg text-slate-600 mb-8">Thank you text...</p>
</div>
```

### 5.10 Navigation (Sticky Header)

```html
<header class="sticky top-0 z-50 transition-all duration-300 {scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-sky-900/5' : 'bg-transparent'}">
  <div class="container mx-auto px-6 lg:px-12">
    <nav class="flex items-center justify-between h-20">
      <!-- Logo: h-14 w-auto -->
      <!-- Desktop nav: hidden md:flex items-center gap-2 -->
      <!-- Nav link: px-4 py-2 text-sm font-medium text-slate-700 hover:text-sky-700 transition-colors rounded-lg hover:bg-sky-50 -->
      <!-- Active nav link: text-sky-700 bg-sky-50 -->
      <!-- Mobile toggle: md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg -->
    </nav>
  </div>
</header>
```

Scroll threshold: `window.scrollY > 20`

**Mobile menu:**
```
md:hidden bg-white border-t border-slate-100
```
Inner: `container mx-auto px-6 py-6 space-y-2`
Links: `block py-3 px-4 text-lg font-medium text-slate-700 rounded-lg hover:bg-sky-50`

### 5.11 Icon Container

**Large (benefits):**
```
w-16 h-16 bg-gradient-to-br {gradient} rounded-2xl flex items-center justify-center shadow-lg
```
Icon: `w-8 h-8 text-white` with `strokeWidth={2.5}`

**Medium (About info, Contact info):**
```
w-12 h-12 bg-gradient-to-br {gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg
```
Icon: `w-6 h-6 text-white` with `strokeWidth={2.5}`

**Extra large (ingredients):**
```
w-20 h-20 mx-auto bg-gradient-to-br {gradient} rounded-2xl flex items-center justify-center shadow-lg
```

**Process step numbered:**
```
w-14 h-14 bg-gradient-to-br {gradient} rounded-2xl flex items-center justify-center shadow-lg
```
Number: `text-3xl font-bold text-white`

### 5.12 Footer

```html
<footer class="relative bg-gradient-to-br from-slate-900 via-sky-950 to-blue-950 text-white py-20 overflow-hidden">
  <!-- Mountain SVG silhouette -->
  <div class="absolute inset-0 opacity-10">
    <svg class="absolute bottom-0 w-full h-64" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path fill="currentColor" d="M0,320L0,240L80,200L160,280L240,160L320,220L400,120L480,200L560,80L640,160L720,40L800,120L880,20L960,100L1040,0L1120,80L1200,10L1280,60L1360,30L1440,80L1440,320L0,320Z"/>
    </svg>
  </div>

  <!-- Grid: md:grid-cols-4, brand column is md:col-span-2 -->
  <!-- Logo: h-14 w-auto brightness-0 invert -->
  <!-- Body: text-sky-100 leading-relaxed -->
  <!-- Links: text-sky-200 hover:text-white text-sm -->
  <!-- Social circle: w-10 h-10 bg-sky-400/20 backdrop-blur rounded-full -->

  <!-- Divider: border-t border-sky-800/50 pt-8 -->
  <!-- Copyright: text-sky-300 text-sm -->
</footer>
```

### 5.13 Product Card

```html
<div class="group">
  <div class="overflow-hidden">
    <!-- Image area -->
    <div class="aspect-square overflow-hidden relative p-2">
      <div class="relative w-full h-full">
        <!-- Drop shadow under package -->
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-8 bg-slate-900/10 blur-xl rounded-full" />
        <img class="relative w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-2" />
      </div>
    </div>
    <!-- Info -->
    <div class="p-7">
      <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-700 transition-colors">Name</h3>
      <p class="text-slate-600 text-sm mb-5 line-clamp-2 leading-relaxed">Description</p>
      <!-- Orange CTA button (see 5.1 product card version) -->
    </div>
  </div>
</div>
```

Wrapper animation: `whileHover={{ y: -16 }}`

### 5.14 Products Page Card (Alternate Layout)

```html
<div class="group">
  <!-- Image -->
  <div class="aspect-square mb-6 overflow-hidden relative">
    <img class="w-full h-full object-contain drop-shadow-xl"
         whileHover={{ scale: 1.05, rotate: -2 }} transition={{ duration: 0.4 }} />
  </div>
  <!-- Info (centered) -->
  <div class="space-y-4 text-center">
    <h3 class="text-2xl font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">Name</h3>
    <p class="text-slate-600 leading-relaxed line-clamp-2">Description</p>
    <!-- Outline pill button (see 5.2 products page version) -->
  </div>
</div>
```

### 5.15 Carousel Controls

```
left-4 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:bg-white
```

### 5.16 Floating Stat Card

```
absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-3xl p-8 shadow-2xl shadow-slate-900/20 w-[90%] max-w-md border border-slate-100
```

### 5.17 Image with Overlay

```html
<div class="relative rounded-[3rem] overflow-hidden h-[550px] shadow-2xl">
  <div class="absolute inset-0 bg-gradient-to-br from-sky-600/10 to-orange-600/10 mix-blend-overlay" />
  <img class="w-full h-full object-cover" />
</div>
```

### 5.18 Award/Info Banner Pill

```
inline-flex items-center gap-4 bg-gradient-to-r from-amber-50 to-orange-50 px-8 py-5 rounded-full shadow-lg border border-amber-100
```

---

## 6. Shadows & Effects

### 6.1 Tinted Shadows

| Shadow | Where Used |
|---|---|
| `shadow-lg shadow-sky-900/5` | Scrolled header |
| `shadow-lg shadow-sky-900/10` | Hero badge |
| `shadow-lg shadow-amber-900/20` | Nav CTA, product card CTA |
| `shadow-2xl shadow-amber-900/30` | Hero large CTA |
| `shadow-lg shadow-slate-900/5` | Benefit cards (default) |
| `shadow-2xl shadow-slate-900/10` | Benefit cards (hover) |
| `shadow-2xl shadow-slate-900/20` | Trust carousel, floating stat card |
| `shadow-xl shadow-sky-900/20` | Form submit button, form wrapper |
| `shadow-xl` | Form wrapper, success state |
| `shadow-lg` | Icon containers, avatar circles, standard cards |
| `shadow-2xl` | About images, generic hover uplift |

### 6.2 Glassmorphism

| Effect | Classes |
|---|---|
| Header (scrolled) | `bg-white/95 backdrop-blur-xl` |
| Hero badge | `bg-white/80 backdrop-blur-sm` |
| Outline button fill | `bg-white/80 backdrop-blur` |
| Carousel arrows | `bg-white/80 backdrop-blur-sm` |
| Footer social circle | `bg-sky-400/20 backdrop-blur` |

### 6.3 Glow / Blur Effects

| Effect | Classes |
|---|---|
| Hero sky blob | `w-96 h-96 bg-gradient-to-br from-sky-300 to-blue-400 rounded-full blur-3xl opacity-20` |
| Hero warm blob | `w-[500px] h-[500px] bg-gradient-to-br from-orange-300 to-amber-400 rounded-full blur-3xl opacity-20` |
| Trust carousel glow | `absolute -inset-8 bg-gradient-to-br from-sky-400/30 via-blue-400/20 to-orange-400/30 rounded-[4rem] blur-3xl` |
| Product card floor shadow | `w-[85%] h-8 bg-slate-900/10 blur-xl rounded-full` |

### 6.4 Mix-Blend Overlays

All image overlays use `mix-blend-overlay` with gradient div absolutely positioned over the image:
- `from-sky-400/20 to-orange-400/20` — hero carousel
- `from-sky-600/10 to-orange-600/10` — trust carousel, about images
- `from-orange-600/10 to-amber-600/10` — churpi section image

### 6.5 Image Filters

| Effect | Classes |
|---|---|
| Logo invert (footer) | `brightness-0 invert` |
| Product hover | `drop-shadow-2xl transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-2` |
| Products page hover | `drop-shadow-xl` with Framer Motion `whileHover={{ scale: 1.05, rotate: -2 }}` |

---

## 7. Animations (Framer Motion)

### 7.1 Scroll Entry (most common)

```js
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.7 }}
```

Variant with `y: 40` used for cards with stagger.

### 7.2 Horizontal Slide-In

**From left:**
```js
initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
```

**From right:**
```js
initial={{ opacity: 0, x: 50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8, delay: 0.2 }}
```

**Smaller slide (trust points):**
```js
initial={{ opacity: 0, x: -30 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.1, duration: 0.5 }}
```

### 7.3 Staggered Children

**Benefits cards:**
```js
transition={{ duration: 0.6, delay: index * 0.15 }}
```

**Trust points, contact info:**
```js
transition={{ delay: index * 0.1 }}
```

**Products grid:**
```js
transition={{ delay: index * 0.05 }}
```

**Avatar stack:**
```js
initial={{ opacity: 0, scale: 0 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ delay: 0.5 + i * 0.1 }}
```

**Star ratings:**
```js
initial={{ opacity: 0, rotate: -180 }}
animate={{ opacity: 1, rotate: 0 }}
transition={{ delay: 0.8 + i * 0.05 }}
```

### 7.4 Hover Effects

| Element | Animation |
|---|---|
| Benefit cards | `whileHover={{ y: -10 }}` |
| Product card (ProductCard) | `whileHover={{ y: -16 }}` |
| Ingredient cards | `whileHover={{ y: -8 }}` |
| Process step cards | `whileHover={{ y: -8 }}` |
| Logo | `whileHover={{ scale: 1.05 }}` |
| Products page image | `whileHover={{ scale: 1.05, rotate: -2 }}` with `transition={{ duration: 0.4 }}` |

### 7.5 Background Blob Animations

**Sky blob (top-right):**
```js
animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
```

**Warm blob (bottom-left):**
```js
animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
```

### 7.6 Page Entry Animations

**Header slide-in:**
```js
initial={{ y: -100 }}
animate={{ y: 0 }}
```

**Hero content slide-in:**
```js
initial={{ opacity: 0, x: -50 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8, ease: "easeOut" }}
```

**Hero badge pop-in:**
```js
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.2 }}
```

**Hero image scale-in:**
```js
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
```

**Success state:**
```js
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
```

### 7.7 Mobile Menu Animation

```js
initial={{ opacity: 0, height: 0 }}
animate={{ opacity: 1, height: 'auto' }}
exit={{ opacity: 0, height: 0 }}
```
Wrapped in `<AnimatePresence>`.

### 7.8 Auto-Advancing Carousel

Trust section carousel auto-scrolls with `setInterval(() => api.scrollNext(), 3000)`.

---

## 8. Decorative Patterns

### 8.1 Scattered Paw Emojis

**Full-page background (Layout.jsx):**
```html
<div class="fixed inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
  <!-- 15 randomly positioned 🐾 at text-6xl, random rotation -->
</div>
```

**Section-level paws (BenefitsSection, TrustSection):**
```html
<div class="absolute top-20 left-10 text-9xl opacity-[0.02]">🐾</div>
<div class="absolute bottom-20 right-10 text-9xl opacity-[0.02]">🐾</div>
```

**Card corner paw:**
```html
<div class="absolute top-4 right-4 text-4xl opacity-10 group-hover:opacity-20 transition-opacity">🐾</div>
```

**Hero decorative paws:**
```html
<div class="absolute -top-10 -left-10 text-6xl opacity-20">🐾</div>
<div class="absolute -bottom-10 -right-10 text-6xl opacity-20">🐾</div>
```

**Mission section paws (About):**
```html
<div class="absolute top-10 left-10 text-9xl opacity-10">🐾</div>  <!-- on blue bg -->
```

### 8.2 Mountain SVG Silhouettes

**Hero mountains** (5% opacity, two layers):
```html
<div class="absolute bottom-0 left-0 w-full h-64 opacity-5">
  <svg viewBox="0 0 1440 400" class="w-full h-full" preserveAspectRatio="none">
    <path fill="#0c4a6e" d="M0,400 L0,200 L120,140 L240,220 L360,100 ..." />
    <path fill="#075985" d="M0,400 L0,250 L150,190 L300,270 ..." />
  </svg>
</div>
```

**Footer mountains** (10% opacity):
```html
<div class="absolute inset-0 opacity-10">
  <svg class="absolute bottom-0 w-full h-64" viewBox="0 0 1440 320" preserveAspectRatio="none">
    <path fill="currentColor" d="M0,320L0,240L80,200..." />
  </svg>
</div>
```

**Section mountains** (3-4% opacity, single layer, shorter `h-48` or `h-64`):
- About hero: `opacity-[0.03]`
- Products hero: `opacity-[0.03]`
- Contact hero: `opacity-[0.04]`, two paths with second at `opacity="0.6"`

Fill colors used: `#0c4a6e` (sky-900), `#075985` (sky-800), `currentColor` (inherits white in footer).

### 8.3 Floating Gradient Circles

Located in HeroSection behind content, with `blur-3xl` and continuous Framer Motion animations (see Section 7.5). Wrapped in a container at `opacity-30`.

### 8.4 Star Ratings

```html
<svg class="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
</svg>
```
5 stars, each with staggered spin-in animation.

### 8.5 Avatar Stacks

```html
<div class="flex -space-x-4">
  <!-- 5 circles -->
  <div class="w-12 h-12 rounded-full border-4 border-white bg-gradient-to-br from-orange-200 via-amber-300 to-orange-400 shadow-lg" />
</div>
```

### 8.6 Contact Page Background Image

```html
<div class="absolute inset-0 opacity-[0.08]">
  <img src="..." class="w-full h-full object-cover" />
  <div class="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-white/90" />
</div>
```

### 8.7 Mountain/Nature Emojis

Used sparingly at low opacity for atmosphere:
- `🏔️` at `opacity-[0.03]` — Contact hero
- `⛰️` at `opacity-[0.02]` — Contact hero
- `🏔️` inline in badges — "From the Himalayan Peaks"

---

## 9. Responsive Breakpoints

### 9.1 Breakpoint Strategy

Mobile-first. Two breakpoints primarily used:

| Breakpoint | Tailwind prefix | Pixel value |
|---|---|---|
| Medium | `md:` | 768px |
| Large | `lg:` | 1024px |
| Small | `sm:` | 640px (rare, only for flex direction) |

### 9.2 Navigation

- **Mobile (< 768px):** Hamburger menu icon; tapping opens `AnimatePresence` dropdown with full-width links
- **Desktop (>= 768px):** Horizontal nav links (`hidden md:flex`), CTA button visible (`hidden md:block`)

### 9.3 Grid Breakpoints

| Component | Mobile | md (768px) | lg (1024px) |
|---|---|---|---|
| Benefits | 1-col | 2-col | 4-col |
| Products | 1-col | 2-col | 3-col |
| Ingredients | 1-col | 3-col | 3-col |
| Process steps | 1-col | 2-col | 2-col |
| Hero split | 1-col (image hidden) | 1-col | 2-col |
| Trust split | 1-col | 1-col | 2-col |
| About split | 1-col | 1-col | 2-col |
| Contact split | 1-col | 1-col | 2-col |
| Footer | 1-col | 4-col | 4-col |

### 9.4 Typography Scaling

| Element | Mobile | md | lg |
|---|---|---|---|
| Hero h1 | `text-5xl` | `text-6xl` | `text-7xl` |
| Section h2 (large) | `text-4xl` | `text-5xl` | `text-6xl` |
| Section h2 | `text-4xl` | `text-5xl` | — |
| Mission text | `text-3xl` | `text-4xl` | — |
| Products/Contact h1 | `text-5xl` | — | `text-7xl` |

### 9.5 Spacing Scaling

| Element | Mobile | lg |
|---|---|---|
| Container padding | `px-6` | `px-12` |
| Hero section | `py-20` | `py-32` |
| Contact content | `py-20` | `py-32` |
| Contact grid gap | `gap-16` | `gap-24` |
| Form padding | `p-10` | `p-12` (at `md:`) |
| CTA buttons | `flex-col` | `flex-row` (at `sm:`) |

### 9.6 Visibility

| Element | Mobile | Desktop |
|---|---|---|
| Hero image/carousel | Hidden | `hidden lg:block` |
| Desktop nav links | Hidden | `hidden md:flex` |
| Desktop CTA | Hidden | `hidden md:block` |
| Mobile hamburger | Visible | `md:hidden` |
| Mobile menu panel | Visible when open | `md:hidden` |

---

## 10. Key File Reference

| File | What it defines |
|---|---|
| `tailwind.config.js` | Brand color tokens, border-radius, keyframes, plugins |
| `src/index.css` | CSS variables (light + dark), base layer resets |
| `components.json` | shadcn/ui config (new-york style, neutral base, lucide icons) |
| `src/Layout.jsx` | Page wrapper, sticky header, footer, paw background, nav |
| `src/components/ui/button.jsx` | Button variants (CVA): default, destructive, outline, secondary, ghost, link |
| `src/components/ui/card.jsx` | Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter |
| `src/components/ui/input.jsx` | Base input component |
| `src/components/ui/textarea.jsx` | Base textarea component |
| `src/components/home/HeroSection.jsx` | Hero patterns, blobs, carousel, avatars, stars |
| `src/components/home/BenefitsSection.jsx` | 4-col card grid, icon containers, gradient patterns |
| `src/components/home/TrustSection.jsx` | Split layout, carousel with glow, trust points, stat card |
| `src/components/contact/ContactForm.jsx` | Form styling, success state, gradient submit button |
| `src/components/products/ProductCard.jsx` | Product card with drop shadow, hover effects |
| `src/pages/About.jsx` | Multi-section page layout, mission banner, ingredients, process |
| `src/pages/Products.jsx` | Product grid, alternate product card style, empty state |
| `src/pages/Contact.jsx` | Contact page layout, info cards, background image overlay |
