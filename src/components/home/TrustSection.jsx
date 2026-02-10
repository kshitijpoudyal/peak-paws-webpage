import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const trustPoints = [
  "Sourced from free-range yaks in the Himalayas",
  "Traditional recipe passed down for generations",
  "Rigorous quality testing on every batch",
  "Loved by thousands of happy dogs",
  "100% satisfaction guarantee"
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-slate-50 to-amber-50 overflow-hidden relative">
      {/* Mountain silhouette overlay */}
      <svg className="absolute bottom-0 left-0 w-full h-32 opacity-5" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path fill="#1e3a5f" d="M0,120 L0,80 L100,60 L200,90 L300,40 L400,70 L500,30 L600,60 L700,20 L800,50 L900,10 L1000,40 L1100,0 L1200,30 L1300,5 L1440,25 L1440,120 Z"/>
      </svg>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-[#D2691E]/10 text-[#8B4513] rounded-full text-sm font-medium mb-6">
              🇳🇵 From the Himalayas of Nepal
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-slate-800">
              Why Pet Parents
              <span className="block text-[#8B4513]">Trust Us</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Our chews are crafted using an ancient Himalayan recipe, combining yak and 
              cow milk to create a hard cheese that dogs absolutely love. No chemicals, 
              no shortcuts - just pure, natural goodness.
            </p>
            
            <div className="space-y-4">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-700">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#D2691E]/30 to-blue-200 rounded-[3rem] blur-xl" />
              <img
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=500&fit=crop"
                alt="Happy dog owner with their pet"
                className="relative rounded-3xl object-cover w-full h-[500px]"
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-2xl p-6 shadow-2xl w-[90%] max-w-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#D2691E]/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <p className="font-bold text-stone-800 text-lg">10,000+</p>
                  <p className="text-stone-500">Happy Customers</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}