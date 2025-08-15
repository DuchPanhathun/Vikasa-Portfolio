"use client";

import {
  HeroSection,
  ServicesPreview,
  FeaturedCaseStudy,
  TestimonialsSection,
  LatestResourcesSection,
  TrustSignalsSection,
  SecondaryCTA
} from '@/components/home';

export default function Home() {
  return (
    <div className="font-montserrat">
      <HeroSection />
      {/* <KeyBenefitsBar /> */}
      <ServicesPreview />
      <FeaturedCaseStudy />
      <TestimonialsSection />
      <LatestResourcesSection />
      <TrustSignalsSection />
      <SecondaryCTA />
    </div>
  );
}
