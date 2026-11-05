import React from 'react'
import { VELORA_PROJECTS } from '../../data/portfolioData'
import type { ProjectItem } from '../../types/portfolio'
import { Sparkles, Eye, ArrowUpRight, TrendingUp } from 'lucide-react'

interface ProjectsSlideProps {
  onSelectProject: (project: ProjectItem) => void
}

export const ProjectsSlide: React.FC<ProjectsSlideProps> = ({ onSelectProject }) => {
  return (
    <section className="relative w-full min-h-screen bg-[#0F2B5C] text-white flex items-center justify-center overflow-hidden px-4 sm:px-8 py-20 select-none">
      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Side: Campaign Overview & Big Title */}
        <div className="lg:col-span-5 flex flex-col justify-between text-left">
          <div>
            <div className="flex items-center gap-2 text-blue-300 text-xs font-mono uppercase tracking-widest mb-3">
              <Sparkles className="w-4 h-4" />
              <span>FEATURED CASE STUDY</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-['Syne'] text-white mb-4">
              Social Media For<br />
              <span className="text-blue-300 underline decoration-blue-400/50 underline-offset-4">
                VELORA BEAUTY
              </span>
            </h3>

            <div className="space-y-3 text-white/80 text-sm leading-relaxed mb-6 font-normal">
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <p>Created engaging social media content aligned with the brand's visual identity.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <p>Planned and developed content for Instagram and other social platforms.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                <p>Created reels, posts, and educational graphics to increase engagement.</p>
              </div>
            </div>

            {/* Campaign Stat highlights */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="font-['Oswald'] text-2xl sm:text-3xl font-bold text-blue-200 block">
                  +340%
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-white/60">
                  Engagement Surge
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="font-['Oswald'] text-2xl sm:text-3xl font-bold text-blue-200 block">
                  4.2M
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-white/60">
                  Organic Impressions
                </span>
              </div>
            </div>
          </div>

          {/* Huge Condensed Display Title: "PREVIOUS PROJECTS" */}
          <div className="pt-4 border-t border-white/15">
            <h2 className="font-['Oswald'] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-wide uppercase leading-none">
              PREVIOUS<br />PROJECTS
            </h2>
            <p className="text-xs font-mono uppercase tracking-widest text-blue-300 mt-2">
              ✦ Click any thumbnail to expand case study
            </p>
          </div>
        </div>

        {/* Right Side: 3x3 Aesthetic Instagram Grid */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3 p-3 bg-white/5 rounded-3xl border border-white/15 shadow-2xl backdrop-blur-md">
            {VELORA_PROJECTS.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => onSelectProject(item)}
                className="group relative aspect-square rounded-xl overflow-hidden bg-slate-900 border border-white/10 cursor-pointer shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2 sm:p-3">
                  <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-blue-300 truncate">
                    {item.tag}
                  </span>
                  <span className="font-['Syne'] font-bold text-[10px] sm:text-xs text-white truncate">
                    {item.title}
                  </span>
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Eye className="w-3 h-3" />
                  </div>
                </div>

                {/* Corner grid index watermark */}
                <span className="absolute top-1.5 left-2 text-[8px] font-mono text-white/40 drop-shadow group-hover:opacity-0">
                  #0{idx + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
