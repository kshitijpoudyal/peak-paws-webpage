import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Mountain, Heart, Award, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-gradient-to-br from-sky-50 via-white to-orange-50">
      {/* Hero Section */}
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
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 backdrop-blur rounded-full mb-8 shadow-lg">
              <Sparkles className="w-4 h-4 text-sky-600" />
              <span className="text-sm font-semibold text-sky-900">🏔️ Our Story</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent">
                Tradition Meets Quality
              </span>
              <br />
              <span className="text-slate-900">in Every Chew</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              At Peak Paws, we believe dogs deserve treats that are as natural, pure, and hardworking as they are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-[3rem] overflow-hidden h-[550px] shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-600/10 to-orange-600/10 mix-blend-overlay" />
                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=700&h=550&fit=crop"
                  alt="Himalayan landscape"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
                <span className="text-slate-900">Centuries-Old</span>
                <br />
                <span className="bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent">
                  Tradition
                </span>
              </h2>
              <div className="space-y-5 text-lg text-slate-600 leading-relaxed mb-10">
                <p>
                  Our Himalayan Yak Chews are inspired by a centuries-old tradition from the Himalayan region, 
                  where local communities have long crafted hard cheese chews using simple, natural methods.
                </p>
                <p>
                  Made from high-quality yak and cow milk, with just salt and lime, our chews are gently 
                  processed to create a long-lasting, protein-rich treat dogs love.
                </p>
                <p>
                  We focus on simple ingredients, honest sourcing, and consistent quality. No artificial additives. 
                  No unnecessary fillers. Just a naturally dense chew designed to keep dogs engaged.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">100% Natural</h4>
                    <p className="text-sm text-slate-600">Simple ingredients</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mountain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Himalayan</h4>
                    <p className="text-sm text-slate-600">Traditional recipe</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Banner */}
      <section className="py-20 bg-gradient-to-r from-sky-600 via-blue-600 to-sky-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">🐾</div>
          <div className="absolute bottom-10 right-10 text-9xl">🐾</div>
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <Heart className="w-16 h-16 mx-auto mb-6" strokeWidth={2} />
            <p className="text-3xl md:text-4xl font-bold leading-relaxed mb-6">
              From energetic puppies to powerful chewers, our mission is simple: provide long-lasting, 
              natural chews that keep dogs happy and owners confident.
            </p>
            <p className="text-xl text-sky-100">
              Feed your dog treats that have been trusted for centuries… Human-grade chew.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mb-6">
                <span className="text-sm font-semibold text-amber-900">Ancient Tradition</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                <span className="text-slate-900">History of</span>
                <br />
                <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  Churpi
                </span>
              </h2>
              <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
                <p>
                  Himalayan Yak Chew, also known as <strong className="text-slate-900">"Churpi"</strong>, was historically consumed by 
                  mountain people, travellers, and shepherds as a high-protein snack, often used to keep teeth 
                  active and sustain energy during long journeys through the mountains.
                </p>
                <p>
                  Even today, Churpi is consumed in Nepal as a snack. The original chew 
                  is native, rugged and natural — often given to dogs in the Himalayas for years before becoming 
                  a global pet product.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-[3rem] overflow-hidden h-[450px] shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-amber-600/10 mix-blend-overlay" />
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&h=450&fit=crop"
                  alt="Himalayan mountains"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="py-24 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full mb-6 shadow-lg">
              <Sparkles className="w-4 h-4 text-sky-600" />
              <span className="text-sm font-semibold text-sky-900">Pure & Simple</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className="text-slate-900">Just</span>{' '}
              <span className="bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent">
                3 Natural Ingredients
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Himalayan Yak Chew is made with 3 simple ingredients: milk, salt and lime.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Yak & Cow Milk', icon: '🥛', desc: 'High-grazing, grass-fed milk from the Himalayas', gradient: 'from-blue-400 to-sky-500' },
              { name: 'Natural Salt', icon: '🧂', desc: 'Himalayan rock salt for preservation', gradient: 'from-slate-400 to-gray-500' },
              { name: 'Lime Juice', icon: '🍋', desc: 'Natural curdling agent', gradient: 'from-emerald-400 to-teal-500' }
            ].map((ingredient, idx) => (
              <motion.div
                key={ingredient.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${ingredient.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <span className="text-5xl">{ingredient.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{ingredient.name}</h3>
                <p className="text-slate-600 leading-relaxed">{ingredient.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Method */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mb-6">
              <span className="text-sm font-semibold text-amber-900">Traditional Craft</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Time-Honored
              </span>
              <br />
              <span className="text-slate-900">Production Method</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              The process involves curdling the milk, separating the whey, 
              and pressing the curd into blocks which are then dried and smoked for up to 28 days.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {[
              { num: '1', title: 'Gentle Curdling', desc: 'Milk is gently curdled using natural lime juice, preserving nutrients and flavor.', gradient: 'from-blue-400 to-sky-500' },
              { num: '2', title: 'Pressing & Shaping', desc: 'Curds are pressed to remove whey, then shaped into pieces by hand.', gradient: 'from-emerald-400 to-teal-500' },
              { num: '3', title: 'Slow Drying', desc: 'Pieces are left to slowly dry and cure naturally over several weeks.', gradient: 'from-amber-400 to-orange-500' },
              { num: '4', title: '28-Day Cure', desc: 'The long curing period creates a dense, durable chew with high protein content.', gradient: 'from-rose-400 to-pink-500' }
            ].map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
                  <span className="text-3xl font-bold text-white">{step.num}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-amber-50 to-orange-50 px-8 py-5 rounded-full shadow-lg border border-amber-100">
              <Award className="w-8 h-8 text-amber-600" />
              <p className="text-slate-700 font-semibold text-lg">
                Traditional, hands-on method passed down through generations
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-2xl text-slate-600 leading-relaxed mb-6">
              Thank you for trusting Peak Paws to be part of your dog's daily routine.
            </p>
            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent">
              Every chew tells a story of tradition, quality, and care. 🏔️
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}