import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import JourneySection from '@/components/JourneySection';
import ContributionsSection from '@/components/ContributionsSection';
import VideoGallery from '@/components/VideoGallery';
import VisualGallery from '@/components/VisualGallery';
import VideoPopup from '@/components/VideoPopup';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <JourneySection />
      {/* <ContributionsSection /> */}
      <VideoGallery />
      <VisualGallery />
      <Footer />
      <VideoPopup />
    </main>
  );
}
