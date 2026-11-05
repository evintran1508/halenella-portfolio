import React from 'react'
import { X, Sparkles, ExternalLink, Eye, ArrowUpRight } from 'lucide-react'
import type { ProjectItem } from '../types/portfolio'

interface LightboxModalProps {
  project: ProjectItem | null
  onClose: () => void
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ project, onClose }) => {
  if (!project) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-[fadeIn_0.2s_ease-out]">
      {/* Backdrop click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[#091a38] border border-blue-400/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10 max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Preview Side */}
        <div className="w-full md:w-1/2 bg-black/40 flex items-center justify-center overflow-hidden relative min-h-[300px]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover max-h-[450px] md:max-h-full"
          />
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-blue-500/90 text-white tracking-widest backdrop-blur-sm shadow-md">
              {project.tag}
            </span>
          </div>
        </div>

        {/* Content Details Side */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between text-white overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 text-blue-300 text-xs font-mono uppercase tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{project.client} • Case Study</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-['Syne'] tracking-tight mb-3">
              {project.title}
            </h3>

            <p className="text-xs uppercase font-mono tracking-wider text-white/50 mb-4">
              {project.category}
            </p>

            <p className="text-white/80 leading-relaxed text-sm sm:text-base mb-6">
              {project.description}
            </p>

            {/* Impact Metric Box */}
            {project.metrics && (
              <div className="bg-blue-900/40 border border-blue-400/20 rounded-2xl p-4 mb-6">
                <span className="text-[11px] uppercase tracking-wider text-blue-300 font-mono block">
                  Audience Impact
                </span>
                <span className="text-3xl font-black font-['Oswald'] text-blue-100 tracking-wide">
                  {project.metrics}
                </span>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-white/20 text-xs font-semibold uppercase tracking-wider text-white/80 hover:bg-white/10 transition-colors"
            >
              Close
            </button>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-blue-500/30"
            >
              <span>View On Instagram</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
