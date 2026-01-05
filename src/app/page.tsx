import Hero from '@/components/home/Hero';
import TrustSection from '@/components/home/TrustSection';
import StatsSection from '@/components/home/StatsSection';
import ServicesSection from '@/components/home/ServicesSection';
import ExpertiseSection from '@/components/home/ExpertiseSection';
import TechnologiesSection from '@/components/home/TechnologiesSection';
import ProcessJourneySection from '@/components/home/ProcessJourneySection';
import WhyKalkiSection from '@/components/home/WhyKalkiSection';
import PhilosophySection from '@/components/home/PhilosophySection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <StatsSection />
      <ServicesSection />
      <ExpertiseSection />
      <TechnologiesSection />
      <ProcessJourneySection />
      <WhyKalkiSection />
      <PhilosophySection />
      <CTASection />
    </>
  );
}
