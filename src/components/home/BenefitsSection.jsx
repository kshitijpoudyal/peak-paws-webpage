import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Shield, Clock, Heart, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Made from authentic Himalayan yak and cow milk with no artificial additives or preservatives.",
    gradient: "from-emerald-400 to-teal-500"
  },
  {
    icon: Shield,
    title: "Grain-Free",
    description: "Lactose-free and easily digestible, perfect for dogs with sensitive stomachs.",
    gradient: "from-sky-400 to-blue-500"
  },
  {
    icon: Clock,
    title: "Long Lasting",
    description: "Hard cheese texture keeps dogs entertained for hours while promoting dental health.",
    gradient: "from-orange-400 to-amber-500"
  },
  {
    icon: Heart,
    title: "High Protein",
    description: "Packed with protein and calcium for strong bones and healthy muscles.",
    gradient: "from-rose-400 to-pink-500"
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-9xl opacity-[0.02]">🐾</div>
      <div className="absolute bottom-20 right-10 text-9xl opacity-[0.02]">🐾</div>
      
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-sky-100 to-blue-100 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span className="text-sm font-semibold text-sky-900">Why Peak Paws?</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent">
              The Best for Your
            </span>
            <br />
            <span className="text-slate-900">Best Friend</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Every chew is crafted with care, combining ancient Himalayan wisdom with modern quality standards.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 h-full border border-slate-100 shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
                
                {/* Decorative corner */}
                <div className="absolute top-4 right-4 text-4xl opacity-10 group-hover:opacity-20 transition-opacity">
                  🐾
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}