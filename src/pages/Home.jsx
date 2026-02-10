import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import TrustSection from '@/components/home/TrustSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BenefitsSection />
      <TrustSection />
    </div>
  );
}