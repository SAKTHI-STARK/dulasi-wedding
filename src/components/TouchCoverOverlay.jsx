import React, { useState } from 'react';
import { Music, Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function TouchCoverOverlay({ coverImage, onEnterInvitation }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = (e) => {
    e?.stopPropagation();
    if (isOpening) return;
    setIsOpening(true);

    try {
      // 1. Initial vibrant wedding confetti burst
      confetti({
        particleCount: 70,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#D4AF37', '#FFDF73', '#E63946', '#FFA500', '#F6F3ED']
      });

      // 2. Cascading celebratory pushpa vrishti (flower shower) from top corners
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 65,
          origin: { x: 0.05, y: 0.2 },
          colors: ['#E63946', '#D4AF37', '#FFA500', '#FFFDF0']
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 65,
          origin: { x: 0.95, y: 0.2 },
          colors: ['#E63946', '#D4AF37', '#FFA500', '#FFFDF0']
        });
      }, 350);
    } catch (err) {}

    setTimeout(() => {
      onEnterInvitation();
    }, 1100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#EFECE6] box-perspective overflow-hidden p-4 select-none">
      
      {/* 3D Left Box Door Panel (Supporting Floral Kolam Pattern - Names Removed) */}
      <div 
        className={`absolute top-0 left-0 bottom-0 w-1/2 bg-[#FAF8F5] border-r-2 border-[#D8C8B5] shadow-2xl flex items-center justify-end p-6 box-door-left preserve-3d z-20 ${
          isOpening ? 'box-animate-left' : ''
        }`}
      >
        <div className="opacity-20 transform -rotate-12 pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-64 h-64 text-[#C5A880]" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="100" cy="100" r="90" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="70" />
            <path d="M100 10 L100 190 M10 100 L190 100 M36 36 L164 164 M36 164 L164 36" />
          </svg>
        </div>
      </div>

      {/* 3D Right Box Door Panel (Supporting Floral Kolam Pattern - Names Removed) */}
      <div 
        className={`absolute top-0 right-0 bottom-0 w-1/2 bg-[#FAF8F5] border-l-2 border-[#D8C8B5] shadow-2xl flex items-center justify-start p-6 box-door-right preserve-3d z-20 ${
          isOpening ? 'box-animate-right' : ''
        }`}
      >
        <div className="opacity-20 transform rotate-12 pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-64 h-64 text-[#C5A880]" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="100" cy="100" r="90" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="70" />
            <path d="M100 10 L100 190 M10 100 L190 100 M36 36 L164 164 M36 164 L164 36" />
          </svg>
        </div>
      </div>

      {/* Center Ornate Whole Wedding Card */}
      <div className={`relative z-30 transition-all duration-700 max-w-sm sm:max-w-md w-full mx-auto my-auto ${
        isOpening ? 'opacity-0 scale-75 pointer-events-none' : 'opacity-100 scale-100'
      }`}>
        
        {/* Whole Card Frame with Luxury Double Gold Border */}
        <div 
          onClick={handleOpen}
          className="relative bg-[#FFFFFF] border-2 border-[#C5A880] outline outline-1 outline-[#D8C8B5] outline-offset-2 shadow-[0_20px_50px_rgba(58,46,40,0.25)] rounded-2xl p-2 sm:p-3 cursor-pointer group hover:shadow-[0_25px_60px_rgba(197,168,128,0.4)] transition-all duration-300"
        >
          {/* HD Card Cover Image Container */}
          <div className="rounded-xl overflow-hidden border border-[#E6DDD0] aspect-[3/4.2] bg-[#FAF8F5] relative">
            <img 
              src={coverImage || "/images/wedding_card_cover.png"} 
              alt="Dulasiram & Kirupakari HD Wedding Invitation Card" 
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />
          </div>

          {/* Compact Circular TAP Button (Heart Removed, Reduced Size) */}
          <div className="absolute bottom-5 sm:bottom-7 left-1/2 transform -translate-x-1/2 z-40 flex items-center justify-center">
            {/* Subtle Pulsing Gold Outer Ring */}
            <div className="absolute inset-0 rounded-full bg-[#C5A880]/30 animate-ping pointer-events-none" />

            <button
              onClick={handleOpen}
              className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#C5A880] shadow-[0_8px_20px_rgba(58,46,40,0.45)] flex flex-col items-center justify-center group-hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden"
              title="Tap to Open Invitation"
            >
              {/* Kolam Pattern Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-85 group-hover:scale-110 transition-transform duration-500"
                style={{ backgroundImage: 'url("/images/button_kolam_pattern.png")' }}
              />
              {/* Dark Gradient Overlay for Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A2E28]/90 via-[#3A2E28]/70 to-[#3A2E28]/80 group-hover:opacity-75 transition-opacity duration-300" />

              {/* Compact Button Text (No Heart Icon) */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center p-0.5">
                <span className="text-[9px] sm:text-[10px] font-serif-title font-bold tracking-[0.16em] text-[#FAF8F5] leading-tight drop-shadow-sm">
                  TAP TO
                </span>
                <span className="text-[7.5px] sm:text-[8.5px] font-sans font-bold tracking-widest text-[#E6C594] uppercase leading-tight drop-shadow-sm">
                  OPEN
                </span>
              </div>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
