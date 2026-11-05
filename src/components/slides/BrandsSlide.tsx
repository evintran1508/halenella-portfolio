import React from 'react'
import { CircularBadge } from '../CircularBadge'
import { BRANDS_LIST } from '../../data/portfolioData'
import { Play, Sparkles, Flame, Eye } from 'lucide-react'

export const BrandsSlide: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#0F2B5C] text-white flex items-center justify-center overflow-hidden px-4 sm:px-8 py-20 select-none">
      {/* Background Watermark */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 pointer-events-none opacity-20">
        <CircularBadge size={380} textColor="text-blue-300" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col items-center text-center">
        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-blue-200 text-xs font-mono font-bold tracking-widest uppercase mb-2">
          <Sparkles className="w-3.5 h-3.5 text-blue-300" />
          <span>COLLABORATIONS & SPONSORS</span>
        </div>

        {/* Section Header: "BRANDS" */}
        <h2 className="font-['Oswald'] font-bold text-5xl sm:text-6xl md:text-7xl text-white tracking-wider uppercase mb-3">
          BRANDS
        </h2>
        <p className="text-white/70 max-w-lg mx-auto text-xs sm:text-sm font-normal mb-8">
          Partnering with forward-thinking fashion, tech, and beauty brands to produce viral branded campaigns and lifestyle storytelling.
        </p>

        {/* Brand Logos Row Marquee */}
        <div className="w-full max-w-4xl py-3 px-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-10 flex flex-wrap items-center justify-around gap-6 sm:gap-8">
          <span className="font-['Syne'] font-extrabold text-lg sm:text-xl tracking-tight text-white/90 hover:text-white transition-colors">
            maslostudio
          </span>
          <span className="font-['Oswald'] font-bold text-xl sm:text-2xl tracking-widest text-white/80 hover:text-white transition-colors">
            fuse
          </span>
          <span className="font-['Caveat'] font-bold text-2xl sm:text-3xl text-emerald-300 hover:text-emerald-200 transition-colors">
            florica
          </span>
          <span className="font-sans font-light tracking-[0.2em] text-base sm:text-lg text-amber-200 hover:text-white transition-colors uppercase">
            unearth
          </span>
          <span className="font-serif italic font-bold text-lg sm:text-xl tracking-wider text-cyan-200 hover:text-white transition-colors">
            LULIZZI
          </span>
        </div>

        {/* 5 Vertical Smartphone Reel Mockups (Side-by-Side as in the photo) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-5 w-full max-w-5xl justify-items-center">
          {BRANDS_LIST.map((brand, idx) => (
            <div
              key={brand.name}
              className="group relative w-full max-w-[170px] aspect-[9/18] rounded-[24px] sm:rounded-[28px] bg-[#111] p-1.5 border-2 border-white/20 shadow-2xl overflow-hidden hover:-translate-y-2 hover:border-blue-400 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Video Thumbnail Background */}
              <div className="relative w-full h-full rounded-[20px] sm:rounded-[24px] overflow-hidden bg-slate-900">
                <img
                  src={brand.videoThumbnail}
                  alt={brand.campaign}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

                {/* Top Notch & Camera */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-2 bg-black rounded-full" />

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                  </div>
                </div>

                {/* Sound wave hint indicator */}
                <div className="absolute top-3 right-2 flex items-center gap-0.5 opacity-60 group-hover:opacity-100">
                  <span className="w-0.5 h-2 bg-white rounded-full animate-pulse" />
                  <span className="w-0.5 h-3 bg-white rounded-full animate-pulse delay-75" />
                  <span className="w-0.5 h-1.5 bg-white rounded-full animate-pulse delay-150" />
                </div>

                {/* Campaign Views Badge */}
                <div className="absolute top-3 left-2 bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded text-[8px] font-mono text-white/90">
                  {brand.views}
                </div>

                {/* Bottom Brand Label Pill (as shown in the design: florica, unearth, luluzzi...) */}
                <div className="absolute bottom-2 left-2 right-2 flex flex-col items-center">
                  <span className="w-full py-1 px-2 rounded-lg bg-white/95 text-slate-900 text-[10px] font-bold font-mono tracking-wider uppercase text-center shadow-md truncate">
                    {brand.logoText}
                  </span>
                  <span className="text-[8px] text-white/70 font-mono mt-0.5 truncate">
                    {brand.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

