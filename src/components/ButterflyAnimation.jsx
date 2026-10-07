import React, { useEffect, useState } from 'react';

export default function ButterflyAnimation() {
  const [butterflies, setButterflies] = useState([]);

  useEffect(() => {
    // Generate 3 subtle, mini realistic butterflies
    const items = Array.from({ length: 3 }).map((_, i) => {
      const type = i % 3; // 3 flight trajectory variations
      return {
        id: i,
        startX: (Math.random() * 70 + 15).toFixed(1), // 15vw to 85vw
        startY: (Math.random() * 15 + 85).toFixed(1), // 85vh to 100vh
        scale: (Math.random() * 0.15 + 0.20).toFixed(2), // 0.20 to 0.35 for mini subtle size
        duration: (Math.random() * 5 + 16).toFixed(1), // 16s to 21s gentle slow flight
        delay: (i * 3.5).toFixed(1), // staggered delays
        flapSpeed: (Math.random() * 0.10 + 0.16).toFixed(2), // wing flap rate
        type,
      };
    });

    setButterflies(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden select-none">
      {butterflies.map((b) => {
        const pathClass =
          b.type === 0
            ? 'animate-fly-path-1'
            : b.type === 1
            ? 'animate-fly-path-2'
            : 'animate-fly-path-3';

        return (
          <div
            key={b.id}
            className={`absolute ${pathClass}`}
            style={{
              left: `${b.startX}vw`,
              top: `${b.startY}vh`,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
              transform: `scale(${b.scale})`,
            }}
          >
            {/* Ultra-Realistic Sandalwood Gold 3D SVG Butterfly (Mini Size) */}
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center filter drop-shadow-[0_2px_5px_rgba(58,46,40,0.2)] preserve-3d">
              
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full preserve-3d"
                style={{ overflow: 'visible' }}
              >
                <defs>
                  {/* Premium Sandalwood & Gold Gradients */}
                  <linearGradient id={`goldGradFore-${b.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F6F3ED" />
                    <stop offset="40%" stopColor="#E6C594" />
                    <stop offset="85%" stopColor="#C5A880" />
                    <stop offset="100%" stopColor="#A68456" />
                  </linearGradient>

                  <linearGradient id={`goldGradHind-${b.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E6C594" />
                    <stop offset="60%" stopColor="#C5A880" />
                    <stop offset="100%" stopColor="#8C6D46" />
                  </linearGradient>

                  <radialGradient id={`eyeSpot-${b.id}`} cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FAF8F5" />
                    <stop offset="40%" stopColor="#C5A880" />
                    <stop offset="100%" stopColor="#3A2E28" />
                  </radialGradient>
                </defs>

                {/* Left Wing Group */}
                <g
                  style={{
                    transformOrigin: '50px 39px',
                    animation: `leftWingFlap ${b.flapSpeed}s ease-in-out infinite alternate`,
                  }}
                >
                  {/* Left Forewing */}
                  <path
                    d="M 48,36 C 36,12 18,6 8,16 C 0,26 6,42 24,48 C 38,52 46,45 48,36 Z"
                    fill={`url(#goldGradFore-${b.id})`}
                    stroke="#5C4537"
                    strokeWidth="0.75"
                  />
                  {/* Forewing Veins */}
                  <path
                    d="M 48,36 C 34,26 22,18 12,16 M 48,36 C 30,34 18,30 8,26 M 48,36 C 32,44 20,44 12,40 M 34,26 C 24,28 18,24 12,16"
                    fill="none"
                    stroke="#6B5B52"
                    strokeWidth="0.45"
                    opacity="0.65"
                  />
                  {/* Outer Margin & Dots */}
                  <path
                    d="M 8,16 C 0,26 6,42 24,48"
                    fill="none"
                    stroke="#3A2E28"
                    strokeWidth="2.2"
                    opacity="0.85"
                  />
                  <circle cx="5" cy="24" r="1.1" fill="#FAF8F5" />
                  <circle cx="9" cy="33" r="1.1" fill="#FAF8F5" />
                  <circle cx="16" cy="41" r="1.1" fill="#FAF8F5" />

                  {/* Left Hindwing with Swallowtail Extension */}
                  <path
                    d="M 47,46 C 38,54 26,52 14,58 C 6,64 6,76 16,84 C 22,88 24,96 22,102 C 21,104 26,101 28,96 C 34,90 42,80 47,56 Z"
                    fill={`url(#goldGradHind-${b.id})`}
                    stroke="#5C4537"
                    strokeWidth="0.75"
                  />
                  {/* Hindwing Veins */}
                  <path
                    d="M 47,48 C 34,60 22,70 14,78 M 47,48 C 36,68 30,82 25,94"
                    fill="none"
                    stroke="#6B5B52"
                    strokeWidth="0.45"
                    opacity="0.65"
                  />
                  {/* Swallowtail Eyespot */}
                  <circle cx="20" cy="74" r="2.8" fill={`url(#eyeSpot-${b.id})`} />
                </g>

                {/* Right Wing Group */}
                <g
                  style={{
                    transformOrigin: '50px 39px',
                    animation: `rightWingFlap ${b.flapSpeed}s ease-in-out infinite alternate`,
                  }}
                >
                  {/* Right Forewing */}
                  <path
                    d="M 52,36 C 64,12 82,6 92,16 C 100,26 94,42 76,48 C 62,52 54,45 52,36 Z"
                    fill={`url(#goldGradFore-${b.id})`}
                    stroke="#5C4537"
                    strokeWidth="0.75"
                  />
                  {/* Forewing Veins */}
                  <path
                    d="M 52,36 C 66,26 78,18 88,16 M 52,36 C 70,34 82,30 92,26 M 52,36 C 68,44 80,44 88,40 M 66,26 C 76,28 82,24 88,16"
                    fill="none"
                    stroke="#6B5B52"
                    strokeWidth="0.45"
                    opacity="0.65"
                  />
                  {/* Outer Margin & Dots */}
                  <path
                    d="M 92,16 C 100,26 94,42 76,48"
                    fill="none"
                    stroke="#3A2E28"
                    strokeWidth="2.2"
                    opacity="0.85"
                  />
                  <circle cx="95" cy="24" r="1.1" fill="#FAF8F5" />
                  <circle cx="91" cy="33" r="1.1" fill="#FAF8F5" />
                  <circle cx="84" cy="41" r="1.1" fill="#FAF8F5" />

                  {/* Right Hindwing with Swallowtail Extension */}
                  <path
                    d="M 53,46 C 62,54 74,52 86,58 C 94,64 94,76 84,84 C 78,88 76,96 78,102 C 79,104 74,101 72,96 C 66,90 58,80 53,56 Z"
                    fill={`url(#goldGradHind-${b.id})`}
                    stroke="#5C4537"
                    strokeWidth="0.75"
                  />
                  {/* Hindwing Veins */}
                  <path
                    d="M 53,48 C 66,60 78,70 86,78 M 53,48 C 64,68 70,82 75,94"
                    fill="none"
                    stroke="#6B5B52"
                    strokeWidth="0.45"
                    opacity="0.65"
                  />
                  {/* Swallowtail Eyespot */}
                  <circle cx="80" cy="74" r="2.8" fill={`url(#eyeSpot-${b.id})`} />
                </g>

                {/* Central Realistic Body Structure (Head, Antennae, Thorax, Segmented Abdomen) */}
                <g className="butterfly-body z-10">
                  {/* Antennae */}
                  <path
                    d="M 49,27 C 43,17 37,11 31,9 M 51,27 C 57,17 63,11 69,9"
                    fill="none"
                    stroke="#3A2E28"
                    strokeWidth="0.85"
                    strokeLinecap="round"
                  />
                  <circle cx="31" cy="9" r="1.3" fill="#C5A880" stroke="#3A2E28" strokeWidth="0.4" />
                  <circle cx="69" cy="9" r="1.3" fill="#C5A880" stroke="#3A2E28" strokeWidth="0.4" />

                  {/* Head */}
                  <circle cx="50" cy="28" r="2.6" fill="#3A2E28" />
                  <circle cx="48.5" cy="27.5" r="0.8" fill="#C5A880" />
                  <circle cx="51.5" cy="27.5" r="0.8" fill="#C5A880" />

                  {/* Thorax */}
                  <ellipse cx="50" cy="38" rx="3.6" ry="6" fill="#3A2E28" stroke="#5C4537" strokeWidth="0.5" />
                  <ellipse cx="50" cy="37" rx="2" ry="4" fill="#5C4537" opacity="0.4" />

                  {/* Segmented Abdomen */}
                  <path
                    d="M 47.5,44 Q 46,62 50,72 Q 54,62 52.5,44 Z"
                    fill="#3A2E28"
                    stroke="#5C4537"
                    strokeWidth="0.5"
                  />
                  {/* Abdomen Segment Rings */}
                  <line x1="47" y1="49" x2="53" y2="49" stroke="#8C6D46" strokeWidth="0.6" opacity="0.8" />
                  <line x1="47.5" y1="54" x2="52.5" y2="54" stroke="#8C6D46" strokeWidth="0.6" opacity="0.8" />
                  <line x1="48" y1="59" x2="52" y2="59" stroke="#8C6D46" strokeWidth="0.6" opacity="0.8" />
                  <line x1="48.5" y1="64" x2="51.5" y2="64" stroke="#8C6D46" strokeWidth="0.6" opacity="0.8" />
                </g>
              </svg>

            </div>
          </div>
        );
      })}
    </div>
  );
}

