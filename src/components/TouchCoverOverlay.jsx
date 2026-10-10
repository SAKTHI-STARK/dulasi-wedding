import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#EFECE6] box-perspective overflow-hidden p-3 sm:p-4 select-none">
      
      {/* Ambient Floating Rose Petals & Golden Sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {[
          { left: '8%', delay: 'petal-drift-1', size: 14, rot: 15 },
          { left: '22%', delay: 'petal-drift-2', size: 18, rot: 45 },
          { left: '38%', delay: 'petal-drift-3', size: 12, rot: -20 },
          { left: '58%', delay: 'petal-drift-4', size: 16, rot: 30 },
          { left: '74%', delay: 'petal-drift-5', size: 14, rot: -40 },
          { left: '88%', delay: 'petal-drift-6', size: 20, rot: 10 }
        ].map((petal, idx) => (
          <div 
            key={idx}
            className={`absolute top-0 ${petal.delay}`}
            style={{ left: petal.left }}
          >
            <svg 
              width={petal.size} 
              height={petal.size * 1.3} 
              viewBox="0 0 20 26" 
              className="drop-shadow-xs opacity-75"
              style={{ transform: `rotate(${petal.rot}deg)` }}
            >
              <defs>
                <linearGradient id={`petalGrad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF8DA1" />
                  <stop offset="60%" stopColor="#E91E63" />
                  <stop offset="100%" stopColor="#C2185B" />
                </linearGradient>
              </defs>
              <path 
                d="M10,0 C18,8 19,18 10,26 C1,18 2,8 10,0 Z" 
                fill={`url(#petalGrad-${idx})`} 
              />
            </svg>
          </div>
        ))}
      </div>

      {/* 3D Left Box Door Panel */}
      <div 
        className={`absolute top-0 left-0 bottom-0 w-1/2 bg-[#FAF8F5] border-r-2 border-[#D8C8B5] shadow-2xl flex flex-col items-end justify-between p-4 sm:p-8 box-door-left preserve-3d z-20 ${
          isOpening ? 'box-animate-left' : ''
        }`}
      >
        {/* Top Corner Ornate Kolam Arch */}
        <div className="w-24 sm:w-36 h-24 sm:h-36 opacity-35 text-[#C5A880] pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M0 0 L100 0 C70 30, 30 70, 0 100 Z" />
            <path d="M0 0 C40 10, 80 50, 90 90" strokeDasharray="3 3" />
            <circle cx="25" cy="25" r="8" strokeWidth="1" />
            <circle cx="25" cy="25" r="2" fill="currentColor" />
          </svg>
        </div>

        {/* Center Door Floral Mandala Motif */}
        <div className="opacity-25 transform -rotate-12 pointer-events-none mr-2 sm:mr-6">
          <svg viewBox="0 0 200 200" className="w-48 sm:w-72 h-48 sm:h-72 text-[#C5A880]" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="100" cy="100" r="90" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="70" />
            <circle cx="100" cy="100" r="45" strokeDasharray="2 3" />
            <path d="M100 10 L100 190 M10 100 L190 100 M36 36 L164 164 M36 164 L164 36" />
          </svg>
        </div>

        {/* Bottom Corner Kolam */}
        <div className="w-20 sm:w-28 h-20 sm:h-28 opacity-30 text-[#C5A880] pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M0 100 L100 100 C70 70, 30 30, 0 0 Z" />
          </svg>
        </div>
      </div>

      {/* 3D Right Box Door Panel */}
      <div 
        className={`absolute top-0 right-0 bottom-0 w-1/2 bg-[#FAF8F5] border-l-2 border-[#D8C8B5] shadow-2xl flex flex-col items-start justify-between p-4 sm:p-8 box-door-right preserve-3d z-20 ${
          isOpening ? 'box-animate-right' : ''
        }`}
      >
        {/* Top Corner Ornate Kolam Arch */}
        <div className="w-24 sm:w-36 h-24 sm:h-36 opacity-35 text-[#C5A880] pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2" className="transform scale-x-[-1]">
            <path d="M0 0 L100 0 C70 30, 30 70, 0 100 Z" />
            <path d="M0 0 C40 10, 80 50, 90 90" strokeDasharray="3 3" />
            <circle cx="25" cy="25" r="8" strokeWidth="1" />
            <circle cx="25" cy="25" r="2" fill="currentColor" />
          </svg>
        </div>

        {/* Center Door Floral Mandala Motif */}
        <div className="opacity-25 transform rotate-12 pointer-events-none ml-2 sm:ml-6">
          <svg viewBox="0 0 200 200" className="w-48 sm:w-72 h-48 sm:h-72 text-[#C5A880]" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="100" cy="100" r="90" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="70" />
            <circle cx="100" cy="100" r="45" strokeDasharray="2 3" />
            <path d="M100 10 L100 190 M10 100 L190 100 M36 36 L164 164 M36 164 L164 36" />
          </svg>
        </div>

        {/* Bottom Corner Kolam */}
        <div className="w-20 sm:w-28 h-20 sm:h-28 opacity-30 text-[#C5A880] pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2" className="transform scale-x-[-1]">
            <path d="M0 100 L100 100 C70 70, 30 30, 0 0 Z" />
          </svg>
        </div>
      </div>

      {/* Auspicious Traditional Brass Diyas on Left and Right Sides */}
      {/* Left Diya (Deepam) */}
      <div className={`hidden md:flex flex-col items-center absolute left-12 lg:left-24 top-1/2 -translate-y-1/2 z-30 pointer-events-none transition-all duration-700 ${
        isOpening ? 'opacity-0 scale-75' : 'opacity-100'
      }`}>
        <div className="relative flex flex-col items-center">
          {/* Diya Flame with Warm Glow & Flicker */}
          <div className="w-6 h-10 mb-[-4px] animate-flame-flicker">
            <svg viewBox="0 0 24 40" fill="none" className="w-full h-full">
              <path d="M12,0 C17,14 24,24 12,40 C0,24 7,14 12,0 Z" fill="#FFA000" />
              <path d="M12,12 C15,20 18,26 12,36 C6,26 9,20 12,12 Z" fill="#FFF176" />
              <circle cx="12" cy="28" r="4" fill="#FFFFFF" />
            </svg>
          </div>
          {/* Brass Diya Bowl */}
          <svg viewBox="0 0 60 40" className="w-14 h-9 text-[#C5A880]">
            <path d="M5,10 Q30,22 55,10 Q50,30 30,32 Q10,30 5,10 Z" fill="#D4AF37" stroke="#B5956A" strokeWidth="1" />
            <path d="M22,32 L38,32 L42,38 L18,38 Z" fill="#A68456" />
          </svg>
          <span className="text-[10px] font-serif-title tracking-widest text-[#9E8C80] uppercase mt-2 opacity-80">
            Shubham
          </span>
        </div>
      </div>

      {/* Right Diya (Deepam) */}
      <div className={`hidden md:flex flex-col items-center absolute right-12 lg:right-24 top-1/2 -translate-y-1/2 z-30 pointer-events-none transition-all duration-700 ${
        isOpening ? 'opacity-0 scale-75' : 'opacity-100'
      }`}>
        <div className="relative flex flex-col items-center">
          {/* Diya Flame with Warm Glow & Flicker */}
          <div className="w-6 h-10 mb-[-4px] animate-flame-flicker">
            <svg viewBox="0 0 24 40" fill="none" className="w-full h-full">
              <path d="M12,0 C17,14 24,24 12,40 C0,24 7,14 12,0 Z" fill="#FFA000" />
              <path d="M12,12 C15,20 18,26 12,36 C6,26 9,20 12,12 Z" fill="#FFF176" />
              <circle cx="12" cy="28" r="4" fill="#FFFFFF" />
            </svg>
          </div>
          {/* Brass Diya Bowl */}
          <svg viewBox="0 0 60 40" className="w-14 h-9 text-[#C5A880]">
            <path d="M5,10 Q30,22 55,10 Q50,30 30,32 Q10,30 5,10 Z" fill="#D4AF37" stroke="#B5956A" strokeWidth="1" />
            <path d="M22,32 L38,32 L42,38 L18,38 Z" fill="#A68456" />
          </svg>
          <span className="text-[10px] font-serif-title tracking-widest text-[#9E8C80] uppercase mt-2 opacity-80">
            Mangalam
          </span>
        </div>
      </div>

      {/* Center Ornate Whole Wedding Card Container */}
      <div className={`relative z-30 transition-all duration-700 max-w-sm sm:max-w-md w-full mx-auto my-auto flex flex-col items-center ${
        isOpening ? 'opacity-0 scale-75 pointer-events-none' : 'opacity-100 scale-100'
      }`}>

        {/* Auspicious Sacred Invocation Pill Header */}
        <div className="mb-2 sm:mb-3 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5]/90 border border-[#C5A880]/70 shadow-sm backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span className="text-[9.5px] sm:text-[10.5px] font-serif-title font-semibold tracking-[0.22em] text-[#3A2E28] uppercase">
              || ஸ்ரீ மஹா கணபதயே நமஹ ||
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
          </div>
        </div>
        
        {/* Whole Card Frame with Luxury Double Gold Border */}
        <div 
          onClick={handleOpen}
          className="relative w-full bg-[#FFFFFF] border-2 border-[#C5A880] outline outline-1 outline-[#D8C8B5] outline-offset-2 shadow-[0_22px_55px_rgba(58,46,40,0.28)] rounded-2xl p-2 sm:p-3 cursor-pointer group hover:shadow-[0_28px_65px_rgba(197,168,128,0.45)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        >
          {/* HD Card Cover Image Container */}
          <div className="rounded-xl overflow-hidden border border-[#E6DDD0] aspect-[3/4.2] bg-[#FAF8F5] relative">
            <img 
              src={coverImage || "/images/wedding_card_cover.png"} 
              alt="Dulasiram & Kirupakari HD Wedding Invitation Card" 
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />

            {/* Subtle Gold Light Sheen Sweep Effect Across the Card */}
            <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-[#FFFFFF]/35 to-transparent animate-gold-shimmer pointer-events-none" />
          </div>

          {/* Compact Circular TAP Button */}
          <div className="absolute bottom-5 sm:bottom-7 left-1/2 transform -translate-x-1/2 z-40 flex items-center justify-center">
            {/* Dual Pulsing Gold Outer Rings */}
            <div className="absolute inset-0 rounded-full bg-[#C5A880]/35 animate-ping pointer-events-none" />
            <div className="absolute -inset-1 rounded-full bg-[#D4AF37]/20 animate-pulse pointer-events-none" />

            <button
              onClick={handleOpen}
              className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#C5A880] shadow-[0_8px_22px_rgba(58,46,40,0.5)] flex flex-col items-center justify-center group-hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden"
              title="Tap to Open Invitation"
            >
              {/* Kolam Pattern Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-85 group-hover:scale-110 transition-transform duration-500"
                style={{ backgroundImage: 'url("/images/button_kolam_pattern.png")' }}
              />
              {/* Dark Gradient Overlay for Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A2E28]/90 via-[#3A2E28]/70 to-[#3A2E28]/80 group-hover:opacity-75 transition-opacity duration-300" />

              {/* Button Text */}
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
