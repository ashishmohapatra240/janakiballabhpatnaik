"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-12 max-lg:flex-col max-lg:items-center">
          <div className="flex-1 space-y-6 max-lg:text-center max-lg:w-full">
            <h1 className="text-5xl text-[#272727] leading-[64px] max-md:text-3xl">
              <span className="font-semibold">
                Janaki Ballav Patnaik,
                <br />
              </span>
              <span className="font-normal">
                The Architect of Modern Odisha
              </span>
            </h1>

            <p className="max-w-[584px] text-neutral-400 text-base font-normal leading-6 max-lg:max-w-full">
              Janaki Ballabh Patnaik (3 January 1927 – 21 April 2015) was an
              Indian politician who had been 25th Governor of Assam from 2009 to
              2014.
            </p>

            <button className="h-11 px-6 bg-sky-500 rounded-lg cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center whitespace-nowrap max-lg:mx-auto">
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
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Portrait Image</span>
              </div>
              <Image
                src="/images/hero.png"
                alt="Janaki Ballav Patnaik"
                fill
                className="object-cover rounded-lg"
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
