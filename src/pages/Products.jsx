import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import ProductCard from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { Loader2, ShoppingBag, ExternalLink, Leaf, Shield, Clock } from 'lucide-react';
import productsData from '@/data/products.json';

export default function Products() {
    const products = productsData;
    const isLoading = false;

    const features = [
        { icon: Leaf, label: '100% Natural' },
        { icon: Shield, label: 'Grain-Free' },
        { icon: Clock, label: 'Long Lasting' }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Minimal Hero */}
            <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-sky-50/30 to-orange-50/20">
                {/* Subtle mountain silhouette */}
                <div className="absolute bottom-0 left-0 w-full opacity-[0.03]">
                    <svg className="w-full h-48" viewBox="0 0 1440 200" preserveAspectRatio="none">
                        <path fill="#0c4a6e" d="M0,200 L0,80 L240,40 L480,100 L720,20 L960,80 L1200,30 L1440,70 L1440,200 Z" />
                    </svg>
                </div>

                <div className="container mx-auto px-6 lg:px-12 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <div className="text-sm font-bold text-sky-700 tracking-widest mb-4 flex items-center gap-2">
                            <span>🏔️</span>
                            <span>PEAK PAWS COLLECTION</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 leading-tight">
                            Naturally<br />
                            <span className="text-sky-600">Irresistible</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
                            Premium yak cheese chews handcrafted in Nepal using centuries-old traditions
                        </p>
                        <div className="flex flex-wrap gap-6">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + idx * 0.1 }}
                                    className="flex items-center gap-2 text-slate-700"
                                >
                                    <feature.icon className="w-5 h-5 text-sky-600" strokeWidth={2} />
                                    <span className="font-medium text-sm">{feature.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Products Grid - Clean & Spacious */}
            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-6 lg:px-12">
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-32">
                            <Loader2 className="w-12 h-12 animate-spin text-sky-600 mb-4" />
                            <p className="text-slate-500">Loading products...</p>
                        </div>
                    ) : products.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="max-w-xl mx-auto text-center py-20"
                        >
                            <div className="text-8xl mb-6">🦴</div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-3">
                                Coming Soon
                            </h3>
                            <p className="text-lg text-slate-600 mb-8">
                                Our product catalog is being prepared. Check our Amazon store in the meantime!
                            </p>
                            <Button
                                asChild
                                size="lg"
                                className="bg-[#F9A93A] hover:bg-[#e89820] text-white rounded-full px-8"
                            >
                                <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                                    <ShoppingBag className="w-5 h-5 mr-2" />
                                    Visit Amazon Store
                                </a>
                            </Button>
                        </motion.div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 max-w-7xl mx-auto">
                            {products.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group"
                                >
                                    {/* Product Image */}
                                    <div className="aspect-square mb-6 overflow-hidden relative">
                                        <motion.img
                                            whileHover={{ scale: 1.05, rotate: -2 }}
                                            transition={{ duration: 0.4 }}
                                            src={product.image_url}
                                            alt={product.name}
                                            className="w-full h-full object-contain drop-shadow-xl"
                                        />
                                    </div>

                                    {/* Product Info */}
                                    <div className="space-y-4 text-center">
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">
                                                {product.name}
                                            </h3>
                                            {product.description && (
                                                <p className="text-slate-600 leading-relaxed line-clamp-2">
                                                    {product.description}
                                                </p>
                                            )}
                                        </div>

                                        <Button
                                            asChild
                                            variant="outline"
                                            size="lg"
                                            className="w-full border-2 border-slate-300 bg-white/80 backdrop-blur text-slate-700 hover:bg-slate-50 rounded-full px-6 py-7 text-lg shadow-lg"
                                        >
                                            <a
                                                href={product.amazon_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Shop Now
                                                <ExternalLink className="w-4 h-4 ml-2" />
                                            </a>
                                        </Button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}