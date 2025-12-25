import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import JourneySection from '@/components/JourneySection';
import ContributionsSection from '@/components/ContributionsSection';
import VisualGallery from '@/components/VisualGallery';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <JourneySection />
      {/* <ContributionsSection /> */}
      <VisualGallery />
      <Footer />
    </main>
  );
}
