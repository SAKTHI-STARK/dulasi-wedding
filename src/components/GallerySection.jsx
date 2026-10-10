import React, { useState } from 'react';
import { Camera, X } from 'lucide-react';

export default function GallerySection({ coverImage, coupleImage, heroImage }) {
  const [activePhoto, setActivePhoto] = useState(null);

  const photos = [
    {
      url: coverImage || "/images/wedding_card_cover.png",
      title: "Wedding Card Cover",
      desc: "Traditional sandal gold invitation card"
    },
    {
      url: coupleImage || "/images/wedding_couple_portrait.jpg",
      title: "Dulasiram & Kirupakari",
      desc: "Temple portrait in traditional silk attire"
    },
    {
      url: heroImage || "/images/wedding_hero_banner.jpg",
      title: "Wedding Venue",
      desc: "Majestic temple architecture backdrop"
    }
  ];

  return (
    <section id="gallery" className="py-12 bg-[#FAF8F5] border-t border-[#E6DDD0]">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#9E8C80]">
            Gallery
          </span>
          <h2 className="font-serif-title text-2xl sm:text-3xl font-normal text-[#3A2E28] tracking-[0.15em] mt-1">
            Moments & Portraits
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {photos.map((photo, idx) => (
            <div 
              key={idx}
              onClick={() => setActivePhoto(photo)}
              className="p-2 bg-[#FFFFFF] border border-[#E6DDD0] shadow-sm cursor-pointer hover:border-[#3A2E28] transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={photo.url} alt={photo.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-2 text-center">
                <h4 className="font-serif-title text-xs font-semibold text-[#3A2E28]">{photo.title}</h4>
              </div>
            </div>
          ))}
        </div>

      </div>

      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#3A2E28]/80 p-4" onClick={() => setActivePhoto(null)}>
          <div className="relative max-w-xl w-full bg-[#FFFFFF] p-4 border border-[#D8C8B5] shadow-2xl" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setActivePhoto(null)}
              className="absolute top-2 right-2 p-1.5 text-[#3A2E28] hover:text-[#C5A880]"
            >
              <X className="w-5 h-5" />
            </button>
            <img src={activePhoto.url} alt={activePhoto.title} className="w-full h-auto max-h-[75vh] object-contain" />
            <div className="mt-3 text-center">
              <h3 className="font-serif-title text-sm font-bold text-[#3A2E28]">{activePhoto.title}</h3>
              <p className="text-xs text-[#6B5B52] italic">{activePhoto.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
