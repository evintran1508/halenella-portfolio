import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { Navbar } from './components/Navbar'
import { DeckNavigation } from './components/DeckNavigation'
import { LightboxModal } from './components/LightboxModal'
import { ContactModal } from './components/ContactModal'
import { CustomCursor } from './components/CustomCursor'
import { HeroSlide } from './components/slides/HeroSlide'
import { AboutSlide } from './components/slides/AboutSlide'
import { EducationSlide } from './components/slides/EducationSlide'
import { SkillsSlide } from './components/slides/SkillsSlide'
import { ProjectsSlide } from './components/slides/ProjectsSlide'
import { SocialsSlide } from './components/slides/SocialsSlide'
import { BrandsSlide } from './components/slides/BrandsSlide'
import { ExperienceSlide } from './components/slides/ExperienceSlide'
import { PassionProjectSlide } from './components/slides/PassionProjectSlide'
import { ContactSlide } from './components/slides/ContactSlide'
import { SLIDES } from './data/portfolioData'
import type { ProjectItem } from './types/portfolio'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [viewMode, setViewMode] = useState<'deck' | 'scroll'>('deck')
  const [currentSlide, setCurrentSlide] = useState(1)
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const slideContainerRef = useRef<HTMLDivElement>(null)

  // Touch Swipe Gesture State
  const touchStartXRef = useRef<number | null>(null)

  // Lenis silky smooth scroll setup for scroll mode
  useEffect(() => {
    if (viewMode !== 'scroll') return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [viewMode])

  // GSAP slide transition animation in Deck view mode
  useEffect(() => {
    if (viewMode === 'deck' && slideContainerRef.current) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      gsap.fromTo(
        slideContainerRef.current,
        { opacity: 0, y: 16, scale: 0.99 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power2.out' }
      )
    }
  }, [currentSlide, viewMode])

  // Scrollspy for Continuous Scroll Mode
  useEffect(() => {
    if (viewMode !== 'scroll') return

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      SLIDES.forEach((slide) => {
        const el = document.getElementById(`section-${slide.number}`)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setCurrentSlide(slide.number)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [viewMode])

  const handleNext = () => {
    if (currentSlide < SLIDES.length) {
      setCurrentSlide((prev) => prev + 1)
    }
  }

  const handlePrev = () => {
    if (currentSlide > 1) {
      setCurrentSlide((prev) => prev - 1)
    }
  }

  // Mobile Touch Swipe Handlers for Deck View
  const handleTouchStart = (e: React.TouchEvent) => {
    if (viewMode !== 'deck') return
    touchStartXRef.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (viewMode !== 'deck' || touchStartXRef.current === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartXRef.current - touchEndX

    if (diff > 50) {
      // Swiped Left -> Go Next
      handleNext()
    } else if (diff < -50) {
      // Swiped Right -> Go Prev
      handlePrev()
    }
    touchStartXRef.current = null
  }

  // Render specific slide component by number
  const renderSlideContent = (num: number) => {
    switch (num) {
      case 1:
        return <HeroSlide onExplore={handleNext} />
      case 2:
        return <AboutSlide />
      case 3:
        return <EducationSlide />
      case 4:
        return <SkillsSlide />
      case 5:
        return <ProjectsSlide onSelectProject={setSelectedProject} />
      case 6:
        return <SocialsSlide />
      case 7:
        return <BrandsSlide />
      case 8:
        return <ExperienceSlide />
      case 9:
        return <PassionProjectSlide />
      case 10:
        return <ContactSlide onOpenContact={() => setIsContactOpen(true)} />
      default:
        return <HeroSlide onExplore={handleNext} />
    }
  }

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative min-h-screen bg-[#0B2545] font-sans antialiased text-white selection:bg-blue-400 selection:text-slate-950"
    >
      {/* Precision Custom Cursor */}
      <CustomCursor />

      {/* Top Floating Glass Navigation */}
      <Navbar
        viewMode={viewMode}
        setViewMode={setViewMode}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main View Area */}
      {viewMode === 'deck' ? (
        /* DECK SLIDES VIEW (Interactive Presentation matching the photo) */
        <main className="relative min-h-screen flex flex-col justify-center overflow-hidden">
          <div ref={slideContainerRef} className="w-full">
            {renderSlideContent(currentSlide)}
          </div>

          {/* Bottom Deck Navigation Controller */}
          <DeckNavigation
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            onPrev={handlePrev}
            onNext={handleNext}
            totalSlides={SLIDES.length}
          />
        </main>
      ) : (
        /* CONTINUOUS SCROLL VIEW (Seamless full vertical portfolio) */
        <main className="relative">
          {SLIDES.map((slide) => (
            <div key={slide.id} id={`section-${slide.number}`}>
              {renderSlideContent(slide.number)}
            </div>
          ))}

          {/* Floating Right Scrollspy Navigation Pills */}
          <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-2 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
            {SLIDES.map((slide) => (
              <button
                key={slide.id}
                onClick={() => {
                  const el = document.getElementById(`section-${slide.number}`)
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                title={slide.title}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === slide.number
                    ? 'bg-blue-400 scale-125 ring-4 ring-blue-400/30'
                    : 'bg-white/30 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </main>
      )}

      {/* Lightbox Modal for Case Studies */}
      <LightboxModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Collaboration Booking Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  )
}
