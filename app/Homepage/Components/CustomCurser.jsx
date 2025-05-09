'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0
    const speed = 0.9 // Lower = smoother & slower

    const animate = () => {
      currentX += (mouseX - currentX) * speed
      currentY += (mouseY - currentY) * speed
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
      requestAnimationFrame(animate)
    }

    const handleMouseMove = (e) => {
      mouseX = e.clientX - 10
      mouseY = e.clientY - 10
    }

    window.addEventListener('mousemove', handleMouseMove)
    requestAnimationFrame(animate)

    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-10 h-10 shadow shadow-[#fff1414] bg-transparent border border-white rounded-full pointer-events-none z-[9999] animate-pulse"
      style={{
        boxShadow: `
          0 0 5px red,
          0 0 10px orange,
          0 0 15px cyan,
          0 0 20px green,
          0 0 25px yellow,
          0 0 30px blue,
          0 0 35px violet
        `,
      }}/>
  )
}
