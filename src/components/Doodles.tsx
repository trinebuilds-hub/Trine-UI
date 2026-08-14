import React from "react";

// 1. OK Hand Gesture Sticker (Image 1 - Top Right)
export const OkHandGesture: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-20 h-20 filter drop-shadow-[2px_3px_0px_rgba(0,0,0,1)] ${className}`}
  >
    {/* Wiggle sparkle lines top left */}
    <path d="M 25 20 L 15 12" stroke="#000" strokeWidth="3" strokeLinecap="round" />
    <path d="M 38 14 L 35 3" stroke="#000" strokeWidth="3" strokeLinecap="round" />
    <path d="M 52 18 L 60 8" stroke="#000" strokeWidth="3" strokeLinecap="round" />

    {/* Hand body fill */}
    <path
      d="M 45 42 C 38 42 32 48 32 55 C 32 63 38 68 45 68 C 55 68 60 55 60 45 C 60 38 52 42 45 42 Z
         M 52 38 C 54 28 62 20 70 20 C 76 20 80 25 78 35 L 75 50
         M 75 32 C 78 24 86 18 92 20 C 97 22 99 28 96 36 L 90 55
         M 90 35 C 93 30 100 26 105 28 C 110 30 111 36 107 43 L 95 70
         C 88 85 75 98 55 98 C 38 98 25 86 25 70 C 25 55 35 42 52 38 Z"
      fill="#FF5722"
      stroke="#000000"
      strokeWidth="4.5"
      strokeLinejoin="round"
      strokeLinecap="round"
    />

    {/* OK circle inner detail */}
    <circle cx="44" cy="54" r="8" fill="#FFF" stroke="#000" strokeWidth="3" />
  </svg>
);

// 2. Orange & Black Pencil Sticker (Image 2 - Top Right)
export const PencilSticker: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 140 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-24 h-24 filter drop-shadow-[3px_4px_0px_rgba(0,0,0,1)] ${className}`}
  >
    {/* Pencil Body */}
    <g transform="rotate(-35 70 70)">
      {/* Eraser */}
      <rect x="25" y="55" width="20" height="30" rx="4" fill="#FF4081" stroke="#000" strokeWidth="4" />
      {/* Metal Ferrule */}
      <rect x="42" y="55" width="12" height="30" fill="#E0E0E0" stroke="#000" strokeWidth="4" />
      <line x1="48" y1="55" x2="48" y2="85" stroke="#000" strokeWidth="2" />
      {/* Wood Barrel */}
      <rect x="52" y="55" width="60" height="30" fill="#FF9800" stroke="#000" strokeWidth="4" />
      <line x1="52" y1="65" x2="112" y2="65" stroke="#000" strokeWidth="3" />
      <line x1="52" y1="75" x2="112" y2="75" stroke="#000" strokeWidth="3" />
      {/* Pencil Cone */}
      <polygon points="112,55 135,70 112,85" fill="#FFE0B2" stroke="#000" strokeWidth="4" strokeLinejoin="round" />
      {/* Lead Tip */}
      <polygon points="126,64 135,70 126,76" fill="#000000" />
    </g>
  </svg>
);

// 3. Green Magnifying Glass Sticker (Image 2 - Bottom Left)
export const MagnifyingGlassSticker: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-20 h-20 filter drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] ${className}`}
  >
    {/* Glass Rim */}
    <circle cx="50" cy="50" r="34" fill="#00E676" stroke="#000000" strokeWidth="5" />
    {/* Lens Interior */}
    <circle cx="50" cy="50" r="23" fill="#69F0AE" stroke="#000000" strokeWidth="4" />
    {/* Highlight Sheen */}
    <path d="M 36 36 A 18 18 0 0 1 60 32" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
    {/* Handle */}
    <rect
      x="12"
      y="76"
      width="32"
      height="14"
      rx="6"
      transform="rotate(45 12 76)"
      fill="#00A344"
      stroke="#000000"
      strokeWidth="5"
    />
  </svg>
);

// 4. Blue Squiggly Arrow (Image 1 - Bottom Left)
export const BlueSquigglyArrow: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-24 h-24 ${className}`}
  >
    <path
      d="M 15 95 C 10 70 30 45 45 65 C 58 82 25 105 50 80 C 70 60 85 40 100 25"
      stroke="#0066FF"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Arrowhead */}
    <path
      d="M 80 24 L 102 23 L 98 46"
      stroke="#0066FF"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 5. Pink Squiggly Arrow (Image 2 - Bottom Right)
export const PinkSquigglyArrow: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-16 h-16 ${className}`}
  >
    <path
      d="M 15 75 C 10 50 35 45 40 60 C 45 75 70 60 85 30"
      stroke="#FF2D55"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M 68 28 L 86 28 L 84 45"
      stroke="#FF2D55"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 6. Orange Curved Arrow (Image 2 - Top Left)
export const OrangeCurvedArrow: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 100 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-20 h-16 ${className}`}
  >
    <path
      d="M 85 15 C 50 10 20 25 18 55"
      stroke="#FF5722"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M 10 40 L 17 58 L 35 50"
      stroke="#FF5722"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 7. Pink Pointer Arrow (Image 3 - Middle Left)
export const PinkPointerArrow: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 100 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-20 h-20 filter drop-shadow-[2px_3px_0px_rgba(0,0,0,1)] ${className}`}
  >
    <path
      d="M 10 30 L 50 30 L 50 10 L 90 45 L 50 80 L 50 60 L 10 60 Z"
      fill="#FF4081"
      stroke="#000000"
      strokeWidth="5"
      strokeLinejoin="round"
    />
  </svg>
);

// 8. Yellow Squiggly Arrow (Image 3 - Middle Right)
export const YellowSquigglyArrow: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 110 110"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-24 h-24 ${className}`}
  >
    <path
      d="M 95 30 C 110 70 80 100 65 80 C 50 60 75 40 30 50"
      stroke="#FFB300"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M 45 35 L 28 50 L 48 62"
      stroke="#FFB300"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 9. Tape Strip Decorator
export const TapeStrip: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div
    className={`bg-[#FFE680]/70 border border-black/30 backdrop-blur-xs px-6 py-1 transform -rotate-6 shadow-sm select-none ${className}`}
    style={{ clipPath: "polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)" }}
  >
    <span className="text-[10px] font-mono font-bold tracking-widest text-black/60 uppercase">TRINEWORKS</span>
  </div>
);

// 10. Star Sparkle
export const StarSparkle: React.FC<{ className?: string; color?: string }> = ({ className = "", color = "#FFE600" }) => (
  <svg viewBox="0 0 50 50" fill="none" className={`w-8 h-8 ${className}`}>
    <path
      d="M 25 0 L 31 19 L 50 25 L 31 31 L 25 50 L 19 31 L 0 25 L 19 19 Z"
      fill={color}
      stroke="#000000"
      strokeWidth="3"
      strokeLinejoin="round"
    />
  </svg>
);
