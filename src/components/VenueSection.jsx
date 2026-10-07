import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

export default function VenueSection() {
  const googleMapsUrl = "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x3bab6314d1a07a9f:0x1a4d1662ada8d517?entry=s&sa=X&ved=2ahUKEwiQssOI-6WXAxUDdmwGHRv2H-UQ4kB6BAgWEAA&hl=en";

  return (
    <section id="venue" className="py-12 bg-[#F6F3ED] border-t border-[#E6DDD0]">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="font-serif-title text-2xl sm:text-3xl font-normal text-[#3A2E28] tracking-[0.2em]">
            VENUE LOCATION
          </h2>
        </div>

        {/* Centered Map Venue Card */}
        <div className="max-w-xl mx-auto sandal-card p-8 bg-[#FAF8F5] text-center space-y-4 shadow-md border-2 border-[#D8C8B5]">
          <div className="w-14 h-14 rounded-full bg-[#FFFFFF] border-2 border-[#C5A880] mx-auto flex items-center justify-center shadow-sm">
            <MapPin className="w-7 h-7 text-[#C5A880] animate-bounce" />
          </div>

          <div>
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C5A880] font-semibold block mb-1">
              Wedding Mahal
            </span>
            <h3 className="font-serif-title text-2xl font-bold text-[#3A2E28]">
              G.V. திருமண மஹால்
            </h3>
            <p className="text-sm font-sans font-medium text-[#6B5B52] mt-0.5">
              (G.V. Thirumana Mahal)
            </p>
            <p className="text-xs text-[#7A6455] font-serif-body mt-2">
              Kachirayapalayam, Kallakurichi District, Tamil Nadu.
            </p>
          </div>

          {/* Prominent Get Location Button */}
          <div className="pt-2">
            <a 
              href={googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-gold text-xs py-3 px-8 justify-center shadow-md w-full sm:w-auto"
            >
              <Navigation className="w-4 h-4 mr-1.5" />
              GET LOCATION DIRECTIONS ON GOOGLE MAPS
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
