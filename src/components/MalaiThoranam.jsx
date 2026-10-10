import React from 'react';

/**
 * MalaiThoranam: Traditional South Indian Festive Hanging Garland & Mango Leaf Thoranam
 * - Perfectly aligned SVG vector geometry across mobile, tablet, and desktop
 * - Self-contained anchor-point SVG rotate animations that stay 100% pinned to garland junctions
 * - Traditional mango leaves (maavilai), strung marigold (samandhi), red rose petals, and jasmine tassels
 */
export default function MalaiThoranam() {
  const junctions = [0, 200, 400, 600, 800, 1000, 1200];
  const midPoints = [100, 300, 500, 700, 900, 1100];

  return (
    <div className="w-full overflow-hidden pointer-events-none select-none relative z-20 mb-3 sm:mb-5">
      <svg 
        viewBox="-15 0 1230 92" 
        className="w-full h-auto block drop-shadow-sm" 
        preserveAspectRatio="xMidYMin meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#43A047" />
            <stop offset="55%" stopColor="#2E7D32" />
            <stop offset="100%" stopColor="#1B5E20" />
          </linearGradient>

          <linearGradient id="marigoldOrange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA726" />
            <stop offset="50%" stopColor="#FB8C00" />
            <stop offset="100%" stopColor="#E65100" />
          </linearGradient>

          <linearGradient id="marigoldYellow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF176" />
            <stop offset="50%" stopColor="#FDD835" />
            <stop offset="100%" stopColor="#F57F17" />
          </linearGradient>

          <linearGradient id="roseRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E91E63" />
            <stop offset="60%" stopColor="#C2185B" />
            <stop offset="100%" stopColor="#880E4F" />
          </linearGradient>

          <linearGradient id="goldRope" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C5A880" />
            <stop offset="50%" stopColor="#F4E0B9" />
            <stop offset="100%" stopColor="#C5A880" />
          </linearGradient>

          {/* Reusable Mango Leaf (Maavilai) */}
          <g id="singleMangoLeaf">
            <path 
              d="M0,0 C-13,18 -11,40 0,54 C11,40 13,18 0,0 Z" 
              fill="url(#leafGrad)" 
            />
            {/* Center vein */}
            <path d="M0,2 L0,50" stroke="#1B5E20" strokeWidth="1" strokeLinecap="round" />
            {/* Leaf side veins */}
            <path d="M0,14 L-5,22 M0,24 L-6,32 M0,34 L-4,41" stroke="#1B5E20" strokeWidth="0.7" opacity="0.6" />
            <path d="M0,14 L5,22 M0,24 L6,32 M0,34 L4,41" stroke="#1B5E20" strokeWidth="0.7" opacity="0.6" />
          </g>

          {/* Mango Leaf Cluster for Each Junction */}
          <g id="leafCluster">
            <use href="#singleMangoLeaf" transform="rotate(-20) scale(0.85)" opacity="0.95" />
            <use href="#singleMangoLeaf" transform="rotate(20) scale(0.85)" opacity="0.95" />
            <use href="#singleMangoLeaf" transform="scale(0.98)" />
          </g>

          {/* Junction Blossom Anchor */}
          <g id="junctionBlossom">
            <circle cx="0" cy="0" r="8" fill="url(#marigoldOrange)" />
            <circle cx="0" cy="0" r="5" fill="#FFA726" />
            <circle cx="0" cy="0" r="2.5" fill="#FFF3E0" />
          </g>

          {/* Hanging Floral Tassel Body (Origin at 0,0) */}
          <g id="hangingTasselBody">
            {/* Hanging thread */}
            <line x1="0" y1="0" x2="0" y2="48" stroke="#D8C8B5" strokeWidth="1" />
            
            {/* Strung Jasmine Buds & Rose Accent Beads */}
            <circle cx="0" cy="6" r="2.8" fill="#FFFFFF" stroke="#E6DDD0" strokeWidth="0.5" />
            <circle cx="0" cy="13" r="2.8" fill="#FFFFFF" stroke="#E6DDD0" strokeWidth="0.5" />
            <circle cx="0" cy="20" r="3.6" fill="url(#roseRed)" />
            <circle cx="0" cy="27" r="2.8" fill="#FFFFFF" stroke="#E6DDD0" strokeWidth="0.5" />
            <circle cx="0" cy="34" r="3.8" fill="url(#marigoldOrange)" />
            
            {/* Terminal Golden Blossom & Auspicious Bell Accent */}
            <circle cx="0" cy="42" r="5.2" fill="url(#marigoldYellow)" />
            <circle cx="0" cy="42" r="2.5" fill="#FFFDE7" />
            <polygon points="-2.5,47 2.5,47 1,52 -1,52" fill="#C5A880" />
          </g>
        </defs>

        {/* Top Continuous Gold Border Rope */}
        <line x1="-15" y1="6" x2="1215" y2="6" stroke="url(#goldRope)" strokeWidth="3.5" />
        <line x1="-15" y1="8" x2="1215" y2="8" stroke="#3A2E28" strokeWidth="0.7" opacity="0.25" />

        {/* Scalloped Marigold Garland Drapes Across 6 Segments */}
        {[
          { x1: 0, x2: 200, midX: 100 },
          { x1: 200, x2: 400, midX: 300 },
          { x1: 400, x2: 600, midX: 500 },
          { x1: 600, x2: 800, midX: 700 },
          { x1: 800, x2: 1000, midX: 900 },
          { x1: 1000, x2: 1200, midX: 1100 }
        ].map((scallop, i) => (
          <g key={`scallop-${i}`}>
            {/* Base Orange Marigold Swag (Gentle natural catenary curve) */}
            <path 
              d={`M${scallop.x1},8 Q${scallop.midX},42 ${scallop.x2},8`} 
              fill="none" 
              stroke="#E65100" 
              strokeWidth="4.5" 
              strokeLinecap="round"
            />
            {/* Draped Yellow Marigold Layer */}
            <path 
              d={`M${scallop.x1},8.5 Q${scallop.midX},43.5 ${scallop.x2},8.5`} 
              fill="none" 
              stroke="#FDD835" 
              strokeWidth="3.2" 
              strokeLinecap="round" 
              strokeDasharray="8 6"
            />
            {/* Jasmine Pearl Accent along Curve */}
            <path 
              d={`M${scallop.x1},8 Q${scallop.midX},43 ${scallop.x2},8`} 
              fill="none" 
              stroke="#FFFFFF" 
              strokeWidth="1.8" 
              strokeDasharray="3 11"
            />

            {/* Central Rose Blossom at lowest dip of drape */}
            <circle cx={scallop.midX} cy="41" r="4.2" fill="url(#roseRed)" />
            <circle cx={scallop.midX} cy="41" r="2" fill="#FF80AB" />
          </g>
        ))}

        {/* Junctions with Mango Leaves and Perfectly Anchored Swaying Tassels */}
        {junctions.map((x, i) => {
          const isEven = i % 2 === 0;
          const dur = `${3.0 + (i % 3) * 0.4}s`;
          const rotValues = isEven 
            ? "0 0 0; 3 0 0; 0 0 0; -3 0 0; 0 0 0" 
            : "0 0 0; -3 0 0; 0 0 0; 3 0 0; 0 0 0";

          return (
            <g key={`junction-${i}`} transform={`translate(${x}, 6)`}>
              {/* Sacred Mango Leaf Cluster (Static anchor) */}
              <use href="#leafCluster" />

              {/* Orange Marigold Rosette Anchor */}
              <use href="#junctionBlossom" transform="translate(0, 8)" />

              {/* Swaying Tassel Group - Pivoted EXACTLY at (0, 0) relative to translate(0, 15) */}
              <g transform="translate(0, 15)">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values={rotValues}
                  dur={dur}
                  repeatCount="indefinite"
                  calcMode="spline"
                  keyTimes="0; 0.25; 0.5; 0.75; 1"
                  keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
                  additive="sum"
                />
                <use href="#hangingTasselBody" />
              </g>
            </g>
          );
        })}

        {/* Mid-Drape Jasmine Drops with Micro-Sway */}
        {midPoints.map((x, i) => {
          const isEven = i % 2 === 0;
          const dur = `${2.8 + (i % 3) * 0.4}s`;
          const rotValues = isEven 
            ? "0 0 0; 2.2 0 0; 0 0 0; -2.2 0 0; 0 0 0" 
            : "0 0 0; -2.2 0 0; 0 0 0; 2.2 0 0; 0 0 0";

          return (
            <g key={`mid-drop-${i}`} transform={`translate(${x}, 41)`}>
              <g>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values={rotValues}
                  dur={dur}
                  repeatCount="indefinite"
                  calcMode="spline"
                  keyTimes="0; 0.25; 0.5; 0.75; 1"
                  keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
                  additive="sum"
                />
                <line x1="0" y1="0" x2="0" y2="18" stroke="#D8C8B5" strokeWidth="0.8" />
                <circle cx="0" cy="4" r="2" fill="#FFFFFF" />
                <circle cx="0" cy="9" r="2" fill="#FFFFFF" />
                <circle cx="0" cy="14" r="2.5" fill="url(#marigoldOrange)" />
                <circle cx="0" cy="19" r="3.2" fill="url(#marigoldYellow)" />
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
