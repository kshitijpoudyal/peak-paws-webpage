import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShoppingBag, ShoppingCart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, index }) {
  const { addToCart, cartItems } = useCart();
  const [justAdded, setJustAdded] = React.useState(false);
  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    addToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -16 }}
      className="group"
    >
      <div className="overflow-hidden">
        {/* Product Image with realistic depth */}
        <div className="aspect-square overflow-hidden relative p-2">
          <div className="relative w-full h-full">
            {/* Shadow under package */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-8 bg-slate-900/10 blur-xl rounded-full" />
            
            {/* Product package */}
            <img
              src={product.image_url}
              alt={product.name}
              className="relative w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-2"
            />
          </div>
        </div>
        
        <div className="p-7">
          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-700 transition-colors">
            {product.name}
          </h3>
          
          {product.description && (
            <p className="text-slate-600 text-sm mb-3 line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          )}
          
          {product.price && (
            <p className="text-2xl font-bold text-sky-700 mb-4">
              ${product.price.toFixed(2)}
            </p>
          )}
          
          <div className="space-y-2">
            <Button
              onClick={handleAddToCart}
              className={`w-full rounded-2xl py-6 shadow-lg transition-all duration-300 group/btn ${
                justAdded
                  ? 'bg-green-500 hover:bg-green-600 shadow-green-900/20'
                  : 'bg-[#F9A93A] hover:bg-[#e89820] shadow-amber-900/20'
              } text-white`}
            >
              {justAdded ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Added to Cart!
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                  Add to Cart
                </>
              )}
            </Button>
            
            {product.amazon_url && (
              <Button
                asChild
                variant="outline"
                className="w-full rounded-2xl py-5 border-slate-200 hover:bg-slate-50"
              >
                <a 
                  href={product.amazon_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  View on Amazon
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}