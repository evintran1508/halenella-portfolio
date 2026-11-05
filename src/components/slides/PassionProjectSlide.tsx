import React from 'react'
import { CircularBadge } from '../CircularBadge'
import { Laptop, Sparkles, Sliders, ExternalLink } from 'lucide-react'

export const PassionProjectSlide: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#0F2B5C] text-white flex items-center justify-center overflow-hidden px-4 sm:px-8 py-20 select-none">
      {/* Background Watermark */}
      <div className="absolute top-1/2 -right-16 -translate-y-1/2 pointer-events-none opacity-20">
        <CircularBadge size={340} textColor="text-blue-300" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Side: Headline & MacBook Laptop Mockup */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <div className="flex items-center gap-2 text-blue-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4" />
            <span>SELF-DIRECTED INITIATIVE</span>
          </div>

          <h2 className="font-['Oswald'] font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-wide uppercase mb-8">
            PASSION PROJECT
          </h2>

          {/* Realistic MacBook Pro Mockup */}
          <div className="w-full max-w-xl mx-auto lg:mx-0">
            {/* Screen Lid */}
            <div className="relative rounded-t-2xl bg-[#0d0e12] border-4 border-slate-700 shadow-2xl p-2 pb-0">
              {/* Webcam */}
              <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-600 mx-auto mb-1 flex items-center justify-center">
                <span className="w-0.5 h-0.5 rounded-full bg-emerald-500 animate-ping" />
              </div>

              {/* Display Screen with Camera Viewfinder UI */}
              <div className="relative aspect-[16/10] rounded-t-lg overflow-hidden bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85"
                  alt="Lumière Beauty Concept Shoot"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30" />

                {/* Camera Viewfinder OSD (On-Screen Display) */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-center text-[10px] font-mono text-white/90">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded">
                    <span className="text-red-500 font-bold animate-pulse">● REC</span>
                    <span>4K 60FPS</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded">
                    <span>RAW</span>
                    <span className="text-emerald-400">LOG-3</span>
                  </div>
                </div>

                {/* Framing Center Crosshair */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 border border-white/30 rounded-lg flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full border border-white/60" />
                  </div>
                </div>

                {/* Bottom Camera Parameter Bar */}
                <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg flex justify-between items-center text-[9px] font-mono text-white/80">
                  <span>ISO 200</span>
                  <span>f/1.8</span>
                  <span>1/250s</span>
                  <span className="text-blue-300 font-bold">LUMIÈRE CONCEPT</span>
                </div>
              </div>
            </div>

            {/* Laptop Keyboard Base */}
            <div className="h-3.5 bg-gradient-to-b from-slate-600 via-slate-700 to-slate-800 rounded-b-xl shadow-2xl relative flex justify-center">
              <div className="w-20 h-1 bg-slate-900 rounded-b" />
            </div>
          </div>
        </div>

        {/* Right Side: Concept Story & Color Palette */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left lg:pl-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono font-bold tracking-widest uppercase mb-3 w-fit border border-blue-400/30">
            <span>BRAND IDENTITY & SYSTEM</span>
          </div>

          <h3 className="font-['Syne'] font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight mb-4">
            LUMIÈRE BEAUTY<br />CONCEPT
          </h3>

          <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 font-normal">
            Developed a social media concept focused on creating a cohesive visual identity for a beauty brand. The project explores content planning, product storytelling, and engaging visual communication across social platforms.
          </p>

          {/* Color Palette Swatches */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-200 block mb-3 font-bold">
              Harmonic Brand Palette
            </span>
            <div className="grid grid-cols-4 gap-2">
              <div className="flex flex-col items-center">
                <div className="w-full h-10 rounded-lg bg-[#F3C5C5] shadow-inner mb-1" />
                <span className="text-[9px] font-mono text-white/70">#F3C5C5</span>
                <span className="text-[8px] text-white/40">Blush</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-full h-10 rounded-lg bg-[#E6D3B3] shadow-inner mb-1" />
                <span className="text-[9px] font-mono text-white/70">#E6D3B3</span>
                <span className="text-[8px] text-white/40">Champagne</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-full h-10 rounded-lg bg-[#FAF8F5] shadow-inner mb-1 border border-white/20" />
                <span className="text-[9px] font-mono text-white/70">#FAF8F5</span>
                <span className="text-[8px] text-white/40">Ivory</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-full h-10 rounded-lg bg-[#1C1C1E] shadow-inner mb-1 border border-white/10" />
                <span className="text-[9px] font-mono text-white/70">#1C1C1E</span>
                <span className="text-[8px] text-white/40">Noir</span>
              </div>
            </div>
          </div>

          {/* Key Deliverables */}
          <div className="space-y-2 text-xs font-mono text-white/80">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>Full Brand Identity Guidelines & Asset Library</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>18 Custom Reel Motion Graphics Templates</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>30-Day Omnichannel Launch Calendar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

