import React from 'react'
import { CircularBadge } from '../CircularBadge'
import { Camera, Layers, Share2, Check, Sparkles } from 'lucide-react'

export const SkillsSlide: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#F5F6F9] text-slate-900 flex items-center justify-center overflow-hidden px-4 sm:px-8 py-20 select-none">
      {/* Background Watermark Stamp */}
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 pointer-events-none opacity-25">
        <CircularBadge size={340} textColor="text-slate-400" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Side: Skills & Software Suite */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-[#0F2B5C] text-xs font-mono font-bold tracking-widest uppercase mb-3 w-fit">
            <Layers className="w-3.5 h-3.5 text-[#0F2B5C]" />
            <span>TOOLKIT & PROFICIENCIES</span>
          </div>

          <h2 className="font-['Syne'] font-black text-4xl sm:text-5xl md:text-6xl text-[#0F2B5C] tracking-tight mb-8">
            Skills &<br />Expertise
          </h2>

          {/* Software Icons Row (Photoshop, Illustrator, Slack, Canva, Premiere, Figma) */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
            {/* Photoshop (Ps) */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#001E36] border-2 border-[#31A8FF] flex items-center justify-center shadow-md hover:scale-110 transition-transform group" title="Adobe Photoshop">
              <span className="font-bold font-mono text-[#31A8FF] text-base sm:text-lg group-hover:text-white transition-colors">
                Ps
              </span>
            </div>

            {/* Illustrator (Ai) */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#330000] border-2 border-[#FF9A00] flex items-center justify-center shadow-md hover:scale-110 transition-transform group" title="Adobe Illustrator">
              <span className="font-bold font-mono text-[#FF9A00] text-base sm:text-lg group-hover:text-white transition-colors">
                Ai
              </span>
            </div>

            {/* Slack */}
            <div className="h-12 sm:h-14 px-4 rounded-2xl bg-white border border-slate-300 flex items-center gap-2 shadow-md hover:scale-105 transition-transform" title="Slack">
              <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E01E5A]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#36C5F0]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#2EB67D]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#ECB22E]" />
              </div>
              <span className="font-bold font-sans text-slate-800 text-sm">slack</span>
            </div>

            {/* Canva */}
            <div className="h-12 sm:h-14 px-4 rounded-2xl bg-gradient-to-r from-[#00C4CC] to-[#7D2AE8] text-white flex items-center justify-center shadow-md hover:scale-105 transition-transform font-['Caveat'] text-2xl font-bold tracking-wide" title="Canva">
              Canva
            </div>

            {/* Premiere Pro / Video */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#00005B] border-2 border-[#9999FF] flex items-center justify-center shadow-md hover:scale-110 transition-transform group" title="Premiere Pro">
              <span className="font-bold font-mono text-[#9999FF] text-base sm:text-lg">
                Pr
              </span>
            </div>

            {/* Figma */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-black border border-slate-700 flex items-center justify-center shadow-md hover:scale-110 transition-transform" title="Figma">
              <span className="text-sm font-bold text-white font-mono">Fig</span>
            </div>
          </div>

          {/* 2 Core Specialization Pillars */}
          <div className="space-y-6">
            {/* Pillar 1 */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-blue-300 transition-colors">
              <h3 className="text-xl sm:text-2xl font-semibold font-['Syne'] text-[#0F2B5C] mb-2 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                Social Media Marketing & Strategy
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Data-driven content architecture designed to optimize algorithmic reach, community retention, and organic conversions across Instagram, TikTok, and YouTube.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-700">
                <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200">Viral Hooks</span>
                <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200">Trend Forecasting</span>
                <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200">A/B Content Testing</span>
                <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200">Audience Segmentation</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-blue-300 transition-colors">
              <h3 className="text-xl sm:text-2xl font-bold font-['Syne'] text-[#0F2B5C] mb-2 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                Brand Collaboration & Campaign Creation
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Seamless end-to-end campaign execution from creative moodboard concepts, product styling, native sponsorship integration, to post-campaign analytic debriefs.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-700">
                <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200">Art Direction</span>
                <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200">UGC Video Creation</span>
                <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200">Pitch Deck Devel</span>
                <span className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200">Multi-Channel Rollout</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Expressive Girl with Camera */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative w-72 sm:w-80 md:w-96">
            {/* Camera badge background glow */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-yellow-200/50 -z-10 blur-xl" />

            <div className="relative bg-white p-3 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.14)] border border-slate-200 overflow-hidden group">
              <div className="relative h-[440px] sm:h-[480px] rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src="/camera-girl.png"
                  alt="Halenella holding camera with blue scarf"
                  className="w-full h-full object-contain object-bottom group-hover:scale-105 transition-transform duration-700"
                />

                {/* Shutter / Lens Overlay Graphic */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-mono font-bold text-slate-800 border border-slate-200 flex items-center gap-1.5 shadow-md">
                  <Camera className="w-3.5 h-3.5 text-blue-600" />
                  <span>SONY FX3 • 24-70mm GM</span>
                </div>

                {/* Bottom Creator Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0F2B5C]/90 backdrop-blur-md p-3.5 rounded-2xl text-white flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-blue-300 block">
                      Lenscraft & Lighting
                    </span>
                    <span className="font-['Syne'] font-bold text-base">
                      Creative In Action
                    </span>
                  </div>
                  <span className="text-xl">📸</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

