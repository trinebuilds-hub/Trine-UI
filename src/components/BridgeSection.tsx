import { PencilSticker, MagnifyingGlassSticker, TapeStrip } from "./Doodles";

const features = [
  { icon: "🎯", label: "Curated brand campaigns", desc: "Hand-picked high converting briefs." },
  { icon: "⚡", label: "Direct creator hub access", desc: "No cold email outreach required." },
  { icon: "🚫", label: "No chasing clients", desc: "We manage payments & client approvals." },
  { icon: "💰", label: "Performance bonuses", desc: "Multiplier payouts based on clip views." },
];

export default function BridgeSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-grid-paper border-t-3 border-black overflow-hidden">
      
      {/* Decorative Stickers */}
      <div className="absolute top-8 left-10 hidden md:block">
        <TapeStrip />
      </div>
      <div className="absolute top-12 right-10 hidden md:block animate-wiggle z-20">
        <PencilSticker className="w-24 h-24" />
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative">

        {/* Left Column — Neo-Brutalist Frame Illustration */}
        <div className="lg:col-span-6 flex items-center justify-center order-2 lg:order-1 relative">
          <div className="relative w-full max-w-lg brutal-card bg-white p-4 sm:p-6">
            <img
              src="/bridge.jpg"
              alt="Trineworks FX connecting brands to creators"
              className="w-full h-auto rounded-2xl border-2 border-black object-cover"
            />
            {/* Sticker overlay on bottom corner */}
            <div className="absolute -bottom-6 -left-6 z-20 hidden sm:block">
              <MagnifyingGlassSticker className="w-24 h-24" />
            </div>
            {/* Badge overlay on top right */}
            <div className="absolute -top-4 -right-4 bg-[#FFE600] border-2 border-black px-4 py-2 rounded-xl shadow-[3px_3px_0px_0px_#000] font-black text-xs uppercase tracking-wider text-black">
              DIRECT DISCORD FEED 🚀
            </div>
          </div>
        </div>

        {/* Right Column — Content */}
        <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6 order-1 lg:order-2">

          <span className="pill-yellow text-xs font-black tracking-widest uppercase">
            WHY TRINEWORKS FX
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-black leading-tight">
            We handle the brand side.{" "}
            <span className="inline-block bg-[#0066FF] text-white border-3 border-black rounded-2xl px-3 py-1 shadow-[4px_4px_0px_0px_#000] transform rotate-1">
              You handle the creativity.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-black font-body font-medium leading-relaxed max-w-xl">
            Our team has built a private network of brand partnerships. We negotiate campaign contracts, bring them directly into our Discord, and open them to creators like you.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2">
            {features.map((f, i) => (
              <div
                key={i}
                className="brutal-card p-4 bg-white flex flex-col justify-between space-y-2"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl p-2 bg-[#FFE600] border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_#000]">
                    {f.icon}
                  </span>
                  <span className="font-extrabold text-sm sm:text-base text-black font-display leading-snug">
                    {f.label}
                  </span>
                </div>
                <p className="text-xs text-black/80 font-body font-medium">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}
