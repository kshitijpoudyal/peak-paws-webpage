import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "hello@pawchews.com",
    subtext: "We'll respond within 24 hours"
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "Mon - Fri: 9am - 5pm",
    subtext: "Pacific Time (PT)"
  },
  {
    icon: MapPin,
    title: "Location",
    description: "United States",
    subtext: "Shipping nationwide"
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50 py-20 relative overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-full h-16 opacity-5" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path fill="#1e3a5f" d="M0,60 L0,40 L180,30 L360,50 L540,20 L720,40 L900,15 L1080,35 L1260,10 L1440,25 L1440,60 Z"/>
        </svg>
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
              We'd Love to Hear From You
            </h1>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Have a question about our products or need help with an order? 
              Drop us a message and we'll get back to you soon.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-stone-800 mb-4">
                  Contact Information
                </h2>
                <p className="text-stone-600">
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
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800">{item.title}</h3>
                      <p className="text-stone-700">{item.description}</p>
                      <p className="text-sm text-stone-500">{item.subtext}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Image */}
              <div className="hidden lg:block mt-8">
                <img
                  src="https://images.unsplash.com/photo-1534361960057-19889db9621e?w=400&h=300&fit=crop"
                  alt="Happy dog"
                  className="rounded-2xl"
                />
              </div>
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