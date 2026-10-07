import React, { useRef } from 'react';
import { X, Upload, Image as ImageIcon, Music, Check, RefreshCw } from 'lucide-react';

export default function CustomAssetModal({ 
  isOpen, 
  onClose, 
  onUploadCoverImage, 
  onUploadHeroImage, 
  onUploadCoupleImage, 
  onUploadAudioFile,
  audioName
}) {
  const coverInputRef = useRef(null);
  const heroInputRef = useRef(null);
  const coupleInputRef = useRef(null);
  const audioInputRef = useRef(null);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="glass-card max-w-lg w-full p-6 md:p-8 rounded-3xl border-2 border-[#D4AF37] shadow-2xl relative" onClick={e => e.stopPropagation()}>
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#8B0000] text-[#FAF6ED] hover:bg-[#D4AF37] hover:text-[#2D080E] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Customization Panel</span>
          <h3 className="font-serif text-2xl font-bold gold-text mt-1">
            Replace Images & Audio
          </h3>
          <p className="text-xs text-[#F3E5AB]/80 italic mt-1">
            Easily upload your own high-resolution wedding photos & background music
          </p>
        </div>

        {/* Hidden File Inputs */}
        <input 
          type="file" 
          ref={coverInputRef} 
          accept="image/*" 
          onChange={(e) => e.target.files[0] && onUploadCoverImage(e.target.files[0])} 
          className="hidden" 
        />
        <input 
          type="file" 
          ref={heroInputRef} 
          accept="image/*" 
          onChange={(e) => e.target.files[0] && onUploadHeroImage(e.target.files[0])} 
          className="hidden" 
        />
        <input 
          type="file" 
          ref={coupleInputRef} 
          accept="image/*" 
          onChange={(e) => e.target.files[0] && onUploadCoupleImage(e.target.files[0])} 
          className="hidden" 
        />
        <input 
          type="file" 
          ref={audioInputRef} 
          accept="audio/*" 
          onChange={(e) => e.target.files[0] && onUploadAudioFile(e.target.files[0])} 
          className="hidden" 
        />

        <div className="space-y-4">
          
          {/* Upload Background Audio */}
          <div className="p-4 bg-[#2D080E] rounded-xl border border-[#D4AF37]/40 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#8B0000] border border-[#D4AF37] flex items-center justify-center">
                <Music className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#F3E5AB]">Background Wedding Music</h4>
                <p className="text-[11px] text-[#D4AF37]/80 truncate max-w-[180px]">
                  {audioName || "Playing Sample Flute Melody"}
                </p>
              </div>
            </div>
            <button 
              onClick={() => audioInputRef.current?.click()}
              className="btn-outline-gold text-xs py-1.5 px-3 border-[#D4AF37]"
            >
              <Upload className="w-3.5 h-3.5" />
              Upload Audio
            </button>
          </div>

          {/* Upload Cover Card Image */}
          <div className="p-4 bg-[#2D080E] rounded-xl border border-[#D4AF37]/40 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#8B0000] border border-[#D4AF37] flex items-center justify-center">
                <ImageIcon className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#F3E5AB]">Front Card Cover Image</h4>
                <p className="text-[11px] text-[#D4AF37]/80">Used on entry screen & booklet cover</p>
              </div>
            </div>
            <button 
              onClick={() => coverInputRef.current?.click()}
              className="btn-outline-gold text-xs py-1.5 px-3 border-[#D4AF37]"
            >
              <Upload className="w-3.5 h-3.5" />
              Upload Card
            </button>
          </div>

          {/* Upload Hero Banner */}
          <div className="p-4 bg-[#2D080E] rounded-xl border border-[#D4AF37]/40 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#8B0000] border border-[#D4AF37] flex items-center justify-center">
                <ImageIcon className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#F3E5AB]">Hero Banner Backdrop</h4>
                <p className="text-[11px] text-[#D4AF37]/80">Used as main page top background</p>
              </div>
            </div>
            <button 
              onClick={() => heroInputRef.current?.click()}
              className="btn-outline-gold text-xs py-1.5 px-3 border-[#D4AF37]"
            >
              <Upload className="w-3.5 h-3.5" />
              Upload Banner
            </button>
          </div>

          {/* Upload Couple Portrait */}
          <div className="p-4 bg-[#2D080E] rounded-xl border border-[#D4AF37]/40 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#8B0000] border border-[#D4AF37] flex items-center justify-center">
                <ImageIcon className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#F3E5AB]">Couple Portrait Photo</h4>
                <p className="text-[11px] text-[#D4AF37]/80">Used in gallery & story booklet</p>
              </div>
            </div>
            <button 
              onClick={() => coupleInputRef.current?.click()}
              className="btn-outline-gold text-xs py-1.5 px-3 border-[#D4AF37]"
            >
              <Upload className="w-3.5 h-3.5" />
              Upload Photo
            </button>
          </div>

        </div>

        <div className="mt-6 pt-4 border-t border-[#D4AF37]/30 text-center">
          <button onClick={onClose} className="btn-gold text-xs py-2.5 px-8">
            <Check className="w-4 h-4 text-[#2D080E]" />
            Apply & Close
          </button>
        </div>

      </div>
    </div>
  );
}
