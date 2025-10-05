"use client"

import { useEffect, useState } from "react"

export function MainContent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative z-10 flex items-start justify-center min-h-screen px-6 pt-32 md:pt-40">
      <div
        className={`text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight text-white mb-6 text-balance drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
          Hopefield
          <br />
          Radio
        </h1>
        <p className="text-lg md:text-xl font-mono tracking-wide text-gray-100 max-w-2xl mx-auto text-pretty drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
          Inspiring Hope Through Love, Faith and Creative Expression
        </p>
      </div>
    </div>
  )
}
