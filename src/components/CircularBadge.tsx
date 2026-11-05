import React from 'react'

interface CircularBadgeProps {
  text?: string
  size?: number
  className?: string
  textColor?: string
  reverse?: boolean
}

export const CircularBadge: React.FC<CircularBadgeProps> = ({
  text = "JUST EDITING • IT'S VIBING WITH VISUALS • ",
  size = 180,
  className = "",
  textColor = "text-white/20",
  reverse = false
}) => {
  const radius = size * 0.38
  const center = size / 2

  return (
    <div 
      style={{ width: size, height: size }} 
      className={`relative select-none pointer-events-none flex items-center justify-center ${className}`}
    >
      <svg 
        viewBox={`0 0 ${size} ${size}`} 
        className={`w-full h-full ${reverse ? 'animate-spin-slow-reverse' : 'animate-spin-slow'}`}
      >
        <path
          id={`circle-${size}-${text.slice(0, 5)}`}
          d={`M ${center}, ${center} m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          fill="none"
        />
        <text className={`text-[10px] uppercase font-bold tracking-[0.28em] ${textColor} fill-current`}>
          <textPath href={`#circle-${size}-${text.slice(0, 5)}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  )
}

