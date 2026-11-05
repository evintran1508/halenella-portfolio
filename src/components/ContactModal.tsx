import React, { useState } from 'react'
import { X, Send, Check, Mail, Sparkles, Copy } from 'lucide-react'
import confetti from 'canvas-confetti'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState('Brand Collaboration')
  const [budget, setBudget] = useState('$5k – $15k')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)

    // Trigger colorful confetti celebration!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#818cf8', '#f43f5e', '#fbbf24', '#ffffff']
    })
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('halenella@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-[#091a38] border border-blue-400/30 rounded-3xl p-6 sm:p-8 text-white shadow-2xl z-10 overflow-y-auto max-h-[95vh]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 px-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-400/30">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-['Syne'] mb-2">
              Message Dispatched!
            </h3>
            <p className="text-white/70 max-w-md mx-auto mb-6 text-sm sm:text-base">
              Thanks for reaching out! Halenella’s management team will review your proposal and reply within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                onClose()
              }}
              className="px-6 py-2.5 rounded-full bg-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-blue-400 transition-colors"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-blue-300 text-xs font-mono uppercase tracking-widest mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Create Magic</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black font-['Syne'] tracking-tight mb-2">
              Book a Collaboration
            </h3>
            <p className="text-white/60 text-xs sm:text-sm mb-6">
              Have an upcoming product drop, campaign brief, or video production? Tell me about it!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 mb-1 font-mono uppercase text-[11px] tracking-wider">
                    Your Name / Brand *
                  </label>
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Velora Beauty Team"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-blue-400 focus:outline-none text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-white/70 mb-1 font-mono uppercase text-[11px] tracking-wider">
                    Your Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contact@brand.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-blue-400 focus:outline-none text-white text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 mb-1 font-mono uppercase text-[11px] tracking-wider">
                    Focus Area
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0e2a5d] border border-white/15 focus:border-blue-400 focus:outline-none text-white text-sm"
                  >
                    <option>Brand Collaboration & Sponsorship</option>
                    <option>Creative Direction & Photography</option>
                    <option>Short-form Video & UGC Reels</option>
                    <option>Ambassador Partnerships</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/70 mb-1 font-mono uppercase text-[11px] tracking-wider">
                    Estimated Budget
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0e2a5d] border border-white/15 focus:border-blue-400 focus:outline-none text-white text-sm"
                  >
                    <option>$3,000 – $5,000</option>
                    <option>$5,000 – $15,000</option>
                    <option>$15,000 – $30,000+</option>
                    <option>Custom Enterprise / Agency</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white/70 mb-1 font-mono uppercase text-[11px] tracking-wider">
                  Project Details / Timeline
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share deliverables, key milestones, or creative inspiration..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-blue-400 focus:outline-none text-white text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-blue-500 hover:bg-blue-400 text-slate-950 font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Collaboration Inquiry</span>
              </button>
            </form>

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-white/60">
              <span>Or reach out directly:</span>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors font-mono text-[11px]"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied to Clipboard!' : 'halenella@gmail.com'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
