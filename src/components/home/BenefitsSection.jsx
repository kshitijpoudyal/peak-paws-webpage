import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Shield, Clock, Heart } from 'lucide-react';

const benefits = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Made from authentic Himalayan yak and cow milk with no artificial additives or preservatives.",
    color: "bg-emerald-100 text-emerald-700"
  },
  {
    icon: Shield,
    title: "Grain-Free",
    description: "Lactose-free and easily digestible, perfect for dogs with sensitive stomachs.",
    color: "bg-blue-100 text-blue-700"
  },
  {
    icon: Clock,
    title: "Long Lasting",
    description: "Hard cheese texture keeps dogs entertained for hours while promoting dental health.",
    color: "bg-[#D2691E]/10 text-[#8B4513]"
  },
  {
    icon: Heart,
    title: "High Protein",
    description: "Packed with protein and calcium for strong bones and healthy muscles.",
    color: "bg-rose-100 text-rose-700"
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#D2691E]/10 text-[#8B4513] rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
            The Best for Your Best Friend
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            We believe every dog deserves premium quality treats that are as safe as they are delicious.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-stone-50 rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:shadow-stone-200/50 hover:-translate-y-1">
                <div className={`w-14 h-14 ${benefit.color} rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}