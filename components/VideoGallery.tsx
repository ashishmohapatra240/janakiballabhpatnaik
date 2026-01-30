"use client";

import { FiPlay } from "react-icons/fi";

// Section Title Component
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
  title,
  description,
  videoId,
}: {
  title: string;
  description: string;
  videoId: string;
}) {
  return (
    <div className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300">
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

      {/* Content */}
      <div className="p-6 max-md:p-5">
        <h3 className="text-xl font-semibold text-[#272727] mb-3 max-md:text-lg">
          {title}
        </h3>
        
        <p className="text-neutral-600 text-sm leading-6 mb-4">
          {description}
        </p>

        <a
          href={`https://youtu.be/${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 font-medium transition-colors group"
        >
          <FiPlay className="text-lg group-hover:scale-110 transition-transform" />
          <span className="text-sm">Watch on YouTube</span>
        </a>
      </div>
    </div>
  );
}

export default function VideoGallery() {
  const videos = [
    {
      id: 1,
      title: "Life Story of Janaki Ballav Patnaik",
      description:
        "A comprehensive visual narrative tracing the personal journey, political rise, and public life of Janaki Ballav Patnaik.",
      videoId: "mw_N__jPW4w",
    },
    // Add more videos here as needed
  ];

  return (
    <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Video" highlight="Gallery" />

        <p className="text-center text-neutral-400 text-base mb-12 max-w-2xl mx-auto">
          Explore the life, legacy, and transformative contributions of Janaki Ballav Patnaik.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              description={video.description}
              videoId={video.videoId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
