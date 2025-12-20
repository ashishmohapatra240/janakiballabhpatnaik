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
                In 1980, Odisha was a land of immense potential but weighed down by economic stagnation. Janaki Ballav Patnaik entered with a mandate to transform this reality. His philosophy was rooted in a singular truth: "Poverty can only be fought with production." Over two transformative decades, he dismantled the inertia of the past, replacing it with a roadmap of aggressive industrialisation, social equity, and cultural pride.
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

      {/* Industrial Revolution Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Industrial" highlight="Revolution" />

          <ContributionCard
            title="The Golden Era: Shifting Odisha from Agrarian to Industrial Powerhouse"
            description="J.B. Patnaik is credited with shifting Odisha from an agrarian economy to an industrial powerhouse. His revolutionary '1000 Industries' policy sparked a wave of entrepreneurship and created a favorable climate for industrialization."
            items={[
              "Launched 'One Thousand Industries in One Thousand Days' with an investment target of Rs. 1000 crores",
              "Established massive industries including NALCO (Damanjodi & Angul), Paradeep Phosphates, Birla Tyres (Balasore), FACOR (Bhadrak), and the Ib Valley Thermal Power Plant",
              "Pioneered granting 'Industry Status' to non-traditional sectors like Hotels and the Film Industry, leading to a boom in tourism infrastructure and construction of Kalinga Studio",
              "Laid the groundwork for the IT revolution by establishing the Software Technology Park and Fortune Tower in Bhubaneswar, facilitating the entry of major companies like Infosys and Satyam",
            ]}
            imageSrc="/images/contributions/5.png"
            imageAlt="Industrial Revolution"
          />
        </div>
      </section>

      {/* Agriculture & Irrigation Section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Agriculture" highlight="& Irrigation" />

          <ContributionCard
            title="Transforming the Heartland: From Deficit to Granary"
            description="He fundamentally changed the state's agrarian landscape by treating agriculture with the same seriousness as industry and ensuring water security. In a pioneering move, his government granted agriculture the status of an industry, extending subsidies and incentives to farmers."
            items={[
              "Established APICOL (Agricultural Promotion and Investment Corporation of Odisha Limited) to provide technical guidance and financial support for agro-enterprises",
              "Transformed Odisha from a food-deficit state to a surplus one - groundnut productivity became the highest in the country, rice production increased significantly, and cash crops like cotton (in Kalahandi) and sugarcane were promoted",
              "Increased the state's irrigated land from 19% to 33%",
              "Completed the Upper Indravati Project for Kalahandi (irrigating over 1.25 lakh hectares) by securing alternative funding from Japan (OECF) and the Power Finance Corporation when the World Bank withdrew",
              "Replaced 100-year-old British-era weirs with modern barrages at Mahanadi (Jobra) and Birupa, introduced 'Creek Irrigation' technology for coastal areas, and drastically increased Lift Irrigation points",
            ]}
            imageSrc="/images/contributions/2.png"
            imageAlt="Agriculture & Irrigation"
            reverse
          />
        </div>
      </section>

      {/* Power & Energy Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Power" highlight="& Energy" />

          <ContributionCard
            title="Achieving Surplus: Capacity Explosion"
            description="Inheriting a power-deficit state (373 MW), he increased generation capacity six-fold, making Odisha a power-surplus state by 2000. His government was the first in India to implement comprehensive power sector reforms."
            items={[
              "Increased generation capacity six-fold from 373 MW, making Odisha a power-surplus state by 2000",
              "Established the Odisha Power Generation Corporation (OPGC) and commissioned the Ib Valley Thermal Power Plant",
              "Implemented comprehensive power sector reforms (Orissa Electricity Reform Act, 1995), unbundling the State Electricity Board and establishing the Odisha Electricity Regulatory Commission (OERC)",
            ]}
            imageSrc="/images/contributions/4.png"
            imageAlt="Power & Energy"
          />
        </div>
      </section>

      {/* Transport Infrastructure Section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Transport" highlight="Infrastructure" />

          <ContributionCard
            title="Bridging the Divide: Bridge Revolution"
            description="Constructed approximately 400 bridges, including critical ones over the Mahanadi (Mundali, Boudh, Sonepur) and its tributaries, integrating Coastal and Western Odisha. Also developed an all-weather port and constructed the New Jagannath Sadak."
            items={[
              "Constructed approximately 400 bridges, including critical ones over the Mahanadi (Mundali, Boudh, Sonepur) and its tributaries",
              "Integrated Coastal and Western Odisha through improved connectivity",
              "Developed an all-weather port",
              "Constructed New Jagannath Sadak - an alternative route connecting Puri district with southern Odisha",
            ]}
            imageSrc="/images/contributions/2.png"
            imageAlt="Transport Infrastructure"
            reverse
          />
        </div>
      </section>

      {/* Education, Science & Technical Training Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Education" highlight="Science & Technical Training" />

          <ContributionCard
            title="Holistic Vision: From Primary Schooling to Premier Technical Institutes"
            description="J.B. Patnaik's vision for education was holistic, ranging from primary schooling to premier technical institutes and scientific research. He personally intervened to build the state's technical infrastructure."
            items={[
              "Established premier technical institutions: College of Engineering and Technology (CET) within OUAT, engineering colleges at Sarang (IGIT), Choudwar, and Keonjhar",
              "Founded the Xavier Institute of Management, Bhubaneswar (XIMB) and the Nabakrushna Choudhury Centre for Development Studies",
              "Established the Pathani Samanta Planetarium, upgraded the Institute of Physics, and set up the Odisha Bigyan Academy and the Odisha Computer Application Centre (OCAC)",
              "Established Navodaya Vidyalayas in every district and declared primary school teachers as government servants to ensure quality at the grassroots level",
              "Massive expansion in ITIs and polytechnics ensured that there is 'no dearth of technical manpower in the State now'",
            ]}
            imageSrc="/images/contributions/3.png"
            imageAlt="Education Science & Technical Training"
          />
        </div>
      </section>

      {/* Culture, Heritage & Jagannath Cult Section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Culture" highlight="Heritage & Jagannath Cult" />

          <ContributionCard
            title="Preserving Odisha's Spiritual and Cultural Legacy"
            description="J.B. Patnaik successfully managed the Nabakalebara of 1996 (the only successful one in 400 years) and introduced the Hundi system to streamline temple finances. He fulfilled his dream of establishing the Sri Jagannath Sanskrit University in Puri."
            items={[
              "Successfully managed the Nabakalebara of 1996 (the only successful one in 400 years) and introduced the Hundi system to streamline temple finances",
              "Established the Sri Jagannath Sanskrit University in Puri to preserve Sanskrit learning",
              "Established the Odissi Research Centre to codify the dance form and launched the Konark Dance Festival, building the open-air auditorium against the backdrop of the Sun Temple",
            ]}
            imageSrc="/images/contributions/1.png"
            imageAlt="Culture Heritage & Jagannath Cult"
            reverse
          />
        </div>
      </section>

      {/* Language & Literature Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Language" highlight="& Literature" />

          <ContributionCard
            title="Championing Odia Language and Literary Excellence"
            description="A prolific writer and translator himself, J.B. Patnaik strictly enforced Odia as the official language in administration and promoted literary excellence across the state."
            items={[
              "Strictly enforced Odia as the official language in administration (1985), mandating its use in government files and introducing Odia typewriters",
              "A prolific writer and translator (translating the Ramayana, Mahabharata, and Bankim Chandra's novels)",
              "Established the Odisha Urdu Academy and promoted literary awards",
              "Encouraged the publishing industry by enhancing government grants for book purchases for rural libraries",
            ]}
            imageSrc="/images/contributions/1.png"
            imageAlt="Language & Literature"
          />
        </div>
      </section>

      {/* Social Welfare & Tribal Development Section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Social Welfare" highlight="& Tribal Development" />

          <ContributionCard
            title="Empowering the Marginalized and Tribal Communities"
            description="True to his Gandhian principles, J.B. Patnaik implemented numerous programs for the welfare of marginalized communities, particularly tribal populations and economically weaker sections."
            items={[
              "Launched the Economic Rehabilitation of Rural Poor (ERRP) scheme, providing income-generating assets (cashew orchards, pisciculture tanks) to the poorest families",
              "Strictly enforced reservation quotas (clearing backlogs in government jobs) and abolished exploitative taxes on forest produce like Sal leaves and Sabai grass",
              "Introduced rice at Rs. 2 per kg in tribal-majority blocks to prevent hunger",
              "Granted property rights to slum dwellers in Bhubaneswar, a humane policy unprecedented at the time",
            ]}
            imageSrc="/images/contributions/6.png"
            imageAlt="Social Welfare & Tribal Development"
            reverse
          />
        </div>
      </section>

      {/* Women's Empowerment Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Women's" highlight="Empowerment" />

          <ContributionCard
            title="Pioneering Women's Rights and Opportunities"
            description="J.B. Patnaik made Odisha the first state to make education free for girls from primary school up to the Post-Graduate level. He reserved 30% of government jobs for women and established the State Commission for Women (first in India)."
            items={[
              "Made Odisha the first state to make education free for girls from primary school up to the Post-Graduate level",
              "Reserved 30% of government jobs for women and appointed 5,000 female primary school teachers",
              "Established the State Commission for Women (first in India) and implemented the DWCRA scheme for economic independence",
            ]}
            imageSrc="/images/contributions/4.png"
            imageAlt="Women's Empowerment"
          />
        </div>
      </section>

      {/* Environment Section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Environment" highlight="Conservation" />

          <ContributionCard
            title="Protecting Odisha's Natural Heritage"
            description="J.B. Patnaik established 12 of the state's 18 wildlife sanctuaries and transformed Bhubaneswar into a garden city, demonstrating his commitment to environmental conservation alongside development."
            items={[
              "Established 12 of the state's 18 wildlife sanctuaries, including the Chandaka Elephant Sanctuary and Bhitarkanika National Park",
              "Established the State Pollution Prevention and Control Board to regulate industrial impact",
              "Transformed Bhubaneswar into a garden city by creating Ekamra Kanan (Regional Plant Resource Centre), Indira Gandhi Park, and Forest Park",
            ]}
            imageSrc="/images/contributions/2.png"
            imageAlt="Environment Conservation"
            reverse
          />
        </div>
      </section>

      {/* Tourism Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Tourism" highlight="Development" />

          <ContributionCard
            title="Building Odisha as a Premier Tourist Destination"
            description="By declaring hotels as an industry, J.B. Patnaik offered incentives that led to a boom in hotel construction. He aggressively developed and marketed the Puri-Konark-Bhubaneswar 'Golden Triangle' as a major international tourist destination."
            items={[
              "By declaring hotels as an industry, offered incentives that led to a boom in hotel construction and attracted major chains like The Oberoi",
              "Aggressively developed and marketed the Puri-Konark-Bhubaneswar 'Golden Triangle' as a major international tourist destination",
              "Improved air and rail connectivity (Neelachal Express) explicitly to support tourist inflow",
            ]}
            imageSrc="/images/contributions/5.png"
            imageAlt="Tourism Development"
          />
        </div>
      </section>

      {/* Sports Section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Sports" highlight="The Golden Legacy" />

          <ContributionCard
            title="Laying the Foundation for Odisha's Dominance in Sports"
            description="He laid the foundation for Odisha's dominance in sports, particularly hockey, by modernizing infrastructure and focusing on talent scouting. These hostels produced legendary Olympians like Dilip Tirkey, Lazarus Barla, and Jyoti Sunita Kullu."
            items={[
              "Plans were set afoot during his tenure to lay an astro turf for hockey in the Rourkela hostel, a crucial move for modernizing the game in the state",
              "Established SAI (Sports Authority of India) hostels for hockey in Sundargarh and Rourkela, producing legendary Olympians like Dilip Tirkey, Lazarus Barla, and Jyoti Sunita Kullu",
              "Created a separate Directorate of Sports to give focused attention to the sector",
              "Built the Kalinga Stadium in Bhubaneswar (taking corrective measures when initial designs were flawed) and the Jawaharlal Nehru Indoor Stadium in Cuttack (one of the largest in Asia at the time)",
            ]}
            imageSrc="/images/contributions/3.png"
            imageAlt="Sports Legacy"
            reverse
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
