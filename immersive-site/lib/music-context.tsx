"use client"

import type React from "react"

import { createContext, useContext, useRef, useState, type ReactNode } from "react"

interface MusicContextType {
  isPlaying: boolean
  togglePlay: () => void
  audioRef: React.RefObject<HTMLAudioElement>
}

const MusicContext = createContext<MusicContextType | undefined>(undefined)

export function MusicProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch((error) => {
          console.log("[v0] Audio playback failed:", error)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  return <MusicContext.Provider value={{ isPlaying, togglePlay, audioRef }}>{children}</MusicContext.Provider>
}

export function useMusic() {
  const context = useContext(MusicContext)
  if (context === undefined) {
    throw new Error("useMusic must be used within a MusicProvider")
  }
  return context
}
