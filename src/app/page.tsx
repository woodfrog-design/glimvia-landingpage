import Header from '@/app/components/header';
import Hero from '@/app/components/sections/hero';
import About from '@/app/components/sections/about';
import Features from '@/app/components/sections/features';
import Experience from '@/app/components/sections/experience';
import ComingSoon from '@/app/components/sections/coming-soon';
import Faq from '@/app/components/sections/faq';
import Download from '@/app/components/sections/download';
import Footer from '@/app/components/footer';
import { AnimatedSection } from './components/animated-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <AnimatedSection>
            <About />
        </AnimatedSection>
        <AnimatedSection>
            <Features />
        </AnimatedSection>
        <Experience />
        <AnimatedSection>
            <ComingSoon />
        </AnimatedSection>
        <AnimatedSection>
            <Faq />
        </AnimatedSection>
        <AnimatedSection>
            <Download />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
