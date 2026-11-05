import React from 'react'
import { CircularBadge } from '../CircularBadge'
import { Sparkles, TrendingUp, Play } from 'lucide-react'
import { InstagramIcon, YoutubeIcon, TikTokIcon } from '../BrandIcons'
import { SOCIAL_STATS } from '../../data/portfolioData'

export const SocialsSlide: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#F5F6F9] text-slate-900 flex items-center justify-center overflow-hidden px-4 sm:px-8 py-20 select-none">
      {/* Background Watermark Stamp */}
      <div className="absolute top-10 right-10 pointer-events-none opacity-25">
        <CircularBadge size={300} textColor="text-slate-400" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left / Center Side: 3 Smartphone Mockups */}
        <div className="lg:col-span-7 flex justify-center items-center gap-3 sm:gap-4 md:gap-5 py-4">
          {/* Phone 1: Instagram (Slight Left Tilt) */}
          <div className="w-28 sm:w-36 md:w-44 -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300 phone-shadow rounded-[28px] sm:rounded-[36px] bg-[#111] p-1.5 sm:p-2 border-2 sm:border-4 border-slate-800 shadow-2xl relative group cursor-pointer">
            <div className="relative aspect-[9/18] rounded-[22px] sm:rounded-[28px] overflow-hidden bg-slate-900">
              <img
                src={SOCIAL_STATS[0].previewImage}
                alt="Instagram reel"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
              {/* Notch */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 sm:w-14 h-2.5 sm:h-3.5 bg-black rounded-full" />
              {/* Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white">
                  <Play className="w-4 h-4 fill-white" />
                </div>
              </div>
              {/* Bottom tag */}
              <div className="absolute bottom-2 left-2 right-2 text-white text-[9px] font-mono flex justify-between items-center">
                <span>@HALENELLA</span>
                <span className="text-pink-400 font-bold">2.4M</span>
              </div>
            </div>
          </div>

          {/* Phone 2: TikTok (Center, Taller / Prominent) */}
          <div className="w-32 sm:w-40 md:w-48 z-10 hover:scale-105 transition-all duration-300 phone-shadow rounded-[32px] sm:rounded-[40px] bg-[#111] p-1.5 sm:p-2.5 border-2 sm:border-4 border-slate-800 shadow-2xl relative group cursor-pointer -mt-6">
            <div className="relative aspect-[9/18] rounded-[26px] sm:rounded-[32px] overflow-hidden bg-slate-900">
              <img
                src={SOCIAL_STATS[1].previewImage}
                alt="TikTok viral video"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
              {/* Dynamic Island Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-3 sm:h-4 bg-black rounded-full" />
              {/* Verified badge top */}
              <div className="absolute top-8 left-3 flex items-center gap-1 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-full text-[8px] text-white font-mono">
                <span>VIRAL REEL</span>
              </div>
              {/* Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </div>
              </div>
              {/* Bottom tag */}
              <div className="absolute bottom-3 left-3 right-3 text-white text-[10px] font-mono">
                <span className="block font-bold truncate">Aesthetic OOTD Transition</span>
                <div className="flex justify-between items-center text-cyan-400 text-[9px] mt-0.5">
                  <span>3.8M Followers</span>
                  <span className="text-white/60">♫ Original Sound</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phone 3: YouTube Shorts (Right Tilt) */}
          <div className="w-28 sm:w-36 md:w-44 rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300 phone-shadow rounded-[28px] sm:rounded-[36px] bg-[#111] p-1.5 sm:p-2 border-2 sm:border-4 border-slate-800 shadow-2xl relative group cursor-pointer">
            <div className="relative aspect-[9/18] rounded-[22px] sm:rounded-[28px] overflow-hidden bg-slate-900">
              <img
                src={SOCIAL_STATS[2].previewImage}
                alt="YouTube Shorts behind the scenes"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
              {/* Notch */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 sm:w-14 h-2.5 sm:h-3.5 bg-black rounded-full" />
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-red-600/70 backdrop-blur-md flex items-center justify-center text-white">
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                </div>
              </div>
              {/* Bottom tag */}
              <div className="absolute bottom-2 left-2 right-2 text-white text-[9px] font-mono flex justify-between items-center">
                <span>STUDIO VLOG</span>
                <span className="text-red-400 font-bold">850K</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Headline & Channel Metrics */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left lg:pl-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0F2B5C] text-xs font-mono font-bold tracking-widest uppercase mb-3 w-fit">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>GLOBAL REACH & INFLUENCE</span>
          </div>

          <h2 className="font-['Oswald'] font-bold text-4xl sm:text-5xl md:text-6xl text-[#0F2B5C] tracking-wide uppercase mb-6 leading-none">
            SOCIALS ACOUNTS
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
            Building highly engaged Gen-Z and millennial communities with consistent visual identity, high-production storytelling, and organic viral momentum.
          </p>

          {/* Social Channels Metrics List */}
          <div className="space-y-4">
            {/* Instagram */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-pink-300 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-sm">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-['Oswald'] font-semibold text-lg sm:text-xl text-slate-900 tracking-wide block uppercase">
                    • INSTAGRAM
                  </span>
                  <span className="text-xs font-mono text-slate-500">@HALENELLA</span>
                </div>
              </div>
              <div className="text-right">
                <span className="font-['Oswald'] font-black text-xl sm:text-2xl text-[#0F2B5C]">
                  2M+ FOLLOWERS
                </span>
                <span className="text-[10px] font-mono text-emerald-600 block">
                  +65K / month
                </span>
              </div>
            </div>

            {/* TikTok */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-slate-800 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white shadow-sm">
                  <span className="font-bold text-sm tracking-tighter">
                    <span className="text-cyan-400">Tik</span>
                    <span className="text-rose-400">Tok</span>
                  </span>
                </div>
                <div>
                  <span className="font-['Oswald'] font-semibold text-lg sm:text-xl text-slate-900 tracking-wide block uppercase">
                    • TIKTOK
                  </span>
                  <span className="text-xs font-mono text-slate-500">@HALENELLA</span>
                </div>
              </div>
              <div className="text-right">
                <span className="font-['Oswald'] font-black text-xl sm:text-2xl text-[#0F2B5C]">
                  3M+ FOLLOWERS
                </span>
                <span className="text-[10px] font-mono text-emerald-600 block">
                  14.2% Engagement
                </span>
              </div>
            </div>

            {/* YouTube */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-red-300 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-sm">
                  <YoutubeIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-['Oswald'] font-semibold text-lg sm:text-xl text-slate-900 tracking-wide block uppercase">
                    • YOUTUBE
                  </span>
                  <span className="text-xs font-mono text-slate-500">HALENELLA VIBES</span>
                </div>
              </div>
              <div className="text-right">
                <span className="font-['Oswald'] font-black text-xl sm:text-2xl text-[#0F2B5C]">
                  800K SUBSCRIBERS
                </span>
                <span className="text-[10px] font-mono text-emerald-600 block">
                  620K Avg Views
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
