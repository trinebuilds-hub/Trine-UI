import { CONFIG } from "../config";
import { StarSparkle, TapeStrip } from "./Doodles";

export default function DiscordCTASection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-grid-paper border-t-3 border-black relative overflow-hidden">
      
      <div className="max-w-4xl w-full mx-auto relative z-10">
        
        {/* Giant Neo Brutalist Banner */}
        <div className="brutal-card bg-[#FFE600] p-6 sm:p-12 text-center space-y-6 sm:space-y-8 relative overflow-hidden shadow-[6px_6px_0px_0px_#000000] sm:shadow-[12px_12px_0px_0px_#000000]">
          
          {/* Tape strips on top corners */}
          <div className="absolute -top-3 left-4 sm:left-6 z-20">
            <TapeStrip />
          </div>
          <div className="absolute top-3 right-4 sm:top-4 sm:right-6 z-20">
            <StarSparkle color="#FF4081" className="w-8 h-8 sm:w-10 sm:h-10 animate-bounce" />
          </div>

          {/* Giant Discord Icon Sticker Box */}
          <div className="flex justify-center pt-2 sm:pt-4">
            <div className="w-18 h-18 sm:w-24 sm:h-24 bg-white border-2 sm:border-3 border-black rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-[4px_4px_0px_0px_#000000] sm:shadow-[5px_5px_0px_0px_#000000] transform -rotate-3 hover:rotate-0 transition-transform">
              <svg viewBox="0 0 127.14 96.36" className="w-10 h-10 sm:w-12 sm:h-12 fill-black">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
              </svg>
            </div>
          </div>

          {/* Copy */}
          <div className="space-y-3 sm:space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-6xl font-black font-display text-black tracking-tight leading-none">
              Ready to start earning?
            </h2>
            <p className="text-sm sm:text-xl text-black font-body font-bold leading-relaxed">
              Join the trinewroks.space Discord space and claim your first campaign brief today.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-3 sm:gap-4 pt-1 sm:pt-2 w-full">
            <a
              href={CONFIG.DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="discord-main-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-10 py-4 sm:py-5 brutal-btn-black text-base sm:text-xl font-black text-white hover:text-[#FFE600] rounded-xl sm:rounded-2xl shadow-[4px_4px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] cursor-pointer"
            >
              <svg viewBox="0 0 127.14 96.36" className="w-5 h-5 sm:w-7 sm:h-7 fill-current flex-shrink-0">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
              </svg>
              Join the Discord Space
            </a>
            <p className="text-[10px] sm:text-xs font-mono font-black text-black uppercase tracking-widest bg-white border border-black px-3 sm:px-4 py-1 rounded-full shadow-[2px_2px_0px_0px_#000]">
              FREE ACCESS · INSTANT CAMPAIGNS
            </p>
          </div>

          {/* Floating Emoji Bar */}
          <div className="flex justify-center gap-4 sm:gap-6 text-2xl sm:text-3xl pt-2 sm:pt-4 select-none">
            <span className="animate-doodle-float">💰</span>
            <span className="animate-wiggle">🎬</span>
            <span className="animate-doodle-float">⭐</span>
            <span className="animate-wiggle">🚀</span>
            <span className="animate-doodle-float">🎯</span>
          </div>

        </div>

      </div>
    </section>
  );
}
