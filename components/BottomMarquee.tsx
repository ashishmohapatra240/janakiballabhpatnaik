"use client";

import Marquee from 'react-fast-marquee';

export default function BottomMarquee() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50">
      <Marquee
        gradient={false}
        autoFill
        className="bg-black py-3 text-white text-base font-medium"
      >
        <span className="px-6">This site is under construction.</span>
      </Marquee>
    </div>
  );
}

