import { useState, useEffect, useRef } from "react";
import { CONFIG } from "../config";
import { StarSparkle, TapeStrip } from "./Doodles";

const tiers = [
  {
    num: "01",
    title: "Starter Clipper",
    desc: "Access to campaign feed + base performance payouts",
    perks: ["Campaign feed access", "Base rate payouts", "Discord creator hub"],
    badgeText: "BASE RATE",
    badgeBg: "bg-white text-black",
    icon: "🚀",
    width: "60%",
  },
  {
    num: "02",
    title: "Rising Clipper",
    desc: "1.25× payout bonus multipliers + priority campaign drops",
    perks: ["Starter perks", "1.25× payout multiplier", "Priority campaign drops"],
    badgeText: "1.25× MULTIPLIER",
    badgeBg: "bg-[#00E676] text-black",
    icon: "⭐",
    width: "80%",
  },
  {
    num: "03",
    title: "Top Clipper (VIP)",
    desc: "1.5× payout multiplier, physical product drops & direct brand collabs",
    perks: ["Rising perks", "1.50× payout multiplier", "Free product drops", "Direct brand collabs"],
    badgeText: "1.50× VIP MULTIPLIER",
    badgeBg: "bg-[#FFE600] text-black",
    icon: "🏆",
    width: "100%",
    highlight: true,
  },
];

export default function RewardsSection() {
  const [bars, setBars] = useState([0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setBars([60, 80, 100]), 200);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-grid-paper border-t-3 border-black relative overflow-hidden">
      
      {/* Tape strip decor & sparkles */}
      <div className="absolute top-10 left-8 hidden md:block">
        <TapeStrip />
      </div>
      <div className="absolute top-12 right-12 hidden md:block z-20">
        <StarSparkle color="#0066FF" className="w-10 h-10" />
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">

        {/* Left Column — Trophy Illustration Frame */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <div className="brutal-card bg-white p-3.5 sm:p-6 w-full max-w-md relative">
            <img
              src="/rewards.jpg"
              alt="Creator tier rewards trophy and podium"
              className="w-full h-auto rounded-xl sm:rounded-2xl border-2 border-black object-cover"
            />
            {/* Floating Badge Overlay */}
            <div className="absolute -bottom-4 right-2 sm:-bottom-5 sm:-right-4 bg-[#FFE600] border-2 sm:border-3 border-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] font-black text-xs sm:text-sm text-black flex items-center gap-2">
              <span>🏆</span> TOP CLIPPERS EARN MORE
            </div>
          </div>
        </div>

        {/* Right Column — Tiers List */}
        <div className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-6">
          <span className="pill-yellow text-[11px] sm:text-xs font-black tracking-widest uppercase">
            CREATOR REWARDS & TIERS
          </span>

          <h2 className="text-2xl sm:text-5xl font-black font-display tracking-tight text-black leading-tight">
            Top clippers{" "}
            <span className="inline-block bg-[#FFE600] text-black border-2 sm:border-3 border-black rounded-xl sm:rounded-2xl px-2.5 sm:px-3 py-0.5 sm:py-1 shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000] transform rotate-1 mt-1 sm:mt-0">
              unlock multiplier bonuses.
            </span>
          </h2>

          <p className="text-sm sm:text-lg font-body font-medium text-black/80">
            The higher your clip views and engagement performance, the higher tier multiplier you unlock.
          </p>

          {/* Tier Cards List */}
          <div className="space-y-3.5 sm:space-y-4 pt-1 sm:pt-2">
            {tiers.map((tier, i) => (
              <div
                key={i}
                className={`brutal-card p-4 sm:p-5 bg-white ${tier.highlight ? "border-3 sm:border-4 border-black shadow-[6px_6px_0px_0px_#FFE600] sm:shadow-[8px_8px_0px_0px_#FFE600]" : ""}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl p-1.5 sm:p-2 bg-[#FAFAFA] border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_#000] flex-shrink-0">
                      {tier.icon}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-black text-base sm:text-lg text-black font-display">
                          Tier {tier.num} — {tier.title}
                        </h3>
                        {tier.highlight && (
                          <span className="text-[9px] sm:text-[10px] bg-[#FF2D55] text-white border border-black px-1.5 sm:px-2 py-0.5 rounded font-black uppercase shadow-[1px_1px_0px_0px_#000]">
                            HOT ⚡
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-body font-medium text-black/70 mt-0.5">
                        {tier.desc}
                      </p>
                    </div>
                  </div>

                  <span className={`pill-yellow text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 font-black whitespace-nowrap self-start sm:self-center ${tier.badgeBg}`}>
                    {tier.badgeText}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mt-3 sm:mt-4 h-3 bg-white border-2 border-black rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full bg-[#FFE600] border-r-2 border-black rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${bars[i]}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={CONFIG.DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-block brutal-btn-yellow px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-black text-center"
            >
              Become a Top Clipper 🏆
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
