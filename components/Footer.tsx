import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-zinc-300">
      <div
        className="max-w-7xl mx-auto py-16 max-md:py-12"
        style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Left Column - Logo and Description */}
          <div className="flex flex-col gap-4 max-md:order-1">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#272727] leading-tight">
              Shree Janaki Ballav Patnaik
            </h3>
          </div>

          {/* Middle Column - Platform Links */}
          <div className="flex flex-col gap-4 max-md:order-2">
            <h4 className="text-lg font-semibold text-[#272727] capitalize">
              Platform
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-base text-neutral-400 hover:text-sky-500 transition-colors leading-6"
              >
                Home
              </Link>
              <Link
                href="/legacy"
                className="text-base text-neutral-400 hover:text-sky-500 transition-colors leading-6"
              >
                Life and Legacy
              </Link>
              <Link
                href="/literature"
                className="text-base text-neutral-400 hover:text-sky-500 transition-colors leading-6"
              >
                Literature and Philosophy
              </Link>
              <Link
                href="/anniversary"
                className="text-base text-neutral-400 hover:text-sky-500 transition-colors leading-6"
              >
                100 years of the Legend
              </Link>
            </nav>
          </div>

          {/* Right Column - Contact */}
          <div className="flex flex-col gap-4 max-md:order-3">
            <h4 className="text-lg font-semibold text-[#272727] capitalize">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-6">
              <a
                href="mailto:info@janakiballavpatnaik.in"
                className="text-base text-neutral-400 hover:text-sky-500 transition-colors leading-6 break-all"
              >
                info@janakiballavpatnaik.in
              </a>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-[#272727] hover:text-sky-500 transition-colors p-1"
                >
                  <Instagram size={22} />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-[#272727] hover:text-sky-500 transition-colors p-1"
                >
                  <Facebook size={22} />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-[#272727] hover:text-sky-500 transition-colors p-1"
                >
                  <Twitter size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-300 pt-6">
          <p className="text-center text-sm text-neutral-400 font-instrument-sans leading-6">
            Copyright © 2025 Shree Janaki Ballav Patnaik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
