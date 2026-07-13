"use client";


export default function BlueSection() {
  const marqueeText = "FINANCE MANAGEMENT • FINANCE MANAGEMENT • FINANCE MANAGEMENT • FINANCE MANAGEMENT • ";

  return (
    <section className="relative w-[92%] max-w-[1240px] mx-auto -mt-40 md:-mt-56 lg:-mt-72 xl:-mt-80 mb-16 z-20">
      {/* Container with rounded corners and royal blue gradient */}
      <div className="w-full bg-gradient-to-b from-brand-blue via-[#003BDD] to-[#0023A8] rounded-[36px] sm:rounded-[48px] lg:rounded-[56px] overflow-hidden py-16 sm:py-20 lg:py-24 px-6 md:px-12 flex flex-col items-center gap-12 sm:gap-16 shadow-[0_20px_50px_rgba(0,71,255,0.25)]">

        {/* Infinite Horizontal Marquee */}
        <div className="w-full overflow-hidden relative py-4 border-y border-white/5">
          <div className="flex w-max animate-marquee-left select-none pointer-events-none">
            {/* Track 1 */}
            <div className="whitespace-nowrap text-[64px] sm:text-[90px] lg:text-[116px] font-black uppercase tracking-tight leading-none pr-8 bg-gradient-to-b from-white/55 via-white/25 to-white/5 bg-clip-text text-transparent">
              {marqueeText}
            </div>
            {/* Track 2 (Identical for seamless looping) */}
            <div className="whitespace-nowrap text-[64px] sm:text-[90px] lg:text-[116px] font-black uppercase tracking-tight leading-none pr-8 bg-gradient-to-b from-white/55 via-white/25 to-white/5 bg-clip-text text-transparent">
              {marqueeText}
            </div>
          </div>
        </div>

        {/* Heading & Partner Logos */}
        <div className="w-full max-w-4xl flex flex-col items-center gap-10">
          <h2 className="text-[18px] sm:text-[22px] lg:text-[25px] font-medium text-white/95 text-center leading-snug max-w-2xl">
            Partnering with top tier brands to revolutionize financial services.
          </h2>

          {/* Logo Row */}
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-12 sm:gap-y-8 w-full mt-2">

            {/* Logo 1 - Shield */}
            <div className="flex items-center gap-1.5 text-white/50 hover:text-white/90 transition-colors duration-200 cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 2.18c3.48.96 6 4.19 6 7.91v4.73c0 3.65-2.26 7.02-6 8.09-3.74-1.07-6-4.44-6-8.09V12.1c0-3.72 2.52-6.95 6-7.92z" />
              </svg>
              <span className="font-bold text-[14px] sm:text-[15px] tracking-tight">Logoipsum</span>
            </div>

            {/* Logo 2 - Globe */}
            <div className="flex items-center gap-1.5 text-white/50 hover:text-white/90 transition-colors duration-200 cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span className="font-bold text-[14px] sm:text-[15px] tracking-tight">logo ipsum</span>
            </div>

            {/* Logo 3 - Target */}
            <div className="flex items-center gap-1.5 text-white/50 hover:text-white/90 transition-colors duration-200 cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="8" />
                <circle cx="12" cy="12" r="3" />
                <line x1="12" y1="2" x2="12" y2="6" />
                <line x1="12" y1="18" x2="12" y2="22" />
                <line x1="2" y1="12" x2="6" y2="12" />
                <line x1="18" y1="12" x2="22" y2="12" />
              </svg>
              <span className="font-bold text-[14px] sm:text-[15px] tracking-tight">Logoipsum</span>
            </div>

            {/* Logo 4 - Star Diamond */}
            <div className="flex items-center gap-1.5 text-white/50 hover:text-white/90 transition-colors duration-200 cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 7.2L22 11.6l-7.6 2.4L12 22l-2.4-7.6L2 11.6l7.6-2.4z" />
              </svg>
              <span className="font-bold text-[14px] sm:text-[15px] tracking-tight">Logoipsum</span>
            </div>

            {/* Logo 5 - IPSUM */}
            <div className="flex items-center gap-1.5 text-white/50 hover:text-white/90 transition-colors duration-200 cursor-pointer">
              <span className="font-black italic text-[17px] sm:text-[18px] tracking-widest leading-none">IPSUM</span>
            </div>

            {/* Logo 6 - Slanted Bars */}
            <div className="flex items-center gap-1.5 text-white/50 hover:text-white/90 transition-colors duration-200 cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <rect x="4" y="6" width="3" height="12" rx="1" transform="skewX(-15)" />
                <rect x="9" y="6" width="3" height="12" rx="1" transform="skewX(-15)" />
                <rect x="14" y="6" width="3" height="12" rx="1" transform="skewX(-15)" />
                <rect x="19" y="6" width="3" height="12" rx="1" transform="skewX(-15)" />
              </svg>
              <span className="font-bold text-[14px] sm:text-[15px] tracking-tight">Logoipsum</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
