import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', page: 'Home' },
  { name: 'Products', page: 'Products' },
  { name: 'About', page: 'About' },
  { name: 'Contact', page: 'Contact' }
];

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-stone-100">
        <div className="container mx-auto px-6 lg:px-12">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to={createPageUrl('Home')} 
              className="flex items-center"
            >
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698aa2744336b431ef9e25a3/395cf2f21_logo.png" 
                alt="Peak Paws" 
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className={`text-sm font-medium transition-colors ${
                    currentPageName === link.page
                      ? 'text-brand-brown'
                      : 'text-stone-600 hover:text-brand-brown'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                asChild
                className="bg-brand-orange hover:bg-brand-dark-brown text-white rounded-full px-6"
              >
                <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Shop Now
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-600"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-stone-100"
            >
              <div className="container mx-auto px-6 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 text-lg font-medium ${
                      currentPageName === link.page
                        ? 'text-brand-brown'
                        : 'text-stone-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button
                  asChild
                  className="w-full bg-brand-orange hover:bg-brand-dark-brown text-white rounded-full mt-4"
                >
                  <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Shop Now
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-slate-700 to-slate-800 text-white py-16 relative overflow-hidden">
        {/* Mountain silhouette */}
        <svg className="absolute top-0 left-0 w-full h-20 opacity-10" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path fill="#fff" d="M0,0 L0,50 L120,40 L240,60 L360,30 L480,55 L600,25 L720,45 L840,15 L960,40 L1080,10 L1200,35 L1320,5 L1440,30 L1440,0 Z"/>
        </svg>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698aa2744336b431ef9e25a3/395cf2f21_logo.png" 
                  alt="Peak Paws" 
                  className="h-12 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-stone-400 max-w-sm">
                Authentic Himalayan yak cheese chews - 100% natural, grain-free, 
                and packed with protein for hours of healthy chewing.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.page}>
                    <Link
                      to={createPageUrl(link.page)}
                      className="text-stone-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shop */}
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://amazon.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-white transition-colors"
                  >
                    Amazon Store
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 text-sm">
              © {new Date().getFullYear()} Peak Paws. All rights reserved.
            </p>
            <p className="text-stone-500 text-sm">
              Authentic Himalayan Dog Chews 🏔️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}