import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import productsData from '@/data/products.json';

export default function Products() {
    const products = productsData;
    const isLoading = false;

   return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-orange-50">
      {/* Header */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="absolute bottom-0 w-full h-64" viewBox="0 0 1440 300" preserveAspectRatio="none">
            <path fill="#0c4a6e" d="M0,300 L0,150 L120,110 L240,170 L360,90 L480,150 L600,70 L720,130 L840,50 L960,110 L1080,30 L1200,90 L1320,20 L1440,70 L1440,300 Z"/>
          </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 backdrop-blur rounded-full mb-8 shadow-lg">
              <span className="text-2xl">🏔️</span>
              <span className="text-sm font-semibold text-sky-900">From Nepal's Peaks</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent">
                Our Premium
              </span>
              <br />
              <span className="text-slate-900">Himalayan Chews</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Authentic, all-natural chews crafted using traditional Nepalese recipes your pup will love.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          {isLoading ? (
            <div className="flex justify-center py-32">
              <Loader2 className="w-12 h-12 animate-spin text-sky-600" />
            </div>
          ) : products.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-32 bg-white/60 backdrop-blur rounded-[3rem] shadow-xl max-w-2xl mx-auto"
            >
              <div className="text-8xl mb-8">🦴</div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Products Coming Soon!
              </h3>
              <p className="text-lg text-slate-600 max-w-md mx-auto">
                We're preparing our best selection of dog chews for you. 
                Check back soon or visit our Amazon store!
              </p>
            </motion.div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}