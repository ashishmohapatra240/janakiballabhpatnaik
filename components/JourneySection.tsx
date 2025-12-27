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
    description: "Born on January 3 in Rameswar village, Khordha.",
    images: [
      "/images/timeline/1927/1.jpeg",
      "/images/timeline/1927/kid.jpeg",
    ],
  },
  {
    year: 1942,
    title: "Freedom Fighter",
    description:
      "Participated in the historic Quit India Movement while a student at Khordha High School.",
    images: [
      "/images/timeline/1942/download.jpg",
      "/images/timeline/1942/quit-india-movement_640.avif",
    ],
  },
  {
    year: 1946,
    title: "Student Leader",
    description:
      "Emerged as a fearless student leader, leading the protest to lower the British Union Jack from the Ravenshaw College premises.",
    images: [
      "/images/timeline/1946/Fv0wFRNaMAAWoMV.png",
      "/images/timeline/1946/images.jpg",
    ],
  },
  {
    year: 1947,
    title: "Academic Excellence",
    description:
      "Graduated with Honours in Sanskrit from the prestigious Ravenshaw College.",
    images: [
      "/images/timeline/1947/download.jpg",
      "/images/timeline/1947/Katha_Upanishad_1.1.1_to_1.1.3_verses,_Krishna_Yajurveda.jpg",
    ],
  },
  {
    year: 1949,
    title: "Master's Degree",
    description:
      "Completes his M.A. in Political Science from Banaras Hindu University (BHU).",
    images: [
      "/images/timeline/1949/dda0d87a438c1b62b6cf66228ce9a80958e733cc-1088x612.jpg",
      "/images/timeline/1949/images.jpg",
    ],
  },
  {
    year: 1949,
    title: "Journalism Begins",
    description:
      "Began his professional journey in journalism by joining The Eastern Times as an Assistant Editor.",
    images: [
      "/images/drive/easterntimes.jpeg",
      "/images/drive/DSC07783.JPG",
    ],
  },
  {
    year: 1950,
    title: "Joint Editor",
    description:
      "Appointed Joint Editor of the popular Odia daily Prajatantra.",
    images: [
      "/images/timeline/1950/1950.jpeg",
      "/images/timeline/1950/19501.avif",
    ],
  },
  {
    year: 1950,
    title: "Political Entry",
    description:
      "Took charge as the President of the State Youth Congress, marking his entry into organised politics.",
    images: [
      "/images/contributions/3.png",
      "/images/drive/DSC07766.JPG",
      "/images/contributions/4.png",
    ],
  },
  {
    year: 1952,
    title: "Dual Editorship",
    description:
      "Assumed the rare distinction of being the Editor of both The Eastern Times and Prajatantra concurrently.",
    images: [
      "/images/timeline/1951/PHOTO-2025-12-25-17-35-57.jpg",
      "/images/timeline/1951/PXL_20251211_090533288.MP.jpg",
    ],
  },
  {
    year: 1953,
    title: "A New Chapter in Personal Life",
    description:
      "Janaki Ballabh Patnaik married Jayanti Pattnaik, who later served as a Member of Parliament and President of the All India Mahila Congress.",
    images: [
      "/images/timeline/1953/withwife.JPG",
      "/images/timeline/1953/withwife1.jpg",
      "/images/drive/DSC07844.JPG",
    ],
  },
  {
    year: 1953,
    title: "Farmers' Champion",
    description:
      "Led a successful Farmers' Agitation in Madhupur, Cuttack district, championing the rights of the tillers.",
    images: [
      "/images/timeline/1953/DSC05687.JPG",
      "/images/timeline/1953/PXL_20251211_090533288.MP.jpg",
      "/images/drive/DSC07844.JPG",
    ],
  },
  {
    year: 1954,
    title: "Congress Committee Member",
    description:
      "Became a Member of the Working Committee, Pradesh Congress Committee.",
    images: [
      "/images/timeline/1954/PXL_20251211_084659444.MP.jpg",
      "/images/timeline/1954/PXL_20251211_085620487.MP.jpg",
    ],
  },
  {
    year: 1955,
    title: "Association with the Bhoodan Movement",
    description:
      "Janaki Ballabh Patnaik joined Vinoba Bhave in the Bhoodan Movement, aligning himself with a nationwide campaign for land reform & social justice.",
    images: [
      "/images/timeline/1954/PXL_20251211_084659444.MP.jpg",
      "/images/timeline/1954/PXL_20251211_085620487.MP.jpg",
    ],
  },
  {
    year: 1956,
    title: "Literary & Media Leadership",
    description:
      "Appointed Member of the Odisha Sahitya Akademi and the Executive Committee of the All-India Newspaper Editors' Conference (served until 1967).",
    images: [
      "/images/timeline/1956/Screenshot 2025-12-25 at 9.41.32 PM.png",
      "/images/timeline/1956/_DSC0024.JPG",
    ],
  },
  {
    year: 1957,
    title: "University Senate",
    description:
      "Became a Member of the Senate, Utkal University (served until 1967).",
    images: [
      "/images/timeline/1957/utkal university .jpeg",
      "/images/timeline/1957/utkal university stane house.png",
    ],
  },
  {
    year: 1967,
    title: "Founder-Editor",
    description:
      "Founded the iconic monthly literary magazine Paurusha as its Founder-Editor.",
    images: [
      "/images/drive/Book Fair.png",
      "/images/drive/Ekamra Pustk Mela-14_.png",
      "/images/contributions/1.png",
    ],
  },
  {
    year: 1967,
    title: "Electoral Politics",
    description:
      "Entered electoral politics for the first time, contesting from the Dharmasala constituency as an Independent candidate.",
    images: [
      "/images/timeline/1967/307661550_397200172599461_3834021899959530748_n.jpg",
      "/images/timeline/1967/DSC05683.JPG",
    ],
  },
  {
    year: 1971,
    title: "Lok Sabha Debut",
    description: "Elected to the Lok Sabha for the first time.",
    images: [
      "/images/timeline/1971/jp voting in ctc.png",
      "/images/timeline/1971/lok sabha 1950.jpeg",
    ],
  },
  {
    year: 1973,
    title: "Union Minister",
    description:
      "Inducted into the Union Government as the Minister of State for Defence.",
    images: [
      "/images/timeline/1973/DSC07777.JPG",
      "/images/timeline/1967 a/Screenshot 2025-12-25 at 9.24.27 PM.png",
    ],
  },
  {
    year: 1975,
    title: "AICC Member",
    description: "Became a member of the All-India Congress Committee (AICC).",
    images: [
      "/images/timeline/1975/deccanherald_2025-01-15_rfxs20vr_file7yxp7jhc25u11qdkeeu.avif",
      "/images/timeline/1975/DSC07783.JPG",
    ],
  },
  {
    year: 1978,
    title: "OPCC President",
    description:
      "Appointed President of the Odisha Pradesh Congress Committee (OPCC).",
    images: [
      "/images/timeline/1978/Congress-Bhawan.jpg",
      "/images/timeline/1978/DSC05695.JPG",
    ],
  },
  {
    year: 1980,
    title: "Union Cabinet Minister",
    description:
      "Appointed Union Cabinet Minister holding key portfolios of Labour, Civil Aviation, and Tourism.",
    images: [
      "/images/timeline/1980/DSC05675.JPG",
      "/images/timeline/1980/aeroplane.jpg",
    ],
  },
  {
    year: 1980,
    title: "First Tenure as CM",
    description:
      'Sworn in as the Chief Minister of Odisha (First Tenure) and launched the visionary "1000 Industries in 1000 Days" policy.',
    images: [
      "/images/timeline/1980/oath1.JPG",
      "/images/drive/DSC07803.JPG",
      "/images/contributions/6.png",
    ],
  },
  {
    year: 1985,
    title: "Second Tenure as CM",
    description:
      "Sworn in as Chief Minister of Odisha (Second Tenure); mandated Odia as the official language of administration.",
    images: [
      "/images/timeline/1985/DSC05653.JPG",
      "/images/timeline/1985/Swearing in ceremoney of CMJ.B.Patnaik  in presence of Governer B.N. pande on 10.03.1985.jpg",
    ],
  },
  {
    year: 1995,
    title: "Third Tenure as CM",
    description:
      "Sworn in as Chief Minister of Odisha (Third Tenure); established institutions like XIMB and introduced the Mid-Day Meal scheme.",
    images: [
      "/images/timeline/1980/oath3.jpeg",
      "/images/timeline/1980/oath2.jpeg",
      "/images/timeline/1995/Swearing in ceremoney of CM J.B.Patnaik in presence of Governer B. Satyanarayan Reddy on 15.03.1995.JPG",
    ],
  },
  {
    year: 2001,
    title: "Literary Recognition",
    description:
      "Awarded the prestigious Sahitya Akademi Translation Prize for his work Bankima Upanyasmala.",
    images: [
      "/images/timeline/2001/DSC05610.JPG",
      "/images/timeline/2001/Odisha_history_image.png",
    ],
  },
  {
    year: 2004,
    title: "Leader of Opposition",
    description:
      "Assumed the role of Leader of Opposition in the Odisha Legislative Assembly.",
    images: [
      "/images/timeline/2004/104_8530.jpg",
      "/images/timeline/2004/a1 (26).JPG",
    ],
  },
  {
    year: 2009,
    title: "Governor of Assam",
    description:
      "Appointed as the Governor of Assam, where he played a pivotal role in cultural and social reforms.",
    images: [
      "/images/timeline/2009/Governor2.jpg",
      "/images/timeline/2009/Governor3.jpg",
    ],
  },
  {
    year: 2015,
    title: "A Legend Departs",
    description: "Passed away on April 21 in Tirupati.",
    images: [
      "/images/timeline/2015/DSC_0382.JPG",
      "/images/timeline/2015/DSC08114.JPG",
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
              className="absolute top-0 left-[70px] max-w-72 max-h-96 transform -rotate-[5.87deg] border-4 border-white rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-10 max-lg:max-w-48 max-lg:max-h-64 max-lg:left-4 transition-all duration-700 ease-out hover:scale-105 hover:z-40"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="rounded-lg overflow-hidden inline-block">
                <img
                  src={currentEvent.images[0]}
                  alt={`${currentEvent.title} - 1`}
                  className="max-w-full max-h-full w-auto h-auto block transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>

            <div
              className="absolute top-[120px] left-0 max-w-54 max-h-96 transform -rotate-[3.29deg] border-4 border-white rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-20 max-lg:max-w-40 max-lg:max-h-72 max-lg:top-[120px] transition-all duration-700 ease-out hover:scale-105 hover:z-40"
              style={{ transitionDelay: "200ms" }}
            >
              <div className="rounded-lg overflow-hidden inline-block">
                <img
                  src={currentEvent.images[1]}
                  alt={`${currentEvent.title} - 2`}
                  className="max-w-full max-h-full w-auto h-auto block transition-transform duration-500 hover:scale-110"
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
