import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Play, Pause } from 'lucide-react'
import { SLIDES } from '../data/portfolioData'

interface DeckNavigationProps {
  currentSlide: number
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>
  onPrev: () => void
  onNext: () => void
  totalSlides: number
}

export const DeckNavigation: React.FC<DeckNavigationProps> = ({
  currentSlide,
  setCurrentSlide,
  onPrev,
  onNext,
  totalSlides,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isAutoplay, setIsAutoplay] = useState(false)

  // Autoplay presentation slides every 6 seconds if enabled
  useEffect(() => {
    if (!isAutoplay) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1))
    }, 6000)
    return () => clearInterval(timer)
  }, [isAutoplay, totalSlides, setCurrentSlide])

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {})
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {})
    }
  }

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', onFsChange)
    return () => document.removeEventListener('fullscreenchange', onFsChange)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return
      }
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        onNext()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        onPrev()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onNext, onPrev])

  const currentInfo = SLIDES.find((s) => s.number === currentSlide)

  return (
    <div className="fixed bottom-3 sm:bottom-4 left-0 right-0 z-40 px-3 flex flex-col items-center pointer-events-none">
      {/* Current Slide Subtitle Pill */}
      <div className="mb-2 hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-white/80 pointer-events-auto shadow-lg animate-fade-in">
        <span className="text-blue-400 font-bold">{currentSlide.toString().padStart(2, '0')}</span>
        <span>•</span>
        <span className="font-semibold text-white">{currentInfo?.title}</span>
        <span className="text-white/40">— {currentInfo?.subtitle}</span>
      </div>

      <div className="glass-nav rounded-2xl px-3 sm:px-5 py-2 flex items-center gap-2 sm:gap-3 shadow-2xl pointer-events-auto border border-white/15">
        {/* Prev Slide */}
        <button
          onClick={onPrev}
          disabled={currentSlide === 1}
          title="Previous Slide (←)"
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-25 disabled:pointer-events-none text-white flex items-center justify-center transition-all cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Slide Selector Numbers / Dots */}
        <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto max-w-[260px] sm:max-w-md py-1 scrollbar-none">
          {SLIDES.map((slide) => {
            const isActive = currentSlide === slide.number
            return (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(slide.number)}
                title={`${slide.number}. ${slide.title}`}
                className={`transition-all duration-300 rounded-full cursor-pointer flex items-center justify-center font-mono ${
                  isActive
                    ? 'w-7 sm:w-8 h-6 sm:h-7 bg-blue-500 text-slate-950 font-bold text-[11px] shadow-md shadow-blue-500/40 scale-105'
                    : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/25 hover:bg-white/60'
                }`}
              >
                {isActive && slide.number}
              </button>
            )
          })}
        </div>

        {/* Next Slide */}
        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides}
          title="Next Slide (→ or Space)"
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-25 disabled:pointer-events-none text-white flex items-center justify-center transition-all cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Autoplay Toggle */}
        <button
          onClick={() => setIsAutoplay(!isAutoplay)}
          title={isAutoplay ? 'Pause auto-slideshow' : 'Start auto-slideshow'}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer border ${
            isAutoplay
              ? 'bg-blue-500/30 text-blue-300 border-blue-400/50'
              : 'bg-white/10 text-white/70 border-white/10 hover:bg-white/20 hover:text-white'
          }`}
        >
          {isAutoplay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
        </button>

        {/* Fullscreen Button */}
        <button
          onClick={toggleFullscreen}
          title={isFullscreen ? 'Exit Fullscreen' : 'Enter Presentation Fullscreen'}
          className="hidden sm:flex w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center transition-all cursor-pointer"
        >
          {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  )
}
