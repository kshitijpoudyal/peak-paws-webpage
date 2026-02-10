import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';

// Mock product data - replace with your actual products
const MOCK_PRODUCTS = [
  {
    id: 1,
    name: 'Classic Yak Cheese Chew',
    description: 'Our signature all-natural yak cheese chew. Long-lasting and delicious.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1601758228658-3bde5a7230b9?w=500&h=400&fit=crop',
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: 'Himalayan Smoky Chew',
    description: 'Smoked yak cheese chew with a rich, smoky flavor your dog will love.',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4d4b3f0?w=500&h=400&fit=crop',
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: 'Soft Yak Chew Pack',
    description: 'Perfect for puppies and senior dogs. Softer texture, same great taste.',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=400&fit=crop',
    rating: 4.7,
    reviews: 56
  },
  {
    id: 4,
    name: 'Premium Long-Lasting Chew',
    description: 'Our longest-lasting chew - keeps dogs busy for hours.',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1580959375944-abd7e991fce3?w=500&h=400&fit=crop',
    rating: 4.9,
    reviews: 203
  }
];

export default function Products() {
  const products = MOCK_PRODUCTS;
  const isLoading = false;

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50 py-20 relative overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-full h-16 opacity-5" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path fill="#1e3a5f" d="M0,60 L0,40 L180,30 L360,50 L540,20 L720,40 L900,15 L1080,35 L1260,10 L1440,25 L1440,60 Z"/>
        </svg>
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              🏔️ From Nepal's Himalayas
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Himalayan Yak Cheese Chews
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Authentic, all-natural chews crafted using traditional Nepalese recipes your pup will love.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-amber-600" />
            </div>
          ) : products.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-6">🦴</div>
              <h3 className="text-2xl font-semibold text-stone-800 mb-3">
                Products Coming Soon!
              </h3>
              <p className="text-stone-600 max-w-md mx-auto">
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