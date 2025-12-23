"use client";
import Image from "next/image";

export default function Hero() {
  const handlePdfClick = () => {
    window.open("/100th-birth-anniversary", "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-12 max-lg:flex-col max-lg:items-center">
          <div className="flex-1 space-y-2 max-lg:text-center max-lg:w-full">
            <h1 className="text-5xl text-[#272727] leading-[64px] max-md:text-3xl font-bold">
              The Architect of Modern Odisha.
            </h1>

            <h2 className="text-xl text-[#272727] font-normal leading-8 max-md:text-lg">
              He built the state with steel, and preserved its soul with
              scripture.
            </h2>

            <p className="max-w-[584px] text-neutral-400 text-sm font-normal leading-6 max-lg:max-w-full">
              History remembers Janaki Ballav Patnaik as the man who woke a
              sleeping state. He was the rare leader who could command the
              assembly floor and translate the Mahabharata with equal mastery.
              From the roar of 1000 industries to the quiet revival of the Odia
              language, discover the story of the Scholar-Statesman who
              engineered the Odisha we live in today.
            </p>

            <button 
              onClick={handlePdfClick}
              className="h-11 px-6 bg-sky-500 rounded-lg cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center whitespace-nowrap max-lg:mx-auto mt-4"
            >
              <span className="text-white text-base font-normal capitalize leading-5">
                100
                <sup className="text-white text-base font-normal capitalize leading-5 top-[-0.2em] relative">
                  th
                </sup>{" "}
                Birth Anniversary
              </span>
            </button>
          </div>

          <div className="flex-shrink-0 max-lg:w-full">
            <div className="relative w-[456px] h-96 max-lg:w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-500">Portrait Image</span>
              </div>
              <Image
                src="/images/hero.png"
                alt="Janaki Ballav Patnaik"
                fill
                className="object-contain rounded-lg"
                priority
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
