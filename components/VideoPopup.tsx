"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function VideoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has seen the popup before
    const hasSeenPopup = sessionStorage.getItem("hasSeenVideoPopup");
    
    if (!hasSeenPopup) {
      // Small delay before showing popup for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenVideoPopup", "true");
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity"
        onClick={handleClose}
      />
      
      {/* Popup Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="relative bg-black rounded-lg shadow-2xl w-full max-w-4xl overflow-hidden animate-in fade-in zoom-in duration-300">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
            aria-label="Close popup"
          >
            <X size={24} className="text-white" />
          </button>

          {/* Video */}
          <div className="relative w-full aspect-video bg-black">
            <iframe
              src="https://www.youtube.com/embed/mw_N__jPW4w"
              title="Life Story of Janaki Ballav Patnaik"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
