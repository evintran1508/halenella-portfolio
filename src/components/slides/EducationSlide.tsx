import React from 'react'
import { CircularBadge } from '../CircularBadge'
import { GraduationCap, Award, BookOpen, Sparkles } from 'lucide-react'

export const EducationSlide: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#0F2B5C] text-white flex items-center justify-center overflow-hidden px-4 sm:px-8 py-20 select-none">
      {/* Background Watermark Stamp */}
      <div className="absolute -bottom-16 -left-16 pointer-events-none opacity-20">
        <CircularBadge size={320} textColor="text-blue-300" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Side: Title & Polaroid Photo Collage */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <div className="flex items-center gap-2 text-blue-300 text-xs font-mono uppercase tracking-widest mb-3">
            <GraduationCap className="w-4 h-4" />
            <span>ACADEMIC FOUNDATION</span>
          </div>

          <h2 className="font-['Syne'] font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight mb-8">
            Education<br />Background
          </h2>

          {/* 3 Scattered Authentic Polaroids */}
          <div className="relative w-full max-w-md h-72 sm:h-80 mx-auto lg:mx-0 mt-4">
            {/* Polaroid 1: Campus Student Life (Left Tilt) */}
            <div className="absolute top-0 left-2 sm:left-6 w-44 sm:w-52 bg-white p-2.5 pb-8 rounded-xl polaroid-shadow -rotate-12 hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-300 cursor-pointer group">
              <div className="w-full h-36 sm:h-44 rounded-lg overflow-hidden bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
                  alt="Campus life and student library"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <p className="mt-2 text-center font-['Caveat'] text-slate-800 text-base font-bold">
                cambridge memories ☕
              </p>
            </div>

            {/* Polaroid 2: Historic Harvard Campus (Right Tilt, Back) */}
            <div className="absolute -top-4 right-2 sm:right-6 w-40 sm:w-48 bg-white p-2.5 pb-8 rounded-xl polaroid-shadow rotate-8 hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-300 cursor-pointer group">
              <div className="w-full h-32 sm:h-40 rounded-lg overflow-hidden bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80"
                  alt="Harvard University brick campus"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <p className="mt-2 text-center font-['Caveat'] text-slate-800 text-base font-bold">
                harvard yard • 2020
              </p>
            </div>

            {/* Polaroid 3: Graduation Celebration (Front Center) */}
            <div className="absolute bottom-2 left-1/3 -translate-x-1/2 w-48 sm:w-56 bg-white p-3 pb-9 rounded-xl polaroid-shadow -rotate-3 hover:rotate-0 hover:scale-105 hover:z-30 transition-all duration-300 cursor-pointer group z-20">
              <div className="w-full h-36 sm:h-44 rounded-lg overflow-hidden bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?auto=format&fit=crop&w=600&q=80"
                  alt="Graduation celebration cap and diploma"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <p className="mt-2 text-center font-['Caveat'] text-slate-800 text-lg font-bold">
                commencement day 🎓
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Degrees & Academic Milestones */}
        <div className="lg:col-span-6 space-y-8 lg:pl-8">
          {/* Degree 1: 2020 */}
          <div className="relative pl-8 border-l-2 border-blue-400/40 group">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-400 border-4 border-[#0F2B5C] group-hover:scale-125 transition-transform" />
            <div className="flex items-baseline gap-3 mb-1">
              <span className="font-['Oswald'] text-3xl sm:text-4xl font-bold text-blue-200">
                • 2020
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-mono uppercase tracking-wider border border-blue-400/30">
                Undergraduate
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-['Syne'] text-white mb-1">
              Harvard University
            </h3>
            <p className="text-blue-100 text-sm sm:text-base font-medium mb-3">
              Bachelor of Arts in Media & Communications
            </p>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
              Specialized in mass media theory, digital storytelling, visual narrative framing, and investigative content documentation. Graduated Magna Cum Laude.
            </p>
          </div>

          {/* Degree 2: 2024 */}
          <div className="relative pl-8 border-l-2 border-blue-400/40 group">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-400 border-4 border-[#0F2B5C] group-hover:scale-125 transition-transform" />
            <div className="flex items-baseline gap-3 mb-1">
              <span className="font-['Oswald'] text-3xl sm:text-4xl font-bold text-blue-200">
                • 2024
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-mono uppercase tracking-wider border border-blue-400/30">
                Postgraduate
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-['Syne'] text-white mb-1">
              Master of Social Management & Social Behavioral
            </h3>
            <p className="text-blue-100 text-sm sm:text-base font-medium mb-3">
              Advanced Behavioral Research & Algorithmic Engagement
            </p>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
              Researched audience cognitive retention across vertical video formats, dopamine response cycles in short-form content, and ethical community management.
            </p>
          </div>

          {/* Academic highlight pill box */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-yellow-300" />
              <div>
                <span className="text-xs font-mono font-bold uppercase text-white block">
                  Dean's Honors List 2019, 2020, 2023
                </span>
                <span className="text-[11px] text-white/50">
                  Published thesis on digital intimacy in modern branding
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

