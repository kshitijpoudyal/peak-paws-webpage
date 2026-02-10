import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Sparkles } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "hello@peakpaws.com",
    subtext: "We'll respond within 24 hours",
    gradient: "from-sky-400 to-blue-500"
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "Mon - Fri: 9am - 5pm",
    subtext: "Pacific Time (PT)",
    gradient: "from-emerald-400 to-teal-500"
  },
  {
    icon: MapPin,
    title: "Location",
    description: "United States",
    subtext: "Shipping nationwide",
    gradient: "from-orange-400 to-amber-500"
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-orange-50">
      {/* Header */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-10 right-10 text-9xl rotate-12">🐾</div>
          <div className="absolute bottom-10 left-10 text-9xl -rotate-12">🐾</div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 backdrop-blur rounded-full mb-8 shadow-lg">
              <Sparkles className="w-4 h-4 text-sky-600" />
              <span className="text-sm font-semibold text-sky-900">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent">
                We'd Love to
              </span>
              <br />
              <span className="text-slate-900">Hear From You</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Have a question about our products or need help with an order? 
              Drop us a message and we'll get back to you soon.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Contact Information
                </h2>
                <p className="text-lg text-slate-600">
                  Reach out to us through the form or contact us directly. 
                  We're here to help!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="flex gap-5 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <item.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h3>
                      <p className="text-slate-700 font-medium">{item.description}</p>
                      <p className="text-sm text-slate-500 mt-1">{item.subtext}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="hidden lg:block"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-600/10 to-orange-600/10 mix-blend-overlay" />
                  <img
                    src="https://images.unsplash.com/photo-1534361960057-19889db9621e?w=500&h=350&fit=crop"
                    alt="Happy dog"
                    className="w-full h-[350px] object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}