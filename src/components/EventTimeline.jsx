import React, { useEffect, useRef, useState } from 'react';
import { Sun, Music, Sparkles, Heart, MapPin, Calendar, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EventTimeline() {
  const [visibleItems, setVisibleItems] = useState({});
  const [hasPoppedConfetti, setHasPoppedConfetti] = useState(false);
  const itemRefs = useRef([]);

  const events = [
    {
      id: 1,
      time: '10:30 AM',
      title: "Mappillai Azhaippu (Groom's Procession)",
      subtitle: "Traditional Groom Procession",
      date: 'Saturday, 24 October 2026',
      location: 'G.V. Thirumana Mahal, Kachirayapalayam',
      image: '/images/event_haldi.jpg',
      icon: <Sun className="w-5 h-5 text-[#C5A880]" />,
      side: 'left'
    },
    {
      id: 2,
      time: '12:00 PM – 1:30 PM',
      title: 'Nichayathartham (Engagement)',
      subtitle: 'Formal Agreement & Ring Exchange',
      date: 'Saturday, 24 October 2026',
      location: 'G.V. Thirumana Mahal Hall',
      image: '/images/event_mehendi.jpg',
      icon: <Award className="w-5 h-5 text-[#C5A880]" />,
      side: 'right'
    },
    {
      id: 3,
      time: '6:00 PM Onwards',
      title: 'Grand Reception & DJ Night',
      subtitle: 'Music, Dance & Dinner Gala',
      date: 'Saturday Evening, 24 October 2026',
      location: 'G.V. Thirumana Mahal Main Stage',
      image: '/images/event_reception.png',
      icon: <Music className="w-5 h-5 text-[#C5A880]" />,
      side: 'left'
    },
    {
      id: 4,
      time: '6:00 AM – 7:30 AM',
      title: 'Wedding Rituals & Morning Puja',
      subtitle: 'Vedic Chanting & Morning Homam',
      date: 'Sunday Morning, 25 October 2026',
      location: 'G.V. Thirumana Mahal Mandapam',
      image: '/images/event_muhurtham.jpg',
      icon: <Sparkles className="w-5 h-5 text-[#C5A880]" />,
      side: 'right'
    },
    {
      id: 5,
      time: '7:30 AM – 9:00 AM',
      title: '🌸 Main Subhamuhurtham / Wedding',
      subtitle: 'Sacred Thali Kettu Vows',
      date: 'Sunday, 25 October 2026',
      location: 'G.V. Thirumana Mahal, Kachirayapalayam',
      image: '/images/wedding_couple_portrait.jpg',
      icon: <Heart className="w-5 h-5 text-[#C5A880] fill-[#C5A880]" />,
      side: 'left',
      highlight: true
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'), 10);
            setVisibleItems((prev) => ({ ...prev, [index]: true }));

            if (index === 4 && !hasPoppedConfetti) {
              setHasPoppedConfetti(true);
              try {
                confetti({
                  particleCount: 80,
                  spread: 80,
                  origin: { y: 0.6 },
                  colors: ['#C5A880', '#D8C8B5', '#3A2E28']
                });
              } catch (e) {}
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [hasPoppedConfetti]);

  return (
    <section id="events" className="py-16 bg-[#FAF8F5] border-t border-[#E6DDD0] overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="font-serif-title text-2xl sm:text-4xl font-normal text-[#3A2E28] tracking-[0.2em]">
            The Celebration Path
          </h2>
          <p className="text-[11px] font-sans font-semibold text-[#9E8C80] uppercase tracking-[0.2em] mt-2">
            24 & 25 OCTOBER 2026 • KACHIRAYAPALAYAM
          </p>
        </div>

        {/* Central Vertical Timeline Path */}
        <div className="relative">
          
          <div className="absolute left-1/2 top-4 bottom-8 w-[2px] bg-[#D8C8B5] transform -translate-x-1/2 z-0 hidden md:block" />
          <div className="absolute left-6 top-4 bottom-8 w-[2px] bg-[#D8C8B5] transform -translate-x-1/2 z-0 md:hidden" />

          <div className="space-y-16 relative z-10">
            {events.map((ev, index) => {
              const isVisible = visibleItems[index];
              return (
                <div
                  key={ev.id}
                  ref={(el) => (itemRefs.current[index] = el)}
                  data-index={index}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center transition-all duration-700 ${
                    isVisible ? 'scroll-pop-up' : 'opacity-0 translate-y-10'
                  }`}
                >
                  
                  {/* Event Text Section */}
                  <div className={`space-y-2.5 ${
                    ev.side === 'left' ? 'md:text-right md:pr-12' : 'md:order-2 md:text-left md:pl-12'
                  } pl-12 md:pl-0`}>
                    
                    <div className="flex items-center justify-start md:justify-end">
                      <span className={`text-[10px] font-sans font-bold uppercase tracking-widest px-2.5 py-1 rounded border ${
                        ev.highlight 
                          ? 'bg-[#3A2E28] text-[#F6F3ED] border-[#3A2E28]' 
                          : 'bg-[#F6F3ED] text-[#C5A880] border-[#D8C8B5]'
                      }`}>
                        {ev.time}
                      </span>
                    </div>

                    <h3 className={`font-serif-title text-xl sm:text-2xl font-bold tracking-wider ${
                      ev.highlight ? 'text-[#C5A880]' : 'text-[#3A2E28]'
                    }`}>
                      {ev.title}
                    </h3>

                    <p className="text-xs font-semibold text-[#9E8C80] uppercase tracking-wider flex items-center gap-1.5 justify-start md:justify-end">
                      <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                      {ev.date}
                    </p>

                    <p className="text-[11px] font-sans text-[#9E8C80] flex items-center gap-1 justify-start md:justify-end">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                      {ev.location}
                    </p>

                  </div>

                  {/* Central Node Circle Icon */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
                    
                    {isVisible && (
                      <span className="absolute w-12 h-12 rounded-full bg-[#C5A880]/30 animate-ping pointer-events-none" />
                    )}

                    <div className={`w-11 h-11 rounded-full border-2 bg-[#FFFFFF] shadow-lg flex items-center justify-center transition-transform duration-500 ${
                      ev.highlight ? 'border-[#C5A880] bg-[#3A2E28] scale-125' : 'border-[#C5A880]'
                    } ${isVisible ? 'scale-110' : 'scale-90'}`}>
                      {ev.icon}
                    </div>
                  </div>

                  {/* Event Photo Card Section */}
                  <div className={`pl-12 md:pl-0 ${
                    ev.side === 'left' ? 'md:pl-12' : 'md:order-1 md:pr-12'
                  }`}>
                    <div className={`p-2 bg-[#FFFFFF] border shadow-lg rounded-sm group transition-all duration-500 ${
                      ev.highlight ? 'border-2 border-[#C5A880] shadow-xl' : 'border-[#E6DDD0] hover:border-[#3A2E28]'
                    }`}>
                      <div className="aspect-[16/10] overflow-hidden relative">
                        <img 
                          src={ev.image} 
                          alt={ev.title} 
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-[#3A2E28]/10 group-hover:bg-transparent transition-colors" />
                        <div className="absolute bottom-2 left-2 bg-[#FFFFFF]/90 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-sans font-semibold text-[#3A2E28]">
                          {ev.subtitle}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
