import React from 'react';
import { Volume2, VolumeX, Play, Pause, Music } from 'lucide-react';

export default function AudioPlayerWidget({ 
  isPlaying, 
  onTogglePlay, 
  volume, 
  onVolumeChange
}) {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
      <div className="sandal-card px-3.5 py-2 rounded-full border border-[#D8C8B5] shadow-lg flex items-center gap-2.5 bg-[#FAF8F5]/95 backdrop-blur-sm">
        
        {/* Play/Pause Button */}
        <button 
          onClick={onTogglePlay}
          className="w-8 h-8 rounded-full bg-[#3A2E28] text-[#F6F3ED] flex items-center justify-center font-bold shadow hover:bg-[#C5A880] transition-colors"
          title={isPlaying ? "Pause Music" : "Play Music"}
        >
          {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
        </button>

        {/* Track Title & Equalizer */}
        <div className="flex flex-col pr-1">
          <span className="text-[10px] font-sans font-semibold text-[#3A2E28] tracking-wider uppercase">
            Wedding Music
          </span>
          {isPlaying ? (
            <div className="flex items-end gap-0.5 h-3 mt-0.5">
              <span className="w-0.5 bg-[#C5A880] rounded-full bar-1" />
              <span className="w-0.5 bg-[#3A2E28] rounded-full bar-2" />
              <span className="w-0.5 bg-[#C5A880] rounded-full bar-3" />
              <span className="w-0.5 bg-[#3A2E28] rounded-full bar-4" />
            </div>
          ) : (
            <span className="text-[9px] text-[#9E8C80] italic">Paused</span>
          )}
        </div>

        {/* Mute/Unmute toggle */}
        <button 
          onClick={() => onVolumeChange(volume === 0 ? 0.8 : 0)}
          className="text-[#6B5B52] hover:text-[#3A2E28] transition-colors pl-1 border-l border-[#D8C8B5]/50"
        >
          {volume === 0 ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>

      </div>
    </div>
  );
}
