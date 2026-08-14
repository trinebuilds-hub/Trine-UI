import { useRef } from "react";
import { CONFIG } from "./config";
import HeroSection from "./components/HeroSection";
import BridgeSection from "./components/BridgeSection";
import HowItWorksSection from "./components/HowItWorksSection";
import RewardsSection from "./components/RewardsSection";
import DiscordCTASection from "./components/DiscordCTASection";
import ContactFooter from "./components/ContactFooter";

export default function App() {
  const bridgeRef = useRef<HTMLDivElement>(null);
  const howRef = useRef<HTMLDivElement>(null);
  const rewardsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen text-black font-body bg-grid-paper">

      {/* Neo-Brutalist Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b-3 border-black shadow-[0_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between py-3">

          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-9 h-9 rounded-xl bg-[#FFE600] border-2 border-black flex items-center justify-center font-black text-black text-lg shadow-[2px_2px_0px_0px_#000] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform">
              T
            </div>
            <span className="font-display font-black text-lg sm:text-xl tracking-tight text-black">
              TRINEWORKS <span className="bg-[#FFE600] border border-black px-1.5 py-0.5 rounded text-xs tracking-wide">FX</span>
            </span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-extrabold text-black font-display">
            <button onClick={() => scrollTo(bridgeRef)} className="hover:bg-[#FFE600] px-3 py-1 rounded-lg border border-transparent hover:border-black transition-all cursor-pointer">Why Us</button>
            <button onClick={() => scrollTo(howRef)} className="hover:bg-[#FFE600] px-3 py-1 rounded-lg border border-transparent hover:border-black transition-all cursor-pointer">How It Works</button>
            <button onClick={() => scrollTo(rewardsRef)} className="hover:bg-[#FFE600] px-3 py-1 rounded-lg border border-transparent hover:border-black transition-all cursor-pointer">Tiers & Rewards</button>
            <button onClick={() => scrollTo(contactRef)} className="hover:bg-[#FFE600] px-3 py-1 rounded-lg border border-transparent hover:border-black transition-all cursor-pointer">Contact</button>
          </nav>

          {/* CTA Button */}
          <a
            href={CONFIG.DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-discord-cta"
            className="pill-yellow text-xs font-black tracking-wider uppercase shadow-[3px_3px_0px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer"
          >
            Join Discord
          </a>

        </div>
      </header>

      {/* Page Sections */}
      <main className="w-full">
        <HeroSection onScrollToBridge={() => scrollTo(bridgeRef)} />

        <div ref={bridgeRef}>
          <BridgeSection />
        </div>

        <div ref={howRef}>
          <HowItWorksSection />
        </div>

        <div ref={rewardsRef}>
          <RewardsSection />
        </div>

        <DiscordCTASection />

        <div ref={contactRef}>
          <ContactFooter />
        </div>
      </main>

    </div>
  );
}
