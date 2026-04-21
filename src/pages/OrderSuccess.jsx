import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Package, ArrowRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { createPageUrl } from '@/utils';
import confetti from 'canvas-confetti';

export default function OrderSuccess() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const { clearCart } = useCart();

  useEffect(() => {
    // Clear the cart after successful order
    clearCart();

    // Trigger confetti celebration
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#0ea5e9', '#F9A93A', '#22c55e'],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#0ea5e9', '#F9A93A', '#22c55e'],
      });
    }, 250);

    return () => clearInterval(interval);
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-green-50 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full text-center"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle className="w-12 h-12 text-green-600" />
        </motion.div>

        {/* Success Message */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-black text-slate-900 mb-4"
        >
          Order Confirmed! 🎉
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-slate-600 mb-8"
        >
          Thank you for your purchase! Your furry friend is going to love their
          new yak chews.
        </motion.p>

        {/* Order Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 mb-8"
        >
          <div className="flex items-center justify-center gap-3 text-slate-700 mb-4">
            <Package className="w-5 h-5 text-sky-600" />
            <span className="font-medium">What happens next?</span>
          </div>
          <ul className="text-left text-slate-600 space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                1
              </span>
              <span>You'll receive an email confirmation shortly</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                2
              </span>
              <span>We'll prepare and ship your order within 1-2 business days</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                3
              </span>
              <span>You'll get a tracking number once your order ships</span>
            </li>
          </ul>

          {sessionId && (
            <div className="mt-6 pt-6 border-t border-slate-100">
              <p className="text-sm text-slate-500">
                Order Reference:{' '}
                <span className="font-mono text-slate-700">
                  {sessionId.slice(-8).toUpperCase()}
                </span>
              </p>
            </div>
          )}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            className="bg-[#F9A93A] hover:bg-[#e89820] text-white rounded-full px-8 py-6 shadow-lg shadow-amber-900/20"
          >
            <Link to={createPageUrl('Products')}>
              Continue Shopping
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full px-8 py-6 border-slate-200"
          >
            <Link to={createPageUrl('Home')}>
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
