"use client";

import Image from "next/image";

const galleryImages = [
  { id: 1, src: "/images/contributions/1.png", alt: "Contribution 1" },
  { id: 2, src: "/images/contributions/2.png", alt: "Contribution 2" },
  { id: 3, src: "/images/contributions/3.png", alt: "Contribution 3" },
  { id: 4, src: "/images/contributions/4.png", alt: "Contribution 4" },
  { id: 5, src: "/images/contributions/5.png", alt: "Contribution 5" },
  { id: 6, src: "/images/contributions/6.png", alt: "Contribution 6" },
  {
    id: 7,
    src: "/images/drive/Swearing in ceremoney of CM J.B.Patnaik in presence of Governer B. Satyanarayan Reddy on 15.03.1995.JPG",
    alt: "Swearing in ceremony 1995",
  },
  {
    id: 8,
    src: "/images/drive/Swearing in ceremoney of CMJ.B.Patnaik  in presence of Governer B.N. pande on 10.03.1985.jpg",
    alt: "Swearing in ceremony 1985",
  },
  {
    id: 9,
    src: "/images/drive/15th Convocation of RSVP_Photo.png",
    alt: "15th Convocation of RSVP",
  },
  { id: 10, src: "/images/drive/Book Fair.png", alt: "Book Fair" },
  {
    id: 11,
    src: "/images/drive/Ekamra Pustk Mela-14_.png",
    alt: "Ekamra Pustk Mela",
  },
  { id: 12, src: "/images/drive/At Srimandir-1.png", alt: "At Srimandir" },
  {
    id: 13,
    src: "/images/drive/With Fakir Harichandan.jpg",
    alt: "With Fakir Harichandan",
  },
  { id: 14, src: "/images/drive/DSC07805.JPG", alt: "JBP Event" },
  { id: 15, src: "/images/drive/DSC07844.JPG", alt: "JBP Event" },
];

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

export default function VisualGallery() {
  return (
    <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Visual" highlight="Gallery" />

        <p className="text-center text-neutral-400 text-base mb-12 max-w-2xl mx-auto">
          {/* A visual showcase of J.B. Patnaik's contributions and the lasting
          impact of his development initiatives across Odisha. */}
          A visual showcase of J.B. Patnaik’s contributions and their lasting impact.
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
  );
}


