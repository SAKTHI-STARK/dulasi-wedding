import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Clock, MapPin, Share2 } from 'lucide-react';

export default function BookletViewer({ coverImage, coupleImage }) {
  const [currentPage, setCurrentPage] = useState(0);

  const bookletPages = [
    {
      id: 'cover',
      title: 'Cover',
      render: () => (
        <div className="flex flex-col items-center justify-center text-center h-full p-6 bg-[#FFFFFF] border border-[#E6DDD0] rounded-lg shadow-sm">
          <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#9E8C80] uppercase">Official Invitation Card</span>
          <h2 className="font-serif-title text-xl sm:text-2xl font-normal text-[#3A2E28] tracking-[0.2em] my-3">
            ROOPINI & SURIYA
          </h2>
          <p className="text-xs font-serif-body italic text-[#6B5B52] max-w-sm mb-4">
            With joyful hearts and blessings of our beloved family, we invite you to celebrate our marriage.
          </p>
          <div className="max-w-[220px] sm:max-w-[260px] p-1.5 bg-[#FAF8F5] border border-[#D8C8B5] shadow-sm my-2">
            <img src={coverImage || "/images/wedding_card_cover.png"} alt="Card Cover" className="w-full h-auto object-cover" />
          </div>
          <p className="text-[11px] font-sans tracking-widest text-[#C5A880] uppercase mt-2">Saturday, 28th November 2026</p>
        </div>
      )
    },
    {
      id: 'blessings',
      title: 'Blessings',
      render: () => (
        <div className="flex flex-col justify-between h-full p-6 sm:p-8 bg-[#FAF8F5] text-[#3A2E28] border border-[#E6DDD0] rounded-lg shadow-sm">
          <div className="text-center border-b border-[#D8C8B5]/50 pb-3">
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#9E8C80]">Family Blessings</span>
            <h3 className="font-serif-title text-base sm:text-lg font-bold text-[#3A2E28] mt-1">Srimathe Ramanujaya Namaha</h3>
          </div>

          <div className="space-y-4 my-4 text-center">
            <div className="p-3.5 bg-[#FFFFFF] border border-[#E6DDD0] rounded-md">
              <h4 className="text-xs font-sans font-semibold tracking-wider text-[#9E8C80] uppercase mb-1">Bride's Parents</h4>
              <p className="font-serif-body font-bold text-sm text-[#3A2E28]">Thiru. M. Ramakrishnan & Thirumathi. R. Sundari</p>
              <p className="text-[11px] text-[#9E8C80] italic mt-1">Solicit your presence for their daughter</p>
              <p className="font-serif-title text-base font-bold text-[#C5A880] mt-1">Selvi R. Roopini</p>
            </div>

            <div className="text-xs font-serif-body italic text-[#C5A880] font-bold">WEDS</div>

            <div className="p-3.5 bg-[#FFFFFF] border border-[#E6DDD0] rounded-md">
              <h4 className="text-xs font-sans font-semibold tracking-wider text-[#9E8C80] uppercase mb-1">Groom's Parents</h4>
              <p className="font-serif-body font-bold text-sm text-[#3A2E28]">Thiru. K. Suriyamoorthy & Thirumathi. S. Lakshmi</p>
              <p className="text-[11px] text-[#9E8C80] italic mt-1">Request the honor of your presence for their son</p>
              <p className="font-serif-title text-base font-bold text-[#C5A880] mt-1">Selvan S. Suriya</p>
            </div>
          </div>

          <div className="text-center text-xs font-serif-body text-[#6B5B52] italic border-t border-[#D8C8B5]/50 pt-2">
            "May divine grace shower eternal joy and togetherness"
          </div>
        </div>
      )
    },
    {
      id: 'muhurtham',
      title: 'Ceremonies',
      render: () => (
        <div className="flex flex-col justify-between h-full p-6 sm:p-8 bg-[#FFFFFF] border border-[#E6DDD0] text-[#3A2E28] rounded-lg shadow-sm">
          <div className="text-center border-b border-[#D8C8B5]/50 pb-3">
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#9E8C80]">Program Schedule</span>
            <h3 className="font-serif-title text-lg sm:text-xl font-normal text-[#3A2E28] tracking-widest">Grand Wedding Events</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            
            <div className="p-4 bg-[#FAF8F5] border border-[#D8C8B5] rounded-md space-y-1.5">
              <span className="px-2 py-0.5 bg-[#C5A880] text-white text-[10px] font-sans uppercase tracking-wider font-semibold rounded">Reception</span>
              <h4 className="font-serif-title text-sm font-bold text-[#3A2E28] pt-1">Friday Evening</h4>
              <p className="text-xs text-[#6B5B52]">November 27, 2026</p>
              <p className="text-xs text-[#3A2E28] font-medium flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#C5A880]" /> From 06:30 PM Onwards
              </p>
            </div>

            <div className="p-4 bg-[#FAF8F5] border border-[#C5A880] rounded-md space-y-1.5">
              <span className="px-2 py-0.5 bg-[#3A2E28] text-[#FAF8F5] text-[10px] font-sans uppercase tracking-wider font-semibold rounded">Subhamuhurtham</span>
              <h4 className="font-serif-title text-sm font-bold text-[#3A2E28] pt-1">Saturday Morning</h4>
              <p className="text-xs text-[#6B5B52]">November 28, 2026</p>
              <p className="text-xs text-[#3A2E28] font-medium flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#C5A880]" /> 09:15 AM - 10:30 AM
              </p>
            </div>

          </div>

          <div className="p-3 bg-[#FAF8F5] border border-[#E6DDD0] text-center text-xs text-[#6B5B52]">
            <p className="font-bold text-[#3A2E28]">Sri Ratnagiriswarar Kalyana Mandapam</p>
            <p className="text-[11px]">GST Road, Guindy, Chennai</p>
          </div>
        </div>
      )
    },
    {
      id: 'gallery',
      title: 'Couple',
      render: () => (
        <div className="flex flex-col items-center justify-center text-center h-full p-6 bg-[#FAF8F5] border border-[#E6DDD0] rounded-lg shadow-sm">
          <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#9E8C80] uppercase mb-1">Our Special Moment</span>
          <h3 className="font-serif-title text-xl font-normal text-[#3A2E28] tracking-widest mb-3">ROOPINI & SURIYA</h3>

          <div className="max-w-[240px] sm:max-w-[280px] p-2 bg-[#FFFFFF] border border-[#D8C8B5] shadow-sm mb-3">
            <img src={coupleImage || "/images/wedding_couple_portrait.jpg"} alt="Couple Portrait" className="w-full h-auto object-cover" />
          </div>

          <p className="font-serif-body italic text-xs text-[#6B5B52] max-w-xs">
            "Joined by love, guided by grace, embarking on life's journey together."
          </p>
        </div>
      )
    }
  ];

  const handleNext = () => {
    if (currentPage < bookletPages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Roopini Weds Suriya Wedding Invitation',
        text: 'Join us in celebrating the wedding of Roopini & Suriya!',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Invitation link copied to clipboard!');
    }
  };

  return (
    <section id="booklet" className="py-12 bg-[#F6F3ED] border-t border-[#E6DDD0]">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#9E8C80]">
            Digital Booklet
          </span>
          <h2 className="font-serif-title text-2xl sm:text-3xl font-normal text-[#3A2E28] tracking-[0.15em] mt-1">
            Invitation Pages
          </h2>
        </div>

        {/* Tab Controls for Mobile & Tablet */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {bookletPages.map((page, idx) => (
            <button
              key={page.id}
              onClick={() => setCurrentPage(idx)}
              className={`px-3.5 py-1.5 text-[11px] font-sans font-semibold tracking-wider uppercase transition-all rounded ${
                currentPage === idx
                  ? 'bg-[#3A2E28] text-[#F6F3ED]'
                  : 'bg-[#FAF8F5] text-[#6B5B52] border border-[#D8C8B5] hover:border-[#3A2E28]'
              }`}
            >
              {page.title}
            </button>
          ))}
        </div>

        {/* Booklet Display Container */}
        <div className="max-w-xl mx-auto min-h-[480px] relative px-2">
          
          <div className="h-full">
            {bookletPages[currentPage].render()}
          </div>

          {/* Controls */}
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className={`absolute top-1/2 -left-2 sm:-left-5 transform -translate-y-1/2 w-9 h-9 rounded-full bg-[#FFFFFF] border border-[#D8C8B5] text-[#3A2E28] flex items-center justify-center shadow-md ${
              currentPage === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#FAF8F5]'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentPage === bookletPages.length - 1}
            className={`absolute top-1/2 -right-2 sm:-right-5 transform -translate-y-1/2 w-9 h-9 rounded-full bg-[#FFFFFF] border border-[#D8C8B5] text-[#3A2E28] flex items-center justify-center shadow-md ${
              currentPage === bookletPages.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#FAF8F5]'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

        <div className="flex justify-center mt-6">
          <button onClick={handleShare} className="btn-outline-gold text-[10px] py-2 px-4">
            <Share2 className="w-3.5 h-3.5 mr-1" /> SHARE INVITATION LINK
          </button>
        </div>

      </div>
    </section>
  );
}
