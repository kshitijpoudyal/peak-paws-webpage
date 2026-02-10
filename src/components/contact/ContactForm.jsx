import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    //TODO call backend API to send email
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[2.5rem] p-16 text-center shadow-xl border border-emerald-100"
      >
        <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
          <CheckCircle className="w-10 h-10 text-white" strokeWidth={2.5} />
        </div>
        <h3 className="text-3xl font-extrabold text-slate-900 mb-4">
          Message Sent!
        </h3>
        <p className="text-lg text-slate-600 mb-8">
          Thank you for reaching out. We'll get back to you within 24-48 hours.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          className="bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white rounded-full px-8 py-6 shadow-lg"
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-xl border border-slate-100"
    >
      <div className="space-y-7">
        <div>
          <Label htmlFor="name" className="text-slate-700 font-semibold text-lg mb-3 block">
            Your Name
          </Label>
          <Input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="rounded-2xl border-2 border-slate-200 focus:border-sky-500 focus:ring-sky-500 py-6 px-5 text-lg"
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <Label htmlFor="email" className="text-slate-700 font-semibold text-lg mb-3 block">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="rounded-2xl border-2 border-slate-200 focus:border-sky-500 focus:ring-sky-500 py-6 px-5 text-lg"
            placeholder="john@example.com"
          />
        </div>
        
        <div>
          <Label htmlFor="message" className="text-slate-700 font-semibold text-lg mb-3 block">
            Your Message
          </Label>
          <Textarea
            id="message"
            required
            rows={6}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="rounded-2xl border-2 border-slate-200 focus:border-sky-500 focus:ring-sky-500 resize-none p-5 text-lg"
            placeholder="How can we help you?"
          />
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white rounded-2xl py-7 text-lg font-bold shadow-xl shadow-sky-900/20"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </div>
    </motion.form>
  );
}