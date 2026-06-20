import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import Authority from '@/components/sections/Authority';
import PainSection from '@/components/sections/PainSection';
import SolutionSection from '@/components/sections/SolutionSection';
import MetricsBar from '@/components/sections/MetricsBar';
import ClientLogos from '@/components/sections/ClientLogos';
import ServicesSection from '@/components/sections/ServicesSection';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';
import CookieBanner from '@/components/CookieBanner';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <AnimatedSection>
        <Authority />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <PainSection />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <SolutionSection />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <MetricsBar />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <ClientLogos />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <ServicesSection />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <Pricing />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <FAQ />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <CTASection />
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <Footer />
      </AnimatedSection>
      <CookieBanner />
    </main>
  );
}
