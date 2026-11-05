import React, { useEffect, useRef } from 'react'
import { Sparkles, Play, Disc3, Music2, Video, Clapperboard, Headphones, Film } from 'lucide-react'
import { CircularBadge } from '../CircularBadge'

interface HeroSlideProps {
  onExplore?: () => void
}

export const HeroSlide: React.FC<HeroSlideProps> = ({ onExplore }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const floatingElementsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { innerWidth, innerHeight } = window
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2)
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2)

      floatingElementsRef.current.forEach((el, index) => {
        if (!el) return
        const factor = (index + 1) * 12
        el.style.transform = `translate3d(${x * factor}px, ${y * factor}px, 0)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#0F2B5C] text-white flex items-center justify-center overflow-hidden px-4 sm:px-8 py-20 select-none"
    >
      {/* Background Subtle Gradient & Sparkles */}
      <div className="absolute inset-0 bg-radial from-blue-600/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-10 text-white/30 text-2xl animate-pulse">✦</div>
      <div className="absolute top-1/3 right-16 text-white/30 text-xl animate-pulse delay-500">✧</div>
      <div className="absolute bottom-24 left-1/4 text-white/25 text-3xl animate-pulse delay-700">★</div>
      <div className="absolute bottom-1/3 right-1/4 text-white/20 text-2xl animate-pulse delay-300">✦</div>

      {/* Floating Retro Cassette Tape (Top Left) */}
      <div
        ref={(el) => { floatingElementsRef.current[0] = el }}
        className="absolute top-20 sm:top-24 left-4 sm:left-12 lg:left-24 z-20 transition-transform duration-300 ease-out animate-float-soft"
      >
        <div className="w-36 sm:w-44 md:w-52 bg-[#1b1c20] p-2.5 sm:p-3 rounded-xl border-2 border-slate-700/80 shadow-2xl -rotate-12 hover:rotate-0 transition-transform cursor-pointer group">
          <div className="bg-[#f2efe9] rounded p-2 text-slate-900 border border-slate-300 shadow-inner">
            <div className="flex justify-between items-center text-[9px] font-bold tracking-widest font-mono text-slate-700">
              <span>SIDE A</span>
              <span className="text-red-500 font-extrabold">REC ●</span>
              <span>THE 1975</span>
            </div>
            {/* Cassette Center Wheels */}
            <div className="my-2 bg-[#2a2c33] rounded-lg p-1.5 flex justify-around items-center">
              <div className="w-6 h-6 rounded-full border-2 border-white/60 border-dashed flex items-center justify-center animate-spin-slow">
                <div className="w-2 h-2 rounded-full bg-white/80" />
              </div>
              <div className="h-2 w-12 bg-white/20 rounded-full" />
              <div className="w-6 h-6 rounded-full border-2 border-white/60 border-dashed flex items-center justify-center animate-spin-slow">
                <div className="w-2 h-2 rounded-full bg-white/80" />
              </div>
            </div>
            <div className="text-[8px] text-center font-mono text-slate-500 uppercase tracking-wider">
              High Output • Type II Chrome
            </div>
          </div>
        </div>
        {/* Floating musical notes */}
        <div className="absolute -top-4 -right-4 text-white/60 text-lg font-mono animate-bounce">♪</div>
      </div>

      {/* Floating White Modern Headphones (Top Right) */}
      <div
        ref={(el) => { floatingElementsRef.current[1] = el }}
        className="absolute top-20 sm:top-24 right-4 sm:right-12 lg:right-24 z-20 transition-transform duration-300 ease-out animate-float-delayed"
      >
        <div className="w-32 sm:w-40 md:w-48 p-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rotate-12 hover:rotate-6 transition-transform flex flex-col items-center">
          <div className="relative w-20 sm:w-28 h-20 sm:h-28 flex items-center justify-center">
            {/* Stylized Minimalist Headphone Icon Artwork */}
            <Headphones className="w-16 sm:w-24 h-16 sm:h-24 text-white drop-shadow-[0_8px_16px_rgba(255,255,255,0.4)]" />
          </div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-blue-200 mt-1">
            Spatial Studio Pro
          </span>
        </div>
        {/* Sparkle badge */}
        <div className="absolute -bottom-2 -left-3 bg-blue-400 text-slate-950 font-black text-[9px] px-2 py-0.5 rounded-full shadow-lg">
          320 KBPS
        </div>
      </div>

      {/* Floating Vinyl Record (Bottom Left) */}
      <div
        ref={(el) => { floatingElementsRef.current[2] = el }}
        className="absolute bottom-16 sm:bottom-20 left-4 sm:left-12 lg:left-24 z-20 transition-transform duration-300 ease-out"
      >
        <div className="relative group cursor-pointer">
          <div className="w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 rounded-full bg-[#111215] border-4 border-[#22242b] shadow-2xl flex items-center justify-center animate-spin-slow group-hover:[animation-play-state:paused]">
            {/* Vinyl grooving concentric lines */}
            <div className="w-28 sm:w-36 h-28 sm:h-36 rounded-full border border-white/5 flex items-center justify-center">
              <div className="w-24 sm:w-30 h-24 sm:h-30 rounded-full border border-white/10 flex items-center justify-center">
                {/* Center label */}
                <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-[#ff4d4f] border-2 border-white flex flex-col items-center justify-center text-[7px] font-bold text-white uppercase tracking-wider shadow-inner text-center">
                  <span>HALEN</span>
                  <span>33 RPM</span>
                </div>
              </div>
            </div>
          </div>
          {/* Subtle turntable arm hint or sleeve badge */}
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white/15 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[9px] font-mono tracking-widest text-white/80 border border-white/20 whitespace-nowrap">
            SOUNDTRACK VIBES
          </span>
        </div>
      </div>

      {/* Floating Director Clapperboard (Bottom Right) */}
      <div
        ref={(el) => { floatingElementsRef.current[3] = el }}
        className="absolute bottom-16 sm:bottom-20 right-4 sm:right-12 lg:right-24 z-20 transition-transform duration-300 ease-out"
      >
        <div className="w-36 sm:w-44 md:w-48 bg-[#18191c] rounded-xl border-2 border-white/20 shadow-2xl p-2.5 rotate-6 hover:rotate-0 transition-transform cursor-pointer">
          {/* Clapper striped top */}
          <div className="flex h-5 rounded-t overflow-hidden border-b-2 border-white/20 bg-black">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`flex-1 h-full skew-x-[-25deg] ${i % 2 === 0 ? 'bg-white' : 'bg-black'}`}
              />
            ))}
          </div>
          {/* Slate Info */}
          <div className="mt-2 space-y-1 font-mono text-[9px] text-white/80">
            <div className="flex justify-between border-b border-white/10 pb-0.5">
              <span className="text-white/40">SCENE</span>
              <span className="font-bold text-blue-300">01</span>
              <span className="text-white/40">TAKE</span>
              <span className="font-bold text-blue-300">04</span>
            </div>
            <div className="flex justify-between text-[8px] text-white/50">
              <span>DIR: HALENELLA</span>
              <span>FPS: 60</span>
            </div>
          </div>
        </div>
      </div>

      {/* Butterfly & Small Doodles */}
      <div className="absolute top-1/2 left-8 sm:left-20 text-white/50 text-xl animate-float-delayed">
        🦋
      </div>
      <div className="absolute top-1/4 right-32 text-white/50 text-base animate-float-soft">
        🦋
      </div>

      {/* Main Center Composition */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto text-center mt-6">
        {/* Playful Arched Huge Title: "Portfolio" */}
        <div className="relative mb-2">
          <h1 className="font-['Syne'] font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight drop-shadow-[0_12px_32px_rgba(0,0,0,0.5)] flex items-center justify-center">
            Portfolio
          </h1>
          {/* Small star above i */}
          <span className="absolute top-2 right-[27%] text-blue-300 text-3xl md:text-4xl animate-pulse">
            ★
          </span>
        </div>

        {/* Central Model Portrait with Dotted Handwritten Annotations */}
        <div className="relative mt-2 mb-4">
          {/* Main Cutout/Portrait Frame */}
          <div className="relative w-64 sm:w-80 md:w-96 h-80 sm:h-96 md:h-[420px] rounded-3xl overflow-hidden border-4 border-white/80 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] group">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85"
              alt="Halenella - Content Creator & Visual Storyteller"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-left">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-200 block">
                  Creative Director
                </span>
                <span className="font-['Syne'] font-bold text-lg text-white">
                  Halenella J.
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono tracking-wider text-white border border-white/30">
                2026 REEL
              </span>
            </div>
          </div>

          {/* Dotted Lines & Handwritten Doodle Callouts around the model */}
          {/* 1. "social media" (Top Left) */}
          <div className="absolute -top-4 -left-16 sm:-left-28 md:-left-36 text-left select-none animate-float-soft">
            <span className="font-['Caveat'] text-2xl sm:text-3xl text-blue-200 tracking-wide block rotate-[-8deg]">
              social media
            </span>
            <svg className="w-16 sm:w-24 h-10 text-white/70 overflow-visible" viewBox="0 0 100 40">
              <path
                d="M 10 35 Q 50 40 90 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <polygon points="90,10 82,12 86,18" fill="currentColor" />
            </svg>
          </div>

          {/* 2. "brand collaboration" (Top Right) */}
          <div className="absolute -top-4 -right-16 sm:-right-28 md:-right-36 text-right select-none animate-float-delayed">
            <span className="font-['Caveat'] text-2xl sm:text-3xl text-blue-200 tracking-wide block rotate-[6deg]">
              brand collaboration
            </span>
            <svg className="w-16 sm:w-24 h-10 text-white/70 overflow-visible ml-auto" viewBox="0 0 100 40">
              <path
                d="M 90 35 Q 50 38 10 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <polygon points="10,10 14,18 18,12" fill="currentColor" />
            </svg>
          </div>

          {/* 3. "video editor" (Bottom Left) */}
          <div className="absolute bottom-12 -left-14 sm:-left-24 md:-left-32 text-left select-none">
            <svg className="w-16 sm:w-20 h-10 text-white/70 overflow-visible mb-1" viewBox="0 0 100 40">
              <path
                d="M 10 10 Q 50 5 85 30"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <polygon points="85,30 75,28 78,22" fill="currentColor" />
            </svg>
            <span className="font-['Caveat'] text-2xl sm:text-3xl text-blue-200 tracking-wide block rotate-[-4deg]">
              video editor
            </span>
          </div>

          {/* 4. "graphic designer" (Bottom Right) */}
          <div className="absolute bottom-12 -right-14 sm:-right-24 md:-right-32 text-right select-none">
            <svg className="w-16 sm:w-20 h-10 text-white/70 overflow-visible ml-auto mb-1" viewBox="0 0 100 40">
              <path
                d="M 90 10 Q 50 5 15 30"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <polygon points="15,30 22,22 25,28" fill="currentColor" />
            </svg>
            <span className="font-['Caveat'] text-2xl sm:text-3xl text-blue-200 tracking-wide block rotate-[5deg]">
              graphic designer
            </span>
          </div>
        </div>

        {/* Bottom CTA hint */}
        <div className="mt-4 flex items-center gap-3">
          <span className="text-xs uppercase font-mono tracking-widest text-white/60">
            Scroll or Next Slide to Explore
          </span>
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
        </div>
      </div>
    </section>
  )
}

