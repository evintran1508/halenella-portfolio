import React from 'react'
import { CircularBadge } from '../CircularBadge'
import { Sparkles, Heart, Compass, CheckCircle2 } from 'lucide-react'

export const AboutSlide: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#F5F6F9] text-slate-900 flex items-center justify-center overflow-hidden px-4 sm:px-8 py-20">
      {/* Background Subtle Circular Watermarks */}
      <div className="absolute top-12 left-8 md:left-16 pointer-events-none opacity-40">
        <CircularBadge size={260} textColor="text-slate-400" />
      </div>
      <div className="absolute -bottom-16 -right-16 pointer-events-none opacity-30">
        <CircularBadge size={320} textColor="text-slate-400" reverse />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Side: Trendy Girl sitting on stack of books */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative w-72 sm:w-80 md:w-96">
            {/* Background geometric badge */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-blue-100/80 -z-10 blur-xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-blue-200/50 -z-10 blur-xl" />

            {/* Photo Card with White Frame & Shadow */}
            <div className="relative bg-white p-3 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-slate-200/60 overflow-hidden group">
              <div className="relative h-[420px] sm:h-[460px] rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src="/assets/images/banners/about.png?v=7"
                  alt="Halenella portrait"
                  className="w-full h-full object-contain object-bottom group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating sticker badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono font-bold text-[#0F2B5C] border border-slate-200 shadow-md">
                  EST. 2020
                </div>

                {/* Bottom subtitle bar */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0F2B5C]/90 backdrop-blur-md p-3 rounded-xl text-white flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-blue-200 block">
                      Identity & Vision
                    </span>
                    <span className="font-['Syne'] font-bold text-sm">
                      Authentic Storyteller
                    </span>
                  </div>
                  <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Circular Badge Stamp Overlay on Bottom Left */}
            <div className="absolute -bottom-10 -left-10 hidden sm:block pointer-events-none">
              <CircularBadge size={160} textColor="text-[#0F2B5C]/60" />
            </div>
          </div>
        </div>

        {/* Right Side: Typography & Bio */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left lg:pl-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-[#0F2B5C] text-xs font-mono font-bold tracking-widest uppercase mb-4 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#0F2B5C]" />
            <span>BIO & PHILOSOPHY</span>
          </div>

          <h2 className="font-['Syne'] font-black text-4xl sm:text-5xl md:text-6xl text-[#0F2B5C] tracking-tight mb-6">
            About me
          </h2>

          <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            <p className="font-medium text-slate-900">
              I'm a passionate content creator who loves turning everyday moments into engaging stories. From lifestyle and beauty to fashion and trends, I create authentic content that connects with audiences and brings brands to life.
            </p>
            <p>
              Beyond creating content, I enjoy bringing ideas to life through creative video editing, photography, and visual storytelling. I'm always exploring new trends and experimenting with fresh ideas to make every piece of content engaging, relatable, and visually appealing.
            </p>
          </div>

          {/* Key Creator Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-200">
            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
              <span className="text-2xl sm:text-3xl font-black font-['Oswald'] text-[#0F2B5C] block">
                5+ YEARS
              </span>
              <span className="text-xs uppercase font-mono tracking-wider text-slate-500">
                Industry Experience
              </span>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
              <span className="text-2xl sm:text-3xl font-black font-['Oswald'] text-[#0F2B5C] block">
                100+
              </span>
              <span className="text-xs uppercase font-mono tracking-wider text-slate-500">
                Brand Collaborations
              </span>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm col-span-2 sm:col-span-1">
              <span className="text-2xl sm:text-3xl font-black font-['Oswald'] text-[#0F2B5C] block">
                10M+
              </span>
              <span className="text-xs uppercase font-mono tracking-wider text-slate-500">
                Collective Audience
              </span>
            </div>
          </div>

          {/* Core Strengths Tags */}
          <div className="flex flex-wrap items-center gap-2 mt-6">
            <span className="px-3 py-1 rounded-lg bg-slate-200/70 text-slate-800 text-xs font-mono font-medium">
              #VisualStorytelling
            </span>
            <span className="px-3 py-1 rounded-lg bg-slate-200/70 text-slate-800 text-xs font-mono font-medium">
              #CreativeDirection
            </span>
            <span className="px-3 py-1 rounded-lg bg-slate-200/70 text-slate-800 text-xs font-mono font-medium">
              #HighPacingEditing
            </span>
            <span className="px-3 py-1 rounded-lg bg-slate-200/70 text-slate-800 text-xs font-mono font-medium">
              #GenZCulture
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

