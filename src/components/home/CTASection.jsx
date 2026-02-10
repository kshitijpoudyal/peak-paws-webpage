import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 bg-amber-50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-700 via-slate-800 to-blue-900 rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Mountain decoration */}
          <svg className="absolute bottom-0 left-0 w-full h-24 opacity-10" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path fill="#fff" d="M0,100 L0,60 L150,40 L300,70 L450,20 L600,50 L750,10 L900,40 L1050,5 L1200,30 L1200,100 Z"/>
          </svg>
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <span className="text-6xl mb-6 block">🏔️</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Give Your Dog the Himalayan Experience
            </h2>
            <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of happy dogs enjoying authentic Himalayan yak cheese chews. 
              Available now on Amazon with fast, free shipping!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-amber-700 hover:bg-stone-100 rounded-full px-8 py-6 text-lg font-semibold shadow-lg"
              >
                <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Shop on Amazon
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}