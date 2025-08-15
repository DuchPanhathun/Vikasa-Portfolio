'use client'

import {
  HeroSection,
  ResourceNavigation,
  BlogArticlesSection,
  WhitePapersSection,
  FooterCTA
} from '@/components/resource'

export default function Resources() {
  return (
    <main className="font-montserrat">
      <HeroSection />
      <ResourceNavigation />
      <BlogArticlesSection />
      <WhitePapersSection />
      <FooterCTA />
    </main>
  )
}
