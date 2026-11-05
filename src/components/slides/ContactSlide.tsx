import React, { useState } from 'react'
import { CircularBadge } from '../CircularBadge'
import { Mail, ArrowUpRight, Copy, Check, Sparkles, Send } from 'lucide-react'
import { InstagramIcon, TikTokIcon } from '../BrandIcons'

interface ContactSlideProps {
  onOpenContact: () => void
}

export const ContactSlide: React.FC<ContactSlideProps> = ({ onOpenContact }) => {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('halenella@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section className="relative w-full min-h-screen bg-[#F5F6F9] text-slate-900 flex items-center justify-center overflow-hidden px-4 sm:px-8 py-20 select-none">
      {/* Background Watermark Stamp */}
      <div className="absolute top-1/2 left-8 md:left-20 -translate-y-1/2 pointer-events-none opacity-20">
        <CircularBadge size={380} textColor="text-slate-400" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Side: Statement Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-[#0F2B5C] text-xs font-mono font-bold tracking-widest uppercase mb-4 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>AVAILABLE FOR Q1/Q2 PROJECTS</span>
          </div>

          <h2 className="font-['Oswald'] font-black text-4xl sm:text-6xl md:text-7xl text-[#0F2B5C] tracking-wide uppercase leading-tight mb-6">
            LET'S WORK TOGETHER<br />
            AND CREATE<br />
            <span className="text-blue-600 underline decoration-blue-300 underline-offset-8">
              SOMETHING GREAT!
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-normal">
            Whether you’re launching a new product line, refreshing your brand aesthetic, or seeking high-impact UGC reels, let’s bring your vision to life.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenContact}
              className="px-8 py-4 rounded-full bg-[#0F2B5C] hover:bg-blue-600 text-white font-bold font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-blue-900/20 flex items-center gap-2 cursor-pointer group"
            >
              <span>Start A Project Brief</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleCopyEmail}
              className="px-6 py-4 rounded-full bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-mono text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Email Copied!' : 'Copy Email Address'}</span>
            </button>
          </div>
        </div>

        {/* Right Side: Social Cards & Handles */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
          {/* Instagram Handle Card */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-pink-400 hover:shadow-md transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-sm">
                <InstagramIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                  Instagram Direct
                </span>
                <span className="font-['Oswald'] font-bold text-xl text-slate-900 tracking-wide uppercase group-hover:text-pink-600 transition-colors">
                  @HALENELLA
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-pink-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          {/* TikTok Handle Card */}
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-slate-900 hover:shadow-md transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-white shadow-sm">
                <span className="font-bold text-lg tracking-tighter">
                  <span className="text-cyan-400">Tik</span>
                  <span className="text-rose-400">Tok</span>
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                  TikTok Official
                </span>
                <span className="font-['Oswald'] font-bold text-xl text-slate-900 tracking-wide uppercase group-hover:text-slate-900 transition-colors">
                  @HALENELLA
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          {/* Email Card */}
          <div
            onClick={handleCopyEmail}
            className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all flex items-center justify-between cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0F2B5C] flex items-center justify-center text-white shadow-sm">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                  Management & Press
                </span>
                <span className="font-['Oswald'] font-bold text-lg sm:text-xl text-slate-900 tracking-wide uppercase group-hover:text-blue-600 transition-colors">
                  HALENELLA@GMAIL.COM
                </span>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-blue-600 uppercase">
              {copied ? 'Copied!' : 'Copy'}
            </span>
          </div>

          {/* Location & Timezone info */}
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono text-slate-600 flex justify-between items-center">
            <span>BASED: LOS ANGELES & NEW YORK</span>
            <span>TIMEZONE: PST / EST</span>
          </div>
        </div>
      </div>
    </section>
  )
}
