# 🐾 Peak Paws

A modern, responsive website for Peak Paws - authentic Himalayan yak cheese dog chews from Nepal's mountains.

## 🚀 Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **UI Components:** Radix UI primitives
- **Deployment:** Vercel

## ✨ Features

- 🏔️ Beautiful, responsive design with Himalayan-inspired aesthetics
- 📱 Mobile-first approach with smooth animations
- 🛍️ Product showcase with mock data
- 📬 Contact form with client-side validation
- 🎨 Custom Tailwind theme with brand colors
- ⚡ Fast page loads with Vite optimizations
- 🌐 SPA routing for seamless navigation

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone git@github.com:kshitijpoudyal/peak-paws-webpage.git
cd peak-paws
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Start development server:
```bash
npm run dev
```

The app will be available at `http://localhost:8080`

## 📜 Available Scripts

- `npm run dev` - Start development server on port 8080
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## 🎨 Brand Colors

The project uses custom brand colors defined in Tailwind config:

- **Orange:** `#F9A93A` - Primary CTA buttons
- **Brown:** `#8B4513` - Nav links, secondary elements
- **Dark Brown:** `#6B3410` - Hover states

Use them in your components:
```jsx
<div className="bg-brand-orange text-white">
<button className="hover:bg-brand-dark-brown">
```

## 📁 Project Structure

```
peak-paws/
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── contact/   # Contact form
│   │   ├── home/      # Home page sections
│   │   ├── products/  # Product components
│   │   └── ui/        # Radix UI components
│   ├── pages/         # Page components
│   ├── lib/           # Utilities and helpers
│   ├── App.jsx        # Main app component
│   ├── Layout.jsx     # Layout with nav/footer
│   └── main.jsx       # Entry point
├── public/            # Static assets
└── dist/              # Production build output
```

## 🚀 Deployment

### Deploy to Vercel

1. Push to GitHub:
```bash
git add .
git commit -m "Your message"
git push
```

2. Import project in [Vercel Dashboard](https://vercel.com)
3. Vercel auto-detects Vite configuration
4. Set environment variables (if needed) in Vercel settings
5. Deploy!

The `vercel.json` config handles SPA routing and asset caching automatically.

## 🌐 Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
VITE_APP_NAME=Peak Paws
VITE_APP_URL=http://localhost:8080
```

For production, set these in your Vercel dashboard.

## 📝 Notes

- This is a **frontend-only** application with no backend
- Product data is currently mocked in `src/pages/Products.jsx`
- Contact form validates client-side and logs to console

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open a Pull Request

## 📄 License

This project is private and proprietary.

---

Built with ❤️ for Peak Paws - Bringing Himalayan quality to your furry friends!