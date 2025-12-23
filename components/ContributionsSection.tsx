"use client";

import Image from "next/image";

const contributionCards = [
  {
    id: 1,
    title: "Janaki Ballav Patnaik will be remembered as a political Maverick",
    description:
      "Leaders cutting across party lines made a beeline for his residence in Bhubaneswar after the body was brought was brought from Tirupati.",
    image: "/images/contributions/1.png",
    category: "Politics",
  },
  {
    id: 2,
    title: "Janaki Ballav Patnaik Park, Khordha",
    description:
      "Leaders cutting across party lines made a beeline for his residence in Bhubaneswar after the body was brought was brought from Tirupati.",
    image: "/images/contributions/2.png",
    category: "Odisha",
  },
  {
    id: 3,
    title:
      "Remembering grand old man of Odisha politics on his 91st birth anniversary",
    description:
      "Leaders cutting across party lines made a beeline for his residence in Bhubaneswar after the body was brought was brought from Tirupati.",
    image: "/images/contributions/3.png",
    category: "Politics",
  },
  {
    id: 4,
    title: "Janaki Ballav Patnaik will be remembered as a political Maverick",
    description:
      "Leaders cutting across party lines made a beeline for his residence in Bhubaneswar after the body was brought was brought from Tirupati.",
    image: "/images/contributions/4.png",
    category: "Politics",
  },
  {
    id: 5,
    title: "Janaki Ballav Patnaik Park, Khordha",
    description:
      "Leaders cutting across party lines made a beeline for his residence in Bhubaneswar after the body was brought was brought from Tirupati.",
    image: "/images/contributions/5.png",
    category: "Odisha",
  },
  {
    id: 6,
    title:
      "Remembering grand old man of Odisha politics on his 91st birth anniversary",
    description:
      "Leaders cutting across party lines made a beeline for his residence in Bhubaneswar after the body was brought was brought from Tirupati.",
    image: "/images/contributions/6.png",
    category: "Politics",
  },
];

export default function ContributionsSection() {
  return (
    <section
      id="contributions"
      className="w-full min-h-screen py-16 bg-white"
      style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl text-[#272727] mb-10 max-md:text-2xl font-normal">
            The Essence of a Legacy
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-3 gap-5 mt-10 max-lg:grid-cols-2 max-md:grid-cols-1">
          {contributionCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-200 overflow-hidden pb-5"
            >
              {/* Image */}
              <div className="relative w-full h-60 bg-gradient-to-br from-gray-200 to-gray-300 rounded-t-2xl">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              {/* Content */}
              <div className="px-5 pt-5 space-y-2">
                <h3 className="text-lg font-medium text-neutral-800 font-instrument-sans">
                  {card.title}
                </h3>
                <p className="text-xs text-neutral-400 font-instrument-sans">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
