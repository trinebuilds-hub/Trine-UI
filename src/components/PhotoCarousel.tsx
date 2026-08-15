import { useState, useRef } from "react";
import {
  OkHandGesture,
  PencilSticker,
  MagnifyingGlassSticker,
  BlueSquigglyArrow,
  PinkSquigglyArrow,
  OrangeCurvedArrow,
  PinkPointerArrow,
  YellowSquigglyArrow,
  StarSparkle,
  TapeStrip,
} from "./Doodles";

interface PhotoCarouselProps {
  onExploreClick?: () => void;
}

export default function PhotoCarousel({ onExploreClick }: PhotoCarouselProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const totalSlides = 4;

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) {
      nextSlide();
    } else if (diff < -40) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <div className="relative w-full max-w-xl mx-auto flex flex-col items-center select-none">
      {/* External Graph Paper Container Wrapper */}
      <div 
        className="w-full bg-grid-paper-dense p-3.5 sm:p-6 rounded-[28px] sm:rounded-[36px] border-[3px] sm:border-[3.5px] border-black shadow-[5px_5px_0px_0px_#000000] sm:shadow-[8px_8px_0px_0px_#000000] relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Background Subtle Corner Accent */}
        <div className="absolute top-2 right-4 text-[10px] sm:text-[11px] font-mono font-extrabold text-black/40 tracking-wider">
          SLIDE 0{activeSlide + 1} / 0{totalSlides}
        </div>

        {/* Slide Stack Container */}
        <div className="relative min-h-[410px] sm:min-h-[490px] flex items-center justify-center p-1 sm:p-2">
          
          {/* SLIDE 01 — Photo 1 exact replica */}
          {activeSlide === 0 && (
            <div className="w-full h-full brutal-card-static bg-white p-4 sm:p-8 flex flex-col justify-between items-center text-center relative animate-doodle-float">
              {/* Oval Pill Badge 01 */}
              <div className="pt-1 sm:pt-2">
                <span className="pill-yellow text-base sm:text-lg px-4 sm:px-6 py-0.5 sm:py-1 font-black">01</span>
              </div>

              {/* OK Hand Doodle Top Right */}
              <div className="absolute -top-4 -right-2 sm:-top-5 sm:-right-4 z-20 animate-wiggle">
                <OkHandGesture className="w-14 h-14 sm:w-24 sm:h-24" />
              </div>

              {/* Main Heading matching photo 1 */}
              <div className="my-auto py-4 sm:py-6 px-1 sm:px-2 max-w-md">
                <h2 className="text-2xl sm:text-4xl md:text-[2.65rem] font-black font-display text-black leading-[1.2] sm:leading-[1.12] tracking-tight">
                  We are TRINEWORKS FX a <span className="underline decoration-wavy decoration-[#0066FF] underline-offset-4">digital/performance</span> marketing agency
                </h2>
              </div>

              {/* Blue Squiggly Arrow Bottom Left */}
              <div className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-6 z-20 pointer-events-none">
                <BlueSquigglyArrow className="w-16 h-16 sm:w-28 sm:h-28" />
              </div>

              {/* SWIPE --> Bottom tag */}
              <div className="pb-1 sm:pb-2 z-10">
                <button
                  onClick={nextSlide}
                  className="text-xs sm:text-sm font-mono font-extrabold text-black hover:text-[#0066FF] tracking-widest uppercase transition-colors cursor-pointer flex items-center gap-2"
                >
                  SWIPE --&gt;
                </button>
              </div>
            </div>
          )}

          {/* SLIDE 02 — Photo 2 exact replica */}
          {activeSlide === 1 && (
            <div className="w-full h-full brutal-card-static bg-white p-4 sm:p-8 flex flex-col justify-between items-center text-center relative animate-doodle-float">
              {/* Orange Curved Arrow Top Left */}
              <div className="absolute top-2 left-2 z-20">
                <OrangeCurvedArrow className="w-12 h-10 sm:w-16 sm:h-14" />
              </div>

              {/* Pencil Sticker Top Right */}
              <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-6 z-20 animate-wiggle">
                <PencilSticker className="w-16 h-16 sm:w-28 sm:h-28" />
              </div>

              {/* Main Title matching photo 2 */}
              <div className="my-auto py-6 sm:py-8">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display text-black tracking-tight mb-5 sm:mb-8">
                  Who are we?
                </h2>

                {/* SWIPE Oval Pill Button */}
                <button
                  onClick={nextSlide}
                  className="pill-yellow-lg text-base sm:text-lg px-6 py-2 sm:px-7 sm:py-2.5 cursor-pointer transform hover:scale-105 active:scale-95 shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000]"
                >
                  SWIPE
                </button>
              </div>

              {/* Magnifying Glass Sticker Bottom Left */}
              <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 z-20">
                <MagnifyingGlassSticker className="w-16 h-16 sm:w-26 sm:h-26" />
              </div>

              {/* Pink Squiggly Arrow Bottom Right */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20">
                <PinkSquigglyArrow className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
            </div>
          )}

          {/* SLIDE 03 — Photo 3 exact replica */}
          {activeSlide === 2 && (
            <div className="w-full h-full brutal-card-static bg-white p-4 sm:p-8 flex flex-col justify-between items-center text-center relative animate-doodle-float">
              {/* Oval Pill Badge 02 */}
              <div className="pt-1 sm:pt-2">
                <span className="pill-yellow text-base sm:text-lg px-4 sm:px-6 py-0.5 sm:py-1 font-black">02</span>
              </div>

              {/* Main Heading matching photo 3 */}
              <div className="py-2 sm:py-3">
                <h2 className="text-2xl sm:text-4xl font-black font-display text-black tracking-tight">
                  What do we do?
                </h2>
              </div>

              {/* Pink Pointer Arrow Left */}
              <div className="absolute top-1/2 -left-2 sm:-left-6 -translate-y-1/2 z-20 hidden xs:block">
                <PinkPointerArrow className="w-12 h-12 sm:w-20 sm:h-20" />
              </div>

              {/* Yellow Squiggly Arrow Right */}
              <div className="absolute top-1/3 -right-2 sm:-right-6 z-20 hidden xs:block">
                <YellowSquigglyArrow className="w-14 h-14 sm:w-24 sm:h-24" />
              </div>

              {/* 3 Text Paragraph Blocks matching photo 3 */}
              <div className="space-y-2.5 sm:space-y-4 my-auto px-1 sm:px-4 text-[11px] sm:text-sm font-body font-semibold text-black leading-relaxed">
                <div className="p-2.5 sm:p-3 bg-[#FAFAFA] border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_#000] sm:shadow-[3px_3px_0px_0px_#000]">
                  We help brands grow online through smart performance marketing strategies, creative content, and data-driven results.
                </div>

                <div className="p-2.5 sm:p-3 bg-[#FAFAFA] border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_#000] sm:shadow-[3px_3px_0px_0px_#000]">
                  We help brands generate leads and boost conversions through smart performance marketing.
                </div>

                <div className="p-2.5 sm:p-3 bg-[#FAFAFA] border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_#000] sm:shadow-[3px_3px_0px_0px_#000]">
                  We help your business stand out and get noticed online. We combine creativity and performance to scale your brand.
                </div>
              </div>

              {/* Navigation hint */}
              <div className="pb-1">
                <button
                  onClick={nextSlide}
                  className="text-xs font-mono font-extrabold text-black uppercase tracking-widest hover:underline"
                >
                  NEXT SLIDE --&gt;
                </button>
              </div>
            </div>
          )}

          {/* SLIDE 04 — Value proposition for Creators & Brands */}
          {activeSlide === 3 && (
            <div className="w-full h-full brutal-card-static bg-white p-4 sm:p-8 flex flex-col justify-between items-center text-center relative animate-doodle-float">
              {/* Tape Strip corner */}
              <div className="absolute -top-3 left-4 z-20">
                <TapeStrip />
              </div>
              <div className="absolute top-2 right-4 z-20">
                <StarSparkle color="#FF4081" />
              </div>

              {/* Oval Pill Badge 03 */}
              <div className="pt-1 sm:pt-2">
                <span className="pill-yellow text-base sm:text-lg px-4 sm:px-6 py-0.5 sm:py-1 font-black">03</span>
              </div>

              <div className="py-2">
                <h2 className="text-2xl sm:text-4xl font-black font-display text-black tracking-tight">
                  Why Join TRINEWORKS FX?
                </h2>
              </div>

              <div className="space-y-2.5 sm:space-y-3 my-auto px-1 sm:px-4 text-[11px] sm:text-sm font-body font-semibold text-black leading-relaxed">
                <div className="p-2.5 sm:p-3 bg-[#FFFDE7] border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_#000] sm:shadow-[3px_3px_0px_0px_#000] text-left flex items-center gap-2.5 sm:gap-3">
                  <span className="text-xl sm:text-2xl flex-shrink-0">🔥</span>
                  <span><strong>Zero Client Chasing:</strong> Active brand briefs delivered straight into our Discord hub daily.</span>
                </div>

                <div className="p-2.5 sm:p-3 bg-[#E8F5E9] border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_#000] sm:shadow-[3px_3px_0px_0px_#000] text-left flex items-center gap-2.5 sm:gap-3">
                  <span className="text-xl sm:text-2xl flex-shrink-0">📈</span>
                  <span><strong>Performance Bonuses:</strong> Earn up to 1.5× payout multipliers as your UGC clips generate views.</span>
                </div>

                <div className="p-2.5 sm:p-3 bg-[#E1F5FE] border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_#000] sm:shadow-[3px_3px_0px_0px_#000] text-left flex items-center gap-2.5 sm:gap-3">
                  <span className="text-xl sm:text-2xl flex-shrink-0">🎁</span>
                  <span><strong>VIP Product Drops:</strong> Free product seeding & direct brand sponsorships for top clippers.</span>
                </div>
              </div>

              <div className="pb-1">
                {onExploreClick ? (
                  <button
                    onClick={onExploreClick}
                    className="pill-yellow-lg text-xs sm:text-sm px-5 py-2 sm:px-7 sm:py-2.5 cursor-pointer shadow-[3px_3px_0px_0px_#000]"
                  >
                    SEE CREATOR TIERS 🏆
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveSlide(0)}
                    className="text-xs font-mono font-extrabold text-black uppercase tracking-widest hover:underline"
                  >
                    &lt;-- BACK TO START
                  </button>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Carousel Controls Footer */}
        <div className="flex items-center justify-between pt-4 px-2">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="w-10 h-10 brutal-btn-white rounded-full flex items-center justify-center text-black font-black text-lg cursor-pointer"
            aria-label="Previous Slide"
          >
            ←
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-3 rounded-full border-2 border-black transition-all cursor-pointer ${
                  activeSlide === idx
                    ? "w-8 bg-[#FFE600] shadow-[2px_2px_0px_0px_#000]"
                    : "w-3 bg-white hover:bg-gray-200"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="w-10 h-10 brutal-btn-yellow rounded-full flex items-center justify-center text-black font-black text-lg cursor-pointer"
            aria-label="Next Slide"
          >
            →
          </button>
        </div>

      </div>
    </div>
  );
}
