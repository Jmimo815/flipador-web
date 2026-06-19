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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Authority />
      <PainSection />
      <SolutionSection />
      <MetricsBar />
      <ClientLogos />
      <ServicesSection />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTASection />
      <Footer />
      <CookieBanner />
    </main>
  );
}
