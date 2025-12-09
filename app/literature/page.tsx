"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FiAward,
  FiBookOpen,
  FiBookmark,
  FiFeather,
  FiFileText,
  FiFlag,
  FiHeart,
  FiLayers,
  FiPenTool,
  FiUsers,
} from "react-icons/fi";

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

function ImageWithFallback({ 
  src, 
  alt, 
  className = "",
  fill = false
}: { 
  src: string; 
  alt: string; 
  className?: string;
  fill?: boolean;
}) {
  return (
    <div
      className={`relative ${fill ? "w-full h-full" : ""} overflow-hidden rounded-lg bg-gradient-to-br from-gray-100 to-gray-200`}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        className={`object-cover ${className}`}
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}

function BookCard({
  title,
  year,
  description,
  imageSrc,
  imageAlt,
}: {
  title: string;
  year: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}) {
  return (
    <div className="p-6 bg-white/80 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
      <div className="flex items-start gap-4">
        <div className="relative w-14 h-16 rounded-lg overflow-hidden flex-shrink-0 shadow-inner bg-gradient-to-br from-sky-100 to-sky-200">
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            sizes="64px"
            className="object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2">
            <h4 className="text-lg font-semibold text-[#272727]">{title}</h4>
            <span className="px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide bg-sky-50 text-sky-600 rounded-full">
              {year}
            </span>
          </div>
          <p className="text-neutral-500 text-sm leading-6">{description}</p>
        </div>
      </div>
    </div>
  );
}

// Quote Card Component
function QuoteCard({ quote, context }: { quote: string; context: string }) {
  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-gray-100 relative">
      <span className="text-6xl text-sky-200 absolute top-2 left-4">"</span>
      <p className="text-[#272727] text-lg italic leading-8 relative z-10 mt-4">
        {quote}
      </p>
      <p className="text-neutral-400 text-sm mt-4">— {context}</p>
    </div>
  );
}

export default function LiteraturePage() {
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
                  Literature & Philosophy
                  <br />
                </span>
                <span className="font-normal">
                  of J.B. Patnaik
                </span>
              </h1>

              <p className="max-w-[584px] text-neutral-400 text-base font-normal leading-6 max-lg:max-w-full">
                Beyond his political achievements, Janaki Ballabh Patnaik was a prolific writer, 
                journalist, and intellectual. His literary works reflect his deep understanding of 
                society, politics, and the Odia cultural ethos. His writings continue to inspire 
                and guide generations of readers and scholars.
              </p>

              <div className="flex gap-4 max-lg:justify-center">
                <button className="h-11 px-6 bg-sky-500 rounded-lg cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center whitespace-nowrap">
                  <span className="text-white text-base font-normal capitalize leading-5">
                    Explore Works
                  </span>
                </button>
                <button className="h-11 px-6 border border-sky-500 text-sky-500 rounded-lg cursor-pointer hover:bg-sky-50 transition-colors flex items-center justify-center whitespace-nowrap">
                  <span className="text-base font-normal capitalize leading-5">
                    Read Quotes
                  </span>
                </button>
              </div>
            </div>

            <div className="flex-shrink-0 max-lg:w-full">
              <div className="relative w-[456px] h-[500px] max-lg:w-full max-lg:h-[400px]">
                <ImageWithFallback
                  src="/images/contributions/2.png"
                  alt="JBP as Writer and Intellectual"
                  fill
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="py-12 px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Legacy" highlight="Pillars" />
          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            {[
              {
                title: "Writer & Intellectual",
                description:
                  "Translated the Mahabharata, Ramayana, and Shrimad Bhagavat into Odia and earned the Sahitya Akademi (2001) and Odisha Sahitya Akademi (1996) awards for his translations and literary scholarship.",
                icon: FiBookOpen,
              },
              {
                title: "Gandhian Values",
                description:
                  "Championed non-violence, truth, and service-led governance, shaping welfare programmes around rural uplift, self-reliance, and inclusive growth inspired by Gandhian ideals.",
                icon: FiHeart,
              },
              {
                title: "Service to People",
                description:
                  "Served three terms as Odisha Chief Minister (1980–1989, 1995–1999) and later as Governor of Assam (2009–2014), driving initiatives like the '1000 industries in 1000 days' push to expand opportunity.",
                icon: FiUsers,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center mb-4">
                  <item.icon className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-[#272727] mb-2">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-6">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Literary Works Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Literary" highlight="Works" />

          <div className="max-w-4xl space-y-6 mx-auto text-center">
            <h3 className="text-2xl font-semibold text-[#272727]">A Prolific Author</h3>
            <p className="text-neutral-400 text-base leading-7">
              J.B. Patnaik authored numerous books, articles, and essays throughout his life. 
              His writings span various subjects including politics, society, culture, and his 
              personal experiences during India's freedom struggle. His literary contributions 
              have enriched Odia literature and provided valuable insights into the political 
              history of Odisha.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mt-8">
            <BookCard
              title="Asamapta Atmalipi"
              year="Autobiography"
              description="Janaki Ballav Patnaik's unfinished self-portrait, capturing his public journey and inner reflections."
              imageSrc="https://ritikart.com/cdn/shop/products/asamaptaatmalipi_130x.jpg?v=1647432780"
              imageAlt="Asamapta Atmalipi book cover"
            />
            <BookCard
              title="Goutam Buddha"
              year="Biography"
              description="A thoughtful retelling of the life and teachings of Gautam Buddha for Odia readers."
              imageSrc="https://www.odishashop.com/wp-content/uploads/2022/12/Odia-Book-Goutama-budha-From-Odishashop.jpg"
              imageAlt="Goutam Buddha book cover"
            />
            <BookCard
              title="Srimad Bhagabat"
              year="Translation"
              description="An Odia rendering of the Bhagavata Purana, reflecting his dedication to classical texts."
              imageSrc="https://ritikart.com/cdn/shop/products/srimadbhagabatfinalcopy_130x.jpg?v=1648290628"
              imageAlt="Srimad Bhagabat book cover"
            />
          </div>
        </div>
      </section>

      {/* Philosophy & Ideology Section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Philosophy" highlight="& Ideology" />
          
          <div className="grid grid-cols-2 gap-12 max-lg:grid-cols-1">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#272727]">Gandhian Principles</h3>
              <p className="text-neutral-400 text-base leading-7">
                J.B. Patnaik's political philosophy was deeply rooted in Gandhian principles. 
                He believed in non-violence, truth, and service to humanity as the cornerstones 
                of effective governance. His approach to politics was guided by these values 
                throughout his career.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Sarvodaya",
                    description: "Believed in the welfare of all sections of society"
                  },
                  {
                    title: "Swadeshi",
                    description: "Promoted local industries and self-reliance"
                  },
                  {
                    title: "Gram Swaraj",
                    description: "Advocated for village self-governance"
                  }
                ].map((principle, index) => (
                  <div key={index} className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="text-sky-500 font-semibold mb-1">{principle.title}</h4>
                    <p className="text-neutral-400 text-sm">{principle.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#272727]">Democratic Socialism</h3>
              <p className="text-neutral-400 text-base leading-7">
                As a Congress leader, J.B. Patnaik was committed to the ideals of democratic 
                socialism. He believed that economic development should be inclusive and benefit 
                all sections of society, especially the marginalized and underprivileged.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Inclusive Growth",
                    description: "Development that reaches the last person in the queue"
                  },
                  {
                    title: "Social Justice",
                    description: "Equal opportunities for all irrespective of caste or creed"
                  },
                  {
                    title: "Secularism",
                    description: "Unity in diversity and respect for all religions"
                  }
                ].map((principle, index) => (
                  <div key={index} className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="text-sky-500 font-semibold mb-1">{principle.title}</h4>
                    <p className="text-neutral-400 text-sm">{principle.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journalism Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Journalism" highlight="& Media" />
          
          <div className="flex items-center gap-12 max-lg:flex-col-reverse">
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-semibold text-[#272727]">Voice of the People</h3>
              <p className="text-neutral-400 text-base leading-7">
                Before entering full-time politics, J.B. Patnaik had a distinguished career in 
                journalism. He worked as an editor and columnist, using the power of the pen 
                to advocate for social causes and highlight issues affecting the common people 
                of Odisha.
              </p>
              <p className="text-neutral-400 text-base leading-7">
                His journalistic work during the pre-independence era was instrumental in 
                mobilizing public opinion for the freedom struggle. He continued to write 
                opinion pieces and columns throughout his political career, maintaining his 
                connection with the written word.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-6 max-md:grid-cols-1">
                <div className="p-4 bg-white rounded-lg border border-gray-100">
                  <p className="text-sky-500 font-bold text-xl">Editor</p>
                  <p className="text-neutral-400 text-sm">Leading Odia publications</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-100">
                  <p className="text-sky-500 font-bold text-xl">Columnist</p>
                  <p className="text-neutral-400 text-sm">Regular political commentary</p>
                </div>
              </div>
            </div>
            
            <div className="flex-shrink-0 max-lg:w-full">
              <div className="relative w-[400px] h-[350px] max-lg:w-full max-lg:h-[300px]">
                <ImageWithFallback
                  src="/images/contributions/1.png"
                  alt="JBP Journalism Work"
                  fill
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speeches & Oratory Section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Speeches" highlight="& Oratory" />
          
          <div className="flex items-start gap-12 max-lg:flex-col">
            <div className="flex-shrink-0 max-lg:w-full">
              <div className="relative w-[400px] h-[350px] max-lg:w-full max-lg:h-[300px]">
                <ImageWithFallback
                  src="/images/contributions/6.png"
                  alt="JBP Speaking at Events"
                  fill
                  className="rounded-lg"
                />
              </div>
            </div>
            
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl font-semibold text-[#272727]">A Master Orator</h3>
              <p className="text-neutral-400 text-base leading-7">
                J.B. Patnaik was renowned for his powerful oratory. His speeches in the 
                Legislative Assembly, Parliament, and public gatherings were marked by 
                eloquence, depth, and a command over both Odia and Hindi languages. His 
                ability to connect with audiences made him a compelling public speaker.
              </p>
              
              <div className="space-y-4">
                <QuoteCard
                  quote="Development without social justice is meaningless. Our progress must lift every citizen of Odisha."
                  context="Assembly Speech, 1985"
                />
                <QuoteCard
                  quote="The strength of Odisha lies in its culture, its people, and their unwavering spirit."
                  context="Public Address, Bhubaneswar"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Influence on Odia Literature Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Influence on" highlight="Odia Literature" />
          
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-neutral-400 text-lg leading-8">
              J.B. Patnaik's contributions to Odia literature extended beyond his own writings. 
              He actively supported and promoted Odia writers, established literary institutions, 
              and championed the cause of Odia language recognition.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            {[
              {
                icon: FiBookOpen,
                title: "Literary Patronage",
                description: "Supported Odia writers and poets through various initiatives and awards",
              },
              {
                icon: FiAward,
                title: "Sahitya Akademi",
                description: "Promoted Odia literature through state and national academies",
              },
              {
                icon: FiFeather,
                title: "Odia Journalism",
                description: "Strengthened Odia language media and journalism",
              },
              {
                icon: FiFlag,
                title: "Language Policy",
                description: "Advocated for Odia as medium of instruction in schools",
              },
              {
                icon: FiLayers,
                title: "Classical Status",
                description: "Contributed to the movement for classical language status for Odia",
              },
              {
                icon: FiPenTool,
                title: "Cultural Programs",
                description: "Organized literary festivals and cultural programs across Odisha",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-xl" />
                </div>
                <h4 className="text-xl font-semibold text-[#272727] mb-2">{item.title}</h4>
                <p className="text-neutral-400 text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Gallery Section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Publications" highlight="Gallery" />
          
          <p className="text-center text-neutral-400 text-base mb-12 max-w-2xl mx-auto">
            A showcase of J.B. Patnaik's published works, including books, articles, and 
            contributions to various publications over his illustrious career.
          </p>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative group">
              <div className="w-full h-[450px] max-md:h-[340px] overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-slate-100 to-white">
                <ImageWithFallback
                  src="/images/contributions/4.png"
                  alt="Janaki Ballabh Patnaik during a literary event"
                  fill
                  className="rounded-2xl group-hover:scale-[1.02] transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent rounded-2xl" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-3">
                  {[
                    { icon: FiAward, label: "Sahitya Akademi laureate" },
                    { icon: FiBookOpen, label: "25+ published works" },
                    { icon: FiFeather, label: "Voice for Odia readers" },
                  ].map((chip, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-2 px-3 py-2 bg-white/90 text-slate-700 rounded-lg shadow-sm"
                    >
                      <chip.icon className="text-sky-500" />
                      <span className="text-sm font-medium">{chip.label}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-[#272727]">Signature Works</h3>
                <p className="text-neutral-500">
                  Essays, translations, and policy writings that shaped discourse in Odisha and beyond.
                  Explore the diversity of his contributions spanning literature, governance, and culture.
                </p>
              </div>

              {/* Featured Publications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Political Essays",
                    type: "Book",
                    description: "Sharp commentaries on democracy, welfare, and governance.",
                    icon: FiFileText,
                  },
                  {
                    title: "Odia Editorials",
                    type: "Collection",
                    description: "Influential op-eds that amplified the Odia voice in national debates.",
                    icon: FiFeather,
                  },
                  {
                    title: "Freedom Memories",
                    type: "Memoir",
                    description: "Recollections from the independence movement and early public life.",
                    icon: FiBookmark,
                  },
                  {
                    title: "Development Vision",
                    type: "Policy Papers",
                    description: "Blueprints for inclusive growth, rural upliftment, and education.",
                    icon: FiLayers,
                  },
                ].map((pub, index) => (
                  <div
                    key={index}
                    className="p-5 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-11 h-11 rounded-lg bg-sky-50 text-sky-500 flex items-center justify-center">
                        <pub.icon className="text-xl" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#272727] leading-6">{pub.title}</h4>
                        <p className="text-sky-500 text-sm">{pub.type}</p>
                      </div>
                    </div>
                    <p className="text-neutral-500 text-sm leading-6">{pub.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#272727] mb-4 max-md:text-2xl">
            Continue Exploring
          </h2>
          <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
            Discover more about Janaki Ballabh Patnaik's remarkable life, his contributions 
            to Odisha, and his lasting legacy.
          </p>
          <div className="flex gap-4 justify-center max-md:flex-col max-md:items-center">
            <a href="/legacy" className="h-11 px-6 bg-sky-500 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center">
              View Life & Legacy
            </a>
            <a href="/contributions" className="h-11 px-6 border border-sky-500 text-sky-500 rounded-lg hover:bg-sky-50 transition-colors flex items-center justify-center">
              Explore Contributions
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
