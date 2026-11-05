import React, { useState, useEffect, useRef } from 'react'
import { Volume2, VolumeX, Sparkles } from 'lucide-react'

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioCtxRef = useRef<AudioContext | null>(null)
  const intervalRef = useRef<number | null>(null)

  const toggleSound = () => {
    if (isPlaying) {
      stopLoFi()
    } else {
      startLoFi()
    }
  }

  const startLoFi = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      const ctx = new AudioCtx()
      audioCtxRef.current = ctx

      // Chords in C major 9th / Fmaj7 lo-fi progression
      const chords = [
        [261.63, 329.63, 392.00, 493.88], // Cmaj7
        [220.00, 261.63, 329.63, 392.00], // Am7
        [174.61, 220.00, 261.63, 329.63], // Fmaj7
        [196.00, 246.94, 293.66, 392.00], // G7
      ]
      let chordIndex = 0

      const playChord = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') return

        const now = ctx.currentTime
        const currentChord = chords[chordIndex % chords.length]
        chordIndex++

        currentChord.forEach((freq) => {
          const osc = ctx.createOscillator()
          const gain = ctx.createGain()
          const filter = ctx.createBiquadFilter()

          osc.type = 'sine'
          osc.frequency.setValueAtTime(freq, now)

          // Warm low-pass filter
          filter.type = 'lowpass'
          filter.frequency.setValueAtTime(450, now)

          // Soft slow attack & release
          gain.gain.setValueAtTime(0.001, now)
          gain.gain.exponentialRampToValueAtTime(0.025, now + 1.2)
          gain.gain.exponentialRampToValueAtTime(0.001, now + 3.8)

          osc.connect(filter)
          filter.connect(gain)
          gain.connect(ctx.destination)

          osc.start(now)
          osc.stop(now + 4.0)
        })
      }

      playChord()
      intervalRef.current = window.setInterval(playChord, 3800)
      setIsPlaying(true)
    } catch {
      // AudioContext policy fallback
    }
  }

  const stopLoFi = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close().catch(() => {})
      audioCtxRef.current = null
    }
    setIsPlaying(false)
  }

  useEffect(() => {
    return () => {
      stopLoFi()
    }
  }, [])

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? 'Mute ambient lo-fi sound' : 'Play lo-fi vibe music'}
      className={`relative group flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 border ${
        isPlaying
          ? 'bg-blue-500/20 text-blue-200 border-blue-400/40 shadow-lg shadow-blue-500/20'
          : 'bg-white/10 text-white/70 border-white/15 hover:bg-white/20 hover:text-white'
      }`}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-blue-300 animate-pulse" />
          <div className="flex items-center gap-0.5 h-3">
            <span className="w-0.5 bg-blue-300 rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-3" />
            <span className="w-0.5 bg-blue-300 rounded-full animate-[pulse_1.1s_ease-in-out_infinite] h-2" />
            <span className="w-0.5 bg-blue-300 rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-3.5" />
          </div>
          <span className="hidden sm:inline font-mono text-[11px]">LO-FI VIBE ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-white/60" />
          <span className="hidden sm:inline font-mono text-[11px]">PLAY SOUND</span>
        </>
      )}
    </button>
  )
}

