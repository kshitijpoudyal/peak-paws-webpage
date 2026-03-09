import React from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { ArrowRight, ShoppingBag, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

// Carousel slides data - replace src with your own images/videos
const heroSlides = [
  {
    id: 1,
    type: 'video',
    src: '/content/package-short.mov',
    alt: 'Happy dog with chew toy',
    speed: 1.25,
  },
  {
    id: 2,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=700&h=800&fit=crop',
    alt: 'Dog in the mountains',
  }
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-blue-50 to-orange-100">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-sky-300 to-blue-400 rounded-full blur-3xl opacity-20"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -90, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-br from-orange-300 to-amber-400 rounded-full blur-3xl opacity-20"
            />
          </div>
        </div>
      </div>

      {/* Mountain peaks SVG */}
      <div className="absolute bottom-0 left-0 w-full h-64 opacity-5">
        <svg viewBox="0 0 1440 400" className="w-full h-full" preserveAspectRatio="none">
          <path fill="#0c4a6e" d="M0,400 L0,200 L120,140 L240,220 L360,100 L480,180 L600,60 L720,140 L840,40 L960,120 L1080,20 L1200,100 L1320,10 L1440,80 L1440,400 Z"/>
          <path fill="#075985" d="M0,400 L0,250 L150,190 L300,270 L450,150 L600,230 L750,130 L900,210 L1050,110 L1200,190 L1350,90 L1440,150 L1440,400 Z"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-lg shadow-sky-900/10"
            >
              <Sparkles className="w-4 h-4 text-sky-600" />
              <span className="text-sm font-medium text-sky-900">🏔️ From the Himalayan Peaks</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              <span className="bg-gradient-to-r from-sky-700 via-blue-700 to-orange-600 bg-clip-text text-transparent">
                Pure Mountain
              </span>
              <br />
              <span className="text-slate-900">
                Chews for Happy Paws
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              Authentic Himalayan yak cheese chews crafted using ancient recipes. 
              100% natural, grain-free, and packed with protein for endless tail wags.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                asChild
                size="lg"
                className="bg-[#F9A93A] hover:bg-[#e89820] text-white rounded-full px-10 py-7 text-lg shadow-2xl shadow-amber-900/30 group"
              >
                <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                  <ShoppingBag className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Shop on Amazon
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-slate-300 bg-white/80 backdrop-blur text-slate-700 hover:bg-slate-50 rounded-full px-10 py-7 text-lg shadow-lg"
              >
                <a href="#products">
                  Explore Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
            
            <div className="flex items-center gap-8">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="w-12 h-12 rounded-full border-4 border-white bg-gradient-to-br from-orange-200 via-amber-300 to-orange-400 shadow-lg"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.svg
                      key={i}
                      initial={{ opacity: 0, rotate: -180 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      transition={{ delay: 0.8 + i * 0.05 }}
                      className="w-5 h-5 text-amber-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </motion.svg>
                  ))}
                </div>
                <p className="text-sm text-slate-500 font-medium">Trusted by dog parents</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Paw prints decoration */}
              <div className="absolute -top-10 -left-10 text-6xl opacity-20">
                🐾
                </div>
              <div className="absolute -bottom-10 -right-10 text-6xl opacity-20">
                🐾
              </div>
              
              {/* Hero Carousel */}
              <Carousel
                opts={{
                  loop: true,
                  align: 'center',
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-0">
                  {heroSlides.map((slide) => (
                    <CarouselItem key={slide.id} className="pl-0">
                      <div className="relative rounded-[4rem] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-orange-400/20 mix-blend-overlay z-10" />
                        {slide.type === 'video' ? (
                          <video
                          ref={(el) => {
                            if (el) el.playbackRate = slide.speed || 1;
                            }}
                            src={slide.src}
                            className="w-full h-[700px] object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                        ) : (
                          <img
                            src={slide.src}
                            alt={slide.alt}
                            className="w-full h-[700px] object-cover"
                          />
                        )}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:bg-white" />
                <CarouselNext className="right-4 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:bg-white" />
              </Carousel>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}