import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Mountain, Heart, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-stone-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50 py-24 overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-full h-32 opacity-5" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="#1e3a5f" d="M0,120 L0,80 L100,60 L200,90 L300,40 L400,70 L500,30 L600,60 L700,20 L800,50 L900,10 L1000,40 L1100,0 L1200,30 L1300,5 L1440,25 L1440,120 Z"/>
        </svg>
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
              🏔️ Our Story
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6 leading-tight">
              Tradition Meets Quality in Every Chew
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed">
              At Peak Paws Chew, we believe dogs deserve treats that are as natural, pure, and hardworking as they are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-3xl overflow-hidden h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=500&fit=crop"
                  alt="Himalayan landscape"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">
                Centuries-Old Tradition
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Our Himalayan Yak Chews are inspired by a centuries-old tradition from the Himalayan region, 
                  where local communities have long crafted hard cheese chews using simple, natural methods. 
                  Made from high-quality yak and cow milk, with just salt and lime, our chews are gently 
                  processed to create a long-lasting, protein-rich treat dogs love.
                </p>
                <p>
                  We focus on simple ingredients, honest sourcing, and consistent quality. No artificial additives. 
                  No unnecessary fillers. Just a naturally dense chew designed to keep dogs engaged while supporting 
                  everyday chewing needs.
                </p>
                <p>
                  Every chew is carefully selected and inspected to meet our standards for hardness, cleanliness, 
                  and safety. Because each chew is naturally made, no two pieces are exactly alike — a reminder 
                  that what you're giving your dog is real, not mass-manufactured.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800">100% Natural</h4>
                    <p className="text-sm text-stone-500">Simple ingredients</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mountain className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800">Himalayan</h4>
                    <p className="text-sm text-stone-500">Traditional recipe</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Banner */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Heart className="w-12 h-12 mx-auto mb-4" />
            <p className="text-2xl md:text-3xl font-semibold leading-relaxed">
              From energetic puppies to powerful chewers, our mission is simple: provide long-lasting, 
              natural chews that keep dogs happy and owners confident.
            </p>
            <p className="text-lg mt-6 text-emerald-100">
              Feed your dog treats that have been trusted for centuries… Human-grade chew.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History of Churpi */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
                Ancient Tradition
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">
                History of Churpi
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Himalayan Yak Chew, also known as <strong>"Churpi"</strong>, was historically consumed by 
                  mountain people, travellers, and shepherds as a high-protein snack, often used to keep teeth 
                  active and sustain energy during long and hard journeys through the mountains.
                </p>
                <p>
                  Even today, Churpi is consumed in Nepal as a snack or something to chew on. The original chew 
                  is native, rugged and natural — often given to dogs in the Himalayas for years before becoming 
                  a global pet product.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-3xl overflow-hidden h-[400px] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
                  alt="Himalayan mountains"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Pure & Simple
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">
              Just 3 Natural Ingredients
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Himalayan Yak Chew is made with 3 simple ingredients: milk, salt and lime.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Yak & Cow Milk', icon: '🥛', desc: 'High-grazing, grass-fed milk from the Himalayas' },
              { name: 'Natural Salt', icon: '🧂', desc: 'Himalayan rock salt for preservation' },
              { name: 'Lime Juice', icon: '🍋', desc: 'Natural curdling agent' }
            ].map((ingredient, idx) => (
              <motion.div
                key={ingredient.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-stone-50 rounded-2xl p-8 text-center"
              >
                <div className="text-5xl mb-4">{ingredient.icon}</div>
                <h3 className="text-xl font-semibold text-stone-800 mb-2">{ingredient.name}</h3>
                <p className="text-stone-600">{ingredient.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Method */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-stone-50 relative overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-20 opacity-5" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path fill="#1e3a5f" d="M0,0 L0,50 L120,40 L240,60 L360,30 L480,55 L600,25 L720,45 L840,15 L960,40 L1080,10 L1200,35 L1320,5 L1440,30 L1440,0 Z"/>
        </svg>
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
              Traditional Craft
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">
              Time-Honored Production Method
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
              The process involves curdling the milk from high-grazing cows and yak, separating the whey, 
              and pressing the curd into blocks which are then dried and smoked for up to 28 days.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">1️⃣</span>
              </div>
              <h3 className="text-xl font-semibold text-stone-800 mb-3">Gentle Curdling</h3>
              <p className="text-stone-600 leading-relaxed">
                Milk is gently curdled using a natural acidic agent (lime juice), preserving nutrients and flavor.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">2️⃣</span>
              </div>
              <h3 className="text-xl font-semibold text-stone-800 mb-3">Pressing & Shaping</h3>
              <p className="text-stone-600 leading-relaxed">
                Curds are pressed to remove whey, then shaped into pieces by hand using traditional methods.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">3️⃣</span>
              </div>
              <h3 className="text-xl font-semibold text-stone-800 mb-3">Slow Drying</h3>
              <p className="text-stone-600 leading-relaxed">
                Pieces are left to slowly dry and cure naturally over several weeks, building density.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">4️⃣</span>
              </div>
              <h3 className="text-xl font-semibold text-stone-800 mb-3">28-Day Cure</h3>
              <p className="text-stone-600 leading-relaxed">
                The long drying and curing period creates a dense, durable chew with high protein content and excellent chew life.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-lg">
              <Award className="w-6 h-6 text-amber-600" />
              <p className="text-stone-700 font-medium">
                Traditional, hands-on method passed down through generations
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-xl text-stone-600 leading-relaxed mb-6">
              Thank you for trusting Peak Paws to be part of your dog's daily routine.
            </p>
            <p className="text-2xl font-semibold text-stone-800">
              Every chew tells a story of tradition, quality, and care. 🏔️
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}