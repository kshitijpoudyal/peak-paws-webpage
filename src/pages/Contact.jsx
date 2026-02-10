import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Sparkles } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "support@peakpawschew.com",
    subtext: "We'll respond within 24 hours",
    gradient: "from-sky-400 to-blue-500"
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "Mon - Fri: 9am - 5pm",
    subtext: "Eastern Standard Time (EST)",
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-sky-50/30 to-white">
        {/* Mountain backdrop */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="absolute bottom-0 w-full h-64" viewBox="0 0 1440 300" preserveAspectRatio="none">
            <path fill="#0c4a6e" d="M0,300 L0,150 L200,100 L400,170 L600,80 L800,150 L1000,60 L1200,130 L1440,70 L1440,300 Z"/>
            <path fill="#075985" d="M0,300 L0,200 L150,160 L300,220 L450,140 L600,200 L750,120 L900,180 L1050,100 L1200,160 L1350,80 L1440,140 L1440,300 Z" opacity="0.6"/>
          </svg>
        </div>

        {/* Floating mountains */}
        <div className="absolute top-20 right-10 text-7xl opacity-[0.03]">🏔️</div>
        <div className="absolute bottom-20 left-10 text-6xl opacity-[0.02]">⛰️</div>

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="text-sm font-bold text-sky-700 tracking-widest mb-4 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>GET IN TOUCH</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 leading-tight">
              Let's Talk<br />
              <span className="text-sky-600">About Your Pup</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
              Questions about our Himalayan chews? We're here to help you find the perfect treat for your furry friend.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-[0.08]">
          <img
            src="https://images.unsplash.com/photo-1534361960057-19889db9621e?w=1200&h=800&fit=crop"
            alt="Happy dog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-white/90" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Send Us a Message</h2>
              <ContactForm />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Info</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We're passionate about providing the best natural treats for dogs. Reach out anytime!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-700 font-medium">{item.description}</p>
                      <p className="text-sm text-slate-500">{item.subtext}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}