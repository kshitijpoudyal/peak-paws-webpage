import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ProductCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="aspect-square overflow-hidden bg-stone-100">
          <img
            src={product.image_url || "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=400&h=400&fit=crop"}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-lg font-semibold text-stone-800 mb-2">
            {product.name}
          </h3>
          
          {product.description && (
            <p className="text-stone-500 text-sm mb-4 line-clamp-2">
              {product.description}
            </p>
          )}
          
          <Button
            asChild
            className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-xl"
          >
            <a 
              href={product.amazon_url || "https://amazon.com"} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View on Amazon
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}