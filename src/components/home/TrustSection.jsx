import React from 'react';
import { motion } from 'framer-motion';
import { Check, Award } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import carouselImages from '@/data/customerImages.json';

const trustPoints = [
  "Sourced from free-range yaks in the Himalayas",
  "Traditional recipe passed down for generations",
  "Rigorous quality testing on every batch",
  "Loved by thousands of happy dogs",
  "100% satisfaction guarantee"
];

export default function TrustSection() {
  const [api, setApi] = React.useState();

  React.useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-32 bg-white overflow-hidden relative">
      {/* Decorative paw prints */}
      <div className="absolute top-10 right-10 text-9xl opacity-[0.02] rotate-12">🐾</div>
      <div className="absolute bottom-10 left-10 text-9xl opacity-[0.02] -rotate-12">🐾</div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full mb-6">
              <span className="text-xl">🇳🇵</span>
              <span className="text-sm font-semibold text-emerald-900">From the Himalayas of Nepal</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              <span className="text-slate-900">Why Pet Parents</span>
              <br />
              <span className="bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent">
                Trust Us
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Our chews are crafted using an ancient Himalayan recipe, combining yak and 
              cow milk to create a hard cheese that dogs absolutely love. No chemicals, 
              no shortcuts - just pure, natural goodness.
            </p>
            
            <div className="space-y-5">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-7 h-7 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-lg text-slate-700 font-medium">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Gradient glow */}
              <div className="absolute -inset-8 bg-gradient-to-br from-sky-400/30 via-blue-400/20 to-orange-400/30 rounded-[4rem] blur-3xl" />
              
              {/* Carousel */}
              <Carousel setApi={setApi} className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-900/20" opts={{ loop: true }}>
                <CarouselContent>
                  {carouselImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-600/10 to-orange-600/10 mix-blend-overlay" />
                        <img
                          src={image.url}
                          alt={image.alt}
                          className="w-full h-[600px] object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
            
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-3xl p-8 shadow-2xl shadow-slate-900/20 w-[90%] max-w-md border border-slate-100"
            >
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  {/* <p className="font-extrabold text-slate-900 text-3xl">10,000+</p> */}
                  <p className="text-slate-600 font-medium">Happy Customers</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}