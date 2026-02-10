import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50">
      {/* Mountain Silhouette Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-full h-[60%] opacity-[0.03]" viewBox="0 0 1440 600" preserveAspectRatio="none">
          <path fill="#1e3a5f" d="M0,600 L0,400 L120,350 L240,420 L360,300 L480,380 L600,250 L720,320 L840,200 L960,280 L1080,150 L1200,220 L1320,100 L1440,180 L1440,600 Z"/>
          <path fill="#2d4a6f" d="M0,600 L0,450 L180,400 L300,480 L420,350 L540,430 L660,320 L780,400 L900,280 L1020,360 L1140,240 L1260,320 L1380,200 L1440,250 L1440,600 Z"/>
        </svg>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-900 rounded-full blur-3xl opacity-5" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-700 rounded-full blur-3xl opacity-5" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
              🏔️ Authentic Himalayan Recipe
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 leading-tight mb-6">
              Natural, Long-Lasting
              <span className="block text-brown-700">Dog Chews from the Himalayas</span>
            </h1>
            
            <p className="text-lg text-stone-600 mb-8 max-w-lg leading-relaxed">
              Give your dog the gift of authentic Himalayan yak cheese chews - 100% natural, 
              grain-free, and packed with protein for hours of healthy chewing enjoyment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-amber-700 hover:bg-amber-800 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-amber-700/25 transition-all hover:shadow-xl hover:shadow-amber-700/30"
              >
                <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Shop on Amazon
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-stone-300 text-stone-700 hover:bg-stone-100 rounded-full px-8 py-6 text-lg"
              >
                <Link to={createPageUrl('Products')}>
                  View Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 mt-10">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-amber-200 to-amber-300"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-amber-500 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-stone-500">Loved by 10,000+ happy pups</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-emerald-200 rounded-[3rem] transform rotate-3" />
              <img
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=700&fit=crop"
                alt="Happy dog with chew toy"
                className="relative rounded-[3rem] object-cover w-full h-[600px] shadow-2xl"
              />
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -left-8 top-1/4 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏔️</span>
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800">Himalayan Yak</p>
                    <p className="text-sm text-stone-500">Authentic recipe</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-8 bottom-1/4 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🧀</span>
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800">High Protein</p>
                    <p className="text-sm text-stone-500">Grain-free</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}