import { BlueSquigglyArrow, PinkPointerArrow, StarSparkle } from "./Doodles";

const steps = [
  {
    num: "01",
    title: "Join our Discord",
    desc: "Get instant access to private brand campaign feeds and our exclusive creator community.",
    emoji: "💬",
    pillBg: "bg-[#FFE600]",
    badgeText: "STEP 01",
  },
  {
    num: "02",
    title: "Claim a campaign",
    desc: "Pick from available brand briefs and premium asset packs directly in our Discord channels.",
    emoji: "📋",
    pillBg: "bg-[#00E676]",
    badgeText: "STEP 02",
  },
  {
    num: "03",
    title: "Clip & earn cash",
    desc: "Post your UGC clip. You earn performance payouts based on verified views and engagement.",
    emoji: "🎬",
    pillBg: "bg-[#FF4081]",
    badgeText: "STEP 03",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-grid-paper border-t-3 border-black relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-10 right-10 hidden sm:block">
        <StarSparkle color="#0066FF" className="w-10 h-10" />
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10 space-y-16">

        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="pill-yellow text-xs font-black tracking-widest uppercase">
            THE PROCESS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-black leading-tight">
            Get started in{" "}
            <span className="inline-block bg-[#FFE600] text-black border-3 border-black rounded-2xl px-4 py-1 shadow-[4px_4px_0px_0px_#000] transform -rotate-1">
              three simple steps.
            </span>
          </h2>
          <p className="text-base sm:text-lg font-body font-medium text-black/80 max-w-xl mx-auto">
            From joining our Discord to receiving your first performance payout.
          </p>
        </div>

        {/* Hero Illustration in Brutalist Frame */}
        <div className="flex justify-center relative">
          <div className="brutal-card bg-white p-3 sm:p-5 max-w-3xl w-full relative">
            <img
              src="/how.jpg"
              alt="Three steps to get started: Join Discord, claim campaign, clip and earn"
              className="w-full h-auto rounded-xl border-2 border-black object-cover"
            />
            {/* Doodle sticker overlay */}
            <div className="absolute -bottom-6 -left-6 hidden sm:block">
              <PinkPointerArrow className="w-20 h-20" />
            </div>
            <div className="absolute -top-6 -right-6 hidden sm:block">
              <BlueSquigglyArrow className="w-24 h-24" />
            </div>
          </div>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="brutal-card bg-white p-6 flex flex-col justify-between space-y-6 relative group"
            >
              {/* Step Pill Header */}
              <div className="flex items-center justify-between">
                <span className="text-3xl p-2.5 bg-[#FAFAFA] border-2 border-black rounded-2xl shadow-[3px_3px_0px_0px_#000]">
                  {step.emoji}
                </span>
                <span className={`pill-yellow text-sm px-4 py-1 font-black shadow-[2px_2px_0px_0px_#000]`}>
                  {step.num}
                </span>
              </div>

              {/* Step Copy */}
              <div className="space-y-3">
                <h3 className="text-2xl font-black font-display text-black">
                  {step.title}
                </h3>
                <p className="text-sm font-body font-medium text-black/80 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Bottom Card Accent Bar */}
              <div className="pt-2">
                <div className="w-full h-2 bg-black rounded-full overflow-hidden">
                  <div className={`h-full ${step.pillBg}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
