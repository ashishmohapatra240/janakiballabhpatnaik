"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FiBookOpen,
  FiHeart,
  FiUsers,
  FiBriefcase,
  FiGlobe,
  FiZap,
  FiAward,
  FiDroplet,
  FiAnchor,
  FiChevronDown,
  FiChevronRight,
} from "react-icons/fi";

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

// Image with fallback placeholder
function ImageWithFallback({
  src,
  alt,
  className = "",
  fill = false,
  width,
  height,
}: {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}) {
  const hasObjectContain = className.includes("object-contain");
  const hasObjectCover = className.includes("object-cover");
  const objectFit = hasObjectContain ? "object-contain" : hasObjectCover ? "object-cover" : "object-cover";
  const otherClasses = className.replace(/object-(contain|cover)/g, "").trim();
  
  return (
    <div
      className={`relative ${
        fill ? "w-full h-full" : ""
      } rounded-lg flex items-center justify-center overflow-hidden`}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        className={`${objectFit} z-10 ${otherClasses}`}
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}

const politicalMilestones = [
  { year: "1950", event: "Became President of the State Youth Congress" },
  { year: "1971", event: "Elected to Lok Sabha" },
  { year: "1973", event: "Appointed Deputy Minister of Defence" },
  {
    year: "1980",
    event: "Appointed Union Minister for Tourism, Civil Aviation, and Labour",
  },
  { year: "1980", event: "Became Chief Minister of Odisha (First Tenure)" },
  { year: "1985", event: "Sworn in as Chief Minister (Second Tenure)" },
  { year: "1995", event: "Sworn in as Chief Minister (Third Tenure)" },
  { year: "2009", event: "Appointed Governor of Assam" },
];

const personalHighlights = [
  {
    title: "Writer & Intellectual",
    description:
      "Founder-editor of Paurusha magazine. Sahitya Akademi Award winner. Translated Ramayana, Mahabharata, and Bhagavad Gita into Odia.",
    icon: FiBookOpen,
  },
  {
    title: "Gandhian Values",
    description:
      "Wore Khadi and spun the charkha in his youth. Believed 'Service to the nation is the only philosophy of my life.'",
    icon: FiHeart,
  },
  {
    title: "A Man of Principles",
    description:
      "Maintained composure and dignity, practicing daily Pranayama and swimming. Believed 'work speaks louder than words.'",
    icon: FiUsers,
  },
];

const cmTenures = [
  {
    period: "June 9, 1980 – March 9, 1985",
    title: "First Tenure",
    subtitle: "The Era of Stability & Vision",
    // description:
    //   "Ended years of political volatility by providing a stable government and launching the audacious '1000 Industries' policy that woke the state from its agrarian slumber.",
    description:"He brought an end to prolonged political instability by establishing a stable government and introducing the ‘1000 Industries’ policy, which helped diversify the state’s economy beyond its agrarian base."
  },
  {
    period: "March 10, 1985 – December 7, 1989",
    title: "Second Tenure",
    subtitle: "The Infrastructure Surge",
    description:
      "A period of aggressive institution-building and modernization where the physical blueprints of a new Odisha—from NALCO to the Planetarium—were turned into reality.",
  },
  {
    period: "March 15, 1995 – February 17, 1999",
    title: "Third Tenure",
    subtitle: "The Modern Renaissance",
    description:
      "The veteran statesman's return, marked by the transformation of Bhubaneswar into an IT & education hub and a renewed focus on preserving the state's cultural soul.",
  },
];

const legacyCategories = [
  {
    id: "industrial",
    title: "Industrial & Economic Engine",
    icon: FiBriefcase,
    color: "from-blue-50 to-blue-100",
    achievements: [
      {
        title: "1000 Industries in 1000 Days",
        description:
          "The transformative policy that revolutionized Odisha's industrial landscape",
        image: "/images/contri/opgc.webp",
      },
      {
        title: "NALCO",
        description: "National Aluminium Company Limited",
        image: "/images/legacy/category/nalco.jpg",
      },
      {
        title: "NTPC",
        description: "National Thermal Power Corporation",
        image: "/images/legacy/category/ntpc.jpg",
      },
      {
        title: "Paradeep Phosphates Limited (PPL)",
        description: "Major fertilizer plant",
        image: "/images/legacy/category/ppl.jpg",
      },
      {
        title: "IFFCO",
        description: "Indian Farmers Fertiliser Cooperative",
        image: "/images/legacy/category/iffco.jpg",
      },
      {
        title: "MESCO",
        description: "Metal and Steel Company",
        image: "/images/legacy/category/mesco.jpg",
      },
      {
        title: "Birla Tyres",
        description: "Major tire manufacturing unit",
        image: "/images/legacy/category/birlatyres.jpg",
      },
      {
        title: "IDCO & IPICOL",
        description:
          "Revitalized Industrial Development Corporation and Industrial Promotion & Investment Corporation",
        image: "/images/legacy/category/idco.jpg",
      },
      {
        title: "Hotels as Industry",
        description: "Granted industry status, triggering the tourism boom",
        image: "/images/legacy/category/hotels.jpg",
      },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure & Connectivity",
    icon: FiGlobe,
    color: "from-purple-50 to-purple-100",
    achievements: [
      {
        title: "400+ Bridges",
        description:
          "Connecting divided regions, including critical links over the Mahanadi",
        image: "/images/legacy/category/400+ Bridges.jpg",
      },
      {
        title: "Mahanadi Bridge Links",
        description: "Critical connectivity across the Mahanadi river",
        image: "/images/legacy/category/Mahanadi Bridge Links.jpg",
      },
      {
        title: "Ring Roads",
        description:
          "Massive ring roads protecting Cuttack and Sambalpur from floods",
        image: "/images/legacy/category/Ring Roads.webp",
      },
      {
        title: "Sambalpur-Talcher Rail Link",
        description: "Key railway connectivity",
        image: "/images/legacy/category/Sambalpur-Talcher Rail Link.avif",
      },
      {
        title: "Koraput-Rayagada Rail Link",
        description: "Rail connectivity in tribal regions",
        image: "/images/legacy/category/Koraput-Rayagada Rail Link.jpg",
      },
    ],
  },
  {
    id: "power",
    title: "Power & Energy",
    icon: FiZap,
    color: "from-yellow-50 to-yellow-100",
    achievements: [
      {
        title: "Power Transformation",
        description:
          "From power-deficit (373 MW) to power-surplus status by 2000",
        image: "/images/legacy/category/Power Transformation.jpg",
      },
      {
        title: "Upper Indravati Hydro Electric Project",
        description: "Massive hydroelectric power generation",
        image: "/images/legacy/category/Upper Indravati Hydro Electric Project.jpg",
      },
      {
        title: "Ib Valley Thermal Power Station",
        description: "Thermal power generation facility",
        image: "/images/legacy/category/Ib Valley Thermal Power Station.avif",
      },
      {
        title: "OPGC",
        description: "Odisha Power Generation Corporation",
        image: "/images/contributions/4.png",
      },
      {
        title: "Power Sector Reforms",
        description: "Pioneering reforms creating GRIDCO and OHPC",
        image: "/images/legacy/category/Power Sector Reforms.jpeg",
      },
    ],
  },
  {
    id: "education",
    title: "Education, Sports & Culture",
    icon: FiAward,
    color: "from-green-50 to-green-100",
    achievements: [
      {
        title: "Xavier Institute of Management (XIMB)",
        description: "Premier management institute",
        image: "/images/drive/15th Convocation of RSVP_Photo.png",
      },
      {
        title: "Kalinga Stadium",
        description: "Major sports facility",
        image: "/images/drive/DSC07812.JPG",
      },
      {
        title: "Jawaharlal Nehru Indoor Stadium",
        description: "Indoor sports complex",
        image: "/images/contributions/3.png",
      },
      {
        title: "District-level Sports Hostels",
        description: "For nurturing rural talent",
        image: "/images/legacy/category/District-level Sports Hostels.jpg",
      },
      {
        title: "Sri Jagannath Sanskrit University",
        description: "Puri-based Sanskrit university",
        image: "/images/legacy/category/Sri Jagannath Sanskrit University.jpg",
      },
      {
        title: "Odissi Research Centre",
        description: "Cultural preservation and research",
        image: "/images/legacy/category/Odissi Research Centre.jpg",
      },
      {
        title: "Odia as Official Language",
        description: "Mandated in 1985 with first Odia typewriter",
        image: "/images/legacy/category/typewriter.webp",
      },
      {
        title: "Pathani Samanta Planetarium",
        description: "Astronomical education and research",
        image: "/images/legacy/category/Pathani Samanta Planetarium.jpg",
      },
    ],
  },
  {
    id: "agriculture",
    title: "Agriculture & Social Welfare",
    icon: FiDroplet,
    color: "from-orange-50 to-orange-100",
    achievements: [
      {
        title: "Industry Status for Agriculture",
        description: "Granted industry status to agriculture sector",
        image: "/images/legacy/category/Industry Status for Agriculture.jpg",
      },
      {
        title: "2-Rupee Rice Scheme",
        description: "Subsidized rice in tribal blocks",
        image: "/images/legacy/category/2-Rupee Rice Scheme.jpg",
      },
      {
        title: "Mid-Day Meal Scheme (1995)",
        description: "Nutrition program for school children",
        image: "/images/legacy/category/Mid-Day Meal Scheme (1995).jpg",
      },
      {
        title: "OMFED",
        description: "Odisha State Cooperative Milk Producers' Federation",
        image: "/images/legacy/category/OMFED.png",
      },
      {
        title: "White Revolution in Odisha",
        description: "Dairy development program",
        image: "/images/legacy/category/White Revolution.jpg",
      },
      {
        title: "ERRP",
        description: "Economic Rehabilitation of Rural Poor program",
        image: "/images/legacy/category/Economic Rehabilitation of Rural Poor program.jpg",
      },
    ],
  },
  {
    id: "environment",
    title: "Environment & Ecology",
    icon: FiAnchor,
    color: "from-emerald-50 to-emerald-100",
    achievements: [
      {
        title: "Chandaka Elephant Sanctuary",
        description: "Wildlife conservation and protection",
        image: "/images/legacy/category/Chandaka_Forest_and_Elephant_Reserve_01.jpg",
      },
      {
        title: "Ekamra Kanan Botanical Garden",
        description: "Botanical research and preservation",
        image: "/images/legacy/category/Ekamra Kanan Botanical Garden.jpg",
      },
      {
        title: "Joint Forest Management",
        description: "Resolution for community conservation",
        image: "/images/legacy/category/JFM.jpg",
      },
    ],
  },
];

export default function LegacyPage() {
  const [isPaused, setIsPaused] = useState(false);
  const [activeTenure, setActiveTenure] = useState(0);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
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
                <span className="font-normal">Shree Janaki Ballav Patnaik</span>
              </h1>

              <p className="max-w-[584px] text-neutral-400 text-base font-normal leading-6 max-lg:max-w-full">
              Born on January 3, 1927, in Rameswar village of Khordha district, Shree Janaki Ballav Patnaik grew up in an environment shaped by patriotism and learning. His father, Gokulananda Patnaik, a poet and freedom fighter, played a defining role in influencing his values from an early age. During his fourteen years of leadership, Janaki Ballav Patnaik guided a period of decisive change, helping move society from a primarily agrarian foundation toward a more confident and modern outlook.
              </p>
            </div>

            <div className="flex-shrink-0 max-lg:w-full">
              <div className="relative w-[456px] h-[500px] max-lg:w-full max-lg:h-[400px]">
                <ImageWithFallback
                  src="/images/drive/janaki patnayak (3).JPG"
                  alt="Shree Janaki Ballav Patnaik Portrait"
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
                  src="/images/drive/a1 (22).JPG"
                  alt="JBP Early Life"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-semibold text-[#272727]">
                A Heritage of Patriotism and Learning
              </h3>
              <p className="text-neutral-400 text-base leading-7">
              His academic years reflected both intellectual strength and an early sense of conviction. 
              </p>
              <p className="text-neutral-400 text-base leading-7">
                {/* His academic journey was marked by brilliance and rebellion. As
                a student at Ravenshaw College, he famously led a protest to
                lower the British Union Jack from the college building in
                1946—an act that signalled his fearless spirit. He went on to
                earn a degree in Sanskrit from Ravenshaw College (1947) and a
                Master's in Political Science from the prestigious Banaras Hindu
                University (BHU) in 1949. This dual grounding in ancient wisdom
                and modern political thought would become the hallmark of his
                career. */}
              </p>
              {/* <p className="text-neutral-400 text-base leading-7">
                Before entering active politics, he distinguished himself as a
                journalist, serving as the Editor of the Eastern Times and the
                Prajatantra, where he championed the causes of the common man.
              </p> */}
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
                  src="/images/drive/Swearing in ceremoney of CMJ.B.Patnaik  in presence of Governer B.N. pande on 10.03.1985.jpg"
                  alt="JBP Political Journey"
                  fill
                  className="rounded-lg"
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-[#272727]">
                  A Desire to Serve
                </h3>
                <p className="text-neutral-400 text-base leading-7">
                  {/* Shree Janaki Ballav Patnaik's political ascent was driven by a
                  desire to serve. Starting as the President of the State Youth
                  Congress in 1950, he rose to national prominence in 1971 when
                  he was elected to the Lok Sabha. */}
                  Shree Janaki Ballav Patnaik’s political journey began with a strong sense of public service. He started as President of the State Youth Congress in 1950 and gained national recognition in 1971 after being elected to the Lok Sabha.
                </p>
                <p className="text-neutral-400 text-base leading-7">
                  {/* His competence caught the eye of Prime Minister Indira Gandhi,
                  who entrusted him with significant responsibilities. Between
                  1973 and 1980, he served as the Deputy Minister of Defence and
                  later as the Union Minister for Tourism, Civil Aviation, and
                  Labour. During this tenure, he was instrumental in placing
                  Odisha on the national aviation and tourism map, laying the
                  groundwork for his return to the state as its leader. */}
                  His work at the national level led to greater responsibilities under Prime Minister Indira Gandhi. Between 1973 and 1980, he served as Deputy Minister of Defence and later as Union Minister for Tourism, Civil Aviation, and Labour. During this period, he played a key role in strengthening connectivity and tourism infrastructure, setting the stage for his return to state leadership.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Top-to-down marquee timeline */}
              <div
                className="relative h-[360px] overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm"
                tabIndex={0}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent z-20" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent z-20" />

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
                      <p className="text-neutral-700 text-base leading-6">
                        {milestone.event}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chief Ministership Section - Timeline Based */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Chief Minister" highlight="of Odisha" />

          <div className="mb-8">
            <p className="text-center text-neutral-400 text-lg leading-8 max-w-4xl mx-auto">
              {/* Shree Janaki Ballav Patnaik's fourteen years at the helm marked a
              decisive turning point in Odisha's history. His tenure was less
              about managing the status quo and more about re-engineering the
              state's identity; shifting its trajectory from a quiet agrarian
              past to a confident, modern future. */}
              Shree Janaki Ballav Patnaik’s fourteen years in leadership marked a period of significant change for Odisha. His focus went beyond maintaining existing systems and instead centred on reshaping the state’s long-term direction, guiding Odisha from a largely agrarian base toward a more modern and forward-looking outlook.
            </p>
          </div>

          {/* Timeline Tenures */}
          <div className="relative mb-12">
            {/* Timeline Line */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-sky-200 via-sky-300 to-sky-200 max-md:hidden z-0"
              style={{ top: "40px", bottom: "40px" }}
            ></div>

            <div className="space-y-12 relative z-10">
              {cmTenures.map((tenure, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 max-md:flex-col ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="relative z-20 max-md:hidden">
                    <div className="w-16 h-16 bg-white rounded-full border-4 border-sky-500 flex items-center justify-center shadow-lg">
                      <span className="text-sky-600 font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Tenure Card */}
                  <div
                    className={`flex-1 cursor-pointer transition-all duration-300 relative z-10 ${
                      activeTenure === index ? "scale-105 shadow-xl" : ""
                    }`}
                    onClick={() => setActiveTenure(index)}
                  >
                    <div
                      className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                        activeTenure === index
                          ? "border-sky-500 bg-gradient-to-br from-sky-50 to-white shadow-lg"
                          : "border-gray-200 bg-white"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3 max-md:flex-col max-md:gap-2">
                        <div>
                          <div className="inline-block px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-xs font-medium mb-2">
                            {tenure.period}
                          </div>
                          <h4 className="text-2xl font-bold text-[#272727] mb-1">
                            {tenure.title}
                          </h4>
                          <p className="text-lg font-semibold text-sky-600">
                            {tenure.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className="text-neutral-600 text-base leading-7">
                        {tenure.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Tenure Details */}
          <div className="mt-12 space-y-8">
            {activeTenure === 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <h5 className="text-xl font-semibold text-[#272727] mb-3">
                    The Industrial Visionary
                  </h5>
                  <p className="text-neutral-600 leading-7">
                    He dared to imagine an industrialized Odisha at a time when
                    the state was primarily known for agriculture. With
                    audacious policies and a call for rapid development, he
                    broke the inertia of the past, inviting massive capital and
                    creating an ecosystem where manufacturing and enterprise
                    could finally take root in the state's soil.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <h5 className="text-xl font-semibold text-[#272727] mb-3">
                    Unifying the State
                  </h5>
                  <p className="text-neutral-600 leading-7">
                    His administration prioritized physical connectivity to
                    bridge the gap between the coastal hubs and the hinterlands.
                    By weaving a network of critical infrastructure across
                    rivers and districts, he integrated the state's geography,
                    ensuring that the pulse of development could reach the
                    remotest corners of the map.
                  </p>
                </div>
              </div>
            )}
            {activeTenure === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <h5 className="text-xl font-semibold text-[#272727] mb-3">
                    Architect of Modern Institutions
                  </h5>
                  <p className="text-neutral-600 leading-7">
                    Understanding that a modern state requires strong
                    intellectual and physical foundations, he spearheaded the
                    creation of world-class institutions. From management and
                    technology to science and astronomy, he built the
                    educational infrastructure that would eventually transform
                    the capital city into a vibrant hub of learning and
                    opportunity for future generations.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <h5 className="text-xl font-semibold text-[#272727] mb-3">
                    Infrastructure Surge
                  </h5>
                  <p className="text-neutral-600 leading-7">
                    A period of aggressive institution-building and
                    modernization where the physical blueprints of a new
                    Odisha—from NALCO to the Planetarium—were turned into
                    reality. This era saw massive investments in infrastructure
                    that transformed the state's physical landscape.
                  </p>
                </div>
              </div>
            )}
            {activeTenure === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <h5 className="text-xl font-semibold text-[#272727] mb-3">
                    Cultural & Linguistic Renaissance
                  </h5>
                  <p className="text-neutral-600 leading-7">
                    A scholar in the seat of power, he ensured that the race for
                    modernity did not leave heritage behind. He
                    institutionalized the preservation of classical wisdom and
                    championed the mother tongue in governance, proving that
                    progress and culture are not adversaries, but partners.
                    Under his watch, the state's artistic and spiritual soul
                    found renewed patronage and global recognition.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <h5 className="text-xl font-semibold text-[#272727] mb-3">
                    Social & Economic Empowerment
                  </h5>
                  <p className="text-neutral-600 leading-7">
                    Beyond concrete and steel, his governance was defined by a
                    deep compassion for the common citizen. He pioneered welfare
                    initiatives that uplifted the vulnerable and laid the
                    groundwork for women's empowerment, believing that true
                    prosperity is one that is shared by all.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Overall Vision */}
          <div className="mt-8 p-8 bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl border border-sky-100">
            <div className="flex items-start gap-4 max-md:flex-col">
              <div className="flex-shrink-0 max-md:w-full">
                <div className="relative w-[300px] h-[250px] max-md:w-full max-md:h-[200px]">
                  <ImageWithFallback
                    src="/images/drive/Swearing in ceremoney of CM J.B.Patnaik in presence of Governer B. Satyanarayan Reddy on 15.03.1995.JPG"
                    alt="JBP as Chief Minister"
                    fill
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-semibold text-[#272727]">
                  The Complete Vision
                </h3>
                <p className="text-neutral-600 text-base leading-7">
                  Through his three tenures as Chief Minister, Janaki Ballav
                  Patnaik transformed Odisha into a state that balanced
                  industrial growth with cultural preservation, infrastructure
                  development with social welfare, and modern institutions with
                  traditional values. His cumulative tenure of over 14 years
                  remains one of the longest in Odisha's history, a testament to
                  the trust people placed in his leadership and vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governorship Section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Governor" highlight="of Assam" />

          <div className="mb-8">
            <p className="text-center text-neutral-400 text-lg leading-8 max-w-4xl mx-auto">
              {/* In the twilight of his career (2009–2014), he served as the
              Governor of Assam. Far from a ceremonial figurehead, he became a
              proactive "People's Governor." */}
              From 2009 to 2014, he served as the Governor of Assam, where he played an active and engaged role, earning recognition as a People’s Governor rather than a ceremonial figure.
            </p>
          </div>

          <div className="flex items-start gap-12 max-lg:flex-col">
            <div className="flex-shrink-0 max-lg:w-full">
              <div className="relative w-[400px] h-[350px] max-lg:w-full max-lg:h-[300px]">
                <ImageWithFallback
                  src="/images/legacy/Governor Janaki Ballav Patnaik taking the Oath of Office.jpg"
                  alt="JBP as Governor of Assam"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>

            <div className="flex-1 space-y-6">
              <div className="inline-block px-4 py-2 bg-sky-100 text-sky-600 rounded-full text-sm font-medium mb-2">
                2009 - 2014
              </div>
              <h3 className="text-2xl font-semibold text-[#272727]">
                25th Governor of Assam: A Statesman's Healing Touch
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                  <h4 className="text-lg font-semibold text-[#272727] mb-2">
                    Social Reformer
                  </h4>
                  <p className="text-neutral-600 text-sm leading-6">
                    In a historic move, he led a group of women into the
                    Patbausi Satra, breaking a centuries-old taboo that barred
                    women from entering the sanctum sanctorum.
                  </p>
                </div>
                <div className="p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                  <h4 className="text-lg font-semibold text-[#272727] mb-2">
                    Cultural Bridge
                  </h4>
                  <p className="text-neutral-600 text-sm leading-6">
                    He revived the ancient spiritual link between Odisha and
                    Assam, celebrating the legacy of Srimanta Sankardeva. A
                    monumental testament is the Jagannath Temple in Dibrugarh,
                    which was built through his dedicated efforts, replicating
                    the architectural grandeur of the Puri temple.
                  </p>
                </div>
                <div className="p-5 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 md:col-span-2">
                  <h4 className="text-lg font-semibold text-[#272727] mb-2">
                    Peacekeeper
                  </h4>
                  <p className="text-neutral-600 text-sm leading-6">
                    His tenure is credited with improving the security scenario
                    in Assam, as he actively engaged with insurgent groups to
                    bring them to the negotiating table.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Life Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Personal Life" highlight="& Values" />

          <div className="mb-8 text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-[#272727] mb-4">
              The Sage in Power
            </h3>
            <p className="text-neutral-500 text-lg leading-8 italic">
              "Service to the nation is the only philosophy of my life."
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1 mb-12">
            {/* Image */}
            {/* <div className="relative w-full h-[500px] max-lg:h-[400px]">
              <ImageWithFallback
                src="/images/drive/With Fakir Harichandan.jpg"
                alt="JBP Personal Life"
                fill
                className="rounded-xl object-cover"
              />
            </div> */}

            {/* Key Highlights Cards */}
            {/* <div className="grid grid-cols-1 gap-4">
              {personalHighlights.map((item) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-xl border-2 border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-sky-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-sky-50 to-sky-100 text-sky-600 ring-2 ring-sky-100 transition-all duration-300 group-hover:ring-sky-300 group-hover:scale-110">
                        <item.icon className="text-2xl" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-[#272727] mb-2 group-hover:text-sky-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-neutral-600 leading-7">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Detailed Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-12 bg-sky-500 rounded-full"></div>
                <h4 className="text-2xl font-bold text-[#272727]">
                  A Man of Principles
                </h4>
              </div>
              <p className="text-neutral-600 leading-7 mb-4">
                {/* J.B. Patnaik was known for his composure and dignity. Even in
                the face of harsh political criticism, he maintained the decorum
                of a statesman, believing that "work speaks louder than words."
                He navigated the corridors of power with the discipline of a
                yogi, practicing Pranayama and swimming daily until the very
                end. */}
                J.B. Patnaik was known for his composure and dignity in public life. Even amid strong political criticism, he upheld the decorum of a statesman and remained guided by a clear sense of right and wrong. His decisions were shaped by conviction rather than convenience, and he believed that consistent work, not rhetoric, was the true measure of leadership.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-12 bg-purple-500 rounded-full"></div>
                <h4 className="text-2xl font-bold text-[#272727]">
                  Writer & Intellectual
                </h4>
              </div>
              <p className="text-neutral-600 leading-7">
                Beyond the files of governance, he was a literary giant. He was
                the founder-editor of the monthly literary magazine Paurusha. A
                profound Sanskrit scholar, he won the Sahitya Akademi Award for
                his translation of Bankim Chandra Chattopadhyay's novels into
                Odia. He also translated the Ramayana, Mahabharata, and Bhagavad
                Gita into lucid Odia prose, making the epics accessible to the
                common man.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-12 bg-green-500 rounded-full"></div>
                <h4 className="text-2xl font-bold text-[#272727]">
                  Gandhian Values & Service to People
                </h4>
              </div>
              <p className="text-neutral-600 leading-7">
                A lifelong Gandhian, he wore Khadi and spun the charkha in his
                youth. His philosophy was simple: "Service to the nation is the
                only philosophy of my life." Whether resolving the grievances of
                temple servitors in Puri or visiting flood-hit villages, he
                remained accessible and rooted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy & Impact Section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Lasting" highlight="Legacy" />

          {/* Legacy Categories */}
          <div className="space-y-6">
            {legacyCategories.map((category) => (
              <div key={category.id} className="space-y-6">
                {/* Category Header */}
                <div
                  className="flex items-center justify-between p-5 rounded-lg cursor-pointer transition-all duration-200 hover:bg-gray-50 border border-gray-200"
                  onClick={() =>
                    setExpandedCategory(
                      expandedCategory === category.id ? null : category.id
                    )
                  }
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div
                        className={`p-2.5 rounded-lg bg-gradient-to-br ${category.color}`}
                      >
                        <category.icon className="text-2xl text-[#272727]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#272727]">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                  <div className="text-sky-500 transition-all duration-200">
                    {expandedCategory === category.id ? (
                      <FiChevronDown className="text-xl" />
                    ) : (
                      <FiChevronRight className="text-xl" />
                    )}
                  </div>
                </div>

                {/* Category Achievements Grid */}
                {expandedCategory === category.id && (
                  <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1 animate-in slide-in-from-top-5 duration-300">
                    {category.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      >
                        {achievement.image && (
                          <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                            <ImageWithFallback
                              src={achievement.image}
                              alt={achievement.title}
                              fill
                              className="rounded-t-xl group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        )}
                        <div className="p-5 space-y-2">
                          <h4 className="text-lg font-semibold text-[#272727] group-hover:text-sky-600 transition-colors">
                            {achievement.title}
                          </h4>
                          <p className="text-neutral-500 text-sm leading-6">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Conclusion Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-sky-500 to-sky-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <h2 className="text-4xl font-bold text-white mb-6 max-md:text-3xl">
              A Legacy That Lives On
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-sky-50 text-lg leading-8 text-center">
              Shree Janaki Ballav Patnaik passed away on April 21, 2015, in Tirupati,
              fittingly after attending a convocation of Sanskrit scholars. He
              left behind a state that was unrecognizable from the one he
              inherited—endowed with major industries, a thriving capital city,
              and a revived cultural identity.
            </p>
            <div className="pt-6 border-t border-sky-400/30">
              <p className="text-white text-xl leading-8 font-medium italic">
                He is remembered today not just as a politician, but as a
                Renaissance Man—the "Scholar-Statesman" who taught Odisha to
                dream of industrial might while keeping its feet firmly planted
                in its glorious heritage.
              </p>
            </div>
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
        @keyframes slide-in-from-top-5 {
          from {
            opacity: 0;
            transform: translateY(-1.25rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-in {
          animation: slide-in-from-top-5 0.3s ease-out;
        }
      `}</style>
    </main>
  );
}
