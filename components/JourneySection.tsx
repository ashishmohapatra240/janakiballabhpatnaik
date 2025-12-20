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
      "Born on January 3 in Rameswar village, Khordha.",
    images: [
      "images/contributions/1.png",
      "images/contributions/2.png",
      "images/contributions/3.png",
    ],
  },
  {
    year: 1942,
    title: "Freedom Fighter",
    description:
      "Participated in the historic Quit India Movement while a student at Khordha High School.",
    images: [
      "images/contributions/4.png",
      "images/contributions/5.png",
      "images/contributions/6.png",
    ],
  },
  {
    year: 1946,
    title: "Student Leader",
    description:
      "Emerged as a fearless student leader, leading the protest to lower the British Union Jack from the Ravenshaw College premises.",
    images: [
      "images/contributions/1.png",
      "images/contributions/2.png",
      "images/contributions/3.png",
    ],
  },
  {
    year: 1947,
    title: "Academic Excellence",
    description:
      "Graduated with Honours in Sanskrit from the prestigious Ravenshaw College.",
    images: [
      "images/contributions/4.png",
      "images/contributions/5.png",
      "images/contributions/6.png",
    ],
  },
  {
    year: 1949,
    title: "Master's Degree",
    description:
      "Completes his M.A. in Political Science from Banaras Hindu University (BHU).",
    images: [
      "images/contributions/1.png",
      "images/contributions/2.png",
      "images/contributions/3.png",
    ],
  },
  {
    year: 1949,
    title: "Journalism Begins",
    description:
      "Began his professional journey in journalism by joining The Eastern Times as a Sub-Editor.",
    images: [
      "images/contributions/4.png",
      "images/contributions/5.png",
      "images/contributions/6.png",
    ],
  },
  {
    year: 1950,
    title: "Joint Editor",
    description:
      "Appointed Joint Editor of the popular Odia daily Prajatantra.",
    images: [
      "images/contributions/1.png",
      "images/contributions/2.png",
      "images/contributions/3.png",
    ],
  },
  {
    year: 1950,
    title: "Political Entry",
    description:
      "Took charge as the President of the State Youth Congress, marking his entry into organised politics.",
    images: [
      "images/contributions/4.png",
      "images/contributions/5.png",
      "images/contributions/6.png",
    ],
  },
  {
    year: 1951,
    title: "Dual Editorship",
    description:
      "Assumed the rare distinction of being the Editor of both The Eastern Times and Prajatantra concurrently.",
    images: [
      "images/contributions/1.png",
      "images/contributions/2.png",
      "images/contributions/3.png",
    ],
  },
  {
    year: 1953,
    title: "Farmers' Champion",
    description:
      "Led a successful Farmers' Agitation in Madhupur, Cuttack district, championing the rights of the tillers.",
    images: [
      "images/contributions/4.png",
      "images/contributions/5.png",
      "images/contributions/6.png",
    ],
  },
  {
    year: 1954,
    title: "Congress Committee Member",
    description:
      "Became a Member of the Working Committee, Pradesh Congress Committee.",
    images: [
      "images/contributions/1.png",
      "images/contributions/2.png",
      "images/contributions/3.png",
    ],
  },
  {
    year: 1956,
    title: "Literary & Media Leadership",
    description:
      "Appointed Member of the Odisha Sahitya Akademi and the Executive Committee of the All-India Newspaper Editors' Conference (served until 1967).",
    images: [
      "images/contributions/4.png",
      "images/contributions/5.png",
      "images/contributions/6.png",
    ],
  },
  {
    year: 1957,
    title: "University Senate",
    description:
      "Became a Member of the Senate, Utkal University (served until 1967).",
    images: [
      "images/contributions/1.png",
      "images/contributions/2.png",
      "images/contributions/3.png",
    ],
  },
  {
    year: 1967,
    title: "Founder-Editor",
    description:
      "Founded the iconic monthly literary magazine Paurusha as its Founder-Editor.",
    images: [
      "images/contributions/4.png",
      "images/contributions/5.png",
      "images/contributions/6.png",
    ],
  },
  {
    year: 1967,
    title: "Electoral Politics",
    description:
      "Entered electoral politics for the first time, contesting from the Dharmasala constituency as an Independent candidate.",
    images: [
      "images/contributions/1.png",
      "images/contributions/2.png",
      "images/contributions/3.png",
    ],
  },
  {
    year: 1971,
    title: "Lok Sabha Debut",
    description:
      "Elected to the Lok Sabha for the first time.",
    images: [
      "images/contributions/4.png",
      "images/contributions/5.png",
      "images/contributions/6.png",
    ],
  },
  {
    year: 1973,
    title: "Union Minister",
    description:
      "Inducted into the Union Government as the Minister of State for Defence.",
    images: [
      "images/contributions/1.png",
      "images/contributions/2.png",
      "images/contributions/3.png",
    ],
  },
  {
    year: 1975,
    title: "AICC Member",
    description:
      "Became a member of the All-India Congress Committee (AICC).",
    images: [
      "images/contributions/4.png",
      "images/contributions/5.png",
      "images/contributions/6.png",
    ],
  },
  {
    year: 1978,
    title: "OPCC President",
    description:
      "Appointed President of the Odisha Pradesh Congress Committee (OPCC).",
    images: [
      "images/contributions/1.png",
      "images/contributions/2.png",
      "images/contributions/3.png",
    ],
  },
  {
    year: 1980,
    title: "Union Cabinet Minister",
    description:
      "Appointed Union Cabinet Minister holding key portfolios of Labour, Civil Aviation, and Tourism.",
    images: [
      "images/contributions/4.png",
      "images/contributions/5.png",
      "images/contributions/6.png",
    ],
  },
  {
    year: 1980,
    title: "First Tenure as CM",
    description:
      "Sworn in as the Chief Minister of Odisha (First Tenure) and launched the visionary \"1000 Industries in 1000 Days\" policy.",
    images: [
      "images/contributions/1.png",
      "images/contributions/2.png",
      "images/contributions/3.png",
    ],
  },
  {
    year: 1985,
    title: "Second Tenure as CM",
    description:
      "Sworn in as Chief Minister of Odisha (Second Tenure); mandated Odia as the official language of administration.",
    images: [
      "images/contributions/4.png",
      "images/contributions/5.png",
      "images/contributions/6.png",
    ],
  },
  {
    year: 1995,
    title: "Third Tenure as CM",
    description:
      "Sworn in as Chief Minister of Odisha (Third Tenure); established institutions like XIMB and introduced the Mid-Day Meal scheme.",
    images: [
      "images/contributions/1.png",
      "images/contributions/2.png",
      "images/contributions/3.png",
    ],
  },
  {
    year: 2001,
    title: "Literary Recognition",
    description:
      "Awarded the prestigious Sahitya Akademi Translation Prize for his work Bankima Upanyasmala.",
    images: [
      "images/contributions/4.png",
      "images/contributions/5.png",
      "images/contributions/6.png",
    ],
  },
  {
    year: 2004,
    title: "Leader of Opposition",
    description:
      "Assumed the role of Leader of Opposition in the Odisha Legislative Assembly.",
    images: [
      "images/contributions/1.png",
      "images/contributions/2.png",
      "images/contributions/3.png",
    ],
  },
  {
    year: 2009,
    title: "Governor of Assam",
    description:
      "Appointed as the Governor of Assam, where he played a pivotal role in cultural and social reforms.",
    images: [
      "images/contributions/4.png",
      "images/contributions/5.png",
      "images/contributions/6.png",
    ],
  },
  {
    year: 2015,
    title: "A Legend Departs",
    description:
      "Passed away on April 21 in Tirupati.",
    images: [
      "images/contributions/1.png",
      "images/contributions/2.png",
      "images/contributions/3.png",
    ],
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
      className="w-full h-screen py-4 relative overflow-hidden bg-white"
      style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex items-center justify-center gap-3 mb-4 max-md:mb-3">
          <div className="w-96 h-px bg-gradient-to-r from-transparent via-stone-300 to-stone-300 max-lg:w-full"></div>
          <h2 className="text-4xl font-bold text-sky-500 px-3 whitespace-nowrap max-md:text-2xl max-md:whitespace-normal text-center leading-tight mb-4">
            The Journey of the Legend
          </h2>
          <div className="w-96 h-px bg-gradient-to-l from-transparent via-stone-300 to-stone-300 max-lg:w-full"></div>
        </div>

        <div
          className={`flex items-center justify-center gap-8 max-lg:flex-col mb-4 transition-all duration-500 ease-out transform
            ${
              isAnimating
                ? direction === "right"
                  ? "-translate-x-8 opacity-0"
                  : "translate-x-8 opacity-0"
                : "translate-x-0 opacity-100"
            }`}
        >
          <div className="relative w-[450px] h-[350px] max-lg:w-full max-lg:h-[300px] flex-shrink-0">
            <div
              className="absolute top-0 left-[70px] w-72 h-40 transform -rotate-[5.87deg] border-4 border-white rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-10 max-lg:w-48 max-lg:h-32 max-lg:left-4 transition-all duration-700 ease-out hover:scale-105 hover:z-40"
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
              className="absolute top-[140px] left-0 w-56 h-44 transform -rotate-[3.29deg] border-4 border-white rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-20 max-lg:w-40 max-lg:h-32 max-lg:top-[100px] transition-all duration-700 ease-out hover:scale-105 hover:z-40"
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
              className="absolute top-[80px] right-[30px] w-40 h-56 transform rotate-3 border-4 border-white rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-30 max-lg:w-32 max-lg:h-40 max-lg:right-0 max-lg:top-[40px] transition-all duration-700 ease-out hover:scale-105 hover:z-40"
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
          </div>

          <div className="flex-1 max-w-[584px]">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-4xl font-bold text-sky-500 leading-none max-md:text-3xl">
                {currentEvent.year}
              </span>
              {currentEvent.isCurrentYear && (
                <span className="bg-sky-500 text-white text-xs px-2 py-1 rounded-full font-semibold animate-pulse">
                  Current Year
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold text-neutral-800 leading-tight mb-2 max-md:text-lg">
              {currentEvent.title}
            </h3>
            <p className="text-sm text-neutral-600 font-normal leading-6">
              {currentEvent.description}
            </p>

            {/* Progress indicator */}
            <div className="mt-3 flex items-center gap-2">
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
        <div className="relative mt-4 mb-3" ref={timelineRef}>
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
                  className="flex flex-col items-center gap-1.5 min-w-[60px] transition-all duration-500 ease-out cursor-pointer group"
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
                    className={`text-sm font-bold transition-all duration-300 ${
                      isActive
                        ? "text-sky-500 text-base"
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
        <div className="flex items-center justify-center gap-2 mt-3">
          {/* Go to Start */}
          <button
            onClick={goToStart}
            disabled={currentIndex === 0}
            className={`p-2 rounded-xl transition-all duration-300 group cursor-pointer
              ${
                currentIndex === 0
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-sky-50 active:scale-95"
              }`}
            aria-label="Go to start"
          >
            <div
              className={`w-10 h-10 border-2 rounded-full flex items-center justify-center transition-all duration-300
              ${
                currentIndex === 0
                  ? "border-gray-300"
                  : "border-neutral-800 group-hover:border-sky-500 group-hover:bg-sky-500"
              }`}
            >
              <ChevronsLeft
                size={18}
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
            className={`p-2 rounded-xl transition-all duration-300 group cursor-pointer
              ${
                currentIndex === 0
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-sky-50 active:scale-95"
              }`}
            aria-label="Previous"
          >
            <div
              className={`w-10 h-10 border-2 rounded-full flex items-center justify-center transition-all duration-300
              ${
                currentIndex === 0
                  ? "border-gray-300"
                  : "border-neutral-800 group-hover:border-sky-500 group-hover:bg-sky-500"
              }`}
            >
              <ChevronLeft
                size={18}
                className={`transition-colors duration-300 ${
                  currentIndex === 0
                    ? "text-gray-300"
                    : "text-neutral-800 group-hover:text-white"
                }`}
              />
            </div>
          </button>

          {/* Year indicator in center */}
          <div className="px-4 py-1.5 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full shadow-lg shadow-sky-500/30">
            <span className="text-white font-bold text-base">
              {currentEvent.year}
            </span>
          </div>

          {/* Next */}
          <button
            onClick={goToNext}
            disabled={currentIndex === timelineEvents.length - 1}
            className={`p-2 rounded-xl transition-all duration-300 group cursor-pointer
              ${
                currentIndex === timelineEvents.length - 1
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-sky-50 active:scale-95"
              }`}
            aria-label="Next"
          >
            <div
              className={`w-10 h-10 border-2 rounded-full flex items-center justify-center transition-all duration-300
              ${
                currentIndex === timelineEvents.length - 1
                  ? "border-gray-300"
                  : "border-neutral-800 group-hover:border-sky-500 group-hover:bg-sky-500"
              }`}
            >
              <ChevronRight
                size={18}
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
            className={`p-2 rounded-xl transition-all duration-300 group cursor-pointer
              ${
                currentIndex === timelineEvents.length - 1
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-sky-50 active:scale-95"
              }`}
            aria-label="Go to end"
          >
            <div
              className={`w-10 h-10 border-2 rounded-full flex items-center justify-center transition-all duration-300
              ${
                currentIndex === timelineEvents.length - 1
                  ? "border-gray-300"
                  : "border-neutral-800 group-hover:border-sky-500 group-hover:bg-sky-500"
              }`}
            >
              <ChevronsRight
                size={18}
                className={`transition-colors duration-300 ${
                  currentIndex === timelineEvents.length - 1
                    ? "text-gray-300"
                    : "text-neutral-800 group-hover:text-white"
                }`}
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
