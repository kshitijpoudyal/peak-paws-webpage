import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Loader2, Trash2, Mountain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useIsMobile } from '@/hooks/use-mobile';

const itemVariants = {
  hidden: { opacity: 0, x: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { delay: i * 0.07, type: 'spring', stiffness: 260, damping: 22 },
  }),
  exit: { opacity: 0, x: -60, scale: 0.92, transition: { duration: 0.22 } },
};

export default function CartDrawer() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartItemsCount,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  const isMobile = useIsMobile();
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    if (cartItems.length === 0) return;

    setIsLoading(true);

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cartItems.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image_url: item.image_url,
          })),
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || 'Failed to create checkout session');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Unable to process checkout. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-sky-950/60 backdrop-blur-sm z-50"
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={isMobile ? { y: '100%', opacity: 0.5 } : { x: '100%', opacity: 0.5 }}
            animate={isMobile ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }}
            exit={isMobile ? { y: '100%', opacity: 0.5 } : { x: '100%', opacity: 0.5 }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className={
              isMobile
                ? 'fixed bottom-0 left-0 w-full max-h-[85vh] bg-gradient-to-br from-sky-50 via-white to-orange-50/40 shadow-2xl shadow-sky-900/20 z-50 flex flex-col rounded-t-2xl overflow-hidden'
                : 'fixed right-0 top-0 h-full w-full max-w-md bg-gradient-to-br from-sky-50 via-white to-orange-50/40 shadow-2xl shadow-sky-900/20 z-50 flex flex-col'
            }
          >
            {/* Mobile drag handle */}
            {isMobile && (
              <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
                <div className="w-10 h-1 bg-slate-300 rounded-full" />
              </div>
            )}
            {/* Header */}
            <div className="relative flex items-center justify-between px-6 py-5 bg-gradient-to-r from-sky-600 to-blue-700 overflow-hidden">
              {/* Subtle mountain silhouette */}
              <div className="absolute bottom-0 left-0 w-full opacity-10 pointer-events-none">
                <svg viewBox="0 0 400 40" preserveAspectRatio="none" className="w-full h-8 fill-white">
                  <path d="M0,40 L0,20 L60,8 L120,22 L180,4 L240,18 L300,6 L360,16 L400,10 L400,40 Z" />
                </svg>
              </div>

              <div className="flex items-center gap-3 relative">
                <motion.div
                  initial={{ rotate: -15, scale: 0.8 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <ShoppingBag className="w-6 h-6 text-white" />
                </motion.div>
                <h2 className="text-xl font-bold text-white tracking-tight">Your Cart</h2>
                <AnimatePresence>
                  {cartItemsCount > 0 && (
                    <motion.span
                      key={cartItemsCount}
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                      className="bg-[#F9A93A] text-white text-xs font-bold px-2 py-0.5 rounded-full min-w-[1.4rem] text-center"
                    >
                      {cartItemsCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                onClick={() => setIsCartOpen(false)}
                className="relative p-2 bg-white/15 hover:bg-white/25 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </motion.button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-5 py-5">
              {cartItems.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col items-center justify-center h-full text-center px-4"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-sky-100 to-orange-50 rounded-full flex items-center justify-center mb-5 shadow-inner">
                    <span className="text-4xl">🐾</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Your cart is empty</h3>
                  <p className="text-slate-500 mb-7 leading-relaxed">
                    Add some yak chews to keep your pup happy!
                  </p>
                  <Button
                    onClick={() => setIsCartOpen(false)}
                    className="bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white rounded-full px-8 shadow-lg shadow-sky-900/20"
                  >
                    Continue Shopping
                  </Button>
                </motion.div>
              ) : (
                <motion.div layout className="space-y-3">
                  <AnimatePresence initial={false}>
                    {cartItems.map((item, i) => (
                      <motion.div
                        key={item.id}
                        custom={i}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        layout
                        className="flex gap-4 p-4 bg-white rounded-2xl border border-sky-100/80 shadow-sm shadow-sky-900/5 hover:shadow-md hover:shadow-sky-900/8 transition-shadow"
                      >
                        {/* Product image */}
                        <div className="w-20 h-20 bg-gradient-to-br from-sky-50 to-orange-50/50 rounded-xl p-2 flex-shrink-0 border border-sky-100/60">
                          <img
                            src={item.image_url}
                            alt={item.name}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-slate-900 truncate text-sm leading-tight mb-1">
                            {item.name}
                          </h4>
                          <p className="text-sky-600 font-bold text-base">
                            ${item.price.toFixed(2)}
                          </p>

                          {/* Quantity controls */}
                          <div className="flex items-center gap-1.5 mt-2.5">
                            <motion.button
                              whileTap={{ scale: 0.85 }}
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center bg-sky-50 hover:bg-sky-100 text-sky-700 rounded-lg transition-colors border border-sky-200/60"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </motion.button>

                            <motion.span
                              key={item.quantity}
                              initial={{ scale: 1.3, color: '#0284c7' }}
                              animate={{ scale: 1, color: '#0f172a' }}
                              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                              className="w-8 text-center font-bold text-slate-900 text-sm"
                            >
                              {item.quantity}
                            </motion.span>

                            <motion.button
                              whileTap={{ scale: 0.85 }}
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center bg-sky-50 hover:bg-sky-100 text-sky-700 rounded-lg transition-colors border border-sky-200/60"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </motion.button>

                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => removeFromCart(item.id)}
                              className="ml-auto w-7 h-7 flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </div>

            {/* Footer */}
            <AnimatePresence>
              {cartItems.length > 0 && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  className="border-t border-sky-100 bg-white/80 backdrop-blur-sm px-6 py-5 space-y-4"
                >
                  {/* Subtotal row */}
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 font-medium">Subtotal</span>
                    <motion.span
                      key={cartTotal}
                      initial={{ scale: 1.15, color: '#0284c7' }}
                      animate={{ scale: 1, color: '#0f172a' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                      className="text-2xl font-black text-slate-900"
                    >
                      ${cartTotal.toFixed(2)}
                    </motion.span>
                  </div>

                  <p className="text-xs text-slate-400">
                    Shipping and taxes calculated at checkout
                  </p>

                  {/* Checkout button */}
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      onClick={handleCheckout}
                      disabled={isLoading}
                      className="w-full bg-[#F9A93A] hover:bg-[#e89820] text-white rounded-full py-6 text-base font-bold shadow-lg shadow-amber-900/20 transition-all"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4 mr-2" />
                          Checkout
                        </>
                      )}
                    </Button>
                  </motion.div>

                  <button
                    onClick={clearCart}
                    className="w-full text-xs text-slate-400 hover:text-slate-600 transition-colors py-1"
                  >
                    Clear cart
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
