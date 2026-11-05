import React, { useEffect, useRef, useState } from 'react'

export const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const cursorFollowerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    let mouseX = -100
    let mouseY = -100
    let followerX = -100
    let followerY = -100

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (!isVisible) setIsVisible(true)

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      }
    }

    const onMouseDown = () => setIsHovered(true)
    const onMouseUp = () => setIsHovered(false)

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('interactive-hover')
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    let animationFrameId: number

    const render = () => {
      followerX += (mouseX - followerX) * 0.15
      followerY += (mouseY - followerY) * 0.15

      if (cursorFollowerRef.current) {
        cursorFollowerRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`
      }

      animationFrameId = requestAnimationFrame(render)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mouseover', onMouseOver)
    animationFrameId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mouseover', onMouseOver)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <>
      {/* Precision center dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-blue-300 pointer-events-none z-[9999] transition-transform duration-75 mix-blend-difference"
      />
      {/* Outer floating ring / star follower */}
      <div
        ref={cursorFollowerRef}
        className={`fixed top-0 left-0 -ml-4 -mt-4 rounded-full pointer-events-none z-[9998] transition-all duration-300 flex items-center justify-center border ${
          isHovered
            ? 'w-12 h-12 -ml-6 -mt-6 border-blue-400 bg-blue-400/20 scale-125'
            : 'w-8 h-8 border-white/40 bg-white/5 scale-100'
        }`}
      >
        <span className="text-[10px] text-blue-200 select-none opacity-60">✦</span>
      </div>
    </>
  )
}

