"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

function ImageWithFallback({
  src,
  alt,
  className = "",
  fill = false,
}: {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
}) {
  return (
    <div
      className={`relative ${
        fill ? "w-full h-full" : ""
      } bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center overflow-hidden`}
    >
      <span className="text-gray-500 absolute z-0">Image</span>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        className={`object-cover z-10 ${className}`}
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}

function ContributionCard({
  title,
  description,
  items,
  imageSrc,
  imageAlt,
  reverse = false,
}: {
  title: string;
  description: string;
  items: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex items-start gap-12 max-lg:flex-col ${
        reverse ? "max-lg:flex-col" : ""
      }`}
    >
      <div
        className={`flex-shrink-0 max-lg:w-full ${
          reverse ? "order-2 max-lg:order-1" : ""
        }`}
      >
        <div className="relative w-[450px] h-[350px] max-lg:w-full max-lg:h-[300px]">
          <ImageWithFallback
            src={imageSrc}
            alt={imageAlt}
            fill
            className="rounded-lg"
          />
        </div>
      </div>

      <div
        className={`flex-1 space-y-4 ${
          reverse ? "order-1 max-lg:order-2" : ""
        }`}
      >
        <h3 className="text-2xl font-semibold text-[#272727]">{title}</h3>
        <p className="text-neutral-400 text-base leading-7">{description}</p>

        <ul className="space-y-3 mt-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-neutral-600 text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const galleryImages = [
  { id: 1, src: "/images/contributions/1.png", alt: "Contribution 1" },
  { id: 2, src: "/images/contributions/2.png", alt: "Contribution 2" },
  { id: 3, src: "/images/contributions/3.png", alt: "Contribution 3" },
  { id: 4, src: "/images/contributions/4.png", alt: "Contribution 4" },
  { id: 5, src: "/images/contributions/5.png", alt: "Contribution 5" },
  { id: 6, src: "/images/contributions/6.png", alt: "Contribution 6" },
];

export default function ContributionsPage() {
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
                  Contributions to
                  <br />
                </span>
                <span className="font-normal">Modern Odisha</span>
              </h1>

              <p className="max-w-[584px] text-neutral-400 text-base font-normal leading-6 max-lg:max-w-full">
                During his tenure as Chief Minister spanning over 13 years,
                Janaki Ballabh Patnaik transformed Odisha from a primarily
                agrarian economy into a state with significant industrial and
                infrastructural growth. His visionary policies laid the
                foundation for the modern Odisha we see today.
              </p>

              <div className="flex gap-4 max-lg:justify-center flex-wrap">
                {[
                  { value: "13+", label: "Years as CM" },
                  { value: "1000+", label: "Projects Initiated" },
                  { value: "30", label: "Districts Served" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="px-6 py-4 rounded-xl border border-slate-200 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1"
                  >
                    <p className="text-[#0ea5e9] text-2xl font-bold tracking-tight">
                      {stat.value}
                    </p>
                    <p className="text-neutral-500 text-sm font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0 max-lg:w-full">
              <div className="relative w-[456px] h-[500px] max-lg:w-full max-lg:h-[400px]">
                <ImageWithFallback
                  src="/images/contributions/6.png"
                  alt="JBP Contributions to Odisha"
                  fill
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Development Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Infrastructure" highlight="Development" />

          <ContributionCard
            title="Building the Foundation of Modern Odisha"
            description="J.B. Patnaik understood that robust infrastructure was essential for economic growth. Under his leadership, Odisha witnessed unprecedented development in roads, bridges, and urban infrastructure."
            items={[
              "Construction of major highways connecting all district headquarters",
              "Development of Bhubaneswar as a modern capital city",
              "Building of bridges over major rivers including Mahanadi",
              "Expansion of electricity grid to rural areas",
              "Modernization of ports and improvement of connectivity",
            ]}
            imageSrc="/images/contributions/2.png"
            imageAlt="Infrastructure Development"
          />
        </div>
      </section>

      {/* Education & Healthcare Section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Education" highlight="& Healthcare" />

          <div className="grid grid-cols-2 gap-12 max-lg:grid-cols-1">
            {/* Education */}
            <div className="space-y-6">
              <div className="relative w-full h-[250px]">
                <ImageWithFallback
                  src="/images/contributions/3.png"
                  alt="Education Initiatives"
                  fill
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-semibold text-[#272727]">
                Educational Excellence
              </h3>
              <p className="text-neutral-400 text-base leading-7">
                Believing that education was the key to progress, J.B. Patnaik
                established numerous educational institutions across Odisha. His
                focus on higher education and technical training created
                opportunities for generations.
              </p>
              <ul className="space-y-2">
                {[
                  "Establishment of new universities and colleges",
                  "Expansion of primary education to remote areas",
                  "Setting up technical and professional institutes",
                  "Scholarships for underprivileged students",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-neutral-600 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Healthcare */}
            <div className="space-y-6">
              <div className="relative w-full h-[250px]">
                <ImageWithFallback
                  src="/images/contributions/4.png"
                  alt="Healthcare Initiatives"
                  fill
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-semibold text-[#272727]">
                Healthcare for All
              </h3>
              <p className="text-neutral-400 text-base leading-7">
                J.B. Patnaik prioritized healthcare, especially for rural
                populations. His initiatives brought medical facilities closer
                to the people and improved public health outcomes significantly.
              </p>
              <ul className="space-y-2">
                {[
                  "Construction of district hospitals and health centers",
                  "Mobile health units for remote tribal areas",
                  "Medical colleges to train local doctors",
                  "Programs for maternal and child health",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-neutral-600 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Growth Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Industrial" highlight="Growth" />

          <ContributionCard
            title="Transforming Odisha's Economy"
            description="J.B. Patnaik laid the groundwork for Odisha's industrial revolution. His policies attracted major investments and transformed the state into an industrial hub."
            items={[
              "Attraction of major steel and aluminum industries",
              "Development of industrial corridors",
              "Establishment of industrial training institutes",
              "Creation of Special Economic Zones (SEZs)",
              "Promotion of mineral-based industries leveraging Odisha's rich resources",
            ]}
            imageSrc="/images/contributions/5.png"
            imageAlt="Industrial Growth"
            reverse
          />

          <div className="mt-12 grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            {[
              { label: "Steel Plants", value: "Major" },
              { label: "Aluminum Smelters", value: "Multiple" },
              { label: "Thermal Power", value: "Expanded" },
              { label: "Mining Sector", value: "Developed" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-gray-100 text-center"
              >
                <p className="text-sky-500 text-xl font-bold">{stat.value}</p>
                <p className="text-neutral-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Welfare Section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Social" highlight="Welfare" />

          <ContributionCard
            title="Empowering the Marginalized"
            description="True to his Gandhian principles, J.B. Patnaik implemented numerous programs for the welfare of marginalized communities, particularly tribal populations and economically weaker sections."
            items={[
              "Land reforms benefiting landless farmers",
              "Tribal welfare and development programs",
              "Women empowerment initiatives",
              "Housing schemes for the poor",
              "Food security programs for vulnerable populations",
            ]}
            imageSrc="/images/contributions/6.png"
            imageAlt="Social Welfare Programs"
          />
        </div>
      </section>

      {/* Cultural Preservation Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Cultural" highlight="Preservation" />

          <ContributionCard
            title="Champion of Odia Heritage"
            description="A writer and intellectual himself, J.B. Patnaik was deeply committed to preserving and promoting Odia culture, language, and heritage. His efforts strengthened Odisha's cultural identity."
            items={[
              "Promotion of Odia language in administration and education",
              "Support for traditional arts and crafts",
              "Preservation of historical monuments and temples",
              "Establishment of cultural institutions and academies",
              "Encouragement of Odia literature and performing arts",
            ]}
            imageSrc="/images/contributions/1.png"
            imageAlt="Cultural Preservation"
            reverse
          />
        </div>
      </section>

      {/* Rural Development Section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Rural" highlight="Development" />

          <ContributionCard
            title="Transforming Villages"
            description="Understanding that the majority of Odisha's population lived in villages, J.B. Patnaik focused extensively on rural development. His initiatives brought modern amenities and opportunities to rural areas."
            items={[
              "Expansion of irrigation facilities",
              "Rural electrification programs",
              "Construction of village roads",
              "Agricultural development and modern farming techniques",
              "Drinking water supply to villages",
            ]}
            imageSrc="/images/contributions/2.png"
            imageAlt="Rural Development"
          />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Visual" highlight="Gallery" />

          <p className="text-center text-neutral-400 text-base mb-12 max-w-2xl mx-auto">
            A visual showcase of J.B. Patnaik's contributions and the lasting
            impact of his development initiatives across Odisha.
          </p>

          <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full h-60 bg-gradient-to-br from-gray-200 to-gray-300">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 lg:px-8 bg-sky-500">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4 max-md:text-2xl">
            Explore More About JBP's Legacy
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Discover the life, journey, and literary works of Janaki Ballabh
            Patnaik - the visionary leader who shaped modern Odisha.
          </p>
          <div className="flex gap-4 justify-center max-md:flex-col max-md:items-center">
            <a
              href="/legacy"
              className="h-11 px-6 bg-white text-sky-500 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              View Life & Legacy
            </a>
            <a
              href="/literature"
              className="h-11 px-6 bg-transparent border border-white text-white rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              Explore Literature
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
