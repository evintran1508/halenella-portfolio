import React from 'react'
import { CircularBadge } from '../CircularBadge'
import { EXPERIENCES } from '../../data/portfolioData'
import { Briefcase, Calendar, CheckCircle2, Award } from 'lucide-react'

export const ExperienceSlide: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#F5F6F9] text-slate-900 flex items-center justify-center overflow-hidden px-4 sm:px-8 py-20 select-none">
      {/* Background Watermark Stamp */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 pointer-events-none opacity-25">
        <CircularBadge size={340} textColor="text-slate-400" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col items-center text-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-[#0F2B5C] text-xs font-mono font-bold tracking-widest uppercase mb-2">
          <Briefcase className="w-3.5 h-3.5" />
          <span>CAREER TRACK RECORD</span>
        </div>

        {/* Header: "WORKING EXPERIENCE" */}
        <h2 className="font-['Oswald'] font-bold text-4xl sm:text-5xl md:text-6xl text-[#0F2B5C] tracking-wide uppercase mb-3">
          WORKING EXPERIENCE
        </h2>
        <p className="text-slate-600 max-w-lg mx-auto text-xs sm:text-sm font-normal mb-10">
          A progression of visual leadership across photography, motion editing, and global brand ambassadorship.
        </p>

        {/* 3 Columns Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.year}
              className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:border-blue-400 hover:shadow-[0_12px_32px_rgba(15,43,92,0.1)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Year Marker */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-['Oswald'] font-black text-3xl sm:text-4xl text-[#0F2B5C] tracking-wider group-hover:text-blue-600 transition-colors">
                    {exp.year}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-mono font-bold text-slate-600 uppercase">
                    Stage 0{idx + 1}
                  </span>
                </div>

                {/* Role Title */}
                <h3 className="font-['Oswald'] font-bold text-lg sm:text-xl text-slate-900 tracking-wide uppercase mb-1">
                  {exp.role}
                </h3>
                <span className="text-xs font-mono font-semibold text-blue-600 block mb-3 uppercase">
                  {exp.category}
                </span>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {exp.description}
                </p>
              </div>

              {/* Achievements Bullet List */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-bold">
                  Key Achievements
                </span>
                {exp.achievements.map((ach, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-tight">{ach}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

