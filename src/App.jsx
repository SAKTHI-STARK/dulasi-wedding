import React, { useState, useRef, useEffect } from 'react';
import TouchCoverOverlay from './components/TouchCoverOverlay';
import Hero from './components/Hero';
import EventTimeline from './components/EventTimeline';
import VenueSection from './components/VenueSection';
import AudioPlayerWidget from './components/AudioPlayerWidget';
import ButterflyAnimation from './components/ButterflyAnimation';
import { startWebAudioSynth, stopWebAudioSynth } from './utils/audioSynth';

export default function App() {
  const [showOverlay, setShowOverlay] = useState(true);

  // Asset paths
  const coverImage = '/images/wedding_card_cover.png';
  const heroImage = '/images/wedding_hero_banner.png';
  const audioSrc = '/audio/wedding_music.mp3';

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioVolume, setAudioVolume] = useState(0.8);
  const audioRef = useRef(null);

  // Prevent double scrollbar when overlay is open
  useEffect(() => {
    if (showOverlay) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [showOverlay]);

  const toggleAudio = () => {
    if (audioRef.current && audioRef.current.src) {
      if (isAudioPlaying) {
        audioRef.current.pause();
        stopWebAudioSynth();
        setIsAudioPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsAudioPlaying(true);
        }).catch(() => {
          startWebAudioSynth();
          setIsAudioPlaying(true);
        });
      }
    } else {
      if (isAudioPlaying) {
        stopWebAudioSynth();
        setIsAudioPlaying(false);
      } else {
        startWebAudioSynth();
        setIsAudioPlaying(true);
      }
    }
  };

  const handleEnterInvitation = () => {
    setShowOverlay(false);
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsAudioPlaying(true);
      }).catch(() => {
        startWebAudioSynth();
        setIsAudioPlaying(true);
      });
    } else {
      startWebAudioSynth();
      setIsAudioPlaying(true);
    }
  };

  const handleVolumeChange = (newVol) => {
    setAudioVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3ED] text-[#3A2E28] relative">
      
      {/* Audio Element */}
      <audio ref={audioRef} loop src={audioSrc} />

      {/* Floating Animated Butterflies (Easy to remove anytime by toggling this line) */}
      <ButterflyAnimation />

      {/* Frontpage Middle Split Door Opening Overlay */}
      {showOverlay && (
        <TouchCoverOverlay 
          coverImage={coverImage}
          onEnterInvitation={handleEnterInvitation}
        />
      )}

      {/* Main Site Sections */}
      <main className="flex-1">
        <Hero 
          heroImage={heroImage}
        />

        <EventTimeline />

        <VenueSection />
      </main>

      {/* Floating Audio Control Player */}
      <AudioPlayerWidget 
        isPlaying={isAudioPlaying}
        onTogglePlay={toggleAudio}
        volume={audioVolume}
        onVolumeChange={handleVolumeChange}
      />

      {/* Footer */}
      <footer className="py-8 bg-[#FAF8F5] border-t border-[#E6DDD0] text-center text-xs text-[#9E8C80] space-y-2">
        <div className="flex items-center justify-center gap-1.5 font-serif-title font-semibold text-xs text-[#3A2E28] tracking-widest uppercase">
          DULASIRAM & KIRUPAKARI
        </div>
        <p className="italic font-serif-body">Subhamuhurtham: Sunday, 25 October 2026 • G.V. Thirumana Mahal, Kachirayapalayam</p>
      </footer>

    </div>
  );
}
