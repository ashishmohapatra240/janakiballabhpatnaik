"use client";

import { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  images: string[];
  isCurrentYear?: boolean;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: 1927,
    title: "Birth of a Visionary",
    description:
      "Janaki Ballabh Patnaik was born on January 3, 1927, in Rameswar village, Ganjam district, Odisha. Born into a modest family, young Janaki showed exceptional intelligence and leadership qualities from an early age. His birthplace would later become a pilgrimage for his followers and admirers.",
    images: [
      "images/contributions/1.png",
      "images/contributions/2.png",
      "images/contributions/3.png",
    ],
  },
  {
    year: 1946,
    title: "Freedom Fighter",
    description:
      "At the age of 19, J.B. Patnaik actively participated in India's freedom struggle. He joined the Quit India Movement and was deeply influenced by Mahatma Gandhi's principles of non-violence and civil disobedience. This period shaped his political ideology and commitment to public service.",
    images: [
      "images/contributions/4.png",
      "images/contributions/5.png",
      "images/contributions/6.png",
    ],
  },
  {
    year: 1950,
    title: "Youth Congress Leader",
    description:
      "J.B. Patnaik became the President of the Odisha state unit of the youth wing of the Indian National Congress. This marked his formal entry into organized politics. His charismatic leadership and organizational skills quickly made him a prominent figure in Odisha's political landscape.",
    images: [
      "images/contributions/1.png",
      "images/contributions/2.png",
      "images/contributions/3.png",
    ],
  },
  {
    year: 1957,
    title: "Legislative Assembly Entry",
    description:
      "Elected to the Odisha Legislative Assembly for the first time, J.B. Patnaik began his illustrious career as a lawmaker. He represented his constituency with dedication and soon became known for his powerful oratory and deep understanding of governance.",
    images: [
      "images/contributions/4.png",
      "images/contributions/5.png",
      "images/contributions/6.png",
    ],
  },
  {
    year: 1961,
    title: "Parliament Debut",
    description:
      "J.B. Patnaik was elected to the Lok Sabha (House of the People), marking his entry into national politics. His eloquent speeches and sharp political acumen drew attention from senior Congress leaders, establishing him as a rising star in Indian politics.",
    images: [
      "images/contributions/1.png",
      "images/contributions/2.png",
      "images/contributions/3.png",
    ],
  },
  {
    year: 1971,
    title: "Re-elected to Lok Sabha",
    description:
      "Re-elected to the Lok Sabha with an impressive mandate, J.B. Patnaik consolidated his position in national politics. During this term, he worked closely with Prime Minister Indira Gandhi and played a key role in Congress party's organizational matters.",
    images: [
      "images/contributions/4.png",
      "images/contributions/5.png",
      "images/contributions/6.png",
    ],
  },
  {
    year: 1985,
    title: "Continued Leadership",
    description:
      "Re-elected as Chief Minister, J.B. Patnaik focused on industrial development, infrastructure, and education. He initiated several flagship programs that transformed rural Odisha. His administrative acumen earned him respect across the political spectrum.",
    images: [
      "images/contributions/1.png",
      "images/contributions/2.png",
      "images/contributions/3.png",
    ],
  },
  {
    year: 1989,
    title: "End of First Era",
    description:
      "After nearly a decade of continuous leadership, J.B. Patnaik's first tenure as Chief Minister concluded. His nine-year stint had established him as one of the most influential political figures in Odisha's history, leaving behind a legacy of development and progress.",
    images: [
      "images/contributions/4.png",
      "images/contributions/5.png",
      "images/contributions/6.png",
    ],
  },
  {
    year: 1995,
    title: "Return to Power",
    description:
      "J.B. Patnaik made a triumphant return as Chief Minister of Odisha. His second innings focused on economic reforms, social welfare programs, and strengthening the state's infrastructure. He remained committed to his vision of a prosperous Odisha.",
    images: [
      "images/contributions/1.png",
      "images/contributions/2.png",
      "images/contributions/3.png",
    ],
  },
  {
    year: 1999,
    title: "Transition of Leadership",
    description:
      "J.B. Patnaik's term as Chief Minister ended, marking the conclusion of his executive leadership in Odisha. His cumulative tenure of over 13 years remains the longest in Odisha's history until surpassed by Naveen Patnaik. He continued to mentor young leaders and guide the party.",
    images: [
      "images/contributions/4.png",
      "images/contributions/5.png",
      "images/contributions/6.png",
    ],
  },
  {
    year: 2009,
    title: "Governor of Assam",
    description:
      "J.B. Patnaik was appointed as the 25th Governor of Assam, a prestigious constitutional position. This appointment recognized his vast experience and statesmanship. As Governor, he worked to promote harmony and development in the northeastern state.",
    images: [
      "images/contributions/1.png",
      "images/contributions/2.png",
      "images/contributions/3.png",
    ],
  },
  {
    year: 2014,
    title: "Completion of Gubernatorial Term",
    description:
      "After five years of distinguished service as Governor of Assam, J.B. Patnaik completed his term. He was lauded for his impartial governance, commitment to constitutional duties, and efforts in promoting cultural harmony in the diverse northeastern region.",
    images: [
      "images/contributions/1.png",
      "images/contributions/2.png",
      "images/contributions/3.png",
    ],
  },
  {
    year: 2015,
    title: "A Legend Departs",
    description:
      "On April 21, 2015, Janaki Ballabh Patnaik passed away in Bhubaneswar at the age of 88. The nation mourned the loss of a visionary leader. His legacy of development, his commitment to Odisha's progress, and his exemplary public service continue to inspire generations.",
    images: [
      "images/contributions/4.png",
      "images/contributions/5.png",
      "images/contributions/6.png",
    ],
  },
  {
    year: 2025,
    title: "Living Legacy",
    description:
      "A decade after his passing, J.B. Patnaik's legacy lives on through the institutions he built, the leaders he mentored, and the development he initiated. His birthday is commemorated annually, and his contributions to Odisha's growth remain a benchmark for public service.",
    images: [
      "images/contributions/1.png",
      "images/contributions/2.png",
      "images/contributions/3.png",
    ],
    isCurrentYear: true,
  },
];

export default function JourneySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const timelineRef = useRef<HTMLDivElement>(null);

  const currentEvent = timelineEvents[currentIndex];
  const currentYear = 2025;

  const navigateTo = (index: number, dir: "left" | "right") => {
    if (isAnimating || index === currentIndex) return;
    if (index < 0 || index >= timelineEvents.length) return;

    setDirection(dir);
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  };

  const goToStart = () => navigateTo(0, "left");
  const goToPrevious = () => navigateTo(currentIndex - 1, "left");
  const goToNext = () => navigateTo(currentIndex + 1, "right");
  const goToEnd = () => navigateTo(timelineEvents.length - 1, "right");

  // Calculate visible years for the timeline strip
  const getVisibleYears = () => {
    const visible: { year: number; index: number; position: number }[] = [];
    const range = 3; // Show 3 years on each side

    for (let i = -range; i <= range; i++) {
      const idx = currentIndex + i;
      if (idx >= 0 && idx < timelineEvents.length) {
        visible.push({
          year: timelineEvents[idx].year,
          index: idx,
          position: i,
        });
      }
    }
    return visible;
  };

  const visibleYears = getVisibleYears();

  return (
    <section
      id="journey"
      className="w-full min-h-screen py-16 relative overflow-hidden bg-gradient-to-b from-slate-50 to-white"
      style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex items-center justify-center gap-5 mb-16 max-md:mb-12">
          <div className="w-96 h-px bg-gradient-to-r from-transparent via-stone-300 to-stone-300 max-lg:w-full"></div>
          <h2 className="text-4xl font-bold text-sky-500 px-5 whitespace-nowrap max-md:text-2xl max-md:whitespace-normal text-center leading-[54px]">
            The Journey of the Legend
          </h2>
          <div className="w-96 h-px bg-gradient-to-l from-transparent via-stone-300 to-stone-300 max-lg:w-full"></div>
        </div>

        <div
          className={`flex items-start justify-between gap-12 max-lg:flex-col mb-16 transition-all duration-500 ease-out transform
            ${
              isAnimating
                ? direction === "right"
                  ? "-translate-x-8 opacity-0"
                  : "translate-x-8 opacity-0"
                : "translate-x-0 opacity-100"
            }`}
        >
          <div className="relative w-[600px] h-[500px] max-lg:w-full max-lg:h-[400px] flex-shrink-0">
            <div
              className="absolute top-0 left-[100px] w-96 h-56 transform -rotate-[5.87deg] border-[6px] border-white rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-10 max-lg:w-64 max-lg:h-40 max-lg:left-4 transition-all duration-700 ease-out hover:scale-105 hover:z-40"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="w-full h-full bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={currentEvent.images[0]}
                  alt={`${currentEvent.title} - 1`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>

            <div
              className="absolute top-[200px] left-0 w-72 h-60 transform -rotate-[3.29deg] border-[6px] border-white rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-20 max-lg:w-48 max-lg:h-40 max-lg:top-[150px] transition-all duration-700 ease-out hover:scale-105 hover:z-40"
              style={{ transitionDelay: "200ms" }}
            >
              <div className="w-full h-full bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src={currentEvent.images[1]}
                  alt={`${currentEvent.title} - 2`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>

            <div
              className="absolute top-[120px] right-[50px] w-52 h-80 transform rotate-3 border-[6px] border-white rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-30 max-lg:w-40 max-lg:h-56 max-lg:right-0 max-lg:top-[50px] transition-all duration-700 ease-out hover:scale-105 hover:z-40"
              style={{ transitionDelay: "300ms" }}
            >
              <div className="w-full h-full bg-gray-400 rounded-lg overflow-hidden">
                <img
                  src={currentEvent.images[2]}
                  alt={`${currentEvent.title} - 3`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>

            <div className="absolute -top-4 -left-4 bg-sky-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg z-50">
              {currentEvent.year}
            </div>
          </div>

          <div className="flex-1 max-w-[584px]">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-6xl font-bold text-sky-500 leading-none max-md:text-4xl">
                {currentEvent.year}
              </span>
              {currentEvent.isCurrentYear && (
                <span className="bg-sky-500 text-white text-xs px-3 py-1 rounded-full font-semibold animate-pulse">
                  Current Year
                </span>
              )}
            </div>
            <h3 className="text-3xl font-bold text-neutral-800 leading-tight mb-4 max-md:text-2xl">
              {currentEvent.title}
            </h3>
            <p className="text-base text-neutral-600 font-normal leading-7">
              {currentEvent.description}
            </p>

            {/* Progress indicator */}
            <div className="mt-8 flex items-center gap-2">
              <span className="text-sm text-neutral-400">
                {currentIndex + 1} of {timelineEvents.length}
              </span>
              <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-sky-500 rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${
                      ((currentIndex + 1) / timelineEvents.length) * 100
                    }%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Strip */}
        <div className="relative mt-12 mb-8" ref={timelineRef}>
          {/* Dashed Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2">
            <div className="w-full h-full border-t-2 border-dashed border-gray-300"></div>
          </div>

          {/* Years Strip */}
          <div className="flex items-center justify-center gap-8 px-10 max-md:px-2 max-md:gap-4 relative">
            {visibleYears.map((item) => {
              const isActive = item.index === currentIndex;
              const distance = Math.abs(item.position);
              const opacity = isActive ? 1 : Math.max(0.2, 1 - distance * 0.25);
              const scale = isActive ? 1 : Math.max(0.8, 1 - distance * 0.1);
              const isCurrentYearMarker = item.year === currentYear;

              return (
                <button
                  key={item.index}
                  onClick={() =>
                    navigateTo(
                      item.index,
                      item.index > currentIndex ? "right" : "left"
                    )
                  }
                  className="flex flex-col items-center gap-3 min-w-[80px] transition-all duration-500 ease-out cursor-pointer group"
                  style={{
                    opacity,
                    transform: `scale(${scale})`,
                  }}
                >
           
                  <div
                    className={`relative transition-all duration-300 ${
                      isActive ? "scale-100" : "scale-75 group-hover:scale-90"
                    }`}
                  >
                    {isCurrentYearMarker ? (
                      <div className="relative">
                        <div className="w-8 h-8 bg-sky-500/30 rounded-full flex items-center justify-center animate-ping absolute"></div>
                        <div className="w-8 h-8 bg-sky-500/40 rounded-full flex items-center justify-center relative">
                          <div className="w-5 h-5 bg-sky-500 rounded-full shadow-lg shadow-sky-500/50" />
                        </div>
                      </div>
                    ) : isActive ? (
                      <div className="w-6 h-6 bg-sky-500/40 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-sky-500 rounded-full" />
                      </div>
                    ) : (
                      <div className="w-4 h-4 bg-gray-300 rounded-full group-hover:bg-sky-300 transition-colors" />
                    )}
                  </div>

                  {/* Year label */}
                  <span
                    className={`text-lg font-bold transition-all duration-300 ${
                      isActive
                        ? "text-sky-500 text-xl"
                        : "text-neutral-400 group-hover:text-neutral-600"
                    }`}
                  >
                    {item.year}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {/* Go to Start */}
          <button
            onClick={goToStart}
            disabled={currentIndex === 0}
            className={`p-3 rounded-xl transition-all duration-300 group cursor-pointer
              ${
                currentIndex === 0
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-sky-50 active:scale-95"
              }`}
            aria-label="Go to start"
          >
            <div
              className={`w-12 h-12 border-2 rounded-full flex items-center justify-center transition-all duration-300
              ${
                currentIndex === 0
                  ? "border-gray-300"
                  : "border-neutral-800 group-hover:border-sky-500 group-hover:bg-sky-500"
              }`}
            >
              <ChevronsLeft
                size={22}
                className={`transition-colors duration-300 ${
                  currentIndex === 0
                    ? "text-gray-300"
                    : "text-neutral-800 group-hover:text-white"
                }`}
              />
            </div>
          </button>

          {/* Previous */}
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className={`p-3 rounded-xl transition-all duration-300 group cursor-pointer
              ${
                currentIndex === 0
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-sky-50 active:scale-95"
              }`}
            aria-label="Previous"
          >
            <div
              className={`w-12 h-12 border-2 rounded-full flex items-center justify-center transition-all duration-300
              ${
                currentIndex === 0
                  ? "border-gray-300"
                  : "border-neutral-800 group-hover:border-sky-500 group-hover:bg-sky-500"
              }`}
            >
              <ChevronLeft
                size={22}
                className={`transition-colors duration-300 ${
                  currentIndex === 0
                    ? "text-gray-300"
                    : "text-neutral-800 group-hover:text-white"
                }`}
              />
            </div>
          </button>

          {/* Year indicator in center */}
          <div className="px-6 py-2 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full shadow-lg shadow-sky-500/30">
            <span className="text-white font-bold text-lg">
              {currentEvent.year}
            </span>
          </div>

          {/* Next */}
          <button
            onClick={goToNext}
            disabled={currentIndex === timelineEvents.length - 1}
            className={`p-3 rounded-xl transition-all duration-300 group cursor-pointer
              ${
                currentIndex === timelineEvents.length - 1
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-sky-50 active:scale-95"
              }`}
            aria-label="Next"
          >
            <div
              className={`w-12 h-12 border-2 rounded-full flex items-center justify-center transition-all duration-300
              ${
                currentIndex === timelineEvents.length - 1
                  ? "border-gray-300"
                  : "border-neutral-800 group-hover:border-sky-500 group-hover:bg-sky-500"
              }`}
            >
              <ChevronRight
                size={22}
                className={`transition-colors duration-300 ${
                  currentIndex === timelineEvents.length - 1
                    ? "text-gray-300"
                    : "text-neutral-800 group-hover:text-white"
                }`}
              />
            </div>
          </button>

          {/* Go to End */}
          <button
            onClick={goToEnd}
            disabled={currentIndex === timelineEvents.length - 1}
            className={`p-3 rounded-xl transition-all duration-300 group cursor-pointer
              ${
                currentIndex === timelineEvents.length - 1
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-sky-50 active:scale-95"
              }`}
            aria-label="Go to end"
          >
            <div
              className={`w-12 h-12 border-2 rounded-full flex items-center justify-center transition-all duration-300
              ${
                currentIndex === timelineEvents.length - 1
                  ? "border-gray-300"
                  : "border-neutral-800 group-hover:border-sky-500 group-hover:bg-sky-500"
              }`}
            >
              <ChevronsRight
                size={22}
                className={`transition-colors duration-300 ${
                  currentIndex === timelineEvents.length - 1
                    ? "text-gray-300"
                    : "text-neutral-800 group-hover:text-white"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Quick Jump */}
        <div className="flex items-center justify-center gap-2 mt-8 flex-wrap max-w-3xl mx-auto">
          {timelineEvents.map((event, idx) => (
            <button
              key={idx}
              onClick={() =>
                navigateTo(idx, idx > currentIndex ? "right" : "left")
              }
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300
                ${
                  idx === currentIndex
                    ? "bg-sky-500 text-white shadow-md shadow-sky-500/30"
                    : "bg-gray-100 text-gray-600 hover:bg-sky-100 hover:text-sky-600"
                }
                ${
                  event.isCurrentYear ? "ring-2 ring-sky-400 ring-offset-2" : ""
                }
              `}
            >
              {event.year}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
