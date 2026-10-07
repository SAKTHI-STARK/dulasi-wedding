import React, { useState } from 'react';
import { Heart, Sparkles, Menu, X, Settings, Image as ImageIcon, Music } from 'lucide-react';

export default function Navbar({ onOpenCustomModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Digital Booklet', href: '#booklet' },
    { name: 'Events Schedule', href: '#events' },
    { name: 'Venue & Map', href: '#venue' },
    { name: 'Photo Gallery', href: '#gallery' },
    { name: 'RSVP', href: '#rsvp' },
    { name: 'Wishes Wall', href: '#wishes' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#1a0307]/90 backdrop-blur-md border-b border-[#D4AF37]/30 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2 text-decoration-none group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#8B0000] to-[#D4AF37] p-0.5 shadow-md group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#2D080E] rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-[#D4AF37] fill-[#8B0000]" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold gold-text leading-tight">
              Roopini <span className="font-cursive text-xl text-[#F3E5AB]">&</span> Suriya
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#F3E5AB]/70 font-medium">Wedding Celebration</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-[#F3E5AB] hover:text-[#D4AF37] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D4AF37] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCustomModal}
            className="btn-outline-gold text-xs py-2 px-3.5 flex items-center gap-1.5 border-[#D4AF37]/60"
            title="Upload your own custom image & audio"
          >
            <Settings className="w-3.5 h-3.5 text-[#D4AF37]" />
            Customize Image & Audio
          </button>

          <a href="#rsvp" className="btn-gold text-xs py-2 px-4">
            RSVP Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenCustomModal}
            className="p-2 text-[#D4AF37] border border-[#D4AF37]/40 rounded-lg bg-[#2D080E]"
            title="Customize"
          >
            <Settings className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F3E5AB] hover:text-[#D4AF37]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#2D080E] border-b border-[#D4AF37]/40 px-6 py-4 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-serif text-[#F3E5AB] hover:text-[#D4AF37] py-1 border-b border-[#D4AF37]/10"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a 
              href="#rsvp" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full btn-gold justify-center py-2.5 text-sm"
            >
              RSVP Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
