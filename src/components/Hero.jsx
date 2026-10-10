import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import MalaiThoranam from './MalaiThoranam';

export default function Hero({ heroImage }) {
  // Main Muhurtham Date & Time Target: 25 October 2026 07:30:00 AM
  const muhurthamTargetDate = new Date('2026-10-25T07:30:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = muhurthamTargetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="pt-0 pb-12 text-center relative bg-[#F6F3ED] overflow-hidden">
      
      {/* Traditional Festive Malai & Mango Leaf Thoranam Across Top */}
      <MalaiThoranam />

      <div className="container mx-auto px-4">
        
        {/* Groom & Bride Info with Parents & Native Places */}
        <div className="mb-6 space-y-4 max-w-2xl mx-auto hero-entrance-delay-1">
          
          {/* Groom Card */}
          <div className="p-3.5 bg-[#FAF8F5] border border-[#E6DDD0] rounded shadow-xs">
            <h1 className="font-serif-title text-2xl sm:text-4xl font-normal text-[#3A2E28] tracking-[0.2em]">
              D. DULASIRAM
            </h1>
            <p className="text-xs font-sans text-[#6B5B52] font-semibold mt-0.5">
              B.E. (ECE) • Data Analyst, Amber Group, Coimbatore
            </p>
            <p className="text-xs font-serif-body italic text-[#7A6455] mt-1">
              Son of <span className="font-semibold text-[#3A2E28]">Mr. Dhanasekaran & Mrs. Sulochana</span>
            </p>
          </div>

          <div className="text-xs font-serif-body italic text-[#C5A880] font-bold tracking-widest uppercase">
            WEDS
          </div>

          {/* Bride Card */}
          <div className="p-3.5 bg-[#FAF8F5] border border-[#E6DDD0] rounded shadow-xs">
            <h1 className="font-serif-title text-2xl sm:text-4xl font-normal text-[#3A2E28] tracking-[0.2em]">
              S. KIRUPAKARI
            </h1>
            <p className="text-xs font-sans text-[#6B5B52] font-semibold mt-0.5">
              B.E. (CSE)
            </p>
            <p className="text-xs font-serif-body italic text-[#7A6455] mt-1">
              Daughter of <span className="font-semibold text-[#3A2E28]">Mr. Sivakumar & Mrs. Dhanalakshmi</span>
            </p>
          </div>

        </div>

        {/* Hero Image Frame */}
        <div className="max-w-2xl md:max-w-3xl mx-auto my-6 p-3 bg-[#FFFFFF] border border-[#E6DDD0] shadow-lg rounded-sm hero-entrance-delay-2">
          <div className="aspect-[4/3] overflow-hidden">
            <picture>
              <source srcSet="/images/wedding_hero_banner_enhanced.webp" type="image/webp" />
              <img 
                src={heroImage || "/images/wedding_hero_banner_enhanced.jpg"} 
                alt="Dulasiram & Kirupakari Temple Photo" 
                className="w-full h-full object-cover object-[center_20%] contrast-[1.02] brightness-[1.01]"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
          </div>
        </div>

        {/* Save the Date & Single Clean Countdown Timer */}
        <div className="max-w-xl mx-auto my-8 p-6 sandal-card hero-entrance-delay-3">
          
          <span className="text-xs font-serif-title font-bold tracking-[0.2em] text-[#C5A880] uppercase block mb-1">
            SAVE THE DATE
          </span>
          <span className="text-base font-sans font-bold text-[#3A2E28] block mb-2">
            Sunday, 25-October-2026
          </span>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#FAF8F5] border border-[#C5A880] text-[#3A2E28] text-[11px] font-sans font-semibold uppercase tracking-wider mb-4 rounded">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            Subhamuhurtham: 7:30 AM – 9:00 AM
          </div>

          <div className="grid grid-cols-4 gap-3 text-center pt-3 border-t border-[#E6DDD0]">
            <div className="p-2 border-r border-[#D8C8B5]/50">
              <span className="block text-2xl sm:text-3xl font-serif-title text-[#3A2E28]">{timeLeft.days}</span>
              <span className="text-[10px] text-[#6B5B52] uppercase tracking-widest">Days</span>
            </div>
            <div className="p-2 border-r border-[#D8C8B5]/50">
              <span className="block text-2xl sm:text-3xl font-serif-title text-[#3A2E28]">{timeLeft.hours}</span>
              <span className="text-[10px] text-[#6B5B52] uppercase tracking-widest">Hours</span>
            </div>
            <div className="p-2 border-r border-[#D8C8B5]/50">
              <span className="block text-2xl sm:text-3xl font-serif-title text-[#3A2E28]">{timeLeft.minutes}</span>
              <span className="text-[10px] text-[#6B5B52] uppercase tracking-widest">Mins</span>
            </div>
            <div className="p-2">
              <span className="block text-2xl sm:text-3xl font-serif-title text-[#3A2E28]">{timeLeft.seconds}</span>
              <span className="text-[10px] text-[#6B5B52] uppercase tracking-widest">Secs</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
