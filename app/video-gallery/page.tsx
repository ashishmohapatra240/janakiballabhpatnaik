"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FiPlay } from "react-icons/fi";

// Reusable Section Title Component
function SectionTitle({
  title,
  highlight,
}: {
  title: string;
  highlight?: string;
}) {
  return (
    <div className="flex items-center justify-center gap-5 mb-12 max-md:mb-8">
      <div className="w-96 h-px bg-gradient-to-r from-transparent via-stone-300 to-stone-300 max-lg:w-24 max-md:hidden"></div>
      <h2 className="text-4xl font-bold text-sky-500 px-5 whitespace-nowrap max-md:text-2xl max-md:whitespace-normal text-center leading-[54px]">
        {highlight ? (
          <>
            {title} <span className="text-[#272727]">{highlight}</span>
          </>
        ) : (
          title
        )}
      </h2>
      <div className="w-96 h-px bg-gradient-to-l from-transparent via-stone-300 to-stone-300 max-lg:w-24 max-md:hidden"></div>
    </div>
  );
}

// Video Card Component
function VideoCard({
  number,
  title,
  description,
  videoId,
}: {
  number: number;
  title: string;
  description: string;
  videoId: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Video Header */}
      <div className="p-8 pb-4 max-md:p-6 max-md:pb-3">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-2xl font-semibold text-[#272727] flex-1 max-md:text-xl">
            <span className="text-sky-500">{number}. </span>
            {title}
          </h3>
        </div>
        
        <a
          href={`https://youtu.be/${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 font-medium transition-colors group"
        >
          <FiPlay className="text-xl group-hover:scale-110 transition-transform" />
          <span>Watch Now</span>
        </a>
      </div>

      {/* Video Embed */}
      <div className="relative w-full aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>

      {/* Description */}
      <div className="p-8 pt-6 max-md:p-6 max-md:pt-4">
        <p className="text-neutral-600 text-base leading-7">
          <span className="font-semibold text-[#272727]">Description: </span>
          {description}
        </p>
      </div>
    </div>
  );
}

export default function VideoGalleryPage() {
  const videos = [
    {
      id: 1,
      title: "Life Story of Janaki Ballav Patnaik",
      description:
        "A comprehensive visual narrative tracing the personal journey, political rise, and public life of Janaki Ballav Patnaik, from his early years to his emergence as one of Odisha's most influential leaders.",
      videoId: "mw_N__jPW4w",
    },
    // {
    //   id: 2,
    //   title: "Janaki Ballav Patnaik and the Making of Modern Odisha",
    //   description:
    //     "An in-depth exploration of Janaki Ballav Patnaik's role in shaping modern Odisha, covering industrialisation, governance reforms, institutional development, and long-term state-building initiatives.",
    //   videoId: "mw_N__jPW4w", // Replace with actual video ID when available
    // },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8 max-md:pt-24">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="VIDEO GALLERY" />
          
          <p className="text-center text-neutral-400 text-lg mb-16 max-w-3xl mx-auto max-md:text-base max-md:mb-12">
            Explore the life, legacy, and transformative contributions of Janaki Ballav Patnaik through our curated video collection.
          </p>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="pb-20 px-6 lg:px-8 max-md:pb-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              number={video.id}
              title={video.title}
              description={video.description}
              videoId={video.videoId}
            />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 lg:px-8 bg-sky-500">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4 max-md:text-2xl">
            Explore More About JBP's Legacy
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Discover the contributions, journey, and lasting impact of Janaki Ballav
            Patnaik - the visionary leader who shaped modern Odisha.
          </p>
          <div className="flex gap-4 justify-center max-md:flex-col max-md:items-center">
            <a
              href="/contributions"
              className="h-11 px-6 bg-white text-sky-500 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center font-medium"
            >
              View Contributions
            </a>
            <a
              href="/legacy"
              className="h-11 px-6 bg-transparent border border-white text-white rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center font-medium"
            >
              Explore Life & Legacy
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
