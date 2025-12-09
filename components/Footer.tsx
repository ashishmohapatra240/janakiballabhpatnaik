import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-white border-t border-zinc-300">
        <div className="max-w-7xl mx-auto py-24 max-md:py-12" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <div className="flex justify-between items-start gap-12 max-lg:flex-col mb-12">
            {/* Left Column - Logo and Description */}
            <div className="w-[484px] flex flex-col gap-3 max-lg:w-full">
              <h3 className="text-2xl font-bold text-[#272727] leading-9">
                Janaki Ballav Patnaik
              </h3>
              <p className="text-base text-neutral-400 font-normal">
                Janaki Ballabh Patnaik (3 January 1927 – 21 April 2015) was an Indian politician who had been 25th Governor of Assam from 2009 to 2014.
              </p>
            </div>

            <div className="flex justify-start items-start gap-12 max-md:flex-col">
              {/* Platform Links */}
              <div className="w-52 flex flex-col gap-2">
                <h4 className="text-xl font-normal text-[#272727] capitalize leading-8">
                  Platform
                </h4>
                <div className="flex flex-col gap-2">
                  <Link href="/" className="text-base text-neutral-400 hover:text-sky-500 transition-colors leading-6">
                    Home
                  </Link>
                  <Link href="/legacy" className="text-base text-neutral-400 hover:text-sky-500 transition-colors leading-6">
                    Life and Legacy
                  </Link>
                  <Link href="/literature" className="text-base text-neutral-400 hover:text-sky-500 transition-colors leading-6">
                    Literature and Philosophy
                  </Link>
                  <Link href="/anniversary" className="text-base text-neutral-400 hover:text-sky-500 transition-colors leading-6">
                    100 years of the Legend
                  </Link>
                </div>
              </div>

              {/* Contact */}
              <div className="w-52 flex flex-col gap-2">
                <h4 className="text-xl font-normal text-[#272727] capitalize leading-8">
                  Get In Touch
                </h4>
                <div className="flex flex-col gap-7">
                  <div className="flex flex-col gap-1">
                    <a href="mailto:info@janakiballavpatnaik.in" className="text-base text-neutral-400 hover:text-sky-500 transition-colors leading-6">
                      info@janakiballavpatnaik.in
                    </a>
                    <a href="tel:+919124999144" className="text-base text-neutral-400 hover:text-sky-500 transition-colors leading-6">
                      +91 9124999144
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <a href="#" aria-label="Instagram" className="text-[#272727] hover:text-sky-500 transition-colors">
                      <Instagram size={24} />
                    </a>
                    <a href="#" aria-label="Facebook" className="text-[#272727] hover:text-sky-500 transition-colors">
                      <Facebook size={24} />
                    </a>
                    <a href="#" aria-label="Twitter" className="text-[#272727] hover:text-sky-500 transition-colors">
                      <Twitter size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-zinc-300 pt-4 flex justify-center items-center">
            <p className="text-center text-base text-neutral-400 font-instrument-sans leading-6">
              Copyright © 2025 Janaki Ballav Patnaik. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

