import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import JourneySection from '@/components/JourneySection';
import ContributionsSection from '@/components/ContributionsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <JourneySection />
      <ContributionsSection />
      <Footer />
    </main>
  );
}
