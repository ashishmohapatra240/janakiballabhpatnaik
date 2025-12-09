"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FiBookOpen, FiHeart, FiUsers } from "react-icons/fi";

// Reusable Section Title Component
function SectionTitle({ title, highlight }: { title: string; highlight?: string }) {
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

// Image with fallback placeholder
function ImageWithFallback({ 
  src, 
  alt, 
  className = "",
  fill = false,
  width,
  height
}: { 
  src: string; 
  alt: string; 
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}) {
  return (
    <div className={`relative ${fill ? "w-full h-full" : ""} bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center overflow-hidden`}>
      <span className="text-gray-500 absolute z-0">Image</span>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        className={`object-cover z-10 ${className}`}
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}

const politicalMilestones = [
  { year: "1950", event: "Became President of Odisha State Youth Congress" },
  { year: "1957", event: "First elected to Odisha Legislative Assembly" },
  { year: "1961", event: "Elected to Lok Sabha (Parliament)" },
  { year: "1971", event: "Re-elected to Lok Sabha with impressive mandate" },
  { year: "1980", event: "Became Chief Minister of Odisha" },
];

const personalHighlights = [
  {
    title: "Writer & Intellectual",
    description: "Translated epics to Odia and championed literature & journalism.",
    icon: FiBookOpen,
  },
  {
    title: "Gandhian Values",
    description: "Lived truth, non-violence, and service as guiding principles.",
    icon: FiHeart,
  },
  {
    title: "Service to People",
    description: "Centred policies on upliftment, education, and welfare.",
    icon: FiUsers,
  },
];

const legacyHighlights = [
  {
    title: "Infrastructure Development",
    description:
      "Transformed Odisha's infrastructure with roads, bridges, and urban development projects",
    image: "/images/contributions/1.png",
  },
  {
    title: "Educational Institutions",
    description:
      "Established numerous schools, colleges, and universities across the state",
    image: "/images/contributions/2.png",
  },
  {
    title: "Industrial Growth",
    description:
      "Attracted major industries and laid the foundation for Odisha's industrial corridor",
    image: "/images/contributions/3.png",
  },
  {
    title: "Social Welfare",
    description:
      "Implemented programs for the welfare of marginalized communities and tribal populations",
    image: "/images/contributions/4.png",
  },
  {
    title: "Cultural Preservation",
    description:
      "Championed Odia language, culture, and heritage throughout his career",
    image: "/images/contributions/5.png",
  },
  {
    title: "Political Mentorship",
    description:
      "Mentored numerous leaders who continue to serve in various capacities",
    image: "/images/contributions/6.png",
  },
];

export default function LegacyPage() {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeItems = [...politicalMilestones, ...politicalMilestones];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-12 max-lg:flex-col max-lg:items-center">
            <div className="flex-1 space-y-6 max-lg:text-center max-lg:w-full">
              <h1 className="text-5xl text-[#272727] leading-[64px] max-md:text-3xl">
                <span className="font-semibold">
                  Life & Legacy of
                  <br />
                </span>
                <span className="font-normal">
                  Janaki Ballav Patnaik
                </span>
              </h1>

              <p className="max-w-[584px] text-neutral-400 text-base font-normal leading-6 max-lg:max-w-full">
                Janaki Ballabh Patnaik (3 January 1927 – 21 April 2015) was one of the most influential 
                political figures in the history of Odisha. His journey from a small village in Ganjam 
                to becoming the longest-serving Chief Minister of Odisha is a testament to his dedication, 
                vision, and unwavering commitment to public service.
              </p>

              {/* <div className="flex gap-4 max-lg:justify-center">
                <button className="h-11 px-6 bg-sky-500 rounded-lg cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center whitespace-nowrap">
                  <span className="text-white text-base font-normal capitalize leading-5">
                    Explore His Journey
                  </span>
                </button>
                <button className="h-11 px-6 border border-sky-500 text-sky-500 rounded-lg cursor-pointer hover:bg-sky-50 transition-colors flex items-center justify-center whitespace-nowrap">
                  <span className="text-base font-normal capitalize leading-5">
                    View Timeline
                  </span>
                </button>
              </div> */}
            </div>

            <div className="flex-shrink-0 max-lg:w-full">
              <div className="relative w-[456px] h-[500px] max-lg:w-full max-lg:h-[400px]">
                <ImageWithFallback
                  src="/images/contributions/5.png"
                  alt="Janaki Ballav Patnaik Portrait"
                  fill
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Life Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Early Life" highlight="& Education" />
          
          <div className="flex items-center gap-12 max-lg:flex-col">
            <div className="flex-shrink-0 max-lg:w-full">
              <div className="relative w-[400px] h-[350px] max-lg:w-full max-lg:h-[300px]">
                <ImageWithFallback
                  src="/images/contributions/3.png"
                  alt="JBP Early Life"
                  fill
                  className="rounded-lg"
                />
              </div>
            </div>
            
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-semibold text-[#272727]">A Humble Beginning in Rameswar</h3>
              <p className="text-neutral-400 text-base leading-7">
                Janaki Ballabh Patnaik was born on January 3, 1927, in Rameswar village, Ganjam district, 
                Odisha. Born into a family with modest means but rich values, young Janaki showed 
                exceptional intelligence and a keen interest in public affairs from an early age.
              </p>
              <p className="text-neutral-400 text-base leading-7">
                He completed his early education in local schools before pursuing higher studies. 
                His academic brilliance was evident as he excelled in his studies while simultaneously 
                developing a deep understanding of the socio-political landscape of pre-independence India.
              </p>
              <p className="text-neutral-400 text-base leading-7">
                The influence of the freedom movement and the teachings of Mahatma Gandhi profoundly 
                shaped his worldview and instilled in him a lifelong commitment to serving the people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Political Journey Section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Political" highlight="Journey" />
          
          <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1">
            <div className="space-y-6">
              <div className="relative w-full h-[300px]">
                <ImageWithFallback
                  src="/images/contributions/2.png"
                  alt="JBP Political Journey"
                  fill
                  className="rounded-lg"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-[#272727]">Rise in Indian Politics</h3>
                <p className="text-neutral-400 text-base leading-7">
                  J.B. Patnaik's political career began during India's freedom struggle. At 19, he actively 
                  participated in the Quit India Movement of 1946, which marked the beginning of his 
                  illustrious political journey.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Top-to-down marquee timeline */}
              <div
                className="relative h-[360px] overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm"
            
                tabIndex={0}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent" />

                <div
                  className="flex flex-col gap-3 animate-marquee-vertical"
                  style={{
                    animationDuration: "18s",
                    animationPlayState: isPaused ? "paused" : "running",
                  }}
                >
                  {marqueeItems.map((milestone, index) => (
                    <div
                      key={`${milestone.year}-${index}`}
                      className="flex items-start gap-4 p-4 rounded-lg border border-slate-100 bg-slate-50/70 hover:bg-white transition-colors"
                    >
                      <span className="text-lg font-bold text-sky-600 whitespace-nowrap">
                        {milestone.year}
                      </span>
                      <p className="text-neutral-700 text-base leading-6">{milestone.event}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chief Ministership Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Chief Minister" highlight="of Odisha" />
          
          <div className="flex items-start gap-12 max-lg:flex-col-reverse">
            <div className="flex-1 space-y-6">
              <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <h4 className="text-sky-500 text-3xl font-bold mb-2">1980-1989</h4>
                  <p className="text-[#272727] font-semibold">First Tenure</p>
                  <p className="text-neutral-400 text-sm mt-2">Nine consecutive years of transformative leadership</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <h4 className="text-sky-500 text-3xl font-bold mb-2">1995-1999</h4>
                  <p className="text-[#272727] font-semibold">Second Tenure</p>
                  <p className="text-neutral-400 text-sm mt-2">Continued vision for modern Odisha</p>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-[#272727]">Architect of Modern Odisha</h3>
              <p className="text-neutral-400 text-base leading-7">
                As Chief Minister, J.B. Patnaik transformed Odisha from a primarily agrarian state 
                into one with growing industrial potential. His tenure saw massive investments in 
                infrastructure, education, and healthcare.
              </p>
              <p className="text-neutral-400 text-base leading-7">
                Key achievements during his tenure included the establishment of numerous educational 
                institutions, expansion of road networks, promotion of industries, and significant 
                improvements in rural development programs.
              </p>
              <p className="text-neutral-400 text-base leading-7">
                His cumulative tenure of over 13 years remains one of the longest in Odisha's history, 
                a testament to the trust people placed in his leadership.
              </p>
            </div>
            
            <div className="flex-shrink-0 max-lg:w-full">
              <div className="relative w-[450px] h-[400px] max-lg:w-full max-lg:h-[350px]">
                <ImageWithFallback
                  src="/images/contributions/3.png"
                  alt="JBP as Chief Minister"
                  fill
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governorship Section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Governor" highlight="of Assam" />
          
          <div className="flex items-center gap-12 max-lg:flex-col">
            <div className="flex-shrink-0 max-lg:w-full">
              <div className="relative w-[400px] h-[350px] max-lg:w-full max-lg:h-[300px]">
                <ImageWithFallback
                  src="/images/contributions/4.png"
                  alt="JBP as Governor of Assam"
                  fill
                  className="rounded-lg"
                />
              </div>
            </div>
            
            <div className="flex-1 space-y-4">
              <div className="inline-block px-4 py-2 bg-sky-100 text-sky-600 rounded-full text-sm font-medium mb-2">
                2009 - 2014
              </div>
              <h3 className="text-2xl font-semibold text-[#272727]">25th Governor of Assam</h3>
              <p className="text-neutral-400 text-base leading-7">
                In 2009, recognizing his vast experience and statesmanship, J.B. Patnaik was appointed 
                as the 25th Governor of Assam. This prestigious constitutional position marked the 
                culmination of his illustrious political career.
              </p>
              <p className="text-neutral-400 text-base leading-7">
                As Governor, he worked tirelessly to promote harmony and development in the 
                northeastern state. His tenure was marked by his efforts to bridge communities, 
                support educational initiatives, and maintain constitutional propriety.
              </p>
              <p className="text-neutral-400 text-base leading-7">
                He completed his five-year term in 2014, earning praise from across the political 
                spectrum for his impartial governance and commitment to constitutional duties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Life Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Personal Life" highlight="& Values" />
          
          <div className="flex items-start gap-12 max-lg:flex-col-reverse">
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-semibold text-[#272727]">A Man of Principles</h3>
              <p className="text-neutral-400 text-base leading-7">
                Beyond his political achievements, J.B. Patnaik was known for his simple lifestyle, 
                intellectual pursuits, and deep commitment to Odia culture and literature. He was 
                a prolific writer and contributed significantly to Odia journalism and literature.
              </p>
              <p className="text-neutral-400 text-base leading-7">
                His personal philosophy was deeply influenced by Gandhian principles of truth, 
                non-violence, and service to humanity. He believed that politics should be a medium 
                for social transformation and upliftment of the marginalized.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mt-6 max-md:grid-cols-1">
                {personalHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-50 text-sky-600 ring-1 ring-sky-100 transition group-hover:ring-sky-200">
                          <item.icon className="text-2xl" />
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-[#272727]">{item.title}</h4>
                      <p className="text-sm text-neutral-500 leading-6">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-shrink-0 max-lg:w-full">
              <div className="relative w-[400px] h-[350px] max-lg:w-full max-lg:h-[300px]">
                <ImageWithFallback
                  src="/images/contributions/5.png"
                  alt="JBP Personal Life"
                  fill
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy & Impact Section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Lasting" highlight="Legacy" />
          
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-neutral-400 text-lg leading-8">
              Janaki Ballabh Patnaik passed away on April 21, 2015, in Bhubaneswar, leaving behind 
              a legacy that continues to inspire generations of politicians and public servants.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            {legacyHighlights.map((item, index) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    fill
                    className="rounded-none group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <h4 className="text-xl font-semibold text-[#272727]">{item.title}</h4>
                  <p className="text-neutral-500 text-base leading-6">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      <Footer />
      <style jsx global>{`
        @keyframes marquee-vertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-marquee-vertical {
          animation: marquee-vertical linear infinite;
        }
      `}</style>
    </main>
  );
}
