import React from 'react';
import { Heart, MessageSquare } from 'lucide-react';

export default function WishesGuestbook({ wishes }) {
  return (
    <section id="wishes" className="py-12 bg-[#FAF8F5] border-t border-[#E6DDD0]">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#9E8C80]">
            Guestbook
          </span>
          <h2 className="font-serif-title text-2xl sm:text-3xl font-normal text-[#3A2E28] tracking-[0.15em] mt-1">
            Wishes Wall
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {wishes.map((w, index) => (
            <div 
              key={index}
              className="sandal-card p-5 bg-[#FFFFFF] flex flex-col justify-between"
            >
              <div>
                <MessageSquare className="w-5 h-5 text-[#C5A880] mb-2" />
                <p className="font-serif-body italic text-xs text-[#3A2E28] leading-relaxed mb-3">
                  "{w.message}"
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-[#E6DDD0] pt-2 mt-2">
                <span className="font-serif-title font-semibold text-[11px] text-[#3A2E28]">{w.name}</span>
                <span className="text-[9px] font-sans text-[#9E8C80]">{w.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
