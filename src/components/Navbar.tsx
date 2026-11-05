import React, { useState } from 'react'
import { Sparkles, Layers, Compass, Mail, ChevronDown, Check } from 'lucide-react'
import { AudioPlayer } from './AudioPlayer'
import { SLIDES } from '../data/portfolioData'

interface NavbarProps {
  viewMode: 'deck' | 'scroll'
  setViewMode: (mode: 'deck' | 'scroll') => void
  currentSlide: number
  setCurrentSlide: (slide: number) => void
  onOpenContact: () => void
}

export const Navbar: React.FC<NavbarProps> = ({
  viewMode,
  setViewMode,
  currentSlide,
  setCurrentSlide,
  onOpenContact,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleSelectSlide = (num: number) => {
    setCurrentSlide(num)
    setDropdownOpen(false)
    if (viewMode === 'scroll') {
      const el = document.getElementById(`section-${num}`)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto glass-nav rounded-2xl px-4 sm:px-6 py-2.5 flex items-center justify-between text-white shadow-xl">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleSelectSlide(1)}
            className="flex items-center gap-2 group text-left cursor-pointer"
          >
            <span className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300 font-bold text-sm group-hover:scale-105 transition-transform">
              ✦
            </span>
            <div>
              <span className="font-['Syne'] font-extrabold text-sm sm:text-base tracking-wider block text-white group-hover:text-blue-300 transition-colors">
                HALENELLA
              </span>
              <span className="text-[10px] text-white/50 uppercase tracking-widest font-mono block hidden xs:block">
                Visual Storyteller
              </span>
            </div>
          </button>
        </div>

        {/* Center: Slide Quick Navigator Dropdown & View Mode Switcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Slide Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-xs font-mono font-semibold tracking-wider text-blue-200 border border-white/15 transition-all"
            >
              <span>
                {currentSlide.toString().padStart(2, '0')} / {SLIDES.length.toString().padStart(2, '0')}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-white/60" />
            </button>

            {dropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setDropdownOpen(false)}
                />
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-64 bg-[#091a38]/95 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-2 shadow-2xl z-50 text-xs">
                  <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-white/40 border-b border-white/10">
                    Jump to Section
                  </div>
                  <div className="max-h-72 overflow-y-auto py-1">
                    {SLIDES.map((slide) => (
                      <button
                        key={slide.id}
                        onClick={() => handleSelectSlide(slide.number)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-colors ${
                          currentSlide === slide.number
                            ? 'bg-blue-500/30 text-blue-200 font-bold'
                            : 'hover:bg-white/10 text-white/80'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[11px] text-blue-400">
                            {slide.number.toString().padStart(2, '0')}
                          </span>
                          <span className="truncate">{slide.title}</span>
                        </div>
                        {currentSlide === slide.number && (
                          <Check className="w-3.5 h-3.5 text-blue-300" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* View Mode Toggle Button */}
          <div className="hidden md:flex items-center bg-black/40 p-1 rounded-full border border-white/15 text-xs font-semibold">
            <button
              onClick={() => setViewMode('deck')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all cursor-pointer ${
                viewMode === 'deck'
                  ? 'bg-blue-500 text-slate-950 font-bold shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Deck Slides</span>
            </button>
            <button
              onClick={() => setViewMode('scroll')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all cursor-pointer ${
                viewMode === 'scroll'
                  ? 'bg-blue-500 text-slate-950 font-bold shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Full Scroll</span>
            </button>
          </div>
        </div>

        {/* Right Action Controls: Audio + Collab CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <AudioPlayer />

          <button
            onClick={onOpenContact}
            className="flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-500/20 cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Book Collab</span>
          </button>
        </div>
      </div>
    </header>
  )
}

