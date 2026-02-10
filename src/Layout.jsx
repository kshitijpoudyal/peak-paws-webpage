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
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-orange-50">
      {/* Floating paw prints background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-6xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            🐾
          </div>
        ))}
      </div>

      {/* Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-sky-900/5' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <nav className="flex items-center justify-between h-20">
            <Link to={createPageUrl('Home')} className="flex items-center group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="/logo.png"
                alt="Peak Paws"
                className="h-14 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                link.section ? (
                  <a
                    key={link.name}
                    href={`${createPageUrl(link.page)}#${link.section}`}
                    className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-sky-700 transition-colors rounded-lg hover:bg-sky-50"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                      currentPageName === link.page
                        ? 'text-sky-700 bg-sky-50'
                        : 'text-slate-700 hover:text-sky-700 hover:bg-sky-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>

            <div className="hidden md:block">
              <Button
                asChild
                className="bg-[#F9A93A] hover:bg-[#e89820] text-white rounded-full px-6 shadow-lg shadow-amber-900/20"
              >
                <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Shop Now
                </a>
              </Button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
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
              className="md:hidden bg-white border-t border-slate-100"
            >
              <div className="container mx-auto px-6 py-6 space-y-2">
                {navLinks.map((link) => (
                  link.section ? (
                    <a
                      key={link.name}
                      href={`${createPageUrl(link.page)}#${link.section}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-3 px-4 text-lg font-medium text-slate-700 rounded-lg hover:bg-sky-50"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={link.page}
                      to={createPageUrl(link.page)}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-3 px-4 text-lg font-medium rounded-lg ${
                        currentPageName === link.page
                          ? 'text-sky-700 bg-sky-50'
                          : 'text-slate-700 hover:bg-sky-50'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )
                ))}
                <Button
                  asChild
                  className="w-full bg-[#F9A93A] hover:bg-[#e89820] text-white rounded-full mt-4"
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
      </motion.header>

      {/* Main Content */}
      <main className="relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-slate-900 via-sky-950 to-blue-950 text-white py-20 overflow-hidden">
        {/* Mountain silhouette */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute bottom-0 w-full h-64" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,320L0,240L80,200L160,280L240,160L320,220L400,120L480,200L560,80L640,160L720,40L800,120L880,20L960,100L1040,0L1120,80L1200,10L1280,60L1360,30L1440,80L1440,320L0,320Z"/>
          </svg>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <img
                src="/logo.png"
                alt="Peak Paws"
                className="h-14 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-sky-100 max-w-sm leading-relaxed mb-6">
                Authentic Himalayan yak cheese chews - 100% natural, grain-free, 
                and packed with protein for hours of healthy chewing.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sky-400/20 backdrop-blur rounded-full flex items-center justify-center">
                  <span className="text-xl">🏔️</span>
                </div>
                <span className="text-sm text-sky-200">Crafted in the Himalayas</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.page}>
                    <Link
                      to={createPageUrl(link.page)}
                      className="text-sky-200 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Shop</h4>
              <a
                href="https://amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sky-200 hover:text-white transition-colors text-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                Amazon Store
              </a>
            </div>
          </div>

          <div className="border-t border-sky-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sky-300 text-sm">
              © {new Date().getFullYear()} Peak Paws. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sky-200 text-sm">
              <span className="text-lg">🐾</span>
              <span>Made with love for your furry friends</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}