import { useState, useEffect } from "react";
import { CONFIG } from "../config";
import PhotoCarousel from "./PhotoCarousel";
import { StarSparkle, TapeStrip } from "./Doodles";

interface HeroSectionProps {
  onScrollToBridge: () => void;
}

export default function HeroSection({ onScrollToBridge }: HeroSectionProps) {
  const [views, setViews] = useState(1420890);

  useEffect(() => {
    const interval = setInterval(() => {
      setViews((prev) => prev + Math.floor(Math.random() * 8) + 2);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden pt-28 pb-16 bg-grid-paper">
      
      {/* Background Decorative Doodles */}
      <div className="absolute top-24 left-6 hidden lg:block opacity-80 pointer-events-none">
        <TapeStrip />
      </div>
      <div className="absolute top-32 right-12 hidden lg:block pointer-events-none">
        <StarSparkle color="#FF4081" className="w-10 h-10 animate-bounce" />
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 my-auto">

        {/* Left Column — Brand Copy & CTAs */}
        <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">

          {/* Eyebrow badge */}
          <div className="pill-yellow text-xs font-black tracking-wider uppercase shadow-[2px_2px_0px_0px_#000] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black animate-ping" />
            TRINEWORKS FX · UGC CREATOR NETWORK
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display leading-[1.06] tracking-tight text-black">
            Create scroll-stopping clips.{" "}
            <span className="inline-block bg-[#FFE600] text-black border-3 border-black rounded-2xl px-3 py-1 shadow-[4px_4px_0px_0px_#000] transform -rotate-1">
              Get paid for every view.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-black font-body font-medium leading-relaxed max-w-xl">
            We bring private brand partnerships straight to your Discord. No cold pitching. No client chasing. Just create, post, and earn performance-based payouts.
          </p>

          {/* Live Network Views Counter Box */}
          <div className="w-full sm:w-auto brutal-card p-4 flex items-center gap-4 bg-white">
            <div className="w-3 h-3 rounded-full bg-[#00C853] border border-black animate-pulse" />
            <div>
              <p className="text-[11px] uppercase tracking-widest text-black font-black font-mono">
                Live Network Views
              </p>
              <p className="text-2xl sm:text-3xl font-black text-black font-mono tracking-tight tabular-nums">
                {views.toLocaleString()}
              </p>
            </div>
            <div className="ml-auto pl-4 border-l-2 border-black hidden sm:block">
              <span className="text-xs font-extrabold bg-[#FF5722] text-white px-2.5 py-1 rounded-md border border-black shadow-[2px_2px_0px_0px_#000]">
                ACTIVE ⚡
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2 w-full sm:w-auto">
            <a
              href={CONFIG.DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-discord-cta"
              className="px-8 py-4 brutal-btn-yellow text-base font-black flex items-center justify-center gap-2"
            >
              <svg viewBox="0 0 127.14 96.36" className="w-5 h-5 fill-black">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
              </svg>
              Join the Discord
            </a>

            <button
              onClick={onScrollToBridge}
              className="px-8 py-4 brutal-btn-white text-base font-black cursor-pointer"
            >
              See how it works ↓
            </button>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-4 text-xs font-bold text-black pt-3 border-t-2 border-black/10 w-full">
            <span className="flex items-center gap-1">✦ Performance payouts</span>
            <span className="flex items-center gap-1">✦ Physical product drops</span>
            <span className="flex items-center gap-1">✦ 100% Free for creators</span>
          </div>

        </div>

        {/* Right Column — Interactive Photo Carousel Deck */}
        <div className="lg:col-span-6 flex items-center justify-center">
          <PhotoCarousel onExploreClick={onScrollToBridge} />
        </div>

      </div>

      {/* Scroll indicator */}
      <div
        onClick={onScrollToBridge}
        className="mt-8 flex flex-col items-center cursor-pointer text-black hover:text-[#0066FF] transition-colors z-10 select-none animate-bounce"
      >
        <span className="text-xs tracking-widest font-black uppercase font-mono mb-1 bg-[#FFE600] px-3 py-0.5 rounded-full border border-black shadow-[2px_2px_0px_0px_#000]">
          SCROLL DOWN
        </span>
        <svg className="w-6 h-6 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

    </section>
  );
}
