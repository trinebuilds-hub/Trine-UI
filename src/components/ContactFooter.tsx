import { CONFIG } from "../config";

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

export default function ContactFooter() {
  return (
    <footer className="bg-grid-paper border-t-3 border-black">

      {/* Contact Section */}
      <div className="py-12 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-20 relative overflow-hidden">

        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">

          {/* Left — Heading */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <span className="pill-yellow text-[11px] sm:text-xs font-black tracking-widest uppercase">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-black">
              Let's talk.
            </h2>
            <p className="text-sm sm:text-base text-black font-body font-medium max-w-md leading-relaxed">
              For brand inquiries, UGC partnerships, or creator support. We're always open to scaling new campaign collaborations.
            </p>

            {/* Decorative Brutalist Color Pills */}
            <div className="flex gap-2 pt-2 sm:pt-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FFE600] border-2 border-black shadow-[2px_2px_0px_0px_#000]" />
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0066FF] border-2 border-black shadow-[2px_2px_0px_0px_#000]" />
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FF4081] border-2 border-black shadow-[2px_2px_0px_0px_#000]" />
            </div>
          </div>

          {/* Right — Contact Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">

            <a
              href={`mailto:${CONFIG.EMAIL}`}
              id="contact-email"
              className="brutal-card p-4 sm:p-5 bg-white flex flex-col justify-between space-y-3 sm:space-y-4 group hover:bg-[#FFE600] transition-colors"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black text-white flex items-center justify-center shadow-[2px_2px_0px_0px_#000] sm:shadow-[3px_3px_0px_0px_#000]">
                <MailIcon />
              </div>
              <div>
                <p className="text-[10px] font-black text-black/60 uppercase tracking-widest font-mono">Email Us</p>
                <p className="text-xs sm:text-sm font-bold text-black font-body break-all mt-0.5">{CONFIG.EMAIL}</p>
              </div>
            </a>

            <a
              href={`tel:${CONFIG.PHONE}`}
              id="contact-phone"
              className="brutal-card p-4 sm:p-5 bg-white flex flex-col justify-between space-y-3 sm:space-y-4 group hover:bg-[#00E676] transition-colors"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black text-white flex items-center justify-center shadow-[2px_2px_0px_0px_#000] sm:shadow-[3px_3px_0px_0px_#000]">
                <PhoneIcon />
              </div>
              <div>
                <p className="text-[10px] font-black text-black/60 uppercase tracking-widest font-mono">Call Us</p>
                <p className="text-xs sm:text-sm font-bold text-black font-body mt-0.5">{CONFIG.PHONE_DISPLAY}</p>
              </div>
            </a>

            <a
              href={CONFIG.INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-instagram"
              className="brutal-card p-4 sm:p-5 bg-white flex flex-col justify-between space-y-3 sm:space-y-4 group hover:bg-[#FF4081] group-hover:text-white transition-colors"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black text-white flex items-center justify-center shadow-[2px_2px_0px_0px_#000] sm:shadow-[3px_3px_0px_0px_#000]">
                <InstagramIcon />
              </div>
              <div>
                <p className="text-[10px] font-black text-black/60 uppercase tracking-widest font-mono">Instagram</p>
                <p className="text-xs sm:text-sm font-bold text-black font-body mt-0.5">{CONFIG.INSTAGRAM_HANDLE}</p>
              </div>
            </a>

          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="border-t-3 border-black px-4 sm:px-6 md:px-12 lg:px-20 py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2.5 sm:gap-3 text-[10px] sm:text-xs font-mono font-bold text-black bg-[#FFE600]">
        <p>© 2026 TRINEWORKS FX · trinewroks.space. All rights reserved.</p>
        <p className="uppercase tracking-widest bg-black text-white px-2.5 sm:px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_#000]">
          BUILT FOR CREATORS & PERFORMANCE BRANDS
        </p>
      </div>
    </footer>
  );
}
