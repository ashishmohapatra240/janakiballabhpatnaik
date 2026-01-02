"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram, Facebook, Twitter, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const handlePdfClick = () => {
    window.open("/100th-birth-anniversary", "_blank");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Section: Logo + Desktop Navigation */}
          <div className="flex items-center gap-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-xl font-bold text-[#272727] whitespace-nowrap"
              >
                Shree Janaki Ballav Patnaik
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className={`text-base ${
                  isActive("/") ? "font-bold text-sky-600" : "font-normal"
                } text-[#272727] hover:text-sky-500 transition-colors`}
              >
                Home
              </Link>
              <Link
                href="/legacy"
                className={`text-base ${
                  isActive("/legacy") ? "font-bold text-sky-600" : "font-normal"
                } text-[#272727] hover:text-sky-500 transition-colors`}
              >
                Legacy
              </Link>
              <Link
                href="/contributions"
                className={`text-base ${
                  isActive("/contributions")
                    ? "font-bold text-sky-600"
                    : "font-normal"
                } text-[#272727] hover:text-sky-500 transition-colors`}
              >
                Contributions
              </Link>
              <Link
                href="/the-scholar-statesman"
                className={`text-base ${
                  isActive("/the-scholar-statesman")
                    ? "font-bold text-sky-600"
                    : "font-normal"
                } text-[#272727] hover:text-sky-500 transition-colors`}
              >
                The Scholar Statesman
              </Link>
            </div>
          </div>

          {/* Right Section: Button + Socials */}
          <div className="hidden md:flex items-center gap-6">
            {/* <button 
              onClick={handlePdfClick}
              className="h-10 px-6 bg-sky-500 rounded-lg cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center whitespace-nowrap"
            >
              <span className="text-white text-sm font-medium capitalize">
                100
                <sup className="text-white text-xs top-[-0.2em] relative">
                  th
                </sup>{" "}
                Birth Anniversary
              </span>
            </button> */}

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/janakiballavpatnaik100/"
                aria-label="Instagram"
                className="text-[#272727] hover:text-[#2BA6E0] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/JanakiPatnaik100"
                aria-label="Facebook"
                className="text-[#272727] hover:text-[#2BA6E0] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.x.com/jbpatnaik100"
                aria-label="Twitter"
                className="text-[#272727] hover:text-[#2BA6E0] transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#272727] hover:text-sky-500 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <div className="flex flex-col gap-4 pt-4">
              <Link
                href="/"
                className={`text-base ${
                  isActive("/") ? "font-bold text-sky-600" : "font-normal"
                } text-[#272727] hover:text-sky-500 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/legacy"
                className={`text-base ${
                  isActive("/legacy") ? "font-bold text-sky-600" : "font-normal"
                } text-[#272727] hover:text-sky-500 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Legacy
              </Link>
              <Link
                href="/contributions"
                className={`text-base ${
                  isActive("/contributions")
                    ? "font-bold text-sky-600"
                    : "font-normal"
                } text-[#272727] hover:text-sky-500 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contributions
              </Link>
              <Link
                href="/the-scholar-statesman"
                className={`text-base ${
                  isActive("/the-scholar-statesman")
                    ? "font-bold text-sky-600"
                    : "font-normal"
                } text-[#272727] hover:text-sky-500 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                The Scholar Statesman
              </Link>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
              <button 
                onClick={handlePdfClick}
                className="h-10 w-full bg-sky-500 rounded-lg cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center"
              >
                <span className="text-white text-sm font-medium capitalize">
                  100
                  <sup className="text-white text-xs top-[-0.2em] relative">
                    th
                  </sup>{" "}
                  Birth Anniversary
                </span>
              </button>

              <div className="flex items-center gap-6 justify-center">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-[#272727] hover:text-[#2BA6E0] transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-[#272727] hover:text-[#2BA6E0] transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-[#272727] hover:text-[#2BA6E0] transition-colors"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
